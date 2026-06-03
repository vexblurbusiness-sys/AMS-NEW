import { Link } from 'react-router-dom';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6">{title}</h1>
      <p className="text-text-body text-xl font-medium max-w-2xl mx-auto mb-8">
        The page you are looking for may have moved. You can return home or contact the team for help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-7 py-4 rounded-lg transition-colors">
          Return Home
        </Link>
        <Link to="/contact" className="bg-bg-light border border-border-light text-text-main hover:border-brand font-bold px-7 py-4 rounded-lg transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
