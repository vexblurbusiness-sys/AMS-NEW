import { motion } from 'motion/react';
import { Target, Users, Award, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const highlights = [
    { value: '2005', label: 'Established' },
    { value: 'ACL', label: 'Licensed credit assistance' },
    { value: 'AU', label: 'Australia-wide appointments' },
    { value: 'AMS', label: 'Structured mortgage support' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light py-20 md:py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 py-2 rounded-lg bg-brand-light text-brand-dark font-bold text-sm mb-6 border border-brand/20"
            >
              Award Mortgage Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight"
            >
              Mortgage Guidance Built Around <span className="text-brand-dark">Clarity and Care</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-body font-medium leading-relaxed"
            >
              Award Mortgage Solutions helps clients compare lending pathways, understand lender requirements and prepare stronger applications for residential, refinance and specialist lending needs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:w-1/2 hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Professional office meeting area"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((item) => (
              <div key={item.label} className="border border-border-light rounded-lg p-5">
                <div className="text-3xl md:text-4xl font-black text-text-main mb-2">{item.value}</div>
                <div className="text-xs font-bold text-text-sub uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6 text-lg text-text-body font-medium leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6 border-l-4 border-brand pl-5">Our Approach</h2>
              <p>
                Borrowing decisions are easier when the process is clear. We start by understanding your goals, reviewing your borrowing position and explaining the documentation lenders are likely to need.
              </p>
              <p>
                From there, we compare pathways based on policy fit, loan structure, repayments, fees and timing. The goal is to help you make an informed decision before lodging an application.
              </p>
              <p>
                We work with clients buying a home, refinancing, investing, applying with overseas income or navigating self-employed lending documentation.
              </p>
            </div>
            <div className="bg-bg-light p-4 rounded-lg border border-border-light shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Team reviewing finance documents together"
                className="rounded-lg w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-bg-light border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-5">What You Can Expect</h2>
            <p className="text-lg text-text-body font-medium max-w-3xl">Practical support that keeps the application process understandable.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white p-8 rounded-lg shadow-sm border border-border-light hover:shadow-md hover:border-brand transition-all duration-300">
              <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Focused Assessment</h3>
              <p className="text-text-body text-lg font-medium">We review your goals, income, deposit, liabilities and documents before discussing likely lending pathways.</p>
            </article>
            <article className="bg-white p-8 rounded-lg shadow-sm border border-border-light hover:shadow-md hover:border-brand transition-all duration-300">
              <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mb-6">
                <FileCheck2 className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Clear Documentation</h3>
              <p className="text-text-body text-lg font-medium">You get practical guidance on the records and lender information needed for your scenario.</p>
            </article>
            <article className="bg-white p-8 rounded-lg shadow-sm border border-border-light hover:shadow-md hover:border-brand transition-all duration-300">
              <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Ongoing Support</h3>
              <p className="text-text-body text-lg font-medium">We can help you review the loan over time as your circumstances, goals or lender options change.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Award className="w-14 h-14 text-brand mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-6">Ready to Talk Through Your Options?</h2>
          <p className="text-lg md:text-xl font-medium text-text-body mb-10 max-w-2xl mx-auto">Start with a practical conversation about your property goals and borrowing position.</p>
          <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold py-4 px-8 rounded-lg shadow-md transition-colors text-lg inline-block">
            Speak with the Team
          </Link>
        </div>
      </section>
    </div>
  );
}
