import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  Users,
  Handshake,
  HeartPulse,
  ArrowRight,
  Landmark,
  QrCode,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Settings,
  Stethoscope,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';

export const GetInvolvedPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Get Involved — Donate, Volunteer & Partner | Ayurgreen Foundation"
        description="Support Ayurgreen Foundation through donations, volunteering, corporate CSR partnerships, community outreach participation, and Stroke Force awareness."
        canonicalPath="/get-involved"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Get Involved' }]} />
          <div className="max-w-3xl">
            <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
              Community Participation &amp; Stewardship
            </p>
            <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-editorial font-light text-[#102C4B] leading-[1.08] mb-4">
              Be Part of the Change.
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Every meaningful healthcare and educational initiative thrives on collective care. Discover how you, your college, or your organisation can contribute to Ayurgreen Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Core Participation Pathways */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Ways to Contribute"
            title="Choose How You Would Like to Participate"
            subtitle="Whether through financial support, field volunteering, institutional partnerships, or stroke awareness advocacy, your participation directly strengthens community wellbeing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Donate */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-white hover:border-[#087F83] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFF7FA] text-[#087F83] flex items-center justify-center mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-editorial text-[#102C4B] mb-2">
                  Donate &amp; Support Care
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Contribute towards Charity Care treatment assistance, Project Rehab Village recovery pathways, medical camps, and student healthcare education.
                </p>
              </div>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Proceed to Donate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2. Volunteer */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-white hover:border-[#087F83] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFF7FA] text-[#087F83] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-editorial text-[#102C4B] mb-2">
                  Volunteer With Us
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Join our network of students, healthcare professionals, and citizens assisting at medical camps, rehabilitation events, and outreach drives.
                </p>
              </div>
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#102C4B] hover:bg-[#087F83] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Register as a Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3. Partner With Us */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-white hover:border-[#087F83] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFF7FA] text-[#087F83] flex items-center justify-center mb-5">
                  <Handshake className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-editorial text-[#102C4B] mb-2">
                  Partner With Us
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Collaborate through corporate CSR programmes, hospital and academic alliances, or programme sponsorships for sustainable social impact.
                </p>
              </div>
              <Link
                to="/partner-with-us"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-[#087F83] text-[#102C4B] hover:bg-[#EFF7FA] text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-4 h-4 text-[#087F83]" />
              </Link>
            </div>

            {/* 4. Support Stroke Force */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-[#EFF7FA]/70 hover:border-[#087F83] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#087F83] flex items-center justify-center mb-5">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-editorial text-[#102C4B] mb-2">
                  Support Stroke Force
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Become a certified community stroke educator through our Training of Trainers (ToT) initiative or host a BE FAST awareness session at your campus.
                </p>
              </div>
              <Link
                to="/stroke-force"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087F83] hover:underline"
              >
                <span>Visit Stroke Force Initiative</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 5. Participate in Community Initiatives */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] hover:border-[#087F83] transition-all flex flex-col justify-between md:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#087F83] flex items-center justify-center mb-5">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-editorial text-[#102C4B] mb-2">
                  Participate in Community Health &amp; Rehabilitation Initiatives
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed max-w-2xl mb-6">
                  Resident associations, youth clubs, panchayats, and educational institutions can collaborate with Ayurgreen Foundation to organise local medical screening camps, rehabilitation awareness dialogues, and social support drives.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/programmes/community-outreach"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087F83] hover:underline"
                >
                  <span>Explore Community Outreach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span aria-hidden="true" className="text-[#536477]">·</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#102C4B] hover:text-[#087F83]"
                >
                  <span>Request a Local Medical Camp</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const DonatePage: React.FC = () => {
  const { config, setIsCmsOpen } = useSite();
  const [selectedMethod, setSelectedMethod] = useState<'bank' | 'upi' | 'online'>('bank');

  const supportAreas = [
    {
      title: 'Charity Care Treatment Assistance',
      description:
        'Helps economically vulnerable patients access essential medical evaluations, diagnostics, and ongoing care.',
    },
    {
      title: 'Project Rehab Village & Social Rehabilitation',
      description:
        'Supports physical rehabilitation, mobility training, counselling, and long-term reintegration for recovering patients.',
    },
    {
      title: 'Stroke Force & Community Medical Camps',
      description:
        'Enables preventive health screening camps and BE FAST stroke awareness sessions across colleges and neighbourhoods.',
    },
    {
      title: 'Healthcare Education & Student Empowerment',
      description:
        'Supports paramedical training and community health education initiatives.',
    },
  ];

  return (
    <>
      <SeoHead
        title="Donate — Support Healthcare & Rehabilitation | Ayurgreen Foundation"
        description="Support Ayurgreen Foundation's healthcare assistance, Project Rehab Village, Stroke Force awareness, and community outreach initiatives."
        canonicalPath="/donate"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Get Involved', to: '/get-involved' },
              { label: 'Donate' },
            ]}
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
              Section 8 Non-Profit Stewardship
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
              Your Support Can Help Change Lives
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Your contribution helps support healthcare access, rehabilitation, education, and community initiatives through Ayurgreen Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Content */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Why Donations Matter & Areas of Support */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  Where Your Contribution Goes
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                <p className="text-sm sm:text-base text-[#536477] leading-relaxed mb-6">
                  Every contribution entrusted to Ayurgreen Foundation strengthens our capacity to serve vulnerable patients, sustain community rehabilitation pathways, and expand public health education.
                </p>

                <div className="space-y-4">
                  {supportAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]"
                    >
                      <h3 className="text-base font-bold text-[#102C4B] mb-1">
                        {area.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donation Transparency Statement */}
              <div className="p-6 rounded-2xl bg-[#EFF7FA] border border-[#DFE6EB] space-y-3">
                <div className="flex items-center gap-2.5 text-[#102C4B]">
                  <ShieldCheck className="w-5 h-5 text-[#087F83]" />
                  <h3 className="text-base font-bold">
                    Donation Transparency Statement
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                  {config.donation.transparencyStatement}
                </p>
                <p className="text-xs text-[#536477] pt-2 border-t border-[#DFE6EB]">
                  {config.donation.taxExemptionNote}
                </p>
              </div>
            </div>

            {/* Right Column: Available Donation Methods */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-[#DFE6EB] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-editorial text-[#102C4B]">
                      Available Donation Methods
                    </h2>
                    <p className="text-xs text-[#536477] mt-0.5">
                      Select a contribution method below
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCmsOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DFE6EB] text-xs font-semibold text-[#102C4B] hover:bg-[#F7F9FA] cursor-pointer"
                  >
                    <Settings className="w-3.5 h-3.5 text-[#087F83]" />
                    <span>Configure</span>
                  </button>
                </div>

                {/* Method Selector Tabs */}
                <div
                  role="tablist"
                  aria-label="Donation payment methods"
                  className="grid grid-cols-3 gap-2 p-1.5 bg-[#F7F9FA] rounded-xl border border-[#DFE6EB]"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selectedMethod === 'bank'}
                    onClick={() => setSelectedMethod('bank')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedMethod === 'bank'
                        ? 'bg-[#087F83] text-white'
                        : 'text-[#102C4B] hover:bg-white'
                    }`}
                  >
                    <Landmark className="w-4 h-4" />
                    <span>Bank Transfer</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selectedMethod === 'upi'}
                    onClick={() => setSelectedMethod('upi')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedMethod === 'upi'
                        ? 'bg-[#087F83] text-white'
                        : 'text-[#102C4B] hover:bg-white'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>UPI Payment</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selectedMethod === 'online'}
                    onClick={() => setSelectedMethod('online')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedMethod === 'online'
                        ? 'bg-[#087F83] text-white'
                        : 'text-[#102C4B] hover:bg-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Online Gateway</span>
                  </button>
                </div>

                {/* Verification Status Banner */}
                {!config.donation.isConfigured && (
                  <div className="p-4 rounded-xl bg-[#EFF7FA] border border-[#087F83]/30 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#102C4B] leading-relaxed">
                      <strong>Administrator Setup Placeholder:</strong> To prevent unverified payment instructions from appearing publicly, official bank account numbers, UPI QR codes, and payment gateway credentials remain in setup mode until verified by the Foundation administration via the Content Studio or direct enquiry.
                    </div>
                  </div>
                )}

                {selectedMethod === 'bank' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#102C4B]">
                      Direct Bank Transfer (NEFT / RTGS / IMPS)
                    </h3>
                    <dl className="divide-y divide-[#DFE6EB] border border-[#DFE6EB] rounded-2xl bg-[#F7F9FA] px-5 py-2 text-xs sm:text-sm">
                      <div className="py-3 flex justify-between gap-4">
                        <dt className="text-[#536477]">Account Name</dt>
                        <dd className="font-semibold text-[#102C4B]">
                          {config.donation.accountName}
                        </dd>
                      </div>
                      <div className="py-3 flex justify-between gap-4">
                        <dt className="text-[#536477]">Bank Name</dt>
                        <dd className="font-semibold text-[#102C4B]">
                          {config.donation.bankName}
                        </dd>
                      </div>
                      <div className="py-3 flex justify-between gap-4">
                        <dt className="text-[#536477]">Account Number</dt>
                        <dd className="font-semibold text-[#102C4B] tabular-nums">
                          {config.donation.accountNumber}
                        </dd>
                      </div>
                      <div className="py-3 flex justify-between gap-4">
                        <dt className="text-[#536477]">IFSC Code</dt>
                        <dd className="font-semibold text-[#102C4B] tabular-nums">
                          {config.donation.ifscCode}
                        </dd>
                      </div>
                      <div className="py-3 flex justify-between gap-4">
                        <dt className="text-[#536477]">Branch</dt>
                        <dd className="font-semibold text-[#102C4B]">
                          {config.donation.branchName}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                {selectedMethod === 'upi' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#102C4B]">
                      Unified Payments Interface (UPI)
                    </h3>
                    <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] text-center space-y-3">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-[#DFE6EB] mx-auto flex items-center justify-center text-[#087F83]">
                        <QrCode className="w-8 h-8" />
                      </div>
                      <div className="text-xs text-[#536477]">Official Merchant UPI ID</div>
                      <div className="text-base font-bold text-[#102C4B]">
                        {config.donation.upiId}
                      </div>
                      <p className="text-xs text-[#536477] max-w-sm mx-auto">
                        {config.donation.isConfigured
                          ? 'Verify the account holder name "Ayurgreen Foundation" in your UPI app before authorising the transfer.'
                          : 'Official UPI QR code and verified handle will be enabled once configured by the Foundation administration.'}
                      </p>
                    </div>
                  </div>
                )}

                {selectedMethod === 'online' && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#102C4B]">
                      Online Payment Gateway Integration
                    </h3>
                    <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] space-y-3">
                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                        This section is architected for server-validated payment gateway integration (such as Razorpay or PayU for Indian Section 8 non-profits) where payment status is verified on the backend before issuing an official donation receipt.
                      </p>
                      <p className="text-xs text-[#102C4B] font-medium">
                        Status: Backend payment gateway credentials are not currently active in this environment. Please contact the Foundation office below for verified donation instructions.
                      </p>
                    </div>
                  </div>
                )}

                {/* Donation Enquiries Contact Box */}
                <div className="pt-4 border-t border-[#DFE6EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#536477]">
                    Need official bank remittance instructions or receipt assistance?
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#102C4B] hover:bg-[#087F83] text-white text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <span>Contact Donation Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const VolunteerPage: React.FC = () => {
  const { submitInquiry, setIsCmsOpen } = useSite();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Stroke Force Educator (Training of Trainers)',
  ]);
  const [skills, setSkills] = useState('');
  const [availability, setAvailability] = useState('Weekends / Flexible');
  const [message, setMessage] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRecordId, setSubmittedRecordId] = useState<string | null>(null);

  const interestOptions = [
    'Stroke Force Educator (Training of Trainers)',
    'Community Medical Camps',
    'Rehabilitation & Patient Support',
    'Community Outreach & Health Literacy',
    'Student / Paramedical Volunteering',
    'Documentation, Media & Event Coordination',
  ];

  const toggleInterest = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim() || !phone.trim() || !location.trim()) {
      setErrorMsg('Please complete all required fields (Full Name, Email, Phone Number, and Location).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (selectedInterests.length === 0) {
      setErrorMsg('Please select at least one area of volunteer interest.');
      return;
    }
    if (!consentChecked) {
      setErrorMsg('Please confirm the privacy notice to register.');
      return;
    }

    const record = submitInquiry({
      type: 'volunteer',
      name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      organizationOrLocation: location.trim(),
      interestOrCategory: selectedInterests.join(', '),
      skillsOrAvailability: `${availability}${skills.trim() ? ` · Skills: ${skills.trim()}` : ''}`,
      message: message.trim() || 'Volunteer registration submitted via /volunteer form.',
    });

    setSubmittedRecordId(record.id);
    setFullName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setSkills('');
    setMessage('');
    setConsentChecked(false);
  };

  return (
    <>
      <SeoHead
        title="Volunteer With Us | Ayurgreen Foundation"
        description="Register as a volunteer with Ayurgreen Foundation to support medical camps, rehabilitation activities, community outreach, and Stroke Force awareness."
        canonicalPath="/volunteer"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Get Involved', to: '/get-involved' },
              { label: 'Volunteer With Us' },
            ]}
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
              Community Service &amp; Health Leadership
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
              Volunteer With Us
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Join students, healthcare professionals, educators, and compassionate citizens working together to build healthier, more inclusive communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Registration Form */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Volunteer Opportunities */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  Volunteer Opportunities
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
                  Ayurgreen Foundation welcomes volunteers across clinical, educational, and community coordination roles.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    Stroke Force Community Educators (ToT)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Participate in our Training of Trainers programme to lead BE FAST stroke recognition sessions in colleges and local organisations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    Medical Camp &amp; Outreach Support
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Assist healthcare teams with participant registration, elderly guidance, and preventive health awareness distribution.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    Social Rehabilitation &amp; Companionship
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Support inclusive community gatherings, skill workshops, and encouraging peer environments for recovering beneficiaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#DFE6EB] p-6 sm:p-8 lg:p-10 shadow-2xs">
                <h2 className="text-2xl font-editorial text-[#102C4B] mb-2">
                  Volunteer Registration Form
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] mb-6">
                  Complete the form below to register your interest. Fields marked with * are required.
                </p>

                {submittedRecordId && (
                  <div
                    role="status"
                    className="mb-6 p-5 rounded-2xl bg-[#EFF7FA] border border-[#087F83] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#07565B]">
                      <CheckCircle2 className="w-5 h-5 text-[#087F83]" />
                      <span>Volunteer Registration Recorded ({submittedRecordId})</span>
                    </div>
                    <p className="text-xs text-[#102C4B] leading-relaxed">
                      Thank you for registering your interest with Ayurgreen Foundation. Your application has been saved to the local Inquiry Dashboard in this environment and is ready for administrative review or JSON export.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsCmsOpen(true)}
                      className="text-xs font-semibold text-[#087F83] hover:underline cursor-pointer"
                    >
                      View in Content &amp; Inquiry Studio →
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
                        htmlFor="vol-name"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="vol-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-email"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="vol-email"
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
                        htmlFor="vol-phone"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="vol-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 ..."
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-location"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Location (Town / District) *
                      </label>
                      <input
                        id="vol-location"
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., Edappal, Malappuram"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="block text-xs font-semibold text-[#102C4B] mb-2">
                      Areas of Interest *
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {interestOptions.map((opt) => {
                        const checked = selectedInterests.includes(opt);
                        return (
                          <label
                            key={opt}
                            className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                              checked
                                ? 'bg-[#EFF7FA] border-[#087F83] text-[#102C4B] font-semibold'
                                : 'bg-white border-[#DFE6EB] text-[#536477]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleInterest(opt)}
                              className="rounded border-[#DFE6EB] text-[#087F83]"
                            />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vol-skills"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Relevant Skills or Experience
                      </label>
                      <input
                        id="vol-skills"
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="e.g., Nursing, Public Speaking, Logistics"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-availability"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Preferred Availability
                      </label>
                      <select
                        id="vol-availability"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl bg-white focus:outline-2 focus:outline-[#087F83]"
                      >
                        <option value="Weekends / Flexible">Weekends / Flexible</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Event / Camp Based">Event / Camp Based</option>
                        <option value="Student Internship / Campus Chapter">
                          Student Internship / Campus Chapter
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-message"
                      className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                    >
                      Additional Message or Motivation
                    </label>
                    <textarea
                      id="vol-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us briefly how you would like to contribute..."
                      className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-xs text-[#536477] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-0.5 rounded border-[#DFE6EB] text-[#087F83]"
                    />
                    <span>
                      I consent to Ayurgreen Foundation storing my contact details solely for coordinating volunteer opportunities in accordance with the{' '}
                      <Link to="/privacy-policy" className="text-[#087F83] underline">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Submit Volunteer Registration</span>
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

export const PartnerWithUsPage: React.FC = () => {
  const { submitInquiry, setIsCmsOpen } = useSite();

  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [partnershipType, setPartnershipType] = useState('Corporate CSR Collaboration');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!orgName.trim() || !contactPerson.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg('Please complete all required partnership enquiry fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid official email address.');
      return;
    }

    const record = submitInquiry({
      type: 'partnership',
      name: contactPerson.trim(),
      email: email.trim(),
      phone: phone.trim(),
      organizationOrLocation: orgName.trim(),
      interestOrCategory: partnershipType,
      message: message.trim(),
    });

    setSubmittedId(record.id);
    setOrgName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <SeoHead
        title="Partner With Us — CSR & Institutional Collaboration | Ayurgreen Foundation"
        description="Collaborate with Ayurgreen Foundation through Corporate CSR initiatives, institutional healthcare and educational partnerships, and community programme sponsorships."
        canonicalPath="/partner-with-us"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Get Involved', to: '/get-involved' },
              { label: 'Partner With Us' },
            ]}
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
              CSR · Healthcare &amp; Academic Alliances
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
              Partner With Us
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Working alongside corporate CSR teams, healthcare institutions, colleges, and community organisations to create sustainable social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Pillars & Enquiry Form */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: 4 Partnership Models */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  Collaboration Opportunities
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
                  As a Section 8 non-profit company established on 24 May 2022, Ayurgreen Foundation structures institutional partnerships around accountability, clear reporting, and measurable community outcomes.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    01. Corporate CSR Collaborations
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Co-create healthcare access, post-stroke rehabilitation, and preventive awareness programmes aligned with Schedule VII CSR priorities.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    02. Institutional &amp; Academic Partnerships
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Partner with our clinical and educational ecosystem for student training, Stroke Force campus sessions, and joint health research.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    03. Programme &amp; Camp Sponsorships
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Sponsor community medical camps, assistive mobility equipment in Project Rehab Village, or Charity Care patient support.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]">
                  <h3 className="text-base font-bold text-[#102C4B] mb-1">
                    04. Community Programme Collaboration
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    Local bodies, NGOs, and civic clubs can partner with us to bring medical screening camps and Stroke Force educators to their neighbourhoods.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Partnership Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#DFE6EB] p-6 sm:p-8 lg:p-10 shadow-2xs">
                <h2 className="text-2xl font-editorial text-[#102C4B] mb-2">
                  Partnership &amp; CSR Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-[#536477] mb-6">
                  Share your organisation’s focus areas and our administrative team will respond to discuss a structured proposal.
                </p>

                {submittedId && (
                  <div
                    role="status"
                    className="mb-6 p-5 rounded-2xl bg-[#EFF7FA] border border-[#087F83] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#07565B]">
                      <CheckCircle2 className="w-5 h-5 text-[#087F83]" />
                      <span>Partnership Enquiry Logged ({submittedId})</span>
                    </div>
                    <p className="text-xs text-[#102C4B] leading-relaxed">
                      Your partnership proposal enquiry has been saved to the Foundation’s local Inquiry Dashboard for administrative follow-up.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsCmsOpen(true)}
                      className="text-xs font-semibold text-[#087F83] hover:underline cursor-pointer"
                    >
                      View in Content &amp; Inquiry Studio →
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
                        htmlFor="part-org"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Organisation / Institution Name *
                      </label>
                      <input
                        id="part-org"
                        type="text"
                        required
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="Company, College, or NGO name"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="part-person"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Contact Person &amp; Designation *
                      </label>
                      <input
                        id="part-person"
                        type="text"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="Full Name & Role"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="part-email"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Official Email Address *
                      </label>
                      <input
                        id="part-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organisation.org"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="part-phone"
                        className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="part-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 ..."
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="part-type"
                      className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                    >
                      Partnership Category *
                    </label>
                    <select
                      id="part-type"
                      value={partnershipType}
                      onChange={(e) => setPartnershipType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl bg-white focus:outline-2 focus:outline-[#087F83]"
                    >
                      <option value="Corporate CSR Collaboration">Corporate CSR Collaboration</option>
                      <option value="Host Stroke Force Awareness Session">
                        Host Stroke Force Awareness Session
                      </option>
                      <option value="Healthcare / Hospital Partnership">
                        Healthcare / Hospital Partnership
                      </option>
                      <option value="Educational / College Collaboration">
                        Educational / College Collaboration
                      </option>
                      <option value="Medical Camp / Programme Sponsorship">
                        Medical Camp / Programme Sponsorship
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="part-message"
                      className="block text-xs font-semibold text-[#102C4B] mb-1.5"
                    >
                      Proposed Collaboration Details *
                    </label>
                    <textarea
                      id="part-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe the programme, community, or initiative you wish to collaborate on..."
                      className="w-full px-3.5 py-2.5 text-sm border border-[#DFE6EB] rounded-xl focus:outline-2 focus:outline-[#087F83]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Submit Partnership Enquiry</span>
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
