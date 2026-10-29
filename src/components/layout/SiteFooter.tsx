import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Globe,
  Phone,
  Settings,
  ArrowUpRight,
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const SiteFooter: React.FC = () => {
  const { config, setIsCmsOpen, inquiries } = useSite();
  const newInquiryCount = inquiries.filter((i) => i.status === 'New').length;

  return (
    <footer className="bg-white border-t border-[#DFE6EB] text-[#102C4B]">
      {/* Reference-aligned Compact Institutional Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-[#DFE6EB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Logo & Positioning */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="inline-block py-1">
              <img
                src={config.organization.logos.foundation}
                alt="Ayurgreen Foundation"
                className="h-14 sm:h-16 w-auto object-contain max-w-[240px] sm:max-w-[280px]"
              />
            </Link>
            <p className="text-sm font-semibold text-[#102C4B]">
              {config.organization.tagline}
            </p>
            <p className="text-xs text-[#536477] leading-relaxed max-w-sm">
              Established on {config.organization.establishedDate} as a{' '}
              {config.organization.legalStatus} and the social impact arm of{' '}
              {config.organization.parentGroup}.
            </p>
          </div>

          {/* Column 2: Verified Location */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
              <div className="text-sm text-[#102C4B]">
                <p className="font-semibold">{config.contact.officeTitle}</p>
                <p className="text-[#536477]">
                  {config.contact.addressLine1}, {config.contact.addressLine2},{' '}
                  {config.contact.stateCountry}
                </p>
                <a
                  href={config.contact.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#087F83] hover:underline mt-1"
                >
                  <span>View Location on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Official Contact & Domain */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-[#087F83] shrink-0" />
              <Link
                to="/contact"
                className="text-[#102C4B] hover:text-[#087F83] transition-colors"
              >
                {config.contact.email}
              </Link>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Globe className="w-4 h-4 text-[#087F83] shrink-0" />
              <span className="text-[#536477]">{config.organization.domain}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-[#087F83] shrink-0" />
              <span className="text-xs text-[#536477]">{config.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Sitemap Navigation Grid */}
      <div className="bg-[#F7F9FA] border-b border-[#DFE6EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#102C4B] mb-3">
                The Foundation
              </h3>
              <ul className="space-y-2 text-xs text-[#536477]">
                <li>
                  <Link to="/about" className="hover:text-[#087F83] transition-colors">
                    About Us &amp; Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/about#vision-mission" className="hover:text-[#087F83] transition-colors">
                    Vision, Mission &amp; Values
                  </Link>
                </li>
                <li>
                  <Link to="/about#leadership" className="hover:text-[#087F83] transition-colors">
                    Leadership &amp; Governance
                  </Link>
                </li>
                <li>
                  <Link to="/about#institutions" className="hover:text-[#087F83] transition-colors">
                    Associated Institutions
                  </Link>
                </li>
                <li>
                  <Link to="/transparency" className="hover:text-[#087F83] transition-colors">
                    Transparency &amp; Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#102C4B] mb-3">
                Our Programmes
              </h3>
              <ul className="space-y-2 text-xs text-[#536477]">
                {config.programmes.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/programmes/${p.slug}`}
                      className="hover:text-[#087F83] transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#102C4B] mb-3">
                Education &amp; Awareness
              </h3>
              <ul className="space-y-2 text-xs text-[#536477]">
                <li>
                  <Link
                    to="/stroke-force"
                    className="font-semibold text-[#087F83] hover:underline"
                  >
                    Stroke Force Initiative
                  </Link>
                </li>
                {config.programmes.slice(5).map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/programmes/${p.slug}`}
                      className="hover:text-[#087F83] transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/impact" className="hover:text-[#087F83] transition-colors">
                    Impact Stories &amp; Outcomes
                  </Link>
                </li>
                <li>
                  <Link to="/news-events" className="hover:text-[#087F83] transition-colors">
                    News &amp; Events
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-[#087F83] transition-colors">
                    Media Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#102C4B] mb-3">
                Get Involved
              </h3>
              <ul className="space-y-2 text-xs text-[#536477]">
                <li>
                  <Link to="/get-involved" className="hover:text-[#087F83] transition-colors">
                    Participation Overview
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="hover:text-[#087F83] transition-colors">
                    Donate &amp; Support Care
                  </Link>
                </li>
                <li>
                  <Link to="/volunteer" className="hover:text-[#087F83] transition-colors">
                    Volunteer Registration
                  </Link>
                </li>
                <li>
                  <Link to="/partner-with-us" className="hover:text-[#087F83] transition-colors">
                    CSR &amp; Institutional Partnerships
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#087F83] transition-colors">
                    Contact Administration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & CMS Studio Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#536477]">
        <div>
          © {new Date().getFullYear()} {config.organization.name}. All rights reserved.
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setIsCmsOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#087F83] hover:text-[#07565B] transition-colors cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Content &amp; Inquiry Studio (CMS)</span>
            {newInquiryCount > 0 && (
              <span className="font-bold tabular-nums">({newInquiryCount} new)</span>
            )}
          </button>
          <span aria-hidden="true">·</span>
          <Link to="/privacy-policy" className="hover:text-[#102C4B] transition-colors">
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms" className="hover:text-[#102C4B] transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};
