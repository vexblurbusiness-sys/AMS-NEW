import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';

const serviceLinks = [
  { label: 'Home Loans', to: '/loan-solutions/home-loans' },
  { label: 'First Home Buyer', to: '/loan-solutions/first-home-buyer' },
  { label: 'Overseas Income Loans', to: '/loan-solutions/overseas-income-loans' },
  { label: 'Self-Employed Loans', to: '/loan-solutions/self-employed-home-loans' },
  { label: 'Refinance Review', to: '/refinance' },
];

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Branches', to: '/about/branches' },
  { label: 'Resources & FAQs', to: '/resources' },
  { label: 'Mortgage Insights', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-bg-light pt-14 pb-8 border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-flex rounded-md" aria-label="Award Mortgage Solutions home">
              <Logo className="h-10" />
            </Link>
            <p className="text-[15px] text-text-body leading-relaxed">
              Award Mortgage Solutions helps clients compare lending pathways, prepare stronger applications and make informed borrowing decisions.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-text-main text-lg mb-5">Services</h2>
            <ul className="space-y-3 text-[15px] font-medium text-text-body">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-brand-dark transition-colors rounded-md">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-text-main text-lg mb-5">Company</h2>
            <ul className="space-y-3 text-[15px] font-medium text-text-body">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-brand-dark transition-colors rounded-md">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-text-main text-lg mb-5">Let's Talk</h2>
            <ul className="space-y-4 text-[15px] text-text-body">
              <li>
                <span className="block text-text-sub text-sm mb-1">Call us directly</span>
                <a href="tel:1300688799" className="text-brand-dark font-bold hover:text-brand-hover transition-colors text-xl inline-flex items-center gap-2 rounded-md">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  1300 688 799
                </a>
              </li>
              <li>
                <span className="block text-text-sub text-sm mb-1">Email</span>
                <a href="mailto:info@awardmortgage.com.au" className="font-bold text-text-main hover:text-brand-dark transition-colors inline-flex items-center gap-2 rounded-md">
                  <Mail className="w-4 h-4 text-brand" aria-hidden="true" />
                  info@awardmortgage.com.au
                </a>
              </li>
              <li className="pt-2 space-y-1">
                <p className="font-bold text-text-main">Award Mortgage Solutions</p>
                <p className="text-text-sub">ABN 59 632 593 474</p>
                <p className="text-text-sub">Australian Credit Licence 387 443</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light text-[13px] text-text-muted space-y-6">
          <p className="leading-relaxed">
            This information is general in nature and has been prepared without taking into account your objectives, financial situation or needs. Terms, conditions, fees, charges, eligibility criteria and lending criteria apply. Approval is subject to credit assessment. Before making a decision, consider whether a product is appropriate for your circumstances and review the relevant product terms and disclosure documents.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2 border-t border-slate-200">
            <p className="font-medium">&copy; {new Date().getFullYear()} Award Mortgage Solutions. All rights reserved.</p>
            <p className="font-medium">Privacy, credit guide and disclosure documents available on request.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
