import { motion } from 'motion/react';
import { Home, ArrowRight, CheckCircle2, Building, Clock, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeLoans() {
  const benefits = [
    {
      icon: Percent,
      title: 'Compare the Full Cost',
      desc: 'Look beyond the headline rate by reviewing fees, repayments, features and lender policy fit.',
    },
    {
      icon: Clock,
      title: 'Prepare Earlier',
      desc: 'Understand the documents and lender questions that may affect your pre-approval or purchase timeline.',
    },
    {
      icon: Building,
      title: 'Structure the Loan',
      desc: 'Consider fixed, variable, split, offset and repayment structures before committing to a lender.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light py-20 md:py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-3 py-2 rounded-lg font-bold text-sm mb-6">
              <Home className="w-4 h-4" aria-hidden="true" /> Home Loans
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight">
              Compare Your <span className="text-brand-dark">Home Loan</span> Options
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-text-body font-medium mb-9 leading-relaxed">
              Whether you are buying, upgrading or investing, a structured review helps you understand borrowing capacity, repayment options and application requirements.
            </motion.p>
            <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-8 py-4 rounded-lg shadow-md transition-colors text-lg inline-flex items-center">
              Request Home Loan Review <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80"
            alt="Modern home exterior"
            className="hidden lg:block w-full aspect-[4/3] object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="bg-white p-8 rounded-lg border border-border-light hover:border-brand hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-bg-light group-hover:bg-brand-light rounded-lg flex items-center justify-center mb-6 transition-colors">
                <benefit.icon className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-text-main mb-4">{benefit.title}</h2>
              <p className="text-text-body text-lg font-medium leading-relaxed">{benefit.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-bg-light border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-5">How It Works</h2>
            <p className="text-lg md:text-xl text-text-body font-medium max-w-2xl mx-auto">A transparent process designed to simplify a property purchase.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Initial discovery and borrowing position review',
              'Market and lender policy comparison',
              'Pre-approval preparation where suitable',
              'Formal application support',
              'Approval, documents and settlement guidance',
            ].map((step, idx) => (
              <div key={step} className="flex items-start bg-white border border-border-light rounded-lg p-6">
                <CheckCircle2 className="w-7 h-7 text-brand shrink-0 mt-1" aria-hidden="true" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-text-main">Step {idx + 1}</h3>
                  <p className="text-lg text-text-body font-medium mt-1">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
