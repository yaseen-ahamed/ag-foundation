import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Calendar,
  BookOpen,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { SeoHead, SectionHeading } from '../components/common/UIElements';
import { ReferencePhotoCrop } from '../components/visuals/FoundationVisual';
import {
  FlagshipShowcaseSection,
  FeaturedProjectStrokeForceCard,
  ProgrammeCard,
  AssociatedInstitutionsSection,
  ImpactMetricsStrip,
  DonationAppealSection,
  ParticipationBanner,
} from '../components/sections/SharedSections';

export const HomePage: React.FC = () => {
  const { config } = useSite();

  const featuredProgrammes = config.programmes.filter((p) => p.featuredOnHome);
  const leadStory = config.impactStories[0];
  const secondaryStories = config.impactStories.slice(1, 3);

  return (
    <>
      <SeoHead
        title="Ayurgreen Foundation — Healthcare & Education for Social Impact"
        description="Ayurgreen Foundation works to improve lives through healthcare support, rehabilitation, education and community development, helping individuals and communities move towards healthier, more dignified futures."
        canonicalPath="/"
      />

      {/* SECTION 1: SPLIT CORPORATE HERO */}
      <section
        aria-label="Hero — Healthcare & Education for Social Impact"
        className="relative bg-gradient-to-b from-[#102C4B] via-[#0B4358] to-[#0B4358] lg:bg-gradient-to-r lg:from-[#102C4B] lg:via-[#0B4358] lg:to-[#087F83] border-b border-[#07565B] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center lg:min-h-[540px]">
            {/* Left Column: Top Hairline Rule, Oversized Light Display Headline, Supporting Copy & Two CTAs */}
            <div className="lg:col-span-6 pt-12 pb-6 sm:pt-16 sm:pb-8 lg:py-20 lg:pr-10">
              <div className="w-20 h-[2px] bg-[#2CE5C3] mb-5" aria-hidden="true" />
              <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#7CE8D8] mb-3">
                Established {config.organization.establishedDate} · {config.organization.legalStatus}
              </p>

              <h1 className="text-[clamp(2.5rem,4.5vw,3.75rem)] font-editorial font-light leading-[1.08] tracking-[-0.025em] text-white mb-6">
                Healthcare &amp;{' '}
                <span className="block">Education for</span>
                <span className="text-[#5EEAD4] block">Social Impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Ayurgreen Foundation works to improve lives through healthcare support, rehabilitation, education and community development, helping individuals and communities move towards healthier, more dignified futures.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/programmes"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-white hover:bg-[#EFF7FA] text-[#102C4B] text-sm font-semibold transition-colors shadow-xs whitespace-nowrap"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#087F83]" />
                </Link>

                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/75 text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Get Involved</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Full-Bleed Image: Flush to Top, Bottom, and Right Edges of Banner with Seamless Gradient */}
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[52%] h-[360px] sm:h-[430px] lg:h-full z-10 -mt-2 lg:mt-0">
          <img
            src={config.organization.logos.heroBanner || '/assets/aistudio/ayurgreen_care_492328da.png'}
            alt="Ayurgreen doctor examining and assisting patients in wheelchairs outdoors during rehabilitation care"
            className="w-full h-full object-cover object-right block"
          />
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0B4358] via-[#0B4358]/85 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="lg:hidden absolute inset-x-0 top-0 h-32 sm:h-36 bg-gradient-to-b from-[#0B4358] via-[#0B4358]/75 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* SECTION 2: FEATURED PROJECT — STROKE FORCE (CARD) */}
      <section
        aria-label="Featured Project — Stroke Force"
        className="pb-14 sm:pb-16 bg-white border-b border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedProjectStrokeForceCard />
        </div>
      </section>

      {/* SECTION 3: ABOUT THE FOUNDATION */}
      <section
        aria-labelledby="about-foundation-heading"
        className="py-16 sm:py-20 lg:py-24 bg-[#F7F9FA] border-b border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="w-20 h-[2px] bg-[#087F83]" aria-hidden="true" />
              <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83]">
                About the Foundation
              </p>
              <h2
                id="about-foundation-heading"
                className="text-[clamp(2rem,3.5vw,3.1rem)] font-editorial font-light text-[#102C4B] leading-[1.1]"
              >
                Advancing equitable healthcare, recovery &amp; community wellbeing.
              </h2>

              {config.about.shortIntro.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base text-[#536477] leading-relaxed"
                >
                  {para}
                </p>
              ))}

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#102C4B] hover:bg-[#087F83] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Read Our Story &amp; Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/transparency"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087F83] hover:underline"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Section 8 Governance &amp; Transparency</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-[#DFE6EB] p-6 sm:p-8 space-y-6 shadow-2xs">
                <div>
                  <div className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-1.5">
                    Our Vision
                  </div>
                  <p className="text-lg font-editorial font-normal text-[#102C4B] leading-snug">
                    &ldquo;{config.about.vision}&rdquo;
                  </p>
                </div>

                <div className="border-t border-[#DFE6EB] pt-5">
                  <div className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-3">
                    Core Focus Areas
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#536477]">
                    {config.about.missionPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <HeartHandshake className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#DFE6EB] pt-4 flex items-center justify-between text-xs text-[#536477]">
                  <span>Social Impact Arm of {config.organization.parentGroup}</span>
                  <span className="font-semibold text-[#102C4B] tabular-nums">Est. 24 May 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PROGRAMMES */}
      <section aria-labelledby="our-programmes-heading" className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Healthcare, Education & Community Development"
            title="Our Programmes"
            subtitle="Ayurgreen Foundation works to create meaningful social impact through healthcare support, rehabilitation, education, research and community engagement."
            align="split"
            action={
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#087F83] text-xs font-semibold text-[#102C4B] hover:bg-[#EFF7FA] transition-colors whitespace-nowrap"
              >
                <span>View All Programmes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
              </Link>
            }
          />

          {/* 6 Prominent Featured Programme Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProgrammes.map((prog) => (
              <ProgrammeCard key={prog.slug} programme={prog} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR ASSOCIATED INSTITUTIONS */}
      <AssociatedInstitutionsSection />

      {/* SECTION 6: OUR IMPACT */}
      <ImpactMetricsStrip showHeader={true} />

      {/* SECTION 8: ACTIVITIES & EVENTS */}
      <section aria-labelledby="latest-news-heading" className="py-14 sm:py-16 bg-white border-t border-[#DFE6EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Community Outreach & Observances"
            title="Activities &amp; Events"
            subtitle="Updates from our RUN FAST Mini Marathon, Koode Medical Camp, Calicut &amp; Nilambur Stroke Awareness Camps, National Reading Day, and World Environment Day."
            align="split"
            action={
              <Link
                to="/news-events"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#087F83] text-xs font-semibold text-[#102C4B] hover:bg-[#EFF7FA] transition-colors whitespace-nowrap"
              >
                <span>View All Activities &amp; Events</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.newsEvents.slice(0, 6).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-[#DFE6EB] overflow-hidden flex flex-col shadow-2xs"
              >
                {(item.imageUrl || item.cropRegion) && (
                  <div className="h-48 w-full bg-[#EFF7FA]">
                    <ReferencePhotoCrop
                      crop={item.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
                      imageSrc={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[#536477] mb-2">
                    <span className="font-semibold text-[#087F83]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.dateLabel}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#102C4B] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536477] leading-relaxed flex-1 mb-4">
                    {item.summary}
                  </p>
                  <div className="pt-3 border-t border-[#DFE6EB]/70 flex items-center justify-between">
                    <Link
                      to="/news-events"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#087F83] hover:underline"
                    >
                      <span>Read Update</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {item.isPlaceholder && (
                      <span className="text-[11px] text-[#536477]">Archive Template</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: IMPACT STORIES & RECOVERY JOURNEYS */}
      <section
        aria-labelledby="impact-stories-heading"
        className="py-14 sm:py-16 bg-[#F7F9FA] border-t border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Impact Stories &amp; Recovery Journeys"
            subtitle="Documenting rehabilitation pathways, community health education, and volunteer experiences with respect for beneficiary dignity and privacy."
            align="split"
            action={
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#087F83] text-xs font-semibold text-[#102C4B] hover:bg-white transition-colors whitespace-nowrap"
              >
                <span>View All Impact Stories</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Featured Lead Story */}
            {leadStory && (
              <article className="lg:col-span-7 bg-white rounded-2xl border border-[#DFE6EB] overflow-hidden flex flex-col justify-between shadow-2xs">
                <div>
                  {leadStory.cropRegion && (
                    <div className="h-56 sm:h-64 w-full bg-[#EFF7FA]">
                      <ReferencePhotoCrop
                        crop={leadStory.cropRegion}
                        alt={leadStory.title}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#536477] mb-2">
                      <span className="font-semibold text-[#087F83]">{leadStory.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{leadStory.dateLabel}</span>
                      {leadStory.isPlaceholder && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#102C4B] font-medium">
                            Editorial Template (Consent-Protected)
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-editorial text-[#102C4B] mb-3">
                      {leadStory.title}
                    </h3>
                    <p className="text-sm text-[#536477] leading-relaxed mb-4">
                      {leadStory.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 sm:px-8 py-4 bg-[#F7F9FA] border-t border-[#DFE6EB] flex items-center justify-between">
                  <Link
                    to="/impact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:underline"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Full Story Framework</span>
                  </Link>
                  <Link
                    to={`/programmes/${leadStory.relatedProgrammeSlug}`}
                    className="text-xs text-[#536477] hover:text-[#102C4B]"
                  >
                    Related Programme →
                  </Link>
                </div>
              </article>
            )}

            {/* Supporting Story Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryStories.map((story) => (
                <article
                  key={story.id}
                  className="bg-white rounded-2xl border border-[#DFE6EB] p-6 flex-1 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#536477] mb-2">
                      <span className="font-semibold text-[#087F83]">{story.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{story.dateLabel}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#102C4B] mb-2 leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {story.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#DFE6EB]/70 flex items-center justify-between">
                    <Link
                      to="/impact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#087F83] hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {story.isPlaceholder && (
                      <span className="text-[11px] text-[#536477]">
                        Editable in CMS Studio
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: INFORM THE FUTURE OF COMMUNITY HEALTHCARE & REHABILITATION */}
      <FlagshipShowcaseSection />

      {/* SECTION 11: DONATION APPEAL */}
      <DonationAppealSection />

      {/* SECTION 12: VOLUNTEER AND PARTNERSHIP BANNER */}
      <ParticipationBanner />
    </>
  );
};
