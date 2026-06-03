import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FirstHomeBuyer() {
  const steps = [
    {
      icon: Map,
      title: 'Understand Grants and Schemes',
      desc: 'We help you identify which first home buyer grants, concessions or guarantees may be worth reviewing for your state and circumstances.',
    },
    {
      icon: ShieldCheck,
      title: 'Plan the Deposit',
      desc: 'Review deposit size, LMI, savings history, family support and lender requirements before you start making offers.',
    },
    {
      icon: HeartHandshake,
      title: 'Move with More Confidence',
      desc: 'Get help understanding mortgage language, application steps, pre-approval timing and settlement expectations.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light py-20 md:py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-3 py-2 rounded-lg font-bold text-sm mb-6">
              <Sparkles className="w-4 h-4" aria-hidden="true" /> First Home Buyer Guide
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight">
              Your First Home Loan, Made <span className="text-brand-dark">Clearer</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-text-body font-medium mb-9 leading-relaxed">
              Buying your first home brings a lot of new decisions. We help you understand deposit requirements, lender expectations and the steps from assessment to settlement.
            </motion.p>
            <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-8 py-4 rounded-lg shadow-md transition-colors text-lg inline-flex items-center">
              Check Your Next Step <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80"
            alt="First home buyer inspecting a modern home"
            className="hidden lg:block w-full aspect-[4/3] object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <article key={step.title} className="bg-white p-8 rounded-lg border border-border-light hover:border-brand hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-bg-light rounded-lg flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-text-main mb-4">{step.title}</h2>
              <p className="text-text-body text-lg font-medium leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-text-main text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Want to know where you stand?</h2>
          <p className="text-lg md:text-xl font-medium text-white/80 mb-10">
            Start with your income, savings, expenses and property goal. We will help you understand the likely documents and lender pathway.
          </p>
          <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-8 py-4 rounded-lg shadow-md transition-colors text-lg inline-block">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
