import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { ImpactStoryItem, NewsEventItem } from '../data/siteConfig';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';
import { ReferencePhotoCrop } from '../components/visuals/FoundationVisual';
import {
  ImpactMetricsStrip,
  CharityCareImpactSection,
  ParticipationBanner,
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

      <ParticipationBanner />
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
                    {item.cropRegion && (
                      <ReferencePhotoCrop
                        crop={item.cropRegion}
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
              {activeItem.cropRegion && (
                <ReferencePhotoCrop
                  crop={activeItem.cropRegion}
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

      <ParticipationBanner />
    </>
  );
};

export const NewsEventsPage: React.FC = () => {
  const { config, setIsCmsOpen } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsEventItem | null>(null);

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
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#DFE6EB] overflow-hidden flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    {item.cropRegion && (
                      <div className="h-44 w-full bg-[#EFF7FA]">
                        <ReferencePhotoCrop
                          crop={item.cropRegion}
                          alt={item.title}
                          className="w-full h-full"
                        />
                      </div>
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
                      <h3 className="text-lg font-bold text-[#102C4B] mb-2 leading-snug">
                        {item.title}
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
                    <button
                      type="button"
                      onClick={() => setActiveArticle(item)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#087F83] hover:underline cursor-pointer"
                    >
                      <span>Read Full Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {item.isPlaceholder && (
                      <span className="text-[11px] text-[#536477]">
                        Template Slot
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
          className="fixed inset-0 z-50 bg-[#102C4B]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl border border-[#DFE6EB] shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-[#087F83] font-semibold mb-1">
                  {activeArticle.category} · {activeArticle.dateLabel} · {activeArticle.locationLabel}
                </div>
                <h2 className="text-2xl font-editorial text-[#102C4B]">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Close report"
                className="p-1.5 rounded-lg text-[#536477] hover:text-[#102C4B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#536477] leading-relaxed">
              {activeArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#DFE6EB] flex items-center justify-between">
              <Link
                to={activeArticle.relatedRoute}
                onClick={() => setActiveArticle(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F83] hover:underline"
              >
                <span>Visit Related Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-md bg-[#102C4B] text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <ParticipationBanner />
    </>
  );
};
