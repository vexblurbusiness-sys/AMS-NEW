import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Banknote,
  Building2,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Globe,
  Hammer,
  Home as HomeIcon,
  Landmark,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';

const stats = [
  'Established in 2005',
  '60+ banks and lending partners',
  '100+ loan professionals',
  'AUD 20B+ loans facilitated',
  'Branches across Australia',
];

const services = [
  {
    title: 'Home Loans and Refinancing',
    description:
      'Buying your first home, upgrading, investing or reviewing your current loan? We help compare lender options and structure your home loan around your borrowing needs.',
    cta: 'Explore Home Loans',
    link: '/loan-solutions/home-loans',
    icon: HomeIcon,
  },
  {
    title: 'Overseas Income Home Loans',
    description:
      'Earning income outside Australia can make lending more complex. We help international clients and Australian residents with overseas income review lender options and application requirements.',
    cta: 'Check Overseas Income Options',
    link: '/loan-solutions/overseas-income-loans',
    icon: Globe,
  },
  {
    title: 'Construction Loans',
    description:
      'Building or renovating a property? We help review construction loan options, staged payment requirements and lender policies before your application moves ahead.',
    cta: 'Review Construction Loan Options',
    link: '/contact',
    icon: Hammer,
  },
  {
    title: 'SMSF Loans',
    description:
      'Looking to purchase property through a self-managed super fund? Our team can help you understand SMSF lending options and key lender requirements.',
    cta: 'Learn About SMSF Loans',
    link: '/contact',
    icon: Landmark,
  },
  {
    title: 'Commercial Loans',
    description:
      'For business premises, commercial property investment or business-related lending, we help compare suitable commercial finance options.',
    cta: 'Discuss Commercial Finance',
    link: '/contact',
    icon: Building2,
  },
  {
    title: 'Asset and Equipment Finance',
    description:
      'Need finance for vehicles, equipment or business assets? We help assess suitable asset lending options based on your business and repayment position.',
    cta: 'Explore Asset Finance',
    link: '/contact',
    icon: Car,
  },
];

const whyChoose = [
  {
    title: 'Established Credit Service Experience',
    description: 'Since 2005, Award Mortgage has supported clients with home loan and finance solutions across Australia.',
    icon: ShieldCheck,
  },
  {
    title: 'Broad Lender Panel',
    description: 'With access to 60+ banks and financial institutions, we help compare different lender policies, products and pricing options.',
    icon: Banknote,
  },
  {
    title: 'Support for Local and International Clients',
    description:
      'We assist local income clients, overseas income applicants, temporary visa holders, permanent residents, citizens and international borrowers with different lending scenarios.',
    icon: Globe,
  },
  {
    title: 'Australia-Wide Branch Network',
    description: 'Our branch network spans key Australian states and cities, supporting clients with local market knowledge and accessible service.',
    icon: MapPin,
  },
  {
    title: 'Professional Loan Team',
    description: 'Our loan professionals help review your income, documents, borrowing capacity and lender fit before your application is submitted.',
    icon: Users,
  },
  {
    title: 'End-to-End Loan Support',
    description: 'From first assessment to settlement and ongoing review, we provide support through the full loan journey.',
    icon: ClipboardCheck,
  },
];

const processSteps = [
  {
    title: 'Tell Us Your Goal',
    description:
      'Let us know whether you are buying, refinancing, building, investing, applying with overseas income or reviewing business finance.',
  },
  {
    title: 'Review Your Borrowing Position',
    description:
      'We review your income, deposit, liabilities, property goal, residential status and key documents to understand your borrowing scenario.',
  },
  {
    title: 'Compare Lender Options',
    description:
      'We compare suitable lender options based on policy fit, rate, fees, repayment structure and application requirements.',
  },
  {
    title: 'Prepare Your Application',
    description: 'Our team helps you prepare the required documents and submit the application to the selected lender.',
  },
  {
    title: 'Approval and Loan Documents',
    description: 'We guide you through conditional approval, valuation, formal approval and loan document steps.',
  },
  {
    title: 'Settlement and Ongoing Support',
    description: 'After settlement, we continue to support your loan review, refinance timing and future lending needs.',
  },
];

const scenarios = [
  {
    title: 'First Home Buyer with Local Income',
    description:
      'A local income client wanted to buy their first home but was unsure how much they could borrow. Award Mortgage reviewed their income, deposit and liabilities, then compared lender options before the client moved forward with an application.',
    support: 'Borrowing capacity review, lender comparison, application preparation',
    cta: 'First Home Buyer Assessment',
    link: '/loan-solutions/first-home-buyer',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Overseas Income Applicant',
    description:
      'An applicant earned income outside Australia and needed help understanding which lenders may consider foreign income. Award Mortgage reviewed the income currency, documents, residential status and lender requirements before discussing possible options.',
    support: 'Overseas income review, document guidance, lender policy matching',
    cta: 'Overseas Income Loan Review',
    link: '/loan-solutions/overseas-income-loans',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Refinance for Better Loan Structure',
    description:
      'A homeowner wanted to review their existing loan after rate changes. Award Mortgage compared refinance options and helped the client understand repayment structure, fees and lender requirements before deciding next steps.',
    support: 'Refinance comparison, repayment review, loan structure discussion',
    cta: 'Review My Current Loan',
    link: '/refinance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  },
];

const faqs = [
  {
    q: 'How do I know how much I can borrow?',
    a: 'Your borrowing capacity depends on your income, expenses, liabilities, deposit, property purpose and lender assessment. Award Mortgage can help review your position and explain which lender options may be suitable before you apply.',
  },
  {
    q: 'Can I get a home loan in Australia with overseas income?',
    a: 'Some lenders may consider overseas income, but requirements vary by lender, currency, residential status, employment type and documentation. Award Mortgage can help review your overseas income scenario and compare lender options.',
  },
  {
    q: 'Can temporary visa holders apply for a home loan in Australia?',
    a: 'Some temporary visa holders may be eligible for home loan options, depending on visa type, income, deposit, property purpose and lender policy. A loan assessment is needed before confirming suitable options.',
  },
  {
    q: 'Do you only work with major banks?',
    a: 'No. Award Mortgage works with major banks, non-bank lenders and specialist finance providers. This helps clients compare different policies, rates and lending options.',
  },
  {
    q: 'What documents do I need for a home loan application?',
    a: 'Common documents may include ID, income evidence, bank statements, savings history, property details and information about existing debts. Additional documents may be required for self-employed clients, overseas income applicants, SMSF loans or commercial loans.',
  },
  {
    q: 'Can Award Mortgage help me refinance my current home loan?',
    a: 'Yes. We can help review your current loan, compare refinance options and explain potential rate, fee and repayment differences before you decide whether to proceed.',
  },
  {
    q: 'Are the interest rates shown on the website guaranteed?',
    a: 'No. Rates are indicative and subject to change. Your actual rate depends on lender assessment, loan details, repayment type, loan purpose and your full financial situation.',
  },
  {
    q: 'Will speaking with Award Mortgage affect my credit score?',
    a: 'An initial discussion or general assessment does not usually require a formal credit application. A credit enquiry may occur when a formal application is submitted to a lender.',
  },
  {
    q: 'Which areas does Award Mortgage service?',
    a: 'Award Mortgage supports clients across Australia through its branch network and lending partner relationships, including major cities and surrounding areas.',
  },
  {
    q: 'How do I start the loan assessment process?',
    a: 'You can submit an online enquiry, call Award Mortgage or book a consultation. Our team will review your goal, income type, documents and preferred contact time before guiding you through next steps.',
  },
];

function SectionIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm font-extrabold uppercase text-brand-dark mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-extrabold text-text-main leading-tight">{title}</h2>
      {description && <p className="mt-5 text-lg md:text-xl text-text-body font-medium leading-relaxed">{description}</p>}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex items-center gap-2 rounded-lg border border-brand/25 bg-brand-light px-3 py-2 text-sm font-bold text-brand-dark mb-7">
              <Star className="w-4 h-4" aria-hidden="true" />
              Award Mortgage Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-extrabold text-text-main leading-[1.04] mb-6">
              Home Loan Solutions for Local and International Clients in Australia
            </h1>
            <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed max-w-2xl mb-9">
              Award Mortgage helps you compare lender options, review your borrowing position and find a loan solution that fits your income, property goals and financial situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-brand px-7 py-4 text-base md:text-lg font-extrabold text-text-main shadow-lg hover:bg-brand-hover transition-colors">
                Get a Loan Assessment
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
              <a href="tel:1300688799" className="inline-flex items-center justify-center rounded-lg border border-border-light bg-white px-7 py-4 text-base md:text-lg font-extrabold text-text-main hover:border-brand hover:bg-brand-light transition-colors">
                <Phone className="w-5 h-5 mr-2 text-brand" aria-hidden="true" />
                Call 1300 688 799
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
              {stats.map((stat) => (
                <div key={stat} className="flex items-center gap-2 rounded-lg border border-border-light bg-bg-light px-4 py-3 text-sm font-bold text-text-main">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.45 }} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=80"
                alt="Modern home exterior representing Australian home loan goals"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-lg bg-white p-5 shadow-xl border border-border-light hidden sm:block">
              <p className="text-sm font-bold text-text-sub mb-1">Primary outcome</p>
              <p className="text-xl font-extrabold text-text-main">A clearer lender pathway before you apply.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionIntro title="Loan Services Designed Around Your Financial Situation" description="Residential, specialist and business finance pathways presented in a way that is easy to compare." />
          <Link to="/loan-solutions" className="inline-flex items-center font-extrabold text-brand-dark hover:text-brand-hover rounded-md">
            View all loan solutions
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} to={service.link} className="group rounded-lg border border-border-light bg-white p-7 shadow-sm hover:shadow-lg hover:border-brand transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-extrabold text-text-main mb-4">{service.title}</h3>
                <p className="text-text-body font-medium leading-relaxed mb-6">{service.description}</p>
                <span className="inline-flex items-center font-extrabold text-brand-dark group-hover:text-brand-hover">
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RatesSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div>
            <SectionIntro title="Latest Home Loan Interest Rates" description="Indicative examples help you start the comparison. A broker review is still needed before relying on any specific rate or product." />
            <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand px-7 py-4 font-extrabold text-text-main hover:bg-brand-hover transition-colors">
              Compare Rates with a Broker
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-lg border border-border-light shadow-lg overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <caption className="sr-only">Latest home loan interest rates by client type</caption>
                <thead>
                  <tr className="bg-text-main text-white">
                    <th className="p-5 text-sm font-extrabold">Client Type</th>
                    <th className="p-5 text-sm font-extrabold">Interest Rate From</th>
                    <th className="p-5 text-sm font-extrabold">Comparison Rate From</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  <tr className="hover:bg-bg-light">
                    <td className="p-5 font-bold text-text-main">Local Income</td>
                    <td className="p-5 text-3xl font-extrabold text-brand-dark">5.88% <span className="text-sm text-text-sub">p.a.</span></td>
                    <td className="p-5 font-bold text-text-main">6.13% p.a.</td>
                  </tr>
                  <tr className="hover:bg-bg-light">
                    <td className="p-5 font-bold text-text-main">Overseas Income</td>
                    <td className="p-5 text-3xl font-extrabold text-brand-dark">6.83% <span className="text-sm text-text-sub">p.a.</span></td>
                    <td className="p-5 font-bold text-text-main">7.35% p.a.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="bg-bg-light p-5 text-xs md:text-sm text-text-sub font-medium leading-relaxed border-t border-border-light">
              Interest rates are current as at 18/05/2026 and subject to change at any time. The comparison rate is based on a loan of $150,000 over a term of 25 years. This comparison rate applies only to the example given. Different amounts and terms will result in different comparison rates. Terms, conditions, fees and charges apply. Your full financial situation will need to be reviewed before any offer or product is accepted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-20 md:py-24 bg-text-main text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase text-brand mb-3">Why AMS</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Why Choose Award Mortgage</h2>
            <p className="mt-5 text-lg md:text-xl text-white/80 font-medium leading-relaxed">
              Award Mortgage has supported clients across Australia since 2005, combining lender access, industry experience and a structured loan process to help clients make informed borrowing decisions.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center rounded-lg bg-brand px-7 py-4 font-extrabold text-text-main hover:bg-brand-hover transition-colors">
            Speak with a Loan Specialist
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="bg-text-main p-7">
                <Icon className="w-9 h-9 text-brand mb-5" aria-hidden="true" />
                <h3 className="text-xl font-extrabold mb-3">{item.title}</h3>
                <p className="text-white/85 font-medium leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionIntro
            title="From First Assessment to Loan Settlement"
            description="A clear process helps you understand where you stand, what documents are needed and which lending options may suit your situation."
          />
          <Link to="/contact" className="inline-flex items-center font-extrabold text-brand-dark hover:text-brand-hover rounded-md">
            Start Your Loan Assessment
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-border-light bg-bg-light p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-lg font-black text-text-main">
                {index + 1}
              </div>
              <h3 className="text-xl font-extrabold text-text-main mb-3">{step.title}</h3>
              <p className="text-text-body font-medium leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenariosSection() {
  return (
    <section className="py-20 md:py-24 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title="Real Lending Scenarios, Practical Support"
          description="Every client's situation is different. These examples show how Award Mortgage may help clients review lending options based on income type, property goal and lender requirements."
        />
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {scenarios.map((scenario) => (
            <article key={scenario.title} className="overflow-hidden rounded-lg border border-border-light bg-white shadow-sm">
              <img src={scenario.image} alt={scenario.title} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7">
                <h3 className="text-2xl font-extrabold text-text-main mb-4">{scenario.title}</h3>
                <p className="text-text-body font-medium leading-relaxed mb-5">{scenario.description}</p>
                <p className="text-sm font-bold text-text-sub mb-6">
                  <span className="text-text-main">Key Support:</span> {scenario.support}
                </p>
                <Link to={scenario.link} className="inline-flex items-center font-extrabold text-brand-dark hover:text-brand-hover rounded-md">
                  {scenario.cta}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white border-b border-border-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main">FAQs</h2>
          <p className="mt-5 text-lg md:text-xl text-text-body font-medium leading-relaxed">
            Find answers to common questions about home loans, refinancing, overseas income lending and the loan application process in Australia.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `home-faq-${idx}`;
            return (
              <article key={faq.q} className="rounded-lg border border-border-light bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-5 px-5 md:px-7 py-5 text-left hover:bg-bg-light transition-colors"
                >
                  <span className="text-base md:text-lg font-extrabold text-text-main">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div id={panelId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 md:px-7 pb-6 text-text-body font-medium leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="bg-text-main text-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FileText className="w-14 h-14 text-brand mx-auto mb-6" aria-hidden="true" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Review Your Loan Options?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-9">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 text-lg font-extrabold text-text-main hover:bg-brand-hover transition-colors">
            Book a Loan Consultation
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
          <a href="tel:1300688799" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white px-8 py-4 text-lg font-extrabold text-text-main hover:bg-bg-light transition-colors">
            <Phone className="w-5 h-5 mr-2 text-brand" aria-hidden="true" />
            Call 1300 688 799
          </a>
        </div>
        <p className="max-w-4xl mx-auto text-sm text-white/80 font-medium leading-relaxed">
          This information is general in nature and has been prepared without taking into account your objectives, financial situation or needs. Terms, conditions, fees, charges, eligibility criteria and lending criteria apply. Approval is subject to credit assessment. Before making a decision, you should consider whether the product is appropriate for your circumstances and refer to the relevant product terms and disclosure documents.
        </p>
        <p className="mt-5 text-sm text-white/80 font-bold">Award Mortgage Solutions ABN 59 632 593 474 | Australian Credit Licence 387 443</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <RatesSection />
      <WhySection />
      <ProcessSection />
      <ScenariosSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
