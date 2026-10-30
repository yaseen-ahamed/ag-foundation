import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  HeartHandshake,
  Users,
  Handshake,
  ShieldCheck,
  Image as ImageIcon,
  Newspaper,
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import {
  STROKE_FORCE_PHOTO,
  VOLUNTEER_ACTIVITY_PHOTO,
} from '../visuals/FoundationVisual';

export const SiteHeader: React.FC = () => {
  const { config, setIsSearchOpen } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);
  const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);
  const [mobileProgrammesExpanded, setMobileProgrammesExpanded] = useState(false);
  const [mobileInvolvedExpanded, setMobileInvolvedExpanded] = useState(false);

  const location = useLocation();
  const progMenuRef = useRef<HTMLDivElement>(null);
  const invMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProgrammesDropdownOpen(false);
    setInvolvedDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProgrammesDropdownOpen(false);
        setInvolvedDropdownOpen(false);
        setMobileMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (progMenuRef.current && !progMenuRef.current.contains(e.target as Node)) {
        setProgrammesDropdownOpen(false);
      }
      if (invMenuRef.current && !invMenuRef.current.contains(e.target as Node)) {
        setInvolvedDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsSearchOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-nav relative py-2 text-[14px] font-semibold uppercase tracking-[0.055em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F83] ${
      isActive
        ? 'text-[#087F83] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#087F83]'
        : 'text-[#102C4B] hover:text-[#087F83]'
    }`;

  const isProgrammesActive = location.pathname.startsWith('/programmes');
  const isInvolvedActive =
    location.pathname.startsWith('/get-involved') ||
    location.pathname.startsWith('/donate') ||
    location.pathname.startsWith('/volunteer') ||
    location.pathname.startsWith('/partner-with-us');

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#DFE6EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Official Ayurgreen Foundation Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F83] py-1"
          aria-label="Ayurgreen Foundation — Home"
        >
          <img
            src={config.organization.logos.foundation}
            alt="Ayurgreen Foundation"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]"
          />
        </Link>

        {/* Zone 2: Desktop Primary Navigation (Personalis Semi-Condensed Uppercase) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          <NavLink to="/about" className={navLinkClass}>
            Who We Are
          </NavLink>

          {/* Our Programmes Dropdown */}
          <div
            ref={progMenuRef}
            className="relative"
            onMouseEnter={() => setProgrammesDropdownOpen(true)}
            onMouseLeave={() => setProgrammesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <NavLink
                to="/programmes"
                className={() =>
                  `font-nav relative py-2 text-[14px] font-semibold uppercase tracking-[0.055em] transition-colors whitespace-nowrap shrink-0 ${
                    isProgrammesActive
                      ? 'text-[#087F83] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#087F83]'
                      : 'text-[#102C4B] hover:text-[#087F83]'
                  }`
                }
              >
                Our Programmes
              </NavLink>
              <button
                type="button"
                aria-expanded={programmesDropdownOpen}
                aria-label="Toggle Our Programmes submenu"
                onClick={() => setProgrammesDropdownOpen((prev) => !prev)}
                className="p-1 text-[#536477] hover:text-[#087F83] rounded focus-visible:outline-2 focus-visible:outline-[#087F83]"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    programmesDropdownOpen ? 'rotate-180 text-[#087F83]' : ''
                  }`}
                />
              </button>
            </div>

            {programmesDropdownOpen && (
              <div
                role="menu"
                aria-label="Our Programmes"
                className="absolute -left-44 xl:-left-28 top-full pt-2 w-[820px] xl:w-[880px] z-50"
              >
                <div className="bg-white rounded-2xl border border-[#DFE6EB] shadow-xl p-6 flex items-stretch gap-6 xl:gap-7">
                  {/* Left Side: Dropdown Pages List */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DFE6EB]">
                      <span className="font-nav text-xs font-semibold uppercase tracking-[0.06em] text-[#536477]">
                        Core Initiatives ({config.programmes.length})
                      </span>
                      <Link
                        to="/programmes"
                        className="text-xs font-semibold text-[#087F83] hover:underline inline-flex items-center gap-1"
                      >
                        View All Programmes
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {config.programmes.map((prog) => (
                        <Link
                          key={prog.slug}
                          to={`/programmes/${prog.slug}`}
                          role="menuitem"
                          className="group p-2 rounded-lg hover:bg-[#EFF7FA] transition-colors flex flex-col"
                        >
                          <span className="text-sm font-semibold text-[#102C4B] group-hover:text-[#087F83] transition-colors">
                            {prog.title}
                          </span>
                          <span className="text-xs text-[#536477] line-clamp-1 mt-0.5">
                            {prog.category}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Personalis-Style Featured Image + Brief + Redirection Button */}
                  <div className="w-[340px] xl:w-[360px] shrink-0 border-l border-[#DFE6EB] pl-6 xl:pl-7 flex items-center gap-5">
                    <div className="w-36 xl:w-40 h-36 rounded-2xl overflow-hidden shrink-0 bg-[#EFF7FA] border border-[#DFE6EB]/60 shadow-2xs">
                      <img
                        src={STROKE_FORCE_PHOTO}
                        alt="Stroke Force Community Initiative"
                        className="w-full h-full object-cover object-[64%_center]"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-nav text-sm font-semibold uppercase tracking-[0.055em] text-[#102C4B] mb-2">
                        Stroke Force
                      </span>
                      <p className="text-xs sm:text-[13px] text-[#536477] leading-relaxed mb-4">
                        Together, we can equip communities to recognise stroke signs and save lives.
                      </p>
                      <Link
                        to="/stroke-force"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#087F83] text-[#087F83] hover:bg-[#087F83] hover:text-white text-xs font-semibold transition-colors"
                      >
                        Stroke Force
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/stroke-force" className={navLinkClass}>
            Stroke Force
          </NavLink>

          <NavLink to="/impact" className={navLinkClass}>
            Our Impact
          </NavLink>

          {/* Get Involved Dropdown */}
          <div
            ref={invMenuRef}
            className="relative"
            onMouseEnter={() => setInvolvedDropdownOpen(true)}
            onMouseLeave={() => setInvolvedDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <NavLink
                to="/get-involved"
                className={() =>
                  `font-nav relative py-2 text-[14px] font-semibold uppercase tracking-[0.055em] transition-colors whitespace-nowrap shrink-0 ${
                    isInvolvedActive
                      ? 'text-[#087F83] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#087F83]'
                      : 'text-[#102C4B] hover:text-[#087F83]'
                  }`
                }
              >
                Get Involved
              </NavLink>
              <button
                type="button"
                aria-expanded={involvedDropdownOpen}
                aria-label="Toggle Get Involved submenu"
                onClick={() => setInvolvedDropdownOpen((prev) => !prev)}
                className="p-1 text-[#536477] hover:text-[#087F83] rounded focus-visible:outline-2 focus-visible:outline-[#087F83]"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    involvedDropdownOpen ? 'rotate-180 text-[#087F83]' : ''
                  }`}
                />
              </button>
            </div>

            {involvedDropdownOpen && (
              <div
                role="menu"
                aria-label="Get Involved & Resources"
                className="absolute right-0 top-full pt-2 w-[640px] xl:w-[680px] z-50"
              >
                <div className="bg-white rounded-2xl border border-[#DFE6EB] shadow-xl p-6 flex items-stretch gap-6 xl:gap-7">
                  {/* Left Side: Dropdown Pages List */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <Link
                      to="/donate"
                      role="menuitem"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#EFF7FA] transition-colors"
                    >
                      <HeartHandshake className="w-4 h-4 text-[#087F83] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#102C4B]">Donate</div>
                        <div className="text-xs text-[#536477]">Support healthcare &amp; rehabilitation</div>
                      </div>
                    </Link>
                    <Link
                      to="/volunteer"
                      role="menuitem"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#EFF7FA] transition-colors"
                    >
                      <Users className="w-4 h-4 text-[#087F83] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#102C4B]">Volunteer With Us</div>
                        <div className="text-xs text-[#536477]">Join medical camps &amp; Stroke Force</div>
                      </div>
                    </Link>
                    <Link
                      to="/partner-with-us"
                      role="menuitem"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#EFF7FA] transition-colors"
                    >
                      <Handshake className="w-4 h-4 text-[#087F83] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#102C4B]">Partner With Us</div>
                        <div className="text-xs text-[#536477]">CSR &amp; institutional collaboration</div>
                      </div>
                    </Link>
                    <div className="my-1.5 border-t border-[#DFE6EB]" />
                    <Link
                      to="/news-events"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-[#536477] hover:text-[#102C4B] hover:bg-[#F7F9FA]"
                    >
                      <Newspaper className="w-3.5 h-3.5 text-[#087F83]" />
                      <span>News &amp; Events Archive</span>
                    </Link>
                    <Link
                      to="/gallery"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-[#536477] hover:text-[#102C4B] hover:bg-[#F7F9FA]"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#087F83]" />
                      <span>Media Gallery</span>
                    </Link>
                    <Link
                      to="/transparency"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-[#536477] hover:text-[#102C4B] hover:bg-[#F7F9FA]"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#087F83]" />
                      <span>Transparency &amp; Governance</span>
                    </Link>
                  </div>

                  {/* Right Side: Personalis-Style Featured Image + Brief + Redirection Button */}
                  <div className="w-[330px] xl:w-[350px] shrink-0 border-l border-[#DFE6EB] pl-6 xl:pl-7 flex items-center gap-5">
                    <div className="w-36 xl:w-40 h-36 rounded-2xl overflow-hidden shrink-0 bg-[#EFF7FA] border border-[#DFE6EB]/60 shadow-2xs">
                      <img
                        src={VOLUNTEER_ACTIVITY_PHOTO}
                        alt="Join Our Mission at Ayurgreen Foundation"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-nav text-sm font-semibold uppercase tracking-[0.055em] text-[#102C4B] mb-2">
                        Join Our Mission
                      </span>
                      <p className="text-xs sm:text-[13px] text-[#536477] leading-relaxed mb-4">
                        Together, we can transform the future of community healthcare and rehabilitation.
                      </p>
                      <Link
                        to="/volunteer"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#087F83] text-[#087F83] hover:bg-[#087F83] hover:text-white text-xs font-semibold transition-colors"
                      >
                        Volunteer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Zone 3: Prominent Primary Action + Search Trigger */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            to="/donate"
            className="font-nav hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-[14px] font-semibold uppercase tracking-[0.055em] transition-colors whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F83]"
          >
            <span>Support Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search website (Ctrl+K)"
            className="p-2.5 rounded-md text-[#102C4B] hover:bg-[#EFF7FA] hover:text-[#087F83] transition-colors focus-visible:outline-2 focus-visible:outline-[#087F83]"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2.5 rounded-lg text-[#102C4B] hover:bg-[#EFF7FA] transition-colors focus-visible:outline-2 focus-visible:outline-[#087F83]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DFE6EB] bg-white max-h-[82vh] overflow-y-auto shadow-xl">
          <div className="px-4 py-5 space-y-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#EFF7FA] text-[#087F83] font-semibold' : 'text-[#102C4B]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#EFF7FA] text-[#087F83] font-semibold' : 'text-[#102C4B]'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Accordion: Our Programmes */}
            <div className="rounded-lg border border-[#DFE6EB]/80 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2.5 bg-[#F7F9FA]">
                <Link
                  to="/programmes"
                  className="text-base font-semibold text-[#102C4B]"
                >
                  Our Programmes
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileProgrammesExpanded((p) => !p)}
                  aria-expanded={mobileProgrammesExpanded}
                  aria-label="Expand programmes list"
                  className="p-1.5 text-[#536477]"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileProgrammesExpanded ? 'rotate-180 text-[#087F83]' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileProgrammesExpanded && (
                <div className="px-3 py-2 bg-white space-y-1 border-t border-[#DFE6EB]/60">
                  {config.programmes.map((prog) => (
                    <Link
                      key={prog.slug}
                      to={`/programmes/${prog.slug}`}
                      className="block py-2 px-2 rounded text-sm text-[#536477] hover:text-[#087F83] hover:bg-[#EFF7FA]"
                    >
                      {prog.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/stroke-force"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#EFF7FA] text-[#087F83] font-semibold' : 'text-[#102C4B]'
                }`
              }
            >
              Stroke Force
            </NavLink>

            <NavLink
              to="/impact"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#EFF7FA] text-[#087F83] font-semibold' : 'text-[#102C4B]'
                }`
              }
            >
              Our Impact
            </NavLink>

            {/* Mobile Accordion: Get Involved & Resources */}
            <div className="rounded-lg border border-[#DFE6EB]/80 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2.5 bg-[#F7F9FA]">
                <Link
                  to="/get-involved"
                  className="text-base font-semibold text-[#102C4B]"
                >
                  Get Involved &amp; Resources
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileInvolvedExpanded((p) => !p)}
                  aria-expanded={mobileInvolvedExpanded}
                  aria-label="Expand get involved options"
                  className="p-1.5 text-[#536477]"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileInvolvedExpanded ? 'rotate-180 text-[#087F83]' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileInvolvedExpanded && (
                <div className="px-3 py-2 bg-white space-y-1 border-t border-[#DFE6EB]/60">
                  <Link
                    to="/donate"
                    className="block py-2 px-2 rounded text-sm font-medium text-[#102C4B] hover:bg-[#EFF7FA]"
                  >
                    Donate
                  </Link>
                  <Link
                    to="/volunteer"
                    className="block py-2 px-2 rounded text-sm font-medium text-[#102C4B] hover:bg-[#EFF7FA]"
                  >
                    Volunteer With Us
                  </Link>
                  <Link
                    to="/partner-with-us"
                    className="block py-2 px-2 rounded text-sm font-medium text-[#102C4B] hover:bg-[#EFF7FA]"
                  >
                    Partner With Us
                  </Link>
                  <Link
                    to="/news-events"
                    className="block py-2 px-2 rounded text-sm text-[#536477] hover:bg-[#EFF7FA]"
                  >
                    News &amp; Events
                  </Link>
                  <Link
                    to="/gallery"
                    className="block py-2 px-2 rounded text-sm text-[#536477] hover:bg-[#EFF7FA]"
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/transparency"
                    className="block py-2 px-2 rounded text-sm text-[#536477] hover:bg-[#EFF7FA]"
                  >
                    Transparency &amp; Governance
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#EFF7FA] text-[#087F83] font-semibold' : 'text-[#102C4B]'
                }`
              }
            >
              Contact
            </NavLink>

            <div className="pt-3">
              <Link
                to="/donate"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#087F83] text-white text-sm font-semibold"
              >
                <span>Support Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
