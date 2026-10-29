import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  ArrowRight,
  AlertCircle,
  Settings,
  Home,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';
import { ParticipationBanner } from '../components/sections/SharedSections';

export const TransparencyPage: React.FC = () => {
  const { config, setIsCmsOpen } = useSite();

  return (
    <>
      <SeoHead
        title="Transparency & Governance | Ayurgreen Foundation"
        description="Review Ayurgreen Foundation's Section 8 non-profit registration details, governance structure, organisational policies, annual reports, and compliance records."
        canonicalPath="/transparency"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Transparency & Governance' }]} />
          <div className="max-w-3xl">
            <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
              Public Trust · Section 8 Non-Profit Compliance
            </p>
            <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-editorial font-light text-[#102C4B] leading-[1.08] mb-4">
              Transparency &amp; Governance.
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Ayurgreen Foundation is committed to institutional accountability, ethical governance, and transparent reporting across all healthcare, rehabilitation, and educational initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Registration & Governance Summary */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl border border-[#DFE6EB] bg-[#F7F9FA] space-y-4">
              <div className="flex items-center gap-2.5 text-[#087F83]">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Registration Details
                </span>
              </div>
              <h2 className="text-2xl font-editorial text-[#102C4B]">
                Official Legal Identity
              </h2>
              <dl className="divide-y divide-[#DFE6EB] text-xs sm:text-sm pt-2">
                <div className="py-3 flex justify-between gap-4">
                  <dt className="text-[#536477]">Registered Name</dt>
                  <dd className="font-semibold text-[#102C4B]">Ayurgreen Foundation</dd>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <dt className="text-[#536477]">Legal Category</dt>
                  <dd className="font-semibold text-[#102C4B]">Section 8 Non-Profit Company</dd>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <dt className="text-[#536477]">Date of Incorporation</dt>
                  <dd className="font-semibold text-[#102C4B] tabular-nums">24 May 2022</dd>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <dt className="text-[#536477]">Institutional Affiliation</dt>
                  <dd className="font-semibold text-[#102C4B]">
                    Social Impact Arm of Ayurgreen Group
                  </dd>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <dt className="text-[#536477]">Administrative Seat</dt>
                  <dd className="font-semibold text-[#102C4B] text-right">
                    Admin Office, Ayurgreen Campus, Edappal, Kavilpadi, Malappuram, Kerala
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#102C4B] text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4DD0E1]">
                  Governance Structure &amp; Ethics
                </p>
                <h2 className="text-2xl font-editorial">
                  How We Steward Community Resources
                </h2>
                <p className="text-sm text-white/85 leading-relaxed">
                  All programmes—including Charity Care, Project Rehab Village, Social Rehabilitation, and Stroke Force—operate under structured administrative oversight at the Ayurgreen Campus.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4DD0E1] shrink-0 mt-0.5" />
                    <span>
                      Strict prohibition on fabricating beneficiary numbers, clinical outcomes, or financial records.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4DD0E1] shrink-0 mt-0.5" />
                    <span>
                      Mandatory informed consent before publishing any patient recovery journey or photograph.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4DD0E1] shrink-0 mt-0.5" />
                    <span>
                      Dedicated document repository for annual activity reports, audited statements, and statutory filings.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/75">
                <span>Administrative Officer: Salmanul Faris</span>
                <Link to="/contact" className="text-[#4DD0E1] font-semibold hover:underline">
                  Request Governance Records →
                </Link>
              </div>
            </div>
          </div>

          {/* Official Documents, Reports & Policies Directory */}
          <div className="pt-6">
            <SectionHeading
              kicker="Official Publications & Filings"
              title="Reports, Policies &amp; Compliance Repository"
              subtitle="Only verified records are marked as active. Documents awaiting administrative upload are transparently labeled as pending rather than displaying placeholder download links."
              align="split"
              action={
                <button
                  type="button"
                  onClick={() => setIsCmsOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#DFE6EB] hover:border-[#087F83] text-xs font-semibold text-[#102C4B] cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5 text-[#087F83]" />
                  <span>Manage Repository in CMS</span>
                </button>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.governanceDocs.map((doc) => {
                const isVerified = doc.status === 'Verified Fact';
                return (
                  <div
                    key={doc.id}
                    className="p-6 rounded-2xl border border-[#DFE6EB] bg-white flex flex-col justify-between space-y-4 shadow-2xs"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-[#087F83]">{doc.category}</span>
                        <span
                          className={`inline-flex items-center gap-1 font-medium ${
                            isVerified ? 'text-[#07565B]' : 'text-[#536477]'
                          }`}
                        >
                          {isVerified ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#087F83]" />
                          ) : (
                            <Clock className="w-3.5 h-3.5 text-[#536477]" />
                          )}
                          <span>{doc.status}</span>
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#102C4B]">{doc.title}</h3>
                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                        {doc.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#DFE6EB] flex items-center justify-between text-xs text-[#536477]">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#087F83]" />
                        <span>{doc.fileType || 'Official Record'}</span>
                        {doc.publicationYear && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{doc.publicationYear}</span>
                          </>
                        )}
                      </div>

                      {doc.downloadUrl ? (
                        <a
                          href={doc.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#087F83] hover:underline"
                        >
                          Download PDF →
                        </a>
                      ) : (
                        <Link
                          to="/contact"
                          className="font-semibold text-[#102C4B] hover:text-[#087F83]"
                        >
                          Request Copy from Office →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ParticipationBanner />
    </>
  );
};

export const ContactPage: React.FC = () => {
  const { config, submitInquiry, setIsCmsOpen } = useSite();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Programme Enquiry');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please enter your Name, Email Address, and Message.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const record = submitInquiry({
      type: 'contact',
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      organizationOrLocation: 'Website Contact Form',
      interestOrCategory: subject,
      message: message.trim(),
    });

    setSubmittedId(record.id);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <SeoHead
        title="Contact Us — Edappal, Malappuram, Kerala | Ayurgreen Foundation"
        description="Get in touch with Ayurgreen Foundation at Admin Office, Ayurgreen Campus, Edappal, Kavilpadi, Malappuram, Kerala."
        canonicalPath="/contact"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
              Official Stakeholder Communication
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Reach out to the Ayurgreen Foundation administration for beneficiary guidance, Stroke Force sessions, volunteer coordination, or partnership enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Address, Contact Info & Form */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Verified Address & Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-7 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EFF7FA] text-[#087F83] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83]">
                      Verified Administrative Address
                    </div>
                    <h2 className="text-base font-bold text-[#102C4B] mt-0.5">
                      {config.contact.officeTitle}
                    </h2>
                    <p className="text-sm text-[#536477] mt-1 leading-relaxed">
                      {config.contact.addressLine1}
                      <br />
                      {config.contact.addressLine2}
                      <br />
                      {config.contact.stateCountry}
                    </p>
                    <a
                      href={config.contact.mapQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:underline mt-3"
                    >
                      <span>Open Ayurgreen Campus in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DFE6EB] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EFF7FA] text-[#087F83] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83]">
                      Official Email
                    </div>
                    <p className="text-sm font-semibold text-[#102C4B] mt-0.5">
                      {config.contact.email}
                    </p>
                    <p className="text-xs text-[#536477] mt-0.5">
                      For general enquiries, CSR proposals, and documentation requests
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DFE6EB] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EFF7FA] text-[#087F83] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83]">
                      Telephone Desk
                    </div>
                    <p className="text-sm font-semibold text-[#102C4B] mt-0.5">
                      {config.contact.phone}
                    </p>
                    {!config.contact.phoneVerified && (
                      <button
                        type="button"
                        onClick={() => setIsCmsOpen(true)}
                        className="text-xs text-[#087F83] hover:underline mt-1 cursor-pointer"
                      >
                        Configure verified phone number in CMS Studio →
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DFE6EB] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EFF7FA] text-[#087F83] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83]">
                      Official Domain
                    </div>
                    <p className="text-sm font-semibold text-[#102C4B] mt-0.5">
                      {config.organization.domain}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Maps Card & Campus Directions */}
              <div className="rounded-2xl border border-[#DFE6EB] bg-white overflow-hidden shadow-2xs">
                <div className="h-60 w-full bg-[#EFF7FA] relative">
                  <iframe
                    title="Ayurgreen Campus — Edappal, Kavilpadi, Malappuram, Kerala"
                    src="https://maps.google.com/maps?q=Ayurgreen+Hospitals,+Kavilpadi,+Edappal,+Malappuram,+Kerala+679582&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5 sm:p-6 bg-[#102C4B] text-white space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-editorial">
                      Visiting the Ayurgreen Campus
                    </h3>
                    <a
                      href={config.contact.mapQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors shrink-0"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    Our Administrative Office is located at Ayurgreen Campus in Edappal, Kavilpadi, Malappuram District, Kerala. Please schedule an appointment using the contact form prior to visiting for partnership or programme discussions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#DFE6EB] p-6 sm:p-8 lg:p-10 shadow-2xs">
                <h2 className="text-2xl font-editorial text-[#102C4B] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] mb-6">
                  Use this form to contact the Ayurgreen Foundation administration. Fields marked with * are required.
                </p>

                {submittedId && (
                  <div
                    role="status"
                    className="mb-6 p-5 rounded-2xl bg-[#EFF7FA] border border-[#087F83] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#07565B]">
                      <CheckCircle2 className="w-5 h-5 text-[#087F83]" />
                      <span>Message Recorded ({submittedId})</span>
                    </div>
                    <p className="text-xs text-[#102C4B] leading-relaxed">
                      Thank you for contacting Ayurgreen Foundation. Your message has been logged in the local Inquiry Dashboard for administrative review.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsCmsOpen(true)}
                      className="text-xs font-semibold text-[#087F83] hover:underline cursor-pointer"
                    >
                      Open Inquiry Studio →
                    </button>
                  </div>
                )}

                {errorMsg && (
                  <div
                    role="alert"
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-800 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 ..."
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Subject / Department
                      </label>
                      <select
                        id="contact-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl bg-white focus:outline-2 focus:outline-[#087F83]"
                      >
                        <option value="General Programme Enquiry">General Programme Enquiry</option>
                        <option value="Charity Care / Rehabilitation Support">
                          Charity Care / Rehabilitation Support
                        </option>
                        <option value="Stroke Force Awareness Session">
                          Stroke Force Awareness Session
                        </option>
                        <option value="Donation & CSR Remittance">Donation &amp; CSR Remittance</option>
                        <option value="Governance & Compliance Request">
                          Governance &amp; Compliance Request
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can Ayurgreen Foundation assist you?"
                      className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy | Ayurgreen Foundation"
        description="Privacy Policy and beneficiary data protection standards of Ayurgreen Foundation."
        canonicalPath="/privacy-policy"
      />
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl sm:text-4xl font-editorial text-[#102C4B]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#536477] mt-2">
            Effective for Ayurgreen Foundation digital platform · Section 8 Non-Profit Company
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-[#536477] leading-relaxed">
          <h2 className="text-xl font-bold text-[#102C4B]">
            1. Commitment to Dignity &amp; Confidentiality
          </h2>
          <p>
            Ayurgreen Foundation respects the privacy and dignity of all website visitors, volunteers, donors, institutional partners, and healthcare beneficiaries. We collect only the minimum personal information voluntarily submitted through our Volunteer, Partnership, and Contact forms.
          </p>

          <h2 className="text-xl font-bold text-[#102C4B]">
            2. Information Collected via Website Forms
          </h2>
          <p>
            When you submit an enquiry or registration on this website, we collect your name, email address, phone number, location/organisation, and message solely for responding to your request or coordinating volunteer and partnership activities. Do not submit confidential medical records through general website forms.
          </p>

          <h2 className="text-xl font-bold text-[#102C4B]">
            3. Beneficiary Stories &amp; Photographic Consent
          </h2>
          <p>
            In alignment with our healthcare ethics policy, Ayurgreen Foundation never publishes identifiable patient medical histories, photographs, or testimonials without explicit, documented informed consent.
          </p>

          <h2 className="text-xl font-bold text-[#102C4B]">
            4. Contact for Privacy Enquiries
          </h2>
          <p>
            To request correction or removal of your submitted contact information, please contact the Administrative Office at Ayurgreen Campus, Edappal, Kavilpadi, Malappuram, Kerala, or via our{' '}
            <Link to="/contact" className="text-[#087F83] underline">
              Contact Us
            </Link>{' '}
            page.
          </p>
        </div>
      </section>
    </>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Terms of Use | Ayurgreen Foundation"
        description="Terms of Use and educational medical disclaimer for the official Ayurgreen Foundation website."
        canonicalPath="/terms"
      />
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Use' }]} />
          <h1 className="text-3xl sm:text-4xl font-editorial text-[#102C4B]">
            Terms of Use
          </h1>
          <p className="text-sm text-[#536477] mt-2">
            Ayurgreen Foundation · Established 24 May 2022
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-[#536477] leading-relaxed">
          <h2 className="text-xl font-bold text-[#102C4B]">
            1. Informational &amp; Educational Purpose
          </h2>
          <p>
            This website serves as the official public information and stakeholder communication platform of Ayurgreen Foundation, a Section 8 non-profit company and the social impact arm of Ayurgreen Group.
          </p>

          <h2 className="text-xl font-bold text-[#102C4B]">
            2. Medical &amp; Stroke Awareness Disclaimer
          </h2>
          <p>
            Content presented under the <strong>Stroke Force</strong> initiative (including the BE FAST stroke warning sign recognition method) and other healthcare programmes is provided strictly for community health awareness and public education. It is not a substitute for professional medical diagnosis, advice, or emergency medical services. If you or someone around you experiences sudden stroke warning signs, seek emergency hospital care immediately.
          </p>

          <h2 className="text-xl font-bold text-[#102C4B]">
            3. Official Brand Assets &amp; Copyright
          </h2>
          <p>
            The Ayurgreen Foundation name, official logo, Stroke Force emblem, and programme documentation are the property of Ayurgreen Foundation and may not be misrepresented or altered without written permission.
          </p>

          <h2 className="text-xl font-bold text-[#102C4B]">
            4. Verification of Donations
          </h2>
          <p>
            Donors are advised to verify official bank or payment details directly with the Ayurgreen Foundation Administrative Office prior to making financial transfers.
          </p>
        </div>
      </section>
    </>
  );
};

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Page Not Found | Ayurgreen Foundation"
        description="The requested page could not be found on the Ayurgreen Foundation website."
      />
      <section className="py-20 sm:py-28 bg-[#F7F9FA] text-center px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl border border-[#DFE6EB] p-8 sm:p-10 space-y-5 shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-widest text-[#087F83]">
            404 · Page Not Found
          </div>
          <h1 className="text-3xl font-editorial text-[#102C4B]">
            We Couldn&rsquo;t Find That Page
          </h1>
          <p className="text-sm text-[#536477] leading-relaxed">
            The link you followed may have moved or does not exist. Explore our core pages below to continue.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#087F83] text-[#102C4B] hover:bg-[#EFF7FA] text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Our Programmes</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
