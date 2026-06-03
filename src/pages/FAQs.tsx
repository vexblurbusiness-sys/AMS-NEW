import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'Borrowing Basics',
    items: [
      {
        q: 'How much deposit do I really need?',
        a: 'The deposit needed depends on property price, loan-to-value ratio, LMI, lender policy and whether any grant or guarantee applies. A broker can help you compare the cost difference between deposit sizes before you apply.',
      },
      {
        q: 'What is Lenders Mortgage Insurance?',
        a: 'LMI is insurance that protects the lender if a borrower defaults. It is commonly required when the loan is above 80% of the property value, although rules vary by lender and scenario.',
      },
      {
        q: 'What does pre-approval mean?',
        a: 'Pre-approval is an early lender assessment based on information available at the time. It is not a final approval and can still depend on property valuation, documents and lender conditions.',
      },
    ],
  },
  {
    category: 'Refinancing',
    items: [
      {
        q: 'When is the right time to refinance?',
        a: 'It may be worth reviewing your loan when a fixed rate is ending, your equity has changed, your goals have shifted or your current loan no longer suits your needs.',
      },
      {
        q: 'Are there fees to refinance?',
        a: 'There can be discharge fees, government registration fees, application fees and possible break costs. A cost-benefit review helps determine whether refinancing makes sense.',
      },
    ],
  },
  {
    category: 'Specialist Scenarios',
    items: [
      {
        q: 'Can I apply with overseas income?',
        a: 'Some lenders may consider overseas income, but policy varies by country, currency, residency status and documentation. A scenario review is important before choosing a lender.',
      },
      {
        q: 'Can self-employed borrowers get a home loan?',
        a: 'Yes, but income assessment may require business financials, tax returns, BAS, accountant information or alternative documents depending on the lender and product.',
      },
    ],
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light pt-20 pb-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-3 py-2 rounded-lg font-bold text-sm mb-6"
          >
            <HelpCircle className="w-4 h-4" aria-hidden="true" /> Support Center
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight"
          >
            Frequently Asked <span className="text-brand-dark">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-body font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Clear answers to common questions from home buyers, refinancers and specialist borrowers.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {faqs.map((group, gIdx) => (
            <section key={group.category} aria-labelledby={`faq-category-${gIdx}`}>
              <h2 id={`faq-category-${gIdx}`} className="text-3xl font-bold text-text-main mb-6">{group.category}</h2>
              <div className="space-y-4">
                {group.items.map((item, iIdx) => {
                  const id = `${gIdx}-${iIdx}`;
                  const panelId = `faq-panel-${id}`;
                  const isOpen = openIndex === id;
                  return (
                    <article key={item.q} className={`border rounded-lg transition-colors duration-300 ${isOpen ? 'border-brand bg-white' : 'border-border-light bg-white hover:border-brand/50'}`}>
                      <button
                        type="button"
                        className="w-full text-left px-6 md:px-8 py-5 flex justify-between items-center rounded-lg"
                        onClick={() => toggle(id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className="text-lg md:text-xl font-bold text-text-main pr-6">{item.q}</span>
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-brand text-text-main' : 'bg-bg-light text-text-main'}`}>
                          {isOpen ? <Minus className="w-5 h-5" aria-hidden="true" /> : <Plus className="w-5 h-5" aria-hidden="true" />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 md:px-8 pb-6 text-lg text-text-body font-medium leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 p-8 bg-bg-light border border-border-light rounded-lg text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">Still have questions?</h2>
          <p className="text-lg text-text-body font-medium mb-8">Share your situation and the team can explain what information is needed next.</p>
          <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-8 py-4 rounded-lg shadow-md transition-colors text-lg inline-block">
            Contact the Team
          </Link>
        </div>
      </section>
    </div>
  );
}
