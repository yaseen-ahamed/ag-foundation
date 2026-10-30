import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Users,
  Landmark,
  Microscope,
  ScanLine,
  Settings,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';
import { ReferencePhotoCrop } from '../components/visuals/FoundationVisual';
import { DonationAppealSection } from '../components/sections/SharedSections';

export const AboutPage: React.FC = () => {
  const { config, setIsCmsOpen } = useSite();

  return (
    <>
      <SeoHead
        title="About Us — Vision, Mission & Story | Ayurgreen Foundation"
        description="Learn about Ayurgreen Foundation, established on 24 May 2022 as a Section 8 non-profit company and the social impact arm of Ayurgreen Group."
        canonicalPath="/about"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl">
            <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
              {config.organization.legalStatus} · Est. {config.organization.establishedDate}
            </p>
            <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-editorial font-light text-[#102C4B] leading-[1.08] mb-4">
              Healthcare &amp; Education for Social Impact.
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Ayurgreen Foundation is the social impact arm of {config.organization.parentGroup}, working alongside communities and institutional partners to advance healthcare access, rehabilitation, education, and sustainable social welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Overview & Our Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
                <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-1.5">
                  Foundation Overview
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-light text-[#102C4B] mb-4">
                  Who We Are &amp; Why We Exist
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
                  {config.about.fullOverview.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-[#DFE6EB]" id="our-story">
                <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
                <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-1.5">
                  Our Story &amp; Establishment
                </p>
                <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#102C4B] mb-3">
                  Established on 24 May 2022
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
                  {config.about.ourStory.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[#DFE6EB] bg-[#EFF7FA] h-64 sm:h-72">
                <ReferencePhotoCrop
                  crop={{ x: 430, y: 68, w: 560, h: 350 }}
                  alt="Compassionate rehabilitation and patient support at Ayurgreen Foundation"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-[#F7F9FA] rounded-2xl border border-[#DFE6EB] p-6 space-y-4">
                <h3 className="text-base font-bold text-[#102C4B]">
                  Institutional Summary
                </h3>
                <dl className="divide-y divide-[#DFE6EB] text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#536477]">Official Name</dt>
                    <dd className="font-semibold text-[#102C4B] text-right">
                      {config.organization.name}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#536477]">Legal Constitution</dt>
                    <dd className="font-semibold text-[#102C4B] text-right">
                      {config.organization.legalStatus}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#536477]">Date of Establishment</dt>
                    <dd className="font-semibold text-[#102C4B] text-right tabular-nums">
                      {config.organization.establishedDate}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#536477]">Parent Group</dt>
                    <dd className="font-semibold text-[#102C4B] text-right">
                      {config.organization.parentGroup}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#536477]">Administrative Office</dt>
                    <dd className="font-semibold text-[#102C4B] text-right">
                      Edappal, Kavilpadi, Malappuram, Kerala
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision-mission"
        className="py-14 sm:py-18 bg-[#EFF7FA] border-y border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Vision Card */}
            <div className="lg:col-span-5 bg-[#102C4B] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4DD0E1] mb-3">
                  Our Vision
                </p>
                <h2 className="text-2xl sm:text-3xl font-editorial leading-snug mb-6">
                  &ldquo;{config.about.vision}&rdquo;
                </h2>
              </div>
              <div className="pt-6 border-t border-white/15 text-xs text-white/80">
                Guiding every healthcare, rehabilitation, and educational initiative across Ayurgreen Foundation.
              </div>
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFE6EB] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
                Our Mission
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-6">
                Five Pillars of Action
              </h2>
              <ul className="space-y-4">
                {config.about.missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-[#102C4B]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & 7 Objectives */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Core Values */}
          <div>
            <SectionHeading
              kicker="Guiding Principles"
              title="Our Core Values"
              subtitle="The ethical standards that shape how we serve beneficiaries, collaborate with institutions, and steward public trust."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.about.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA]"
                >
                  <h3 className="text-base font-bold text-[#102C4B] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 7 Official Objectives */}
          <div className="pt-8 border-t border-[#DFE6EB]">
            <SectionHeading
              kicker="Strategic Mandate"
              title="Objectives of Ayurgreen Foundation"
              subtitle="Our work is organised around seven clear institutional objectives spanning clinical support, awareness, rehabilitation, and sustainable development."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.about.objectives.map((obj) => (
                <div
                  key={obj.number}
                  className="p-6 rounded-2xl border border-[#DFE6EB] bg-white hover:border-[#087F83]/60 transition-colors"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-[#087F83] tabular-nums mb-2">
                    Objective {obj.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#102C4B] mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Associated Institutions Detail */}
      <section
        id="institutions"
        className="py-14 sm:py-16 bg-[#F7F9FA] border-t border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Working Towards a Shared Vision"
            title="Our Associated Institutions"
            subtitle="Ayurgreen Foundation is connected with institutions and services across healthcare, education and research that contribute to the broader Ayurgreen ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.associatedInstitutions.map((inst) => {
              const logoUrl =
                inst.logoUrl ||
                (inst.id === 'inst-college'
                  ? '/assets/aistudio/ayurgreen_college_logo.webp'
                  : inst.id === 'inst-research'
                  ? '/assets/aistudio/ayurgreen_scientifica_logo.webp'
                  : '/assets/aistudio/getwell_hospital_logo.webp');
              return (
                <div
                  key={inst.id}
                  className="bg-white rounded-2xl border border-[#DFE6EB] p-6 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#DFE6EB]/70 bg-[#102C4B] mb-4">
                      <img
                        src={logoUrl}
                        alt={`${inst.name} official logo`}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <div className="text-xs font-semibold text-[#087F83] mb-1">
                      {inst.category}
                    </div>
                    <h3 className="text-lg font-bold text-[#102C4B] mb-2">
                      {inst.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-5">
                      {inst.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#DFE6EB]">
                    {inst.externalUrl ? (
                      <a
                        href={inst.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
                      >
                        <span>{inst.buttonLabel || 'Visit Website'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to={inst.internalRoute || '/programmes'}
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
      </section>

      {/* Leadership & Management Section */}
      <section
        id="leadership"
        className="py-14 sm:py-16 bg-white border-t border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Governance & Administration"
            title="Leadership &amp; Management"
            subtitle={config.about.leadershipNote}
            align="split"
            action={
              <button
                type="button"
                onClick={() => setIsCmsOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#DFE6EB] hover:border-[#087F83] text-xs font-semibold text-[#102C4B]"
              >
                <Settings className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Manage Profiles in CMS</span>
              </button>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.about.leadershipMembers.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFF7FA] border border-[#DFE6EB] flex items-center justify-center text-[#087F83] shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#087F83] mb-0.5">
                    {member.role}
                  </div>
                  <h3 className="text-base font-bold text-[#102C4B] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                    {member.bio}
                  </p>
                  {member.isPlaceholder && (
                    <p className="text-[11px] text-[#536477] mt-2">
                      Note: Unverified portraits and biographies are omitted until approved by Foundation administration.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-[#EFF7FA] border border-[#DFE6EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#087F83] shrink-0" />
              <span className="text-xs sm:text-sm text-[#102C4B]">
                Looking for Section 8 registration records, annual reports, or compliance policies?
              </span>
            </div>
            <Link
              to="/transparency"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:underline whitespace-nowrap"
            >
              <span>Visit Transparency &amp; Governance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <DonationAppealSection />
    </>
  );
};
