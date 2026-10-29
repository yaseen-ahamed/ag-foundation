import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
}) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes('Ayurgreen Foundation')
      ? title
      : `${title} | Ayurgreen Foundation`;
    document.title = fullTitle;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const path = canonicalPath ?? location.pathname;
      canonical.setAttribute('href', `https://ayurgreenfoundation.org${path}`);
    }
  }, [title, description, canonicalPath, location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
};

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[]; light?: boolean }> = ({
  items,
  light = false,
}) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
          light ? 'text-white/80' : 'text-[#536477]'
        }`}
      >
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors ${
              light ? 'hover:text-white' : 'hover:text-[#087F83]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={`transition-colors ${
                    light ? 'hover:text-white' : 'hover:text-[#087F83]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={light ? 'text-white font-semibold' : 'text-[#102C4B] font-semibold'}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: 'left' | 'center' | 'split';
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  kicker,
  align = 'left',
  action,
}) => {
  if (align === 'split') {
    return (
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#DFE6EB]">
        <div className="max-w-3xl">
          <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
          {kicker && (
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
              {kicker}
            </p>
          )}
          <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-editorial font-light text-[#102C4B] leading-[1.1] tracking-[-0.025em]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-[17px] text-[#536477] max-w-2xl leading-relaxed mt-3.5">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center flex flex-col items-center' : ''
      }`}
    >
      <div className="w-20 h-[2px] bg-[#087F83] mb-5" aria-hidden="true" />
      {kicker && (
        <p className="font-nav text-xs font-semibold uppercase tracking-[0.08em] text-[#087F83] mb-2">
          {kicker}
        </p>
      )}
      <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-editorial font-light text-[#102C4B] leading-[1.1] tracking-[-0.025em]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-[17px] text-[#536477] max-w-2xl leading-relaxed mt-3.5">
          {subtitle}
        </p>
      )}
    </div>
  );
};


