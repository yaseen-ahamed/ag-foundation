import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Settings,
  ShieldCheck,
  Maximize2,
  BookOpen,
  CheckCircle2,
  Users,
  Sparkles,
  HeartHandshake,
  PhoneCall,
  Images,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import {
  ImpactStoryItem,
  NewsEventItem,
  EventGalleryImage,
} from '../data/siteConfig';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';
import {
  ReferencePhotoCrop,
  ProgrammeIconBadge,
} from '../components/visuals/FoundationVisual';
import {
  ImpactMetricsStrip,
  CharityCareImpactSection,
  DonationAppealSection,
} from '../components/sections/SharedSections';

export const ImpactPage: React.FC = () => {
  const { config, setIsCmsOpen } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<ImpactStoryItem | null>(null);

  const charityProgramme = config.programmes.find((p) => p.slug === 'charity-care');

  const categories = [
    'All',
    'Beneficiary Stories',
    'Recovery Journeys',
    'Community Impact',
    'Volunteer Experiences',
    'Programme Outcomes',
  ];

  const filteredStories = useMemo(() => {
    if (selectedCategory === 'All') return config.impactStories;
    return config.impactStories.filter((s) => s.category === selectedCategory);
  }, [config.impactStories, selectedCategory]);

  return (
    <>
      <SeoHead
        title="Our Impact & Recovery Stories | Ayurgreen Foundation"
        description="Explore the social impact of Ayurgreen Foundation across Charity Care (90 patients supported), Rehab Village, Stroke Force awareness, medical camps, education, and volunteerism."
        canonicalPath="/impact"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Impact' }]} />
          <div className="max-w-3xl">
            <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
              Measurable Stewardship · Ethical Storytelling
            </p>
            <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-editorial font-light text-[#102C4B] leading-[1.08] mb-4">
              Our Impact &amp; Stories.
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              We measure our work by the dignity restored to patients, the independence gained through rehabilitation, and the health literacy shared across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Five Impact Pillars */}
      <ImpactMetricsStrip showHeader={true} />

      {/* Charity Care Impact Indicators & Annual Beneficiary Chart (2023–2026) */}
      {charityProgramme?.charityStats && (
        <section className="py-12 sm:py-16 bg-white border-t border-[#DFE6EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CharityCareImpactSection stats={charityProgramme.charityStats} />
          </div>
        </section>
      )}

      {/* Impact Stories Directory */}
      <section className="py-12 sm:py-16 bg-[#F7F9FA] border-t border-[#DFE6EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Beneficiary Journeys &amp; Programme Stories"
            subtitle="Respecting healthcare confidentiality: we never publish fabricated patient testimonials or unconsented clinical histories."
            align="split"
            action={
              <button
                type="button"
                onClick={() => setIsCmsOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-[#DFE6EB] hover:border-[#087F83] text-xs font-semibold text-[#102C4B]"
              >
                <Settings className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Configure Impact in CMS</span>
              </button>
            }
          />

          {/* Category Filter Bar */}
          <div
            role="group"
            aria-label="Filter impact stories by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-[#DFE6EB] rounded-xl mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#087F83] text-white'
                    : 'text-[#536477] hover:text-[#102C4B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredStories.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#DFE6EB] p-10 text-center space-y-3">
              <p className="text-base font-bold text-[#102C4B]">
                No stories published in &ldquo;{selectedCategory}&rdquo; yet
              </p>
              <p className="text-xs sm:text-sm text-[#536477] max-w-lg mx-auto">
                Consented stories in this category are currently being prepared by the Ayurgreen Foundation team. Select &ldquo;All&rdquo; to view available programme frameworks.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className="px-5 py-2 rounded-md bg-[#087F83] text-white text-xs font-semibold"
              >
                Show All Categories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  className="bg-white rounded-2xl border border-[#DFE6EB] overflow-hidden flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    {story.cropRegion && (
                      <div className="h-44 w-full bg-[#EFF7FA]">
                        <ReferencePhotoCrop
                          crop={story.cropRegion}
                          alt={story.title}
                          className="w-full h-full"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#536477] mb-2">
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
                  </div>

                  <div className="px-6 py-4 bg-[#F7F9FA] border-t border-[#DFE6EB] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStory(story)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:underline cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Full Story</span>
                    </button>
                    <Link
                      to={`/programmes/${story.relatedProgrammeSlug}`}
                      className="text-xs text-[#536477] hover:text-[#102C4B]"
                    >
                      Programme →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Story Reader Modal */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeStory.title}
          className="fixed inset-0 z-50 bg-[#102C4B]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl border border-[#DFE6EB] shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-[#087F83] font-semibold mb-1">
                  {activeStory.category} · {activeStory.dateLabel}
                </div>
                <h2 className="text-2xl font-editorial text-[#102C4B]">
                  {activeStory.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                aria-label="Close story"
                className="p-1.5 rounded-lg text-[#536477] hover:text-[#102C4B] hover:bg-[#F7F9FA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeStory.cropRegion && (
              <div className="h-56 w-full rounded-xl overflow-hidden bg-[#EFF7FA]">
                <ReferencePhotoCrop
                  crop={activeStory.cropRegion}
                  alt={activeStory.title}
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
              {activeStory.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#DFE6EB] flex items-center justify-between">
              <Link
                to={`/programmes/${activeStory.relatedProgrammeSlug}`}
                onClick={() => setActiveStory(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:underline"
              >
                <span>Explore Related Programme</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="px-4 py-2 rounded-md bg-[#102C4B] text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <DonationAppealSection />
    </>
  );
};

export const GalleryPage: React.FC = () => {
  const { config } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Medical Camps',
    'Rehabilitation Activities',
    'Volunteer Activities',
    'Foundation Events',
    'Community Outreach Programmes',
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return config.galleryItems;
    return config.galleryItems.filter((item) => item.category === selectedCategory);
  }, [config.galleryItems, selectedCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <>
      <SeoHead
        title="Media Gallery — Programmes & Outreach | Ayurgreen Foundation"
        description="Browse photographs from Ayurgreen Foundation's Medical Camps, Rehabilitation Activities, Volunteer Activities, Foundation Events, and Community Outreach Programmes."
        canonicalPath="/gallery"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Media Gallery' }]} />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
              Visual Archive · Authentic Foundation Records
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
              Media Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
              Moments from our rehabilitation facilities, community stroke awareness sessions, medical camps, and volunteer activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            role="group"
            aria-label="Filter gallery by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F7F9FA] border border-[#DFE6EB] rounded-xl mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#087F83] text-white'
                    : 'text-[#536477] hover:text-[#102C4B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="p-12 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] text-center space-y-2">
              <p className="text-base font-bold text-[#102C4B]">
                Programme photographs for &ldquo;{selectedCategory}&rdquo; will be added soon
              </p>
              <p className="text-xs sm:text-sm text-[#536477] max-w-md mx-auto">
                We only publish authentic, consented Foundation photographs rather than unrelated stock images.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <figure
                  key={item.id}
                  className="group bg-white rounded-2xl border border-[#DFE6EB] overflow-hidden shadow-2xs flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`View larger image: ${item.title}`}
                    className="relative h-56 w-full bg-[#EFF7FA] overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F83]"
                  >
                    {(item.customImageUrl || item.cropRegion) && (
                      <ReferencePhotoCrop
                        crop={item.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
                        imageSrc={item.customImageUrl}
                        alt={item.altText}
                        className="w-full h-full group-hover:scale-[1.03] transition-transform duration-200"
                      />
                    )}
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-[#102C4B]/80 text-white opacity-90 group-hover:bg-[#087F83] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </button>
                  <figcaption className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#087F83] mb-1">
                        {item.category}
                      </div>
                      <h3 className="text-base font-bold text-[#102C4B] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#536477] leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="mt-10 p-5 rounded-2xl bg-[#F7F9FA] border border-[#DFE6EB] flex items-center gap-3 text-xs text-[#536477]">
            <ShieldCheck className="w-5 h-5 text-[#087F83] shrink-0" />
            <span>
              Photographic Integrity Policy: Only verified brand photographs and consented programme visuals are included in this archive. Unrelated stock photography is never presented as actual Foundation activity.
            </span>
          </div>
        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#102C4B]/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[320px] sm:h-[460px] bg-[#102C4B]">
              {(activeItem.customImageUrl || activeItem.cropRegion) && (
                <ReferencePhotoCrop
                  crop={activeItem.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
                  imageSrc={activeItem.customImageUrl}
                  alt={activeItem.altText}
                  className="w-full h-full"
                />
              )}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 p-2 rounded-md bg-[#102C4B]/80 text-white hover:bg-[#087F83]"
              >
                <X className="w-5 h-5" />
              </button>
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) %
                          filteredItems.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-md bg-[#102C4B]/80 text-white hover:bg-[#087F83]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                    }
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-md bg-[#102C4B]/80 text-white hover:bg-[#087F83]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#087F83]">
                  {activeItem.category} · Image {lightboxIndex + 1} of {filteredItems.length}
                </div>
                <h3 className="text-lg font-bold text-[#102C4B] mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] mt-1">
                  {activeItem.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="px-5 py-2 rounded-md border border-[#DFE6EB] text-xs font-semibold text-[#102C4B] hover:bg-[#F7F9FA] shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <DonationAppealSection />
    </>
  );
};

export const NewsEventsPage: React.FC = () => {
  const { config, setIsCmsOpen } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programme Reports',
    'Medical Camps',
    'Awareness Campaigns',
    'Foundation Events',
    'Volunteer Activities',
    'Announcements',
  ];

  const filteredNews = useMemo(() => {
    if (selectedCategory === 'All') return config.newsEvents;
    return config.newsEvents.filter((item) => item.category === selectedCategory);
  }, [config.newsEvents, selectedCategory]);

  return (
    <>
      <SeoHead
        title="Activities & Events | Ayurgreen Foundation"
        description="Explore RUN FAST Mini Marathon, Koode Medical Camp, Calicut & Nilambur Stroke Awareness Camps, National Reading Day, and World Environment Day activities."
        canonicalPath="/news-events"
      />

      {/* Page Hero */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Activities & Events' }]} />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-2">
                Community Outreach, Medical Camps &amp; Observances
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
                Activities &amp; Events
              </h1>
              <p className="text-base sm:text-lg text-[#536477] leading-relaxed">
                Follow our ongoing community awareness drives, medical camps, rehabilitation initiatives, and special observances.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsCmsOpen(true)}
              className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-[#087F83] text-xs font-semibold text-[#102C4B] hover:bg-[#F7F9FA] shrink-0 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-[#087F83]" />
              <span>Publish Update in CMS Studio</span>
            </button>
          </div>
        </div>
      </section>

      {/* News & Events Directory */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div
            role="group"
            aria-label="Filter news and events by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F7F9FA] border border-[#DFE6EB] rounded-xl mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#087F83] text-white'
                    : 'text-[#536477] hover:text-[#102C4B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredNews.length === 0 ? (
            <div className="p-10 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] text-center space-y-3">
              <p className="text-base font-bold text-[#102C4B]">
                No verified updates in &ldquo;{selectedCategory}&rdquo; yet
              </p>
              <p className="text-xs sm:text-sm text-[#536477] max-w-md mx-auto">
                Official announcements and camp reports in this category will appear here once published by the Foundation administration.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className="px-5 py-2 rounded-md bg-[#087F83] text-white text-xs font-semibold"
              >
                View All Categories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredNews.map((item) => {
                const detailSlug = item.slug || item.id;
                const photoCount = item.galleryImages?.length || 0;
                return (
                  <article
                    key={item.id}
                    className="group bg-white rounded-2xl border border-[#DFE6EB] hover:border-[#087F83]/70 transition-all overflow-hidden flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      {(item.imageUrl || item.cropRegion) && (
                        <Link
                          to={`/news-events/${detailSlug}`}
                          aria-label={`Open ${item.title} report`}
                          className="relative h-52 w-full bg-[#EFF7FA] overflow-hidden block"
                        >
                          <ReferencePhotoCrop
                            crop={item.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
                            imageSrc={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                          />
                          {photoCount > 0 && (
                            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#102C4B]/85 text-white text-[11px] font-medium backdrop-blur-xs">
                              <Images className="w-3.5 h-3.5 text-[#4DD0E1]" />
                              <span>{photoCount} Photos</span>
                            </span>
                          )}
                        </Link>
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#536477] mb-2">
                          <span className="font-semibold text-[#087F83]">{item.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.dateLabel}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#102C4B] group-hover:text-[#087F83] transition-colors mb-2 leading-snug">
                          <Link to={`/news-events/${detailSlug}`}>
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-3">
                          {item.summary}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-[#536477]">
                          <MapPin className="w-3.5 h-3.5 text-[#087F83]" />
                          <span>{item.locationLabel}</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-[#F7F9FA] border-t border-[#DFE6EB] flex items-center justify-between">
                      <Link
                        to={`/news-events/${detailSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:text-[#07565B] group-hover:underline"
                      >
                        <span>Read Full Report</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      {item.isPlaceholder && (
                        <span className="text-[11px] text-[#536477]">
                          Template Slot
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <DonationAppealSection />
    </>
  );
};

/**
 * Bento Collage Gallery Component (Reference-aligned 3-Column Bento Grid:
 * Left 2 Stacked Portrait/Square | Center 3 Stacked Wide Landscape | Right 2 Stacked Portrait/Square)
 */
const EventBentoGallery: React.FC<{
  images: EventGalleryImage[];
  eventTitle: string;
}> = ({ images, eventTitle }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Cap at 8 images maximum and prioritise the signature 7-image Bento Collage
  const displayedImages = useMemo(() => images.slice(0, 8), [images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % displayedImages.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + displayedImages.length) % displayedImages.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayedImages.length]);

  const renderBentoCell = (
    img: EventGalleryImage,
    idx: number,
    gridPlacementClass: string
  ) => (
    <figure
      key={`${img.url}-${idx}`}
      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EFF7FA] shadow-2xs border border-[#DFE6EB]/60 min-h-[240px] sm:min-h-[260px] lg:min-h-0 w-full h-full ${gridPlacementClass}`}
    >
      <button
        type="button"
        onClick={() => setLightboxIndex(idx)}
        aria-label={`View larger photograph: ${img.alt}`}
        className="absolute inset-0 w-full h-full block text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F83]"
      >
        <img
          src={img.url}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: img.objectPosition || 'center center' }}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] block"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#102C4B]/75 via-[#102C4B]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4"
          aria-hidden="true"
        >
          <span className="text-xs font-medium text-white line-clamp-2 pr-2">
            {img.caption || img.alt}
          </span>
          <span className="p-2 rounded-full bg-white/95 text-[#102C4B] shrink-0 shadow-xs">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>
      </button>
      <figcaption className="sr-only">
        {img.caption ? `${img.caption} (${img.alt})` : img.alt}
      </figcaption>
    </figure>
  );

  const activePhoto =
    lightboxIndex !== null && displayedImages[lightboxIndex]
      ? displayedImages[lightboxIndex]
      : null;

  // 7-card Bento Grid placement classes matching attached reference image:
  // Left Column (2 stacked portrait/square) | Center Column (3 stacked wide landscape) | Right Column (2 stacked portrait/square)
  const sevenCardBentoClasses = [
    'lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3', // 0: Left Top
    'lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-3', // 1: Left Bottom
    'sm:col-span-2 lg:col-start-4 lg:col-span-6 lg:row-start-1 lg:row-span-2', // 2: Center Top Wide
    'sm:col-span-2 lg:col-start-4 lg:col-span-6 lg:row-start-3 lg:row-span-2', // 3: Center Middle Wide
    'sm:col-span-2 lg:col-start-4 lg:col-span-6 lg:row-start-5 lg:row-span-2', // 4: Center Bottom Wide
    'lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-3', // 5: Right Top
    'lg:col-start-10 lg:col-span-3 lg:row-start-4 lg:row-span-3', // 6: Right Bottom
  ];

  return (
    <>
      {displayedImages.length >= 7 ? (
        <div className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 sm:gap-5 lg:h-[640px]">
            {displayedImages.slice(0, 7).map((img, idx) =>
              renderBentoCell(img, idx, sevenCardBentoClasses[idx])
            )}
          </div>
          {displayedImages.length === 8 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:h-[260px]">
              {renderBentoCell(displayedImages[7], 7, 'lg:col-span-12')}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedImages.map((img, idx) =>
            renderBentoCell(img, idx, 'h-64 sm:h-72')
          )}
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${eventTitle} — Image ${lightboxIndex + 1} of ${displayedImages.length}`}
          className="fixed inset-0 z-50 bg-[#102C4B]/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[320px] sm:h-[500px] bg-[#102C4B] flex items-center justify-center">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 p-2 rounded-md bg-[#102C4B]/80 text-white hover:bg-[#087F83] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              {displayedImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + displayedImages.length) %
                          displayedImages.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-md bg-[#102C4B]/80 text-white hover:bg-[#087F83] cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % displayedImages.length
                      )
                    }
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-md bg-[#102C4B]/80 text-white hover:bg-[#087F83] cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#087F83] tabular-nums">
                  {eventTitle} · Photograph {lightboxIndex + 1} of{' '}
                  {displayedImages.length}
                </div>
                <p className="text-sm sm:text-base font-bold text-[#102C4B] mt-1">
                  {activePhoto.caption || activePhoto.alt}
                </p>
                <p className="text-xs text-[#536477] mt-0.5">
                  Alt Text: {activePhoto.alt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="px-5 py-2 rounded-md border border-[#DFE6EB] text-xs font-semibold text-[#102C4B] hover:bg-[#F7F9FA] shrink-0 cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const NewsEventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { config } = useSite();

  const activity = config.newsEvents.find(
    (item) =>
      item.slug === slug ||
      item.id === slug ||
      item.id === `news-${slug}`
  );

  if (!activity) {
    return <Navigate to="/news-events" replace />;
  }

  const canonicalSlug = activity.slug || activity.id;
  const otherActivities = config.newsEvents
    .filter((item) => item.id !== activity.id)
    .slice(0, 3);

  const galleryImages: EventGalleryImage[] =
    activity.galleryImages && activity.galleryImages.length > 0
      ? activity.galleryImages
      : activity.imageUrl
      ? [
          {
            url: activity.imageUrl,
            alt: `${activity.title} — ${activity.locationLabel}`,
            caption: activity.summary,
          },
        ]
      : [];

  const getActivityIconProps = (category: NewsEventItem['category']) => {
    switch (category) {
      case 'Medical Camps':
        return { iconName: 'Stethoscope' as const, accentColor: '#087F83' };
      case 'Awareness Campaigns':
        return { iconName: 'Users' as const, accentColor: '#2563EB' };
      case 'Foundation Events':
        return { iconName: 'GraduationCap' as const, accentColor: '#7C3AED' };
      case 'Volunteer Activities':
        return { iconName: 'HandHeart' as const, accentColor: '#0D9488' };
      default:
        return { iconName: 'HeartHandshake' as const, accentColor: '#087F83' };
    }
  };

  const iconProps = getActivityIconProps(activity.category);

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: activity.title,
    description: activity.summary,
    datePublished: activity.dateLabel,
    author: {
      '@type': 'Organization',
      name: 'Ayurgreen Foundation',
      url: 'https://ayurgreenfoundation.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ayurgreen Foundation',
      url: 'https://ayurgreenfoundation.org',
    },
    contentLocation: {
      '@type': 'Place',
      name: activity.locationLabel,
    },
    image: galleryImages.map((img) => `https://ayurgreenfoundation.org${img.url}`),
  };

  const scrollToGallery = () => {
    const el = document.getElementById('event-photo-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SeoHead
        title={`${activity.title} — Activities & Events | Ayurgreen Foundation`}
        description={activity.summary}
        canonicalPath={`/news-events/${canonicalSlug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* 1. Activity-Specific Hero (Following ProgrammeDetailPage UI & Structure) */}
      <section className="bg-[#EFF7FA] border-b border-[#DFE6EB] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Activities & Events', to: '/news-events' },
              { label: activity.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3.5 mb-4">
                <ProgrammeIconBadge
                  iconName={iconProps.iconName}
                  accentColor={iconProps.accentColor}
                  size="sm"
                />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#087F83]">
                    {activity.category}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#536477] mt-0.5">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#087F83]" />
                      {activity.dateLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#087F83]" />
                      {activity.locationLabel}
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#102C4B] mb-4">
                {activity.title}
              </h1>

              {activity.heroSubtitle && (
                <p className="text-base sm:text-lg font-medium text-[#087F83] leading-relaxed mb-4">
                  {activity.heroSubtitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-[#536477] leading-relaxed mb-6">
                {activity.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {galleryImages.length > 0 && (
                  <button
                    type="button"
                    onClick={scrollToGallery}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Images className="w-4 h-4" />
                    <span>Explore Event Gallery ({galleryImages.length} Photos)</span>
                  </button>
                )}
                <Link
                  to={activity.relatedRoute}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#DFE6EB] hover:border-[#087F83] text-[#102C4B] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Visit Related Programme</span>
                  <ArrowRight className="w-4 h-4 text-[#087F83]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#DFE6EB] shadow-sm bg-white">
                {(activity.imageUrl || activity.cropRegion) && (
                  <ReferencePhotoCrop
                    crop={activity.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
                    imageSrc={activity.imageUrl}
                    alt={`${activity.title} — ${activity.locationLabel}`}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Report Content & Institutional Sidebar */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview & Full Report */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                  About the Activity &amp; Report
                </h2>
                <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
                  {activity.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Key Highlights & Documented Scope */}
              {activity.highlights && activity.highlights.length > 0 && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F9FA] border border-[#DFE6EB] space-y-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#087F83] mb-1">
                      Organising Partnership &amp; Theme
                    </div>
                    <p className="text-base sm:text-lg font-editorial text-[#102C4B] leading-snug">
                      {activity.partnerOrOrganiser || 'Ayurgreen Foundation Community Initiative'}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFE6EB]">
                    <h3 className="text-base font-bold text-[#102C4B] mb-4">
                      Key Highlights &amp; Documented Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {activity.highlights.map((hl, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-[#536477]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* On-Ground Activities & Implementation */}
              {activity.activities && activity.activities.length > 0 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B] mb-3">
                    On-Ground Implementation &amp; Activities
                  </h2>
                  <div className="w-16 h-0.5 bg-[#087F83] mb-5" aria-hidden="true" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {activity.activities.map((act, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-2xl border border-[#DFE6EB] bg-white flex flex-col shadow-2xs"
                      >
                        <div className="text-xs font-bold text-[#087F83] tabular-nums mb-1.5">
                          0{index + 1}.
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
              )}
            </div>

            {/* Sidebar: Participants, Impact Status & Collaboration CTA */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Event Details & Participants */}
              <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-white space-y-4">
                <div className="flex items-center gap-2.5 text-[#102C4B]">
                  <Users className="w-5 h-5 text-[#087F83] shrink-0" />
                  <h3 className="text-base font-bold">
                    Participants &amp; Stakeholders
                  </h3>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F9FA] border border-[#DFE6EB] space-y-2 text-xs">
                  <div>
                    <span className="text-[#536477]">Date / Schedule: </span>
                    <strong className="text-[#102C4B] font-semibold">
                      {activity.dateLabel}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#536477]">Location: </span>
                    <strong className="text-[#102C4B] font-semibold">
                      {activity.locationLabel}
                    </strong>
                  </div>
                  {activity.partnerOrOrganiser && (
                    <div>
                      <span className="text-[#536477]">Organisers: </span>
                      <strong className="text-[#102C4B] font-semibold">
                        {activity.partnerOrOrganiser}
                      </strong>
                    </div>
                  )}
                </div>

                {activity.stakeholders && activity.stakeholders.length > 0 && (
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#536477]">
                    {activity.stakeholders.map((person, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#087F83] font-bold">·</span>
                        <span>{person}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Impact & Outcomes Box */}
              <div className="p-6 rounded-2xl border border-[#DFE6EB] bg-[#EFF7FA] space-y-3">
                <div className="flex items-center gap-2 text-[#102C4B]">
                  <Sparkles className="w-4 h-4 text-[#087F83]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Impact &amp; Reach
                  </h3>
                </div>
                {activity.impactMetricValue && (
                  <div className="pt-1">
                    <div className="text-3xl font-editorial text-[#102C4B] tabular-nums">
                      {activity.impactMetricValue}
                    </div>
                    {activity.impactMetricLabel && (
                      <div className="text-xs font-semibold text-[#087F83]">
                        {activity.impactMetricLabel}
                      </div>
                    )}
                  </div>
                )}
                <p className="text-xs sm:text-sm text-[#102C4B] leading-relaxed">
                  {activity.summary}
                </p>
              </div>

              {/* Get Involved & Partnership Sidebar Box */}
              <div className="p-6 rounded-2xl bg-[#102C4B] text-white space-y-4">
                <HeartHandshake className="w-7 h-7 text-[#4DD0E1]" />
                <h3 className="text-lg font-editorial">
                  Join Our Next Outreach Initiative
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Partner with Ayurgreen Foundation to organise community medical camps, Stroke Force awareness sessions, or student volunteering drives.
                </p>
                <div className="space-y-2.5 pt-2">
                  <Link
                    to="/volunteer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
                  >
                    <span>Become a Volunteer</span>
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
                    <span>Contact Administration</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Bento Collage Photo Gallery Section (Matching Attached Reference Layout) */}
      {galleryImages.length > 0 && (
        <section
          id="event-photo-gallery"
          aria-labelledby="event-gallery-heading"
          className="py-14 sm:py-20 bg-[#F7F9FA] border-t border-[#DFE6EB]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              kicker="Visual Documentation · Authentic Event Archive"
              title="Event Moments &amp; Photo Gallery"
              subtitle={`Browse ${galleryImages.length} verified photographs from ${activity.title} (${activity.locationLabel}). Click any photograph to view full screen with caption details.`}
              align="split"
              action={
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white border border-[#DFE6EB] hover:border-[#087F83] text-xs font-semibold text-[#102C4B] transition-colors"
                >
                  <span>Full Media Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
                </Link>
              }
            />

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-3xl border border-[#DFE6EB] shadow-2xs">
              <EventBentoGallery
                images={galleryImages}
                eventTitle={activity.title}
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. Other Activities & Events */}
      {otherActivities.length > 0 && (
        <section className="py-14 bg-white border-t border-[#DFE6EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="More Activities &amp; Events"
              subtitle="Explore other community medical camps, awareness campaigns, and Foundation observances."
              align="split"
              action={
                <Link
                  to="/news-events"
                  className="text-xs font-semibold text-[#087F83] hover:underline"
                >
                  All Activities &amp; Events →
                </Link>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherActivities.map((rel) => {
                const relSlug = rel.slug || rel.id;
                return (
                  <article
                    key={rel.id}
                    className="group bg-white rounded-2xl border border-[#DFE6EB] hover:border-[#087F83]/70 transition-all overflow-hidden flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      {(rel.imageUrl || rel.cropRegion) && (
                        <Link
                          to={`/news-events/${relSlug}`}
                          className="h-44 w-full bg-[#EFF7FA] overflow-hidden block"
                        >
                          <ReferencePhotoCrop
                            crop={rel.cropRegion || { x: 0, y: 0, w: 100, h: 100 }}
                            imageSrc={rel.imageUrl}
                            alt={rel.title}
                            className="w-full h-full group-hover:scale-[1.03] transition-transform duration-200"
                          />
                        </Link>
                      )}
                      <div className="p-5">
                        <div className="text-xs font-semibold text-[#087F83] mb-1">
                          {rel.category} · {rel.dateLabel}
                        </div>
                        <h3 className="text-base font-bold text-[#102C4B] group-hover:text-[#087F83] transition-colors mb-2 leading-snug">
                          <Link to={`/news-events/${relSlug}`}>{rel.title}</Link>
                        </h3>
                        <p className="text-xs text-[#536477] line-clamp-2 leading-relaxed">
                          {rel.summary}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 py-3.5 bg-[#F7F9FA] border-t border-[#DFE6EB] flex items-center justify-between">
                      <Link
                        to={`/news-events/${relSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#087F83] hover:underline"
                      >
                        <span>Read Full Report</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <DonationAppealSection />
    </>
  );
};
