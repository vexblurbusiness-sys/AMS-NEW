import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SEO } from '../SEO';

const pageMeta = [
  {
    path: /^\/$/,
    title: 'Mortgage Broker for Home Loans, Refinance and Overseas Income',
    description: 'Award Mortgage Solutions helps Australian borrowers compare home loan, refinance and specialist lending options with a clear broker-led assessment.',
  },
  {
    path: /^\/loan-solutions/,
    title: 'Loan Solutions',
    description: 'Explore home loan, first home buyer, overseas income, self-employed, construction and commercial finance pathways.',
  },
  {
    path: /^\/refinance/,
    title: 'Refinance Review',
    description: 'Review your current mortgage, compare lender options and understand whether refinancing may suit your financial goals.',
  },
  {
    path: /^\/resources/,
    title: 'Mortgage Resources and FAQs',
    description: 'Read practical mortgage guides, FAQs and borrowing resources for home buyers, refinancers and property investors.',
  },
  {
    path: /^\/blog/,
    title: 'Mortgage Insights',
    description: 'Helpful home loan, refinance and lending policy insights from Award Mortgage Solutions.',
  },
  {
    path: /^\/about/,
    title: 'About Award Mortgage Solutions',
    description: 'Learn how Award Mortgage Solutions supports clients across Australia with structured mortgage guidance.',
  },
  {
    path: /^\/contact/,
    title: 'Contact Award Mortgage Solutions',
    description: 'Contact Award Mortgage Solutions to request a home loan, refinance or specialist lending assessment.',
  },
];

export function Layout() {
  const location = useLocation();
  const meta =
    pageMeta.find((item) => item.path.test(location.pathname)) ??
    {
      title: 'Page Not Found',
      description: 'The page you requested could not be found on Award Mortgage Solutions.',
      noindex: true,
    };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <SEO {...meta} canonicalPath={location.pathname} />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
