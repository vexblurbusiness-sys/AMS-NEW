import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState, type FocusEvent, type ReactNode } from 'react';
import { Logo } from '../ui/Logo';
import { motion, AnimatePresence } from 'motion/react';

type NavItem = {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
};

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Loan Solutions',
    path: '/loan-solutions',
    subItems: [
      { label: 'Home Loans', path: '/loan-solutions/home-loans' },
      { label: 'First-Home-Buyer', path: '/loan-solutions/first-home-buyer' },
      { label: 'Overseas-Income-Loans', path: '/loan-solutions/overseas-income-loans' },
      { label: 'Self-Employed-Home-Loans', path: '/loan-solutions/self-employed-home-loans' },
    ],
  },
  { label: 'Refinance', path: '/refinance' },
  {
    label: 'Resources',
    path: '/resources',
    subItems: [
      { label: 'FAQs', path: '/resources/faqs' },
      { label: 'Articles', path: '/resources/articles' },
    ],
  },
  { label: 'Blog', path: '/blog' },
  {
    label: 'About',
    path: '/about',
    subItems: [
      { label: 'About', path: '/about' },
      { label: 'Branches', path: '/about/branches' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

const isCurrentPath = (pathname: string, to: string) => pathname === to || (to !== '/' && pathname.startsWith(to));

const DesktopNavLink = ({ item, children }: { item: NavItem; children?: ReactNode }) => {
  const location = useLocation();
  const isActive = isCurrentPath(location.pathname, item.path);
  const [isOpen, setIsOpen] = useState(false);
  const menuId = `desktop-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;

  const closeIfFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false);
    }
  };

  if (children) {
    return (
      <div
        className="relative h-full flex items-center px-2 group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={closeIfFocusLeaves}
      >
        <Link
          to={item.path}
          aria-current={isActive ? 'page' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setIsOpen(false);
          }}
          className="text-[15px] font-semibold transition-all flex items-center gap-1 rounded-md"
        >
          <span className={isActive ? 'text-brand-dark' : 'text-text-main group-hover:text-brand-dark transition-colors'}>
            {item.label}
          </span>
          <ChevronDown className={`w-4 h-4 text-text-main group-hover:text-brand-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
        {isActive ? (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand rounded-t-full"
          />
        ) : (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-light rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={menuId}
              role="menu"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
            >
              <div className="min-w-[260px] bg-white border border-border-light rounded-lg shadow-xl overflow-hidden py-2 flex flex-col">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      aria-current={isActive ? 'page' : undefined}
      className="text-[15px] font-semibold transition-all h-full flex items-center px-2 relative group rounded-md"
    >
      <span className={isActive ? 'text-brand-dark' : 'text-text-main group-hover:text-brand-dark transition-colors'}>
        {item.label}
      </span>
      {isActive ? (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand rounded-t-full"
        />
      ) : (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-light rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </Link>
  );
};

const DropdownItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      role="menuitem"
      className="px-5 py-3 text-[14px] font-medium text-text-main hover:bg-bg-light hover:text-brand-dark transition-colors block rounded-md mx-2"
    >
      {label}
    </Link>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleMobileMenu = (path: string) => {
    setOpenMobileMenus((current) => ({
      ...current,
      [path]: !(current[path] ?? isCurrentPath(location.pathname, path)),
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border-light shadow-sm">
      <div className="bg-bg-light text-text-sub py-2.5 text-[13px] border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-between items-center">
          <div className="hidden sm:flex space-x-4">
            <span className="font-medium">Established in 2005</span>
            <span aria-hidden="true">|</span>
            <span className="font-medium">Australia-wide appointments</span>
          </div>
          <a href="tel:1300688799" className="font-bold text-text-main hover:text-brand-dark transition-colors flex items-center gap-1.5 rounded-md">
            <Phone className="w-3.5 h-3.5 text-brand" aria-hidden="true" /> 1300 688 799
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center rounded-md" onClick={() => setIsOpen(false)} aria-label="Award Mortgage Solutions home">
              <Logo className="h-10 sm:h-12" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-5 lg:space-x-7 h-20" aria-label="Primary navigation">
            {navItems.map((item) => (
              <DesktopNavLink key={item.path} item={item}>
                {item.subItems?.map((subItem) => (
                  <DropdownItem key={subItem.path} to={subItem.path} label={subItem.label} />
                ))}
              </DesktopNavLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-brand text-text-main px-6 py-2.5 rounded-lg text-[15px] font-bold hover:bg-brand-hover transition-colors shadow-sm"
            >
              Get Assessment
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="text-text-main hover:text-brand-dark p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" className="md:hidden bg-white border-t border-border-light p-4 space-y-1 pb-6 shadow-xl max-h-[80vh] overflow-y-auto" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = isCurrentPath(location.pathname, item.path);
            const hasSubItems = Boolean(item.subItems?.length);
            const mobileMenuId = `mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
            const isSubmenuOpen = hasSubItems ? (openMobileMenus[item.path] ?? isActive) : false;

            return (
              <div key={item.path} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Link
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className="flex-1 block text-base font-semibold text-text-main hover:text-brand-dark py-3 px-4 rounded-lg hover:bg-bg-light transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {hasSubItems && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isSubmenuOpen}
                      aria-controls={mobileMenuId}
                      onClick={() => toggleMobileMenu(item.path)}
                      className="p-3 rounded-lg text-text-main hover:text-brand-dark hover:bg-bg-light transition-colors"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {hasSubItems && isSubmenuOpen && (
                  <div id={mobileMenuId} className="pl-6 flex flex-col space-y-1 border-l-2 border-border-light ml-4 my-1">
                    {item.subItems?.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block text-[15px] font-medium text-text-body hover:text-brand-dark py-2 px-4 rounded-lg hover:bg-bg-light transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-4 mt-2 border-t border-border-light px-2">
            <Link
              to="/contact"
              className="block w-full text-center bg-brand text-text-main px-5 py-3.5 rounded-lg text-base font-bold shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Get Assessment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
