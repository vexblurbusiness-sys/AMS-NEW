import { Calendar, ChevronRight, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: 'What to Prepare Before a Home Loan Assessment',
      excerpt: 'A practical checklist of income, savings, expense and property details that can make your first mortgage conversation more productive.',
      category: 'Home Loans',
      date: 'May 15, 2026',
      author: 'Award Mortgage Team',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      link: '/loan-solutions/home-loans',
    },
    {
      title: 'Borrowing with Overseas Income: Policy Questions to Ask',
      excerpt: 'Currency, residency, documents and deposit size can all affect lender appetite. These are the questions worth clarifying early.',
      category: 'Specialist Lending',
      date: 'May 02, 2026',
      author: 'Award Mortgage Team',
      image: 'https://images.unsplash.com/photo-1580519542036-ed47f3e42214?auto=format&fit=crop&w=800&q=80',
      link: '/loan-solutions/overseas-income-loans',
    },
    {
      title: 'When a Refinance Review May Be Worth Considering',
      excerpt: 'A refinance decision should compare rate, fees, features, switching costs, loan term and the reason you want to move lenders.',
      category: 'Refinancing',
      date: 'April 28, 2026',
      author: 'Award Mortgage Team',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80',
      link: '/refinance',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light border-b border-border-light py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight">Mortgage <span className="text-brand-dark">Insights</span></h1>
            <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed">
              Practical lending notes for home buyers, refinancers and borrowers with more complex income.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="Financial data dashboard"
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
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-lg border border-border-light hover:border-brand transition-all duration-300 overflow-hidden flex flex-col group shadow-sm hover:shadow-lg"
              >
                <Link to={post.link} className="relative aspect-[16/9] overflow-hidden block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-lg text-xs font-bold text-text-main">
                    {post.category}
                  </div>
                </Link>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-text-sub mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" aria-hidden="true" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" aria-hidden="true" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-main mb-4 leading-snug group-hover:text-brand-dark transition-colors">
                    <Link to={post.link} className="rounded-md">{post.title}</Link>
                  </h2>
                  <p className="text-text-body font-medium mb-7 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={post.link} className="inline-flex items-center text-text-main font-bold mt-auto group-hover:text-brand-dark transition-colors rounded-md">
                    Explore Topic <ChevronRight className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
