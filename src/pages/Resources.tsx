import { FileText, Calculator, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const resources = [
    {
      icon: Calculator,
      title: 'Borrowing Conversation',
      desc: 'Start by clarifying income, expenses, deposit and property goals before running formal lender scenarios.',
      link: '/contact',
      cta: 'Request assessment',
    },
    {
      icon: HelpCircle,
      title: 'Mortgage FAQs',
      desc: 'Read clear answers about deposits, LMI, refinancing, first home buyer pathways and lender documentation.',
      link: '/resources/faqs',
      cta: 'Read FAQs',
    },
    {
      icon: FileText,
      title: 'Lending Guides',
      desc: 'Browse practical articles covering first home buyer planning, refinance reviews and overseas income lending.',
      link: '/resources/articles',
      cta: 'View articles',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light py-20 md:py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-text-main">Resources & <span className="text-brand-dark">Tools</span></h1>
            <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed">
              Practical mortgage resources to help you prepare questions, documents and next steps before speaking with a broker.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:w-1/2 hidden lg:block"
          >
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
                alt="Mortgage planning notes and calculator"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.article
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-bg-light p-8 rounded-lg border border-border-light hover:border-brand hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-7 h-7 text-brand" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-main mb-4">{resource.title}</h2>
                  <p className="text-text-body font-medium text-lg leading-relaxed mb-7">{resource.desc}</p>
                  <Link to={resource.link} className="inline-flex items-center text-text-main font-bold hover:text-brand-dark rounded-md">
                    {resource.cta} <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <div className="bg-brand-light rounded-lg p-8 md:p-10 border border-brand/20 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-text-main mb-4 leading-tight">Preparing for a First Home Buyer Assessment?</h2>
              <p className="text-text-main font-medium text-lg leading-relaxed opacity-90">
                Bring your income details, savings, debts, estimated purchase price and questions about grants or schemes. The team can help you understand what lenders may ask for.
              </p>
            </div>
            <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-7 py-4 rounded-lg shadow-md transition-colors text-lg inline-flex items-center shrink-0">
              Book Assessment <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
