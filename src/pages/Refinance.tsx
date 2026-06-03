import { motion } from 'motion/react';
import { RefreshCcw, TrendingDown, PiggyBank, Briefcase, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Refinance() {
  const reasons = [
    {
      icon: TrendingDown,
      title: 'Review Your Rate',
      desc: 'Compare your current rate, fees and features against suitable lender pathways.',
    },
    {
      icon: Briefcase,
      title: 'Consolidate Debt',
      desc: 'Assess whether rolling other debts into a home loan is appropriate after costs and risks are considered.',
    },
    {
      icon: PiggyBank,
      title: 'Access Equity',
      desc: 'Explore whether built-up equity could support renovations, investing or other goals.',
    },
    {
      icon: RefreshCcw,
      title: 'Change Structure',
      desc: 'Review fixed, variable, split, offset, repayment and loan-term options.',
    },
  ];

  const process = [
    ['Current Loan Audit', 'We review your existing rate, fees, repayments, loan term and features.'],
    ['Market and Policy Comparison', 'We compare lender pathways based on your current position and goals.'],
    ['Cost-Benefit Check', 'Switching costs, break costs and likely savings are considered before recommending next steps.'],
    ['Application and Settlement', 'If refinancing makes sense, we help with documents, discharge steps and settlement tracking.'],
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light py-20 md:py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 py-2 rounded-lg bg-brand-light text-brand-dark font-bold text-sm mb-6 border border-brand/20"
            >
              Strategic Refinancing
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight"
            >
              Make Sure Your Loan Still <span className="text-brand-dark">Fits Your Goals</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-text-body font-medium mb-9 leading-relaxed"
            >
              A refinance review can help you understand whether your current mortgage remains competitive after fees, features, switching costs and policy fit are considered.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Link to="/contact" className="bg-brand hover:bg-brand-hover text-text-main font-bold py-4 px-7 rounded-lg shadow-md transition-colors inline-flex items-center text-lg">
                Start Your Refinance Review <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:w-1/2 hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579621970588-a3f5ce599d6d?auto=format&fit=crop&w=1000&q=80"
                alt="Financial planning notes and calculator"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-5">Why Consider Refinancing?</h2>
            <p className="text-text-body text-lg md:text-xl font-medium max-w-3xl">A home loan is long term, but your life, equity position and lender options can change.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="bg-bg-light p-7 rounded-lg border border-border-light hover:border-brand hover:shadow-md transition-all duration-300">
                  <Icon className="w-11 h-11 text-brand mb-6" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-text-main mb-4">{reason.title}</h3>
                  <p className="text-text-body font-medium leading-relaxed">{reason.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-bg-light border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 md:p-10 border border-border-light shadow-md">
              <Activity className="w-14 h-14 text-brand mb-8" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-5">Cost-Benefit First</h2>
              <p className="text-lg text-text-body font-medium leading-relaxed">
                Refinancing should make sense after fees, break costs, loan term changes, features and your broader financial goals are considered.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-5">Our Refinance Process</h2>
                <p className="text-text-body text-lg md:text-xl font-medium">We manage the comparison and switching steps so the decision is clearer.</p>
              </div>

              <div className="space-y-6">
                {process.map(([title, body], index) => (
                  <div key={title} className="flex gap-5">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold shrink-0 text-lg ${index === process.length - 1 ? 'bg-brand text-text-main' : 'bg-brand-light text-brand-dark'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-main">{title}</h3>
                      <p className="text-text-body font-medium mt-2">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
