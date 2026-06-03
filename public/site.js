const navLinks = document.querySelector(".nav-links");
const menuButton = document.querySelector(".menu-button");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      document.querySelectorAll(".nav-group.submenu-open").forEach((group) => {
        group.classList.remove("submenu-open");
        group.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
      });
    }
  });
}

document.querySelectorAll(".nav-group .nav-trigger").forEach((trigger) => {
  trigger.setAttribute("aria-expanded", "false");

  trigger.addEventListener("click", (event) => {
    const isMobileMenu = window.matchMedia("(max-width: 980px)").matches;
    const group = trigger.closest(".nav-group");

    if (!isMobileMenu || !navLinks?.classList.contains("open") || !group) return;

    event.preventDefault();

    document.querySelectorAll(".nav-group.submenu-open").forEach((openGroup) => {
      if (openGroup !== group) {
        openGroup.classList.remove("submenu-open");
        openGroup.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
      }
    });

    const isOpen = group.classList.toggle("submenu-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item?.classList.toggle("open") ?? false;
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const money = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

const percent = new Intl.NumberFormat("en-AU", {
  maximumFractionDigits: 1,
});

function formNumber(form, name) {
  return Number(form.elements[name]?.value || 0);
}

function monthlyRepayment(amount, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;

  if (!amount || !months) return 0;
  if (!monthlyRate) return amount / months;

  return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

function setCalcResult(form, key, value) {
  const target = form.closest(".calc-panel")?.querySelector(`[data-result="${key}"]`);
  if (target) target.textContent = value;
}

function updateRepaymentCalculator(form) {
  const amount = formNumber(form, "amount");
  const rate = formNumber(form, "rate");
  const years = formNumber(form, "years");
  const monthly = monthlyRepayment(amount, rate, years);
  const total = monthly * years * 12;

  setCalcResult(form, "monthly", money.format(monthly));
  setCalcResult(form, "fortnightly", money.format((monthly * 12) / 26));
  setCalcResult(form, "interest", money.format(Math.max(0, total - amount)));
}

function updateBorrowingCalculator(form) {
  const income = formNumber(form, "income");
  const expenses = formNumber(form, "expenses");
  const debts = formNumber(form, "debts");
  const rate = formNumber(form, "rate");
  const years = formNumber(form, "years");
  const assessmentPayment = Math.max(0, income / 12 * 0.32 - expenses - debts);
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const principal = monthlyRate
    ? assessmentPayment * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate
    : assessmentPayment * months;
  const lower = Math.max(0, principal * 0.88);
  const upper = Math.max(0, principal * 1.04);

  setCalcResult(form, "range", `${money.format(lower)} - ${money.format(upper)}`);
  setCalcResult(form, "monthly-buffer", money.format(assessmentPayment));
  setCalcResult(form, "assessment-rate", `${percent.format(rate)}%`);
}

function updateRefinanceCalculator(form) {
  const balance = formNumber(form, "balance");
  const currentRate = formNumber(form, "currentRate");
  const newRate = formNumber(form, "newRate");
  const years = formNumber(form, "years");
  const costs = formNumber(form, "costs");
  const currentMonthly = monthlyRepayment(balance, currentRate, years);
  const newMonthly = monthlyRepayment(balance, newRate, years);
  const monthlySaving = currentMonthly - newMonthly;
  const annualSaving = monthlySaving * 12;
  const payback = monthlySaving > 0 ? Math.ceil(costs / monthlySaving) : 0;

  setCalcResult(form, "saving", money.format(Math.max(0, monthlySaving)));
  setCalcResult(form, "annual-saving", money.format(Math.max(0, annualSaving)));
  setCalcResult(form, "payback", payback ? `${payback} months` : "Review costs");
}

const calculatorHandlers = {
  repayments: updateRepaymentCalculator,
  borrowing: updateBorrowingCalculator,
  refinance: updateRefinanceCalculator,
};

document.querySelectorAll("[data-calculator]").forEach((form) => {
  const update = calculatorHandlers[form.dataset.calculator];
  if (!update) return;
  form.addEventListener("input", () => update(form));
  update(form);
});

document.querySelectorAll("[data-filter-input]").forEach((input) => {
  const scope = document.querySelector(input.dataset.filterInput);
  if (!scope) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    scope.querySelectorAll("[data-filter-card]").forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.hidden = query && !text.includes(query);
    });
  });
});
