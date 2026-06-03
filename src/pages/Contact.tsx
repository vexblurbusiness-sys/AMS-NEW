import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

type LeadForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const initialForm: LeadForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  topic: 'Home Loan Enquiry',
  message: '',
};

const topicOptions = [
  'Home Loan Enquiry',
  'First Home Buyer',
  'Refinance Review',
  'Overseas Income Loan',
  'Self-Employed Loan',
  'Commercial Finance',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const field = name as keyof LeadForm;
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof LeadForm, string>> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.firstName.trim()) nextErrors.firstName = 'Enter your first name.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Enter your last name.';
    if (!form.email.trim()) nextErrors.email = 'Enter your email address.';
    if (form.email.trim() && !emailPattern.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!form.phone.trim()) nextErrors.phone = 'Enter your phone number.';
    if (!form.message.trim()) nextErrors.message = 'Tell us a little about your situation.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = `${form.topic} from ${form.firstName.trim()} ${form.lastName.trim()}`;
    const body = [
      `Name: ${form.firstName.trim()} ${form.lastName.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Topic: ${form.topic}`,
      '',
      'Message:',
      form.message.trim(),
    ].join('\n');

    window.location.href = `mailto:info@awardmortgage.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-lg border-2 border-border-light bg-bg-light focus:bg-white focus:border-brand transition-all duration-300 font-medium outline-none text-base text-text-main';

  const fieldError = (field: keyof LeadForm) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-sm font-semibold text-error flex items-center gap-2">
        <AlertCircle className="w-4 h-4" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="bg-white min-h-[calc(100vh-200px)]">
      <section className="bg-bg-light border-b border-border-light py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 leading-tight">Contact <span className="text-brand-dark">Award Mortgage</span></h1>
            <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed">
              Share your borrowing goal and the team will help you understand the next documents, lender pathways and timing.
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
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1000&q=80"
                alt="Desk with phone and notebook for a lending consultation"
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
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            <aside className="lg:col-span-1 space-y-5">
              <div className="bg-bg-light p-7 rounded-lg border border-border-light">
                <div className="w-11 h-11 bg-brand-light rounded-lg flex items-center justify-center mb-5">
                  <Phone className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-text-main mb-2">Phone</h2>
                <p className="text-text-sub font-medium mb-4">Call us directly during business hours.</p>
                <a href="tel:1300688799" className="text-xl font-black text-brand-dark hover:text-brand-hover rounded-md">1300 688 799</a>
              </div>

              <div className="bg-bg-light p-7 rounded-lg border border-border-light">
                <div className="w-11 h-11 bg-brand-light rounded-lg flex items-center justify-center mb-5">
                  <Mail className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-text-main mb-2">Email</h2>
                <p className="text-text-sub font-medium mb-4">Send your enquiry anytime.</p>
                <a href="mailto:info@awardmortgage.com.au" className="text-lg font-bold text-brand-dark hover:text-brand-hover rounded-md">info@awardmortgage.com.au</a>
              </div>

              <div className="bg-bg-light p-7 rounded-lg border border-border-light">
                <div className="w-11 h-11 bg-brand-light rounded-lg flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-text-main mb-2">Appointments</h2>
                <p className="text-text-body font-medium leading-relaxed">
                  Sydney head office and Australia-wide phone or video consultations by appointment.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-border-light">
                <h2 className="text-3xl font-extrabold text-text-main mb-3">Send an Enquiry</h2>
                <p className="text-text-sub font-medium mb-8">Your email app will open with the details you enter below so you can review the message before sending.</p>

                {submitted && (
                  <div className="mb-6 rounded-lg border border-success/30 bg-success/10 p-4 text-success font-semibold flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    Your enquiry draft is ready in your email app. Send it from there to complete the enquiry.
                  </div>
                )}

                <form className="space-y-6" onSubmit={submitForm} noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-text-main mb-2">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        className={inputClass}
                        placeholder="Alex"
                        value={form.firstName}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.firstName)}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {fieldError('firstName')}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-text-main mb-2">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        className={inputClass}
                        placeholder="Chen"
                        value={form.lastName}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.lastName)}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {fieldError('lastName')}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-text-main mb-2">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputClass}
                        placeholder="alex@example.com"
                        value={form.email}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {fieldError('email')}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-text-main mb-2">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                        placeholder="0400 000 000"
                        value={form.phone}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {fieldError('phone')}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-bold text-text-main mb-2">How can we help?</label>
                    <select id="topic" name="topic" className={inputClass} value={form.topic} onChange={updateField}>
                      {topicOptions.map((topic) => (
                        <option key={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-text-main mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`${inputClass} resize-y min-h-36`}
                      placeholder="Tell us what you are buying, refinancing or trying to understand."
                      value={form.message}
                      onChange={updateField}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {fieldError('message')}
                  </div>

                  <button type="submit" className="w-full bg-brand hover:bg-brand-hover text-text-main font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors text-lg">
                    Prepare Enquiry Email
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
