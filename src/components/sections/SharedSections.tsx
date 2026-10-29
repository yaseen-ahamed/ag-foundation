import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Accessibility,
  HeartHandshake,
  GraduationCap,
  HandHeart,
  BarChart3,
  HeartPulse,
} from 'lucide-react';
import { ProgrammeItem, CharityCareStats } from '../../data/siteConfig';
import { useSite } from '../../context/SiteContext';
import {
  ReferencePhotoCrop,
  ProgrammeIconBadge,
  BespokeInstitutionalArt,
} from '../visuals/FoundationVisual';
import { SectionHeading } from '../common/UIElements';

export const FlagshipShowcaseSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const flagshipPillars = [
    {
      id: 'rehab-village',
      category: 'Community-Based Rehabilitation',
      title: 'Rehab Village Project',
      description:
        'A community-based rehabilitation initiative focused on recovery, functional independence, social participation and reintegration.',
      to: '/programmes/rehab-village',
      ctaLabel: 'Learn More',
      crop: { x: 256, y: 690, w: 225, h: 112 },
      overlayBg: 'bg-[#087F83]/92',
      bottomBarColor: 'bg-[#087F83]',
      restingPillClass: 'bg-[#087F83] text-white',
    },
    {
      id: 'stroke-force',
      category: 'Featured Project · Fast Action',
      title: 'Stroke Force',
      description:
        'A flagship community awareness initiative that equips people with the knowledge to recognise stroke warning signs, understand the urgency of treatment and spread life-saving awareness within their communities.',
      to: '/stroke-force',
      ctaLabel: 'Learn More',
      crop: { x: 0, y: 1280, w: 400, h: 145 },
      overlayBg: 'bg-[#102C4B]/92',
      bottomBarColor: 'bg-[#102C4B]',
      restingPillClass: 'bg-[#102C4B] text-white',
    },
    {
      id: 'charity-care',
      category: 'Healthcare Access',
      title: 'Charity Care Programme',
      description:
        'Providing financial assistance to eligible patients facing economic difficulties, helping them access essential healthcare and treatment.',
      to: '/programmes/charity-care',
      ctaLabel: 'Learn More',
      crop: { x: 32, y: 690, w: 220, h: 112 },
      overlayBg: 'bg-[#0D9488]/92',
      bottomBarColor: 'bg-[#0D9488]',
      restingPillClass: 'bg-[#0D9488] text-white',
    },
  ];

  return (
    <section
      aria-labelledby="flagship-showcase-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#DFE6EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personalis Reference Framing: Top 72px Accent Rule + Oversized Light Statement Headline */}
        <div className="max-w-4xl mb-12 sm:mb-14">
          <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
          <h2
            id="flagship-showcase-heading"
            className="text-[clamp(2rem,3.6vw,3.2rem)] font-editorial font-light text-[#102C4B] leading-[1.08] tracking-[-0.025em]"
          >
            Inform the future of community healthcare &amp; rehabilitation.
          </h2>
        </div>

        {/* 3-Column Tall Portrait Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {flagshipPillars.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(idx)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setHoveredIndex(null);
                  }
                }}
                onClick={() =>
                  setHoveredIndex((prev) => (prev === idx ? null : idx))
                }
                tabIndex={0}
                role="region"
                aria-label={item.title}
                className="group relative min-h-[470px] sm:min-h-[510px] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F83]"
              >
                {/* Full-Bleed Documentary Photography */}
                <div className="absolute inset-0">
                  <ReferencePhotoCrop
                    crop={item.crop}
                    alt={item.title}
                    className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Default (Resting) State Scrim */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent transition-opacity duration-200 ${
                      isHovered ? 'opacity-0' : 'opacity-100'
                    }`}
                    aria-hidden="true"
                  />
                  {/* Hover State Scrim */}
                  <div
                    className={`absolute inset-0 ${item.overlayBg} transition-opacity duration-200 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Top-Right Category Badge */}
                <div className="relative z-10 p-6 sm:p-7 flex items-center justify-end">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200 shadow-2xs ${
                      isHovered
                        ? 'bg-white text-[#102C4B]'
                        : item.restingPillClass
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Bottom / Mid Content Area */}
                <div className="relative z-10 px-7 sm:px-8 pb-6 sm:pb-7 mt-auto flex flex-col justify-end">
                  <h3 className="text-[1.75rem] sm:text-[2.1rem] font-editorial font-normal text-white leading-[1.12] tracking-[-0.02em] transition-transform duration-200">
                    {item.title}
                  </h3>

                  <div
                    className={`grid transition-all duration-200 ease-out ${
                      isHovered
                        ? 'grid-rows-[1fr] opacity-100 mt-4 pb-2'
                        : 'grid-rows-[0fr] opacity-0 mt-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-[15.5px] font-light text-white/95 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <Link
                        to={item.to}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center px-7 py-2.5 rounded-md bg-white text-[#102C4B] hover:bg-[#EFF7FA] text-xs sm:text-sm font-medium transition-colors shadow-xs whitespace-nowrap"
                      >
                        <span>{item.ctaLabel}</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Solid Accent Bar */}
                <div
                  className={`relative z-20 h-3.5 w-full ${item.bottomBarColor} shrink-0 transition-opacity duration-200 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const FeaturedProjectStrokeForceCard: React.FC = () => {
  const { config } = useSite();

  return (
    <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#EAF6F7] via-[#EFF8F9] to-[#E2F2F4] text-[#102C4B] overflow-hidden border border-[#C4E2E6] shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md bg-[#087F83] text-white font-nav text-xs font-semibold uppercase tracking-[0.08em]">
                Featured Project
              </span>
              <span className="text-xs font-semibold text-[#536477]">
                An initiative of Ayurgreen Foundation
              </span>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div className="bg-white px-3.5 py-2 rounded-xl border border-[#D5E9EC] shadow-2xs shrink-0">
                <img
                  src={config.organization.logos.strokeForce}
                  alt="Stroke Force Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] leading-tight">
                  STROKE FORCE
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#087F83]">
                  Community Stroke Awareness
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#334E68] leading-relaxed pt-1">
              A flagship community awareness initiative that equips people with the knowledge to recognise stroke warning signs, understand the urgency of treatment and spread life-saving awareness within their communities.
            </p>

            <p className="text-sm sm:text-base font-semibold text-[#07565B] tracking-wide">
              Recognising Stroke Signs. Acting Fast. Saving Lives.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Link
              to="/stroke-force"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#102C4B] text-white hover:bg-[#087F83] text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
            >
              <HeartPulse className="w-4 h-4 text-[#5EEAD4]" />
              <span>Explore Stroke Force</span>
              <ArrowRight className="w-4 h-4 text-[#5EEAD4]" />
            </Link>
            <Link
              to="/programmes/medical-camps"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white hover:bg-[#F7F9FA] text-[#102C4B] border border-[#B8DCE0] text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Stroke Awareness Medical Camps</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px]">
          <ReferencePhotoCrop
            crop={{ x: 0, y: 1280, w: 400, h: 145 }}
            alt="Stroke Force — Community Stroke Awareness"
            className="w-full h-full"
          />
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E6F4F6] to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export const CharityCareImpactSection: React.FC<{ stats: CharityCareStats }> = ({
  stats,
}) => {
  const maxCases = Math.max(...stats.annualData.map((d) => d.totalCases), 40);

  return (
    <div className="space-y-8">
      {/* 4 Key Impact Indicators */}
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <BarChart3 className="w-5 h-5 text-[#087F83]" />
          <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B]">
            Charity Care Impact &amp; Beneficiary Overview
          </h2>
        </div>
        <div className="w-16 h-0.5 bg-[#087F83] mb-6" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.indicators.map((ind, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83] mb-1">
                  {ind.label}
                </div>
                <div className="text-3xl sm:text-4xl font-editorial text-[#102C4B] tabular-nums mb-2">
                  {ind.value}
                </div>
              </div>
              <p className="text-xs text-[#536477] leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Annual Beneficiary Chart & Table (2023–2026) */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#DFE6EB] bg-white space-y-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DFE6EB] pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#087F83]">
              Annual Beneficiary Reporting (2023–2026)
            </span>
            <h3 className="text-xl font-editorial text-[#102C4B] mt-0.5">
              Patients Supported &amp; 100% Assistance Breakdown
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-[#102C4B] font-medium">
              <span className="w-3 h-3 rounded-xs bg-[#102C4B] inline-block" />
              Total Patients/Cases
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#087F83] font-medium">
              <span className="w-3 h-3 rounded-xs bg-[#087F83] inline-block" />
              Received 100% Assistance
            </span>
          </div>
        </div>

        {/* Visual Horizontal Bar Comparison per Year */}
        <div className="space-y-4">
          {stats.annualData.map((row) => {
            const totalPct = Math.round((row.totalCases / maxCases) * 100);
            const fullPct = Math.round((row.fullAssistance / maxCases) * 100);
            return (
              <div key={row.year} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#102C4B] tabular-nums w-14">
                    {row.year}
                  </span>
                  <div className="flex items-center gap-4 tabular-nums text-xs">
                    <span className="text-[#102C4B] font-semibold">
                      {row.totalCases} Patients/Cases
                    </span>
                    <span className="text-[#087F83] font-semibold">
                      {row.fullAssistance} Received 100% Assistance
                    </span>
                  </div>
                </div>
                <div className="w-full h-3.5 rounded-full bg-[#EFF7FA] overflow-hidden relative">
                  <div
                    className="h-full bg-[#102C4B]/25 rounded-full transition-all duration-300"
                    style={{ width: `${totalPct}%` }}
                    title={`${row.year}: ${row.totalCases} Total Patients/Cases`}
                  />
                  <div
                    className="h-full bg-[#087F83] rounded-full absolute left-0 top-0 transition-all duration-300"
                    style={{ width: `${fullPct}%` }}
                    title={`${row.year}: ${row.fullAssistance} Received 100% Assistance`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Structured Reporting Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#DFE6EB] text-[#536477] font-semibold">
                <th className="py-3 pr-4">Year</th>
                <th className="py-3 px-4 text-right">Patients/Cases</th>
                <th className="py-3 px-4 text-right">Received 100% Assistance</th>
                <th className="py-3 pl-4 text-right">Partial Assistance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DFE6EB] tabular-nums">
              {stats.annualData.map((row) => (
                <tr key={row.year} className="hover:bg-[#F7F9FA]">
                  <td className="py-3 pr-4 font-medium text-[#102C4B]">{row.year}</td>
                  <td className="py-3 px-4 text-right text-[#102C4B]">{row.totalCases}</td>
                  <td className="py-3 px-4 text-right text-[#087F83] font-semibold">
                    {row.fullAssistance}
                  </td>
                  <td className="py-3 pl-4 text-right text-[#536477]">
                    {row.partialAssistance}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#102C4B] font-bold text-[#102C4B] tabular-nums bg-[#EFF7FA]/60">
                <td className="py-3.5 pr-4 pl-2">Total</td>
                <td className="py-3.5 px-4 text-right">{stats.totals.totalCases}</td>
                <td className="py-3.5 px-4 text-right text-[#087F83]">
                  {stats.totals.fullAssistance}
                </td>
                <td className="py-3.5 pl-4 pr-2 text-right">
                  {stats.totals.partialAssistance}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {stats.footnote && (
          <p className="text-xs text-[#536477] pt-1">{stats.footnote}</p>
        )}
      </div>
    </div>
  );
};

export const ProgressivePathwaySection: React.FC = () => {
  const steps = [
    {
      step: '01.',
      stage: 'Early Detection & Outreach',
      title: 'Stroke Force & Medical Camps',
      description:
        'Community outreach and Stroke Force workshops equip citizens to recognise stroke warning signs and understand the urgency of timely medical attention.',
      linkText: 'Stroke Force Initiative',
      to: '/stroke-force',
    },
    {
      step: '02.',
      stage: 'Clinical & Diagnostic Access',
      title: 'Charity Care Programme',
      description:
        'Need-based financial assistance in association with Ayurgreen Hospital helps vulnerable patients access essential treatment, diagnostics, medicines, and therapy.',
      linkText: 'Charity Care Programme',
      to: '/programmes/charity-care',
    },
    {
      step: '03.',
      stage: 'Multidisciplinary Rehabilitation',
      title: 'Rehab Village Project',
      description:
        'Specialized ortho-neuro rehabilitation and extended village-style accommodation nurture functional recovery and independence.',
      linkText: 'Rehab Village Project',
      to: '/programmes/rehab-village',
    },
    {
      step: '04.',
      stage: 'Social Reintegration & Education',
      title: 'Social Rehab & EWP Scholarships',
      description:
        'Vocational guidance, family-centred counselling, student internships, and EWP scholarships empower individuals and youth for the future.',
      linkText: 'Social Rehabilitation',
      to: '/programmes/social-rehabilitation',
    },
  ];

  return (
    <section
      aria-labelledby="care-pathway-heading"
      className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#DFE6EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="How Our Model Works"
          title="A Progressive Pathway from Early Awareness to Dignified Recovery"
          subtitle="Complex healthcare and social challenges require more than a single intervention. Our model connects prevention, clinical access, physical therapy, education, and community reintegration."
          align="split"
          action={
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-[#DFE6EB] hover:border-[#087F83] text-xs font-semibold text-[#102C4B] transition-colors whitespace-nowrap"
            >
              <span>Explore Our Institutional Model</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-[#DFE6EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#087F83]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#536477] mb-4 pb-3 border-b border-[#DFE6EB]">
                  <span className="font-bold text-sm text-[#087F83] tabular-nums">
                    {item.step}
                  </span>
                  <span className="font-medium">{item.stage}</span>
                </div>
                <h3 className="text-lg font-bold text-[#102C4B] leading-snug mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <Link
                to={item.to}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:text-[#07565B] transition-colors mt-auto"
              >
                <span>{item.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProgrammeCard: React.FC<{ programme: ProgrammeItem }> = ({ programme }) => {
  return (
    <article className="group bg-white rounded-2xl border border-[#DFE6EB] hover:border-[#087F83]/60 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Top Visual Slot */}
      <div className="relative h-44 w-full bg-[#EFF7FA] overflow-hidden">
        {programme.imageUrl || programme.cropRegion ? (
          <ReferencePhotoCrop
            crop={programme.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
            imageSrc={programme.imageUrl}
            alt={programme.title}
            className="w-full h-full group-hover:scale-[1.03] transition-transform duration-200"
          />
        ) : (
          <BespokeInstitutionalArt
            type={programme.illustrationType}
            alt={programme.title}
            className="w-full h-full group-hover:scale-[1.03] transition-transform duration-200"
          />
        )}
      </div>

      {/* Overlapping Circular Icon & Card Body */}
      <div className="px-6 pb-6 pt-0 flex-1 flex flex-col">
        <div className="-mt-6 mb-3.5 relative z-10 flex items-center justify-between">
          <ProgrammeIconBadge
            iconName={programme.iconName}
            accentColor={programme.accentColor}
            size="md"
          />
          <span className="text-xs font-medium text-[#536477] mt-6">
            {programme.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#102C4B] group-hover:text-[#087F83] transition-colors leading-snug mb-2">
          <Link
            to={`/programmes/${programme.slug}`}
            className="focus-visible:outline-2 focus-visible:outline-[#087F83] rounded"
          >
            {programme.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-[#536477] leading-relaxed flex-1 mb-5">
          {programme.summary}
        </p>

        <div className="pt-3.5 border-t border-[#DFE6EB]/70 mt-auto">
          <Link
            to={`/programmes/${programme.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] group-hover:text-[#07565B] transition-colors"
          >
            <span>Explore Programme</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export const AssociatedInstitutionsSection: React.FC = () => {
  const { config } = useSite();

  const getInstLogoUrl = (id: string, configuredUrl?: string) => {
    if (configuredUrl) return configuredUrl;
    switch (id) {
      case 'inst-college':
        return '/assets/aistudio/ayurgreen_college_logo.webp';
      case 'inst-research':
        return '/assets/aistudio/ayurgreen_scientifica_logo.webp';
      case 'inst-radiology':
        return '/assets/aistudio/getwell_hospital_logo.webp';
      default:
        return '';
    }
  };

  return (
    <section
      aria-labelledby="associated-institutions-heading"
      className="py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFF7FA] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DFE6EB]/80">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl space-y-2">
              <div className="w-16 h-0.5 bg-[#087F83] mb-3" aria-hidden="true" />
              <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83]">
                Working Towards a Shared Vision
              </p>
              <h2
                id="associated-institutions-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-[#102C4B]"
              >
                Our Associated Institutions
              </h2>
              <p className="text-sm sm:text-base text-[#536477] leading-relaxed pt-1">
                Ayurgreen Foundation is connected with institutions and services across healthcare, education and research that contribute to the broader Ayurgreen ecosystem.
              </p>
            </div>
            <Link
              to="/about#institutions"
              className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#087F83] text-xs font-semibold text-[#102C4B] hover:bg-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>Know More</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.associatedInstitutions.map((inst) => {
              const logoUrl = getInstLogoUrl(inst.id, inst.logoUrl);
              return (
                <div
                  key={inst.id}
                  className="bg-white rounded-2xl p-6 border border-[#DFE6EB] hover:border-[#087F83] transition-all flex flex-col justify-between gap-5 shadow-2xs"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-xl overflow-hidden border border-[#DFE6EB]/70 shrink-0 bg-[#102C4B]">
                        <img
                          src={logoUrl}
                          alt={`${inst.name} official logo`}
                          loading="lazy"
                          className="w-full h-full object-cover block"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#087F83] block mb-0.5">
                          {inst.category}
                        </span>
                        <h3 className="text-base font-bold text-[#102C4B] leading-snug">
                          {inst.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {inst.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFE6EB]/80">
                    {inst.externalUrl ? (
                      <a
                        href={inst.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
                      >
                        <span>{inst.buttonLabel || 'Visit Website'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to={inst.internalRoute || '/about#institutions'}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
                      >
                        <span>{inst.buttonLabel || 'Visit Website'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
  );
};

export const ImpactMetricsStrip: React.FC<{ showHeader?: boolean }> = ({
  showHeader = true,
}) => {
  const { config } = useSite();

  const renderPillarIcon = (iconName: string) => {
    const cls = 'w-8 h-8 text-[#087F83] mb-3';
    switch (iconName) {
      case 'Accessibility':
        return <Accessibility className={cls} />;
      case 'HeartHandshake':
        return <HeartHandshake className={cls} />;
      case 'Users':
        return <Users className={cls} />;
      case 'GraduationCap':
        return <GraduationCap className={cls} />;
      case 'HandHeart':
        return <HandHeart className={cls} />;
      default:
        return <Users className={cls} />;
    }
  };

  return (
    <section aria-labelledby="our-impact-heading" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeading
            title="Our Impact"
            subtitle="Structured across five core pillars of community wellbeing, documenting verified beneficiary assistance, medical camps, rehabilitation, and student volunteering."
            align="split"
            action={
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F83] hover:underline"
              >
                <span>Explore Impact &amp; Stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#DFE6EB] border border-[#DFE6EB] rounded-2xl bg-white py-6">
          {config.impactPillars.map((pillar) => (
            <Link
              key={pillar.id}
              to={pillar.programmeLink}
              className="group px-6 py-4 flex flex-col items-center text-center hover:bg-[#F7F9FA] transition-colors"
            >
              {renderPillarIcon(pillar.iconName)}
              {pillar.verifiedNumber.trim() ? (
                <div className="text-2xl font-bold text-[#102C4B] tabular-nums mb-0.5">
                  {pillar.verifiedNumber}
                </div>
              ) : (
                <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83] mb-0.5">
                  {pillar.category}
                </div>
              )}
              <h3 className="text-base font-bold text-[#102C4B] group-hover:text-[#087F83] transition-colors mb-1.5">
                {pillar.themeTitle}
              </h3>
              <p className="text-xs text-[#536477] leading-relaxed max-w-[210px]">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DonationAppealSection: React.FC = () => {
  return (
    <section
      aria-labelledby="donation-appeal-heading"
      className="py-12 sm:py-16 bg-[#F7F9FA] border-y border-[#DFE6EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DFE6EB] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
              Support Compassionate Care
            </p>
            <h2
              id="donation-appeal-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-[#102C4B] mb-3"
            >
              Your Support Can Help Change Lives
            </h2>
            <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
              Your contribution can help support healthcare access, rehabilitation, education and community initiatives through Ayurgreen Foundation. Every contribution is managed with Section 8 non-profit accountability.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#536477] mt-4">
              <span>Charity Care Programme</span>
              <span aria-hidden="true">·</span>
              <span>Rehab Village Project</span>
              <span aria-hidden="true">·</span>
              <span>EWP Scholarship Programme</span>
              <span aria-hidden="true">·</span>
              <span>Stroke Force</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <span>Donate Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/transparency"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[#DFE6EB] hover:border-[#102C4B] text-[#102C4B] text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <span>View Governance &amp; Transparency</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ParticipationBanner: React.FC = () => {
  return (
    <section
      aria-labelledby="be-part-of-change-heading"
      className="relative bg-gradient-to-r from-[#07565B] via-[#07565B] to-[#087F83] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Photographic Area */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px]">
            <ReferencePhotoCrop
              crop={{ x: 0, y: 1280, w: 400, h: 145 }}
              alt="Stroke Force educator addressing community members during an awareness workshop"
              className="w-full h-full"
            />
            <div
              className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-r from-transparent to-[#07565B]"
              aria-hidden="true"
            />
            <div
              className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07565B] to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Right Content & Two CTAs */}
          <div className="lg:col-span-7 px-6 sm:px-10 lg:px-12 py-10 sm:py-12 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div className="max-w-md">
              <h2
                id="be-part-of-change-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-white mb-2.5"
              >
                Be Part of the Change
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Join us in building healthier communities and creating opportunities for a better tomorrow.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-[#102C4B] hover:bg-[#EFF7FA] text-sm font-semibold transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Volunteer With Us</span>
                <ArrowRight className="w-4 h-4 text-[#087F83]" />
              </Link>
              <Link
                to="/partner-with-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/80 hover:bg-white/10 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
