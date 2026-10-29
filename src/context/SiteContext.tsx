import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SiteConfiguration,
  INITIAL_SITE_CONFIG,
  InquirySubmission,
  NewsEventItem,
  ImpactStoryItem,
  GovernanceDocument,
} from '../data/siteConfig';

interface SiteContextValue {
  config: SiteConfiguration;
  updateConfig: (updater: (prev: SiteConfiguration) => SiteConfiguration) => void;
  resetConfig: () => void;
  inquiries: InquirySubmission[];
  submitInquiry: (
    submission: Omit<InquirySubmission, 'id' | 'createdAt' | 'status'>
  ) => InquirySubmission;
  updateInquiryStatus: (id: string, status: InquirySubmission['status']) => void;
  addNewsItem: (item: Omit<NewsEventItem, 'id'>) => void;
  addStoryItem: (item: Omit<ImpactStoryItem, 'id'>) => void;
  addGovernanceDoc: (doc: Omit<GovernanceDocument, 'id'>) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCmsOpen: boolean;
  setIsCmsOpen: (open: boolean) => void;
  exportSiteJson: () => string;
  importSiteJson: (rawJson: string) => { success: boolean; error?: string };
}

const CONFIG_STORAGE_KEY = 'ayurgreen_foundation_site_config_v3';
const INQUIRIES_STORAGE_KEY = 'ayurgreen_foundation_inquiries_v1';

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfiguration>(() => {
    try {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_SITE_CONFIG, ...parsed };
      }
    } catch {
      // Fallback to initial config
    }
    return INITIAL_SITE_CONFIG;
  });

  const [inquiries, setInquiries] = useState<InquirySubmission[]>(() => {
    try {
      const saved = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback to empty array
    }
    return [];
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCmsOpen, setIsCmsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage quota errors
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(inquiries));
    } catch {
      // Ignore storage quota errors
    }
  }, [inquiries]);

  const updateConfig = (updater: (prev: SiteConfiguration) => SiteConfiguration) => {
    setConfig((prev) => updater(prev));
  };

  const resetConfig = () => {
    setConfig(INITIAL_SITE_CONFIG);
    localStorage.removeItem(CONFIG_STORAGE_KEY);
  };

  const submitInquiry = (
    submission: Omit<InquirySubmission, 'id' | 'createdAt' | 'status'>
  ): InquirySubmission => {
    const newEntry: InquirySubmission = {
      ...submission,
      id: `INQ-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      status: 'New',
    };
    setInquiries((prev) => [newEntry, ...prev]);
    return newEntry;
  };

  const updateInquiryStatus = (id: string, status: InquirySubmission['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const addNewsItem = (item: Omit<NewsEventItem, 'id'>) => {
    const newItem: NewsEventItem = {
      ...item,
      id: `news-${Date.now()}`,
    };
    setConfig((prev) => ({
      ...prev,
      newsEvents: [newItem, ...prev.newsEvents],
    }));
  };

  const addStoryItem = (item: Omit<ImpactStoryItem, 'id'>) => {
    const newItem: ImpactStoryItem = {
      ...item,
      id: `story-${Date.now()}`,
    };
    setConfig((prev) => ({
      ...prev,
      impactStories: [newItem, ...prev.impactStories],
    }));
  };

  const addGovernanceDoc = (doc: Omit<GovernanceDocument, 'id'>) => {
    const newDoc: GovernanceDocument = {
      ...doc,
      id: `gov-${Date.now()}`,
    };
    setConfig((prev) => ({
      ...prev,
      governanceDocs: [newDoc, ...prev.governanceDocs],
    }));
  };

  const exportSiteJson = () => {
    return JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        platform: 'Ayurgreen Foundation CMS Export',
        config,
        inquiries,
      },
      null,
      2
    );
  };

  const importSiteJson = (rawJson: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(rawJson);
      if (parsed.config && parsed.config.organization) {
        setConfig(parsed.config);
        if (Array.isArray(parsed.inquiries)) {
          setInquiries(parsed.inquiries);
        }
        return { success: true };
      }
      return {
        success: false,
        error: 'Invalid JSON structure: missing Ayurgreen Foundation configuration root.',
      };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Unable to parse JSON file.',
      };
    }
  };

  return (
    <SiteContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        inquiries,
        submitInquiry,
        updateInquiryStatus,
        addNewsItem,
        addStoryItem,
        addGovernanceDoc,
        isSearchOpen,
        setIsSearchOpen,
        isCmsOpen,
        setIsCmsOpen,
        exportSiteJson,
        importSiteJson,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = (): SiteContextValue => {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return ctx;
};
