import { motion } from 'motion/react';
import { Globe, ArrowRight, FileText, BadgeDollarSign, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OverseasIncome() {
  const features = [
    {
      icon: Globe,
      title: 'Currency and Residency Review',
      desc: 'Lender treatment can vary by currency, country, visa status and whether income is paid by an overseas or Australian employer.',
    },
    {
      icon: FileText,
      title: 'Document Preparation',
      desc: 'We help identify the payslips, tax records, employment letters, bank statements and translations that may be required.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Deposit and LVR Guidance',
      desc: 'Understand how deposit size, property purpose and residency status may affect lender appetite and loan-to-value limits.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light py-20 md:py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-3 py-2 rounded-lg font-bold text-sm mb-6">
              <Globe className="w-4 h-4" aria-hidden="true" /> Expat and Foreign Income
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight">
              Australian Property Finance with <span className="text-brand-dark">Overseas Income</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-text-body font-medium mb-9 leading-relaxed">
              Overseas income lending is policy-sensitive. We help you understand which documents and lender requirements may apply before you submit an application.
            </motion.p>
            <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-8 py-4 rounded-lg shadow-md transition-colors text-lg inline-flex items-center">
              Discuss Your Situation <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80"
            alt="International client consultation"
            className="hidden lg:block w-full aspect-[4/3] object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ShieldCheck className="w-12 h-12 text-brand mx-auto mb-5" aria-hidden="true" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-5">Navigate the Policy Detail</h2>
          <p className="text-lg md:text-xl text-text-body font-medium max-w-2xl mx-auto">Not all lenders assess foreign income the same way. A scenario review helps avoid wasted applications.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article key={feature.title} className="bg-white p-8 rounded-lg border border-border-light hover:border-brand hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-bg-light rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">{feature.title}</h3>
              <p className="text-text-body text-lg font-medium leading-relaxed">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
