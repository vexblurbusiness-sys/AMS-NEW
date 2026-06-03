import { motion } from 'motion/react';
import { Home as HomeIcon, Globe, User, HardHat, FileText, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: HomeIcon,
    title: 'Home Loans',
    description: 'Compare lending pathways for buying, upgrading, downsizing or investing in residential property.',
    features: ['Fixed and variable options', 'Offset and redraw features', 'Owner-occupier or investment', 'Pre-approval preparation'],
    link: '/loan-solutions/home-loans',
  },
  {
    icon: User,
    title: 'First Home Buyer',
    description: 'Understand deposit requirements, grants, guarantees and the documents lenders may request.',
    features: ['Deposit planning', 'Grant and scheme guidance', 'Guarantor loan discussion', 'Pre-approval pathway'],
    link: '/loan-solutions/first-home-buyer',
  },
  {
    icon: Globe,
    title: 'Overseas Income Loans',
    description: 'Review options for expats, temporary visa holders and borrowers earning income outside Australia.',
    features: ['Residency policy review', 'Currency treatment', 'Document requirements', 'Lender policy matching'],
    link: '/loan-solutions/overseas-income-loans',
  },
  {
    icon: FileText,
    title: 'Self-Employed Loans',
    description: 'Prepare a clearer lending story when income comes through a business, company or trust structure.',
    features: ['Tax return review', 'Alternative documentation discussion', 'Business structure notes', 'Cash flow considerations'],
    link: '/loan-solutions/self-employed-home-loans',
  },
  {
    icon: HardHat,
    title: 'Construction Loans',
    description: 'Plan for staged drawdowns, building contracts, valuations and lender construction requirements.',
    features: ['Progress payment timing', 'Contract and builder checks', 'Land and build packages', 'Renovation finance discussion'],
    link: '/contact',
  },
  {
    icon: Building2,
    title: 'Commercial & Business',
    description: 'Discuss finance pathways for commercial property, business premises, asset finance or working capital.',
    features: ['Commercial property purchase', 'Asset and equipment finance', 'Business lending discussion', 'SMSF lending pathway'],
    link: '/contact',
  },
];

export default function LoanSolutions() {
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
              Tailored Finance
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight"
            >
              Loan Solutions for Different <span className="text-brand-dark">Borrowing Scenarios</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-text-body font-medium mb-8 leading-relaxed"
            >
              Explore common lending pathways, then request a broker assessment before you choose a lender or submit an application.
            </motion.p>
            <Link to="/contact" className="inline-flex items-center bg-brand text-text-main hover:bg-brand-hover rounded-lg px-7 py-4 font-bold transition-colors">
              Start an Assessment <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:w-1/2 hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Australian home exterior"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.article
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border border-border-light rounded-lg p-7 hover:border-brand hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="w-14 h-14 bg-bg-light group-hover:bg-brand-light rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-brand" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-main mb-4">{sol.title}</h2>
                  <p className="text-text-body font-medium mb-7 flex-grow leading-relaxed">
                    {sol.description}
                  </p>
                  <ul className="space-y-3 mb-7 bg-bg-light p-5 rounded-lg">
                    {sol.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-[15px] font-semibold text-text-main">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={sol.link} className="mt-auto inline-flex items-center text-text-main font-bold hover:text-brand-dark transition-colors text-lg rounded-md">
                    {sol.link === '/contact' ? 'Discuss this option' : 'Explore this pathway'} <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 border-t border-brand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Not sure which pathway fits?</h2>
          <p className="text-lg font-medium text-brand-dark/80 mb-8 max-w-2xl mx-auto">A short assessment can help narrow the lender policies and documents most relevant to your situation.</p>
          <Link to="/contact" className="bg-brand text-text-main px-8 py-4 rounded-lg font-bold shadow-md hover:bg-brand-hover transition-colors text-lg inline-block">
            Speak to a Broker
          </Link>
        </div>
      </section>
    </div>
  );
}
