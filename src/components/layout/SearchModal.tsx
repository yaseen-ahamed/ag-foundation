import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

interface SearchResultItem {
  title: string;
  category: string;
  description: string;
  route: string;
}

export const SearchModal: React.FC = () => {
  const { config, isSearchOpen, setIsSearchOpen } = useSite();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  const allSearchItems = useMemo<SearchResultItem[]>(() => {
    const staticPages: SearchResultItem[] = [
      {
        title: 'Home — Ayurgreen Foundation',
        category: 'Page',
        description: 'Healthcare & Education for Social Impact — Overview, Stroke Force, Programmes, and Impact.',
        route: '/',
      },
      {
        title: 'About Us — Vision, Mission & Story',
        category: 'Page',
        description: 'Established on 24 May 2022 as a Section 8 non-profit company and social impact arm of Ayurgreen Group.',
        route: '/about',
      },
      {
        title: 'Stroke Force — Community Stroke Awareness',
        category: 'Priority Initiative',
        description: 'Recognising Stroke Signs. Acting Fast. Saving Lives. BE FAST stroke warning signs and Training of Trainers (ToT).',
        route: '/stroke-force',
      },
      {
        title: 'Our Programmes Directory',
        category: 'Directory',
        description: 'Explore all 8 healthcare, rehabilitation, education, and community outreach initiatives.',
        route: '/programmes',
      },
      {
        title: 'Our Impact & Recovery Stories',
        category: 'Impact',
        description: 'Qualitative impact pillars, beneficiary journeys, and volunteer experiences.',
        route: '/impact',
      },
      {
        title: 'Media Gallery',
        category: 'Archive',
        description: 'Photographs across Medical Camps, Rehabilitation Activities, Volunteer Activities, and Outreach.',
        route: '/gallery',
      },
      {
        title: 'News & Events',
        category: 'Updates',
        description: 'Programme reports, medical camp updates, awareness campaigns, and official announcements.',
        route: '/news-events',
      },
      {
        title: 'Get Involved',
        category: 'Participation',
        description: 'Ways to support Ayurgreen Foundation: Donate, Volunteer, Partner With Us, and Stroke Force.',
        route: '/get-involved',
      },
      {
        title: 'Donate — Support Healthcare & Rehabilitation',
        category: 'Support',
        description: 'UPI, bank transfer, areas of support, and financial transparency commitment.',
        route: '/donate',
      },
      {
        title: 'Volunteer With Us',
        category: 'Participation',
        description: 'Online volunteer registration for medical camps, rehabilitation support, and Stroke Force.',
        route: '/volunteer',
      },
      {
        title: 'Partner With Us — CSR & Institutional Collaboration',
        category: 'Partnerships',
        description: 'CSR collaborations, institutional partnerships, and sponsorship opportunities.',
        route: '/partner-with-us',
      },
      {
        title: 'Transparency & Governance',
        category: 'Governance',
        description: 'Section 8 registration details, governance structure, annual reports, and compliance policies.',
        route: '/transparency',
      },
      {
        title: 'Contact Us — Edappal, Malappuram, Kerala',
        category: 'Contact',
        description: 'Admin Office, Ayurgreen Campus, Edappal, Kavilpadi, Malappuram, Kerala.',
        route: '/contact',
      },
    ];

    const progItems: SearchResultItem[] = config.programmes.map((p) => ({
      title: p.title,
      category: `Programme · ${p.category}`,
      description: p.summary,
      route: `/programmes/${p.slug}`,
    }));

    const instItems: SearchResultItem[] = config.associatedInstitutions.map((inst) => ({
      title: inst.name,
      category: 'Associated Institution',
      description: inst.description,
      route: inst.internalRoute || '/about#institutions',
    }));

    return [...staticPages, ...progItems, ...instItems];
  }, [config]);

  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return allSearchItems.slice(0, 8);
    return allSearchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(trimmed) ||
        item.description.toLowerCase().includes(trimmed) ||
        item.category.toLowerCase().includes(trimmed)
    );
  }, [query, allSearchItems]);

  if (!isSearchOpen) return null;

  const handleSelect = (route: string) => {
    setIsSearchOpen(false);
    navigate(route);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Ayurgreen Foundation website"
      className="fixed inset-0 z-50 bg-[#102C4B]/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl border border-[#DFE6EB] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#DFE6EB]">
          <Search className="w-5 h-5 text-[#087F83] shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, Stroke Force, BE FAST, rehabilitation, governance..."
            className="w-full text-sm sm:text-base text-[#102C4B] placeholder:text-[#536477]/70 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
            className="p-1.5 rounded-lg text-[#536477] hover:text-[#102C4B] hover:bg-[#F7F9FA]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-[#DFE6EB]/60">
          {filteredResults.length === 0 ? (
            <div className="py-12 px-6 text-center">
              <p className="text-base font-semibold text-[#102C4B]">
                No matching pages or programmes found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#536477] mt-1">
                Try searching for Charity Care, Rehab Village, Stroke Force, Volunteer, or Contact.
              </p>
            </div>
          ) : (
            filteredResults.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(item.route)}
                className="w-full text-left p-3.5 hover:bg-[#EFF7FA] rounded-xl transition-colors flex items-start justify-between gap-4 group"
              >
                <div>
                  <div className="text-xs text-[#087F83] font-medium mb-0.5">
                    {item.category}
                  </div>
                  <div className="text-sm font-semibold text-[#102C4B] group-hover:text-[#087F83]">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#536477] line-clamp-1 mt-0.5">
                    {item.description}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#536477] group-hover:text-[#087F83] shrink-0 mt-2" />
              </button>
            ))
          )}
        </div>

        <div className="px-5 py-3 bg-[#F7F9FA] border-t border-[#DFE6EB] flex items-center justify-between text-xs text-[#536477]">
          <span>Press ESC to close</span>
          <span>Ayurgreen Foundation Site Directory</span>
        </div>
      </div>
    </div>
  );
};
