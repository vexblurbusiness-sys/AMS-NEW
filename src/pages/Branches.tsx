import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Video, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Branches() {
  const serviceAreas = [
    {
      city: 'Sydney Head Office',
      detail: 'Sydney, NSW, Australia',
      note: 'In-person meetings by appointment where available.',
      icon: Building2,
    },
    {
      city: 'Australia-Wide Appointments',
      detail: 'Phone and video consultations',
      note: 'Suitable for buyers, refinancers and borrowers with overseas income.',
      icon: Video,
    },
    {
      city: 'Specialist Lending Support',
      detail: 'Local, expat and self-employed scenarios',
      note: 'The team will confirm the best contact pathway after your enquiry.',
      icon: MapPin,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-bg-light pt-20 pb-24 relative overflow-hidden border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight"
          >
            Branches and <span className="text-brand-dark">Appointments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-body font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Speak with Award Mortgage Solutions from Sydney or arrange a phone or video consultation from elsewhere in Australia.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.city} className="bg-white p-8 rounded-lg border border-border-light hover:border-brand hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-text-main mb-3">{area.city}</h2>
                <p className="text-lg text-text-main font-semibold mb-3">{area.detail}</p>
                <p className="text-text-body font-medium leading-relaxed">{area.note}</p>
              </article>
            );
          })}
        </div>

        <div className="bg-bg-light rounded-lg border border-border-light p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-text-main mb-3">Ready to arrange a conversation?</h2>
            <p className="text-text-body text-lg font-medium">Use one contact point and the team will direct your enquiry to the right person.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:1300688799" className="bg-white border border-border-light text-text-main hover:border-brand font-bold px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-brand" aria-hidden="true" />
              1300 688 799
            </a>
            <Link to="/contact" className="bg-brand text-text-main hover:bg-brand-hover font-bold px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" aria-hidden="true" />
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
