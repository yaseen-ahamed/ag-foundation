import React, { useState, useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  PhoneCall,
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
        description="Explore all 8 core programmes of Ayurgreen Foundation: Charity Care, Project Rehab Village, Social Rehabilitation, Community Outreach, Medical Camps, College of Life Sciences, Radiology, and Volunteer Activities."
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

  const programme = config.programmes.find((p) => p.slug === slug);

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
              <div className="flex items-center gap-3 mb-4">
                <ProgrammeIconBadge
                  iconName={programme.iconName}
                  accentColor={programme.accentColor}
                  size="sm"
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#087F83]">
                  {programme.category}
                </span>
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
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#DFE6EB] shadow-sm bg-white">
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

      {/* 2. Programme Introduction, 3. Purpose & Objectives, 4. Activities & Approach */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  Programme Overview
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
                  {programme.introduction.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Purpose & Objectives */}
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

              {/* Activities & Approach */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  Activities &amp; Implementation Approach
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-6" aria-hidden="true" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {programme.activities.map((act, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl border border-[#DFE6EB] bg-white flex flex-col"
                    >
                      <div className="text-xs font-bold text-[#087F83] tabular-nums mb-1.5">
                        0{index + 1}. Approach
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
            </div>

            {/* Sidebar: 5. Intended Beneficiaries, 6. Impact & Outcomes, 9/10. Get Involved & Contact CTA */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Intended Audience / Beneficiaries */}
              <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-white space-y-4">
                <div className="flex items-center gap-2.5 text-[#102C4B]">
                  <Users className="w-5 h-5 text-[#087F83]" />
                  <h3 className="text-base font-bold">Intended Beneficiaries</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#536477]">
                  {programme.intendedAudience.map((aud, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#087F83] font-bold">·</span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
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

              {/* Get Involved & Partnership Sidebar Box */}
              <div className="p-6 rounded-2xl bg-[#102C4B] text-white space-y-4">
                <HeartHandshake className="w-7 h-7 text-[#4DD0E1]" />
                <h3 className="text-lg font-editorial">
                  Collaborate on {programme.shortTitle}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Whether you are a donor, healthcare volunteer, or CSR partner, your support strengthens our capacity to reach more communities.
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
