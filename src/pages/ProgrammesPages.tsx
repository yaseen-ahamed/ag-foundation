import React, { useState, useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  PhoneCall,
  Mail,
  HeartHandshake,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';
import {
  ProgrammeCard,
  AssociatedInstitutionsSection,
  ParticipationBanner,
} from '../components/sections/SharedSections';
import {
  ReferencePhotoCrop,
  ProgrammeIconBadge,
  BespokeInstitutionalArt,
} from '../components/visuals/FoundationVisual';

export const ProgrammesOverviewPage: React.FC = () => {
  const { config } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(config.programmes.map((p) => p.category)));
    return ['All', ...unique];
  }, [config.programmes]);

  const filteredProgrammes = useMemo(() => {
    if (selectedCategory === 'All') return config.programmes;
    return config.programmes.filter((p) => p.category === selectedCategory);
  }, [config.programmes, selectedCategory]);

  return (
    <>
      <SeoHead
        title="Our Programmes — Healthcare, Rehabilitation & Education | Ayurgreen Foundation"
        description="Explore all 8 core programmes of Ayurgreen Foundation: Charity Care, Ayurgreen Rehab Village, Social Rehabilitation, Community Outreach, Medical Camps, College of Life Sciences, Radiology, and Volunteer Activities."
        canonicalPath="/programmes"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Programmes' }]} />
          <div className="max-w-3xl">
            <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
              8 Core Initiatives · Healthcare, Rehabilitation &amp; Education
            </p>
            <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-editorial font-light text-[#102C4B] leading-[1.08] mb-4">
              Our Programmes.
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              We work across healthcare assistance, physical and social rehabilitation, paramedical education, diagnostic access, and grassroots outreach to create healthier communities and dignified futures.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Programme Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#DFE6EB]">
            <div
              role="group"
              aria-label="Filter programmes by category"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F7F9FA] border border-[#DFE6EB] rounded-xl"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#087F83] text-white shadow-2xs'
                      : 'text-[#536477] hover:text-[#102C4B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <Link
              to="/stroke-force"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F83] hover:underline"
            >
              <span>Featured Campaign: Stroke Force Community Awareness</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgrammes.map((prog) => (
              <ProgrammeCard key={prog.slug} programme={prog} />
            ))}
          </div>
        </div>
      </section>

      <AssociatedInstitutionsSection />
      <ParticipationBanner />
    </>
  );
};

export const ProgrammeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { config } = useSite();

  const normalizedSlug = slug === 'project-rehab-village' ? 'rehab-village' : slug;
  const programme = config.programmes.find((p) => p.slug === normalizedSlug);

  if (!programme) {
    return <Navigate to="/programmes" replace />;
  }

  const relatedProgrammes = config.programmes.filter((p) =>
    programme.relatedSlugs.includes(p.slug)
  );

  return (
    <>
      <SeoHead
        title={`${programme.title} — Our Programmes | Ayurgreen Foundation`}
        description={programme.summary}
        canonicalPath={`/programmes/${programme.slug}`}
      />

      {/* 1. Programme-Specific Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Our Programmes', to: '/programmes' },
              { label: programme.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3.5 mb-4">
                {programme.logoUrl ? (
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#DFE6EB] p-1.5 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src={programme.logoUrl}
                      alt={programme.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <ProgrammeIconBadge
                    iconName={programme.iconName}
                    accentColor={programme.accentColor}
                    size="sm"
                  />
                )}
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#087F83]">
                    {programme.welcomeHeading || programme.category}
                  </span>
                  {programme.welcomeHeading && (
                    <span className="text-[11px] font-medium text-[#536477]">
                      {programme.category} · Ayurgreen Hospitals Initiative
                    </span>
                  )}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
                {programme.title}
              </h1>

              <p className="text-base sm:text-lg text-[#536477] leading-relaxed mb-6">
                {programme.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Support This Programme</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#DFE6EB] hover:border-[#087F83] text-[#102C4B] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Enquire / Refer a Beneficiary</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#DFE6EB] shadow-sm bg-white">
                {programme.cropRegion ? (
                  <ReferencePhotoCrop
                    crop={programme.cropRegion}
                    alt={programme.title}
                    className="w-full h-full"
                  />
                ) : (
                  <BespokeInstitutionalArt
                    type={programme.illustrationType}
                    alt={programme.title}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative & Structured Sections */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* About / Programme Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  {programme.aboutHeading || 'Programme Overview'}
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
                  {programme.introduction.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Vision & Mission (when provided, e.g. Rehab Village) OR Purpose & Objectives */}
              {programme.vision && programme.mission ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F9FA] border border-[#DFE6EB] space-y-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
                      Vision
                    </div>
                    <p className="text-sm sm:text-base text-[#102C4B] leading-relaxed">
                      {programme.vision}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#DFE6EB]">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
                      Mission
                    </div>
                    <p className="text-sm sm:text-base text-[#102C4B] leading-relaxed">
                      {programme.mission}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F9FA] border border-[#DFE6EB] space-y-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-1">
                      Core Purpose
                    </div>
                    <p className="text-base sm:text-lg font-editorial text-[#102C4B] leading-snug">
                      {programme.purpose}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFE6EB]">
                    <h3 className="text-base font-bold text-[#102C4B] mb-4">
                      Key Programme Objectives
                    </h3>
                    <ul className="space-y-3">
                      {programme.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#536477]">
                          <CheckCircle2 className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Activities & Approach */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  {programme.activitiesHeading || 'Activities & Implementation Approach'}
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                {programme.activitiesIntro && programme.activitiesIntro.length > 0 && (
                  <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed mb-6">
                    {programme.activitiesIntro.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {programme.activities.map((act, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl border border-[#DFE6EB] bg-white flex flex-col"
                    >
                      <div className="text-xs font-bold text-[#087F83] tabular-nums mb-1.5">
                        0{index + 1}. Key Pillar
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#102C4B] mb-2">
                        {act.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Rehab Village (when provided) */}
              {programme.whyItems && programme.whyItems.length > 0 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                    {programme.whyHeading || 'Why Choose This Programme'}
                  </h2>
                  <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                  {programme.whyIntro && (
                    <p className="text-sm sm:text-base text-[#536477] leading-relaxed mb-6">
                      {programme.whyIntro}
                    </p>
                  )}
                  <div className="space-y-3.5">
                    {programme.whyItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]/70 flex items-start gap-3.5"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                        <div className="text-sm sm:text-base text-[#536477] leading-relaxed">
                          <strong className="text-[#102C4B] font-semibold">
                            {item.label}:
                          </strong>{' '}
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How to Collaborate (when provided) */}
              {programme.collaboratePartners && programme.collaboratePartners.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                      {programme.collaborateHeading || 'How to Collaborate'}
                    </h2>
                    <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                    {programme.collaborateIntro && (
                      <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
                        {programme.collaborateIntro}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {programme.collaboratePartners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl border border-[#DFE6EB] bg-white space-y-2"
                      >
                        <h3 className="text-base font-bold text-[#102C4B]">
                          {partner.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {programme.volunteerOpportunities && (
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#EFF7FA] border border-[#DFE6EB] space-y-4">
                      <h3 className="text-lg font-bold text-[#102C4B]">
                        Volunteer Opportunities
                      </h3>
                      <p className="text-sm sm:text-base text-[#102C4B] leading-relaxed">
                        {programme.volunteerOpportunities.intro}
                      </p>
                      <ul className="space-y-2.5">
                        {programme.volunteerOpportunities.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-[#102C4B]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs sm:text-sm text-[#536477] leading-relaxed pt-2 border-t border-[#DFE6EB]">
                        {programme.volunteerOpportunities.closing}
                      </p>
                    </div>
                  )}

                  {programme.patientsConsultationNote && (
                    <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#DFE6EB]">
                      <h3 className="text-base font-bold text-[#102C4B] mb-1.5">
                        Patients
                      </h3>
                      <p className="text-sm text-[#536477] leading-relaxed">
                        {programme.patientsConsultationNote}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar: Stakeholders / Beneficiaries, Impact Status, & Direct Contact CTA */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Stakeholders / Intended Audience */}
              <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-white space-y-4">
                <div className="flex items-center gap-2.5 text-[#102C4B]">
                  <Users className="w-5 h-5 text-[#087F83] shrink-0" />
                  <h3 className="text-base font-bold">
                    {programme.stakeholdersHeading || 'Intended Beneficiaries'}
                  </h3>
                </div>
                {programme.stakeholdersIntro && (
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {programme.stakeholdersIntro}
                  </p>
                )}
                {programme.stakeholders && programme.stakeholders.length > 0 ? (
                  <ul className="space-y-3 text-xs sm:text-sm text-[#536477]">
                    {programme.stakeholders.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#087F83] font-bold mt-0.5">·</span>
                        <span>
                          <strong className="text-[#102C4B] font-semibold">
                            {item.role}:
                          </strong>{' '}
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#536477]">
                    {programme.intendedAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#087F83] font-bold">·</span>
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Impact & Outcomes Status */}
              <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-[#EFF7FA] space-y-3">
                <div className="flex items-center gap-2 text-[#102C4B]">
                  <Sparkles className="w-4 h-4 text-[#087F83]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Impact &amp; Outcomes
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#102C4B] leading-relaxed">
                  {programme.impactStatus.qualitativeSummary}
                </p>
                {programme.impactStatus.isPlaceholder && (
                  <p className="text-[11px] text-[#536477] pt-2 border-t border-[#DFE6EB]">
                    Audited beneficiary statistics for {programme.shortTitle} can be updated by administrators in the Content Studio.
                  </p>
                )}
              </div>

              {/* Direct Contact Card (when provided, e.g. Ayurgreen Rehab Village) */}
              {programme.directContact && (
                <div className="p-6 rounded-2xl border border-[#087F83]/30 bg-[#F7F9FA] space-y-4">
                  <h3 className="text-base font-bold text-[#102C4B]">
                    Contact Us
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {programme.directContact.prompt}
                  </p>
                  <div className="pt-2 border-t border-[#DFE6EB] space-y-2.5">
                    <div className="text-sm font-bold text-[#102C4B]">
                      {programme.directContact.name}
                    </div>
                    <a
                      href={`tel:${programme.directContact.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#087F83] hover:underline font-medium tabular-nums"
                    >
                      <PhoneCall className="w-4 h-4 shrink-0" />
                      <span>Phone: {programme.directContact.phone}</span>
                    </a>
                    <a
                      href={`mailto:${programme.directContact.email}`}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#087F83] hover:underline font-medium break-all"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>Email: {programme.directContact.email}</span>
                    </a>
                    <a
                      href={config.contact.mapQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102C4B] hover:text-[#087F83] pt-1 transition-colors"
                    >
                      <span>View Location on Google Maps →</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Get Involved & Partnership Sidebar Box */}
              <div className="p-6 rounded-2xl bg-[#102C4B] text-white space-y-4">
                <HeartHandshake className="w-7 h-7 text-[#4DD0E1]" />
                <h3 className="text-lg font-editorial">
                  Collaborate on {programme.shortTitle}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Whether you are a donor, healthcare volunteer, accommodation or transport partner, your support strengthens our capacity to reach more patients and communities.
                </p>
                <div className="space-y-2.5 pt-2">
                  <Link
                    to="/volunteer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
                  >
                    <span>Volunteer With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/partner-with-us"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-white/30 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Partner With Us</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 pt-1 text-xs text-white/80 hover:text-white"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Contact Programme Coordinator</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 8. Related Programmes */}
      {relatedProgrammes.length > 0 && (
        <section className="py-14 bg-[#F7F9FA] border-t border-[#DFE6EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Related Programmes"
              subtitle="Explore interconnected initiatives working alongside this programme."
              align="split"
              action={
                <Link
                  to="/programmes"
                  className="text-xs font-semibold text-[#087F83] hover:underline"
                >
                  All Programmes →
                </Link>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProgrammes.map((rel) => (
                <ProgrammeCard key={rel.slug} programme={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ParticipationBanner />
    </>
  );
};
