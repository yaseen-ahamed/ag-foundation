import React, { useState } from 'react';
import {
  X,
  Download,
  Upload,
  RotateCcw,
  CheckCircle2,
  Inbox,
  Sliders,
  BarChart3,
  FilePlus2,
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const CmsStudioModal: React.FC = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    inquiries,
    updateInquiryStatus,
    addNewsItem,
    isCmsOpen,
    setIsCmsOpen,
    exportSiteJson,
    importSiteJson,
  } = useSite();

  const [activeTab, setActiveTab] = useState<'inquiries' | 'contact-donate' | 'impact' | 'publish' | 'export'>('inquiries');
  const [statusBanner, setStatusBanner] = useState<string | null>(null);
  const [importError, setImportError] = useState<string | null>(null);

  // Quick News Publisher form state
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState<'Programme Reports' | 'Medical Camps' | 'Awareness Campaigns' | 'Foundation Events' | 'Volunteer Activities' | 'Announcements'>('Programme Reports');
  const [newsDate, setNewsDate] = useState('');
  const [newsSummary, setNewsSummary] = useState('');

  if (!isCmsOpen) return null;

  const showToast = (msg: string) => {
    setStatusBanner(msg);
    setTimeout(() => setStatusBanner(null), 4000);
  };

  const handleDownloadJson = () => {
    const jsonStr = exportSiteJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ayurgreen-foundation-cms-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Exported complete site configuration and inquiry archive as JSON.');
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImportError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = importSiteJson(String(reader.result));
      if (result.success) {
        showToast('Imported site configuration successfully.');
      } else {
        setImportError(result.error || 'Import failed.');
      }
    };
    reader.readAsText(file);
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsSummary.trim()) return;
    addNewsItem({
      title: newsTitle.trim(),
      category: newsCategory,
      dateLabel: newsDate.trim() || new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
      locationLabel: 'Ayurgreen Foundation, Kerala',
      summary: newsSummary.trim(),
      content: [newsSummary.trim()],
      relatedRoute: '/news-events',
      isPlaceholder: false,
    });
    setNewsTitle('');
    setNewsDate('');
    setNewsSummary('');
    showToast('Published new update to the News & Events archive.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ayurgreen Foundation Content & Inquiry Studio"
      className="fixed inset-0 z-50 bg-[#102C4B]/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={() => setIsCmsOpen(false)}
    >
      <div
        className="w-full max-w-4xl max-h-[88vh] bg-white rounded-2xl border border-[#DFE6EB] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#102C4B] text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg font-editorial">
              Ayurgreen Foundation — Content &amp; Inquiry Studio (Local CMS)
            </h2>
            <p className="text-xs text-white/75">
              Non-technical administration for contact details, verified impact figures, form submissions, and portable JSON export.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsCmsOpen(false)}
            aria-label="Close CMS Studio"
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-[#F7F9FA] border-b border-[#DFE6EB] flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('inquiries')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'inquiries'
                ? 'bg-[#087F83] text-white'
                : 'text-[#102C4B] hover:bg-[#EFF7FA]'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Inquiries Inbox ({inquiries.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contact-donate')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'contact-donate'
                ? 'bg-[#087F83] text-white'
                : 'text-[#102C4B] hover:bg-[#EFF7FA]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Contact &amp; Donation Setup</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('impact')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'impact'
                ? 'bg-[#087F83] text-white'
                : 'text-[#102C4B] hover:bg-[#EFF7FA]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Impact Metrics</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('publish')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'publish'
                ? 'bg-[#087F83] text-white'
                : 'text-[#102C4B] hover:bg-[#EFF7FA]'
            }`}
          >
            <FilePlus2 className="w-3.5 h-3.5" />
            <span>Publish News Update</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('export')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'export'
                ? 'bg-[#087F83] text-white'
                : 'text-[#102C4B] hover:bg-[#EFF7FA]'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>JSON Export / Reset</span>
          </button>
        </div>

        {statusBanner && (
          <div className="px-6 py-2.5 bg-[#EFF7FA] border-b border-[#087F83]/30 text-xs font-semibold text-[#07565B] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#087F83]" />
            <span>{statusBanner}</span>
          </div>
        )}

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#102C4B]">
                    Submitted Volunteer, Partnership &amp; Contact Inquiries
                  </h3>
                  <p className="text-xs text-[#536477]">
                    All form submissions across /volunteer, /partner-with-us, and /contact are stored here and included in JSON exports.
                  </p>
                </div>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-8 rounded-xl border border-[#DFE6EB] bg-[#F7F9FA] text-center">
                  <p className="text-sm font-semibold text-[#102C4B]">No inquiries received yet</p>
                  <p className="text-xs text-[#536477] mt-1">
                    Submissions from the Volunteer, Partner With Us, and Contact forms will appear here immediately.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-xl border border-[#DFE6EB] bg-white space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#536477]">
                        <div>
                          <span className="font-bold uppercase text-[#087F83]">{inq.type}</span>
                          <span> · {inq.id} · </span>
                          <span className="tabular-nums">
                            {new Date(inq.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#102C4B]">Status: {inq.status}</span>
                          <select
                            aria-label={`Update status for ${inq.name}`}
                            value={inq.status}
                            onChange={(e) =>
                              updateInquiryStatus(
                                inq.id,
                                e.target.value as 'New' | 'Reviewed' | 'Archived'
                              )
                            }
                            className="text-xs border border-[#DFE6EB] rounded px-2 py-1 bg-[#F7F9FA]"
                          >
                            <option value="New">New</option>
                            <option value="Reviewed">Reviewed</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-[#102C4B]">
                        {inq.name} — <span className="font-normal text-[#536477]">{inq.email} · {inq.phone}</span>
                      </div>
                      <div className="text-xs text-[#536477]">
                        <strong>Location / Org:</strong> {inq.organizationOrLocation} ·{' '}
                        <strong>Focus:</strong> {inq.interestOrCategory}
                        {inq.skillsOrAvailability ? ` · Availability/Skills: ${inq.skillsOrAvailability}` : ''}
                      </div>
                      <p className="text-xs text-[#102C4B] bg-[#F7F9FA] p-3 rounded-lg">
                        {inq.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'contact-donate' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#102C4B] mb-1">
                  Official Contact &amp; Administrative Details
                </h3>
                <p className="text-xs text-[#536477] mb-4">
                  Update the verified phone number, email, and social profile URLs displayed across the header, footer, and contact page.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      value={config.contact.email}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, email: e.target.value, emailVerified: true },
                        }))
                      }
                      className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                      Official Phone Number
                    </label>
                    <input
                      type="text"
                      value={config.contact.phone}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, phone: e.target.value, phoneVerified: true },
                        }))
                      }
                      className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DFE6EB]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-bold text-[#102C4B]">
                      Donation &amp; Bank / UPI Configuration
                    </h3>
                    <p className="text-xs text-[#536477]">
                      Unverified bank details are never shown as live until you enable verified mode below.
                    </p>
                  </div>
                  <label className="inline-flex items-center gap-2 text-xs font-semibold text-[#102C4B] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.donation.isConfigured}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          donation: { ...prev.donation, isConfigured: e.target.checked },
                        }))
                      }
                      className="rounded border-[#DFE6EB] text-[#087F83]"
                    />
                    <span>Mark Payment Details as Verified</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={config.donation.bankName}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          donation: { ...prev.donation, bankName: e.target.value },
                        }))
                      }
                      className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={config.donation.accountNumber}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          donation: { ...prev.donation, accountNumber: e.target.value },
                        }))
                      }
                      className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      value={config.donation.ifscCode}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          donation: { ...prev.donation, ifscCode: e.target.value },
                        }))
                      }
                      className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                      Verified UPI ID
                    </label>
                    <input
                      type="text"
                      value={config.donation.upiId}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          donation: { ...prev.donation, upiId: e.target.value },
                        }))
                      }
                      className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#102C4B]">
                  Impact Pillars &amp; Verified Figures
                </h3>
                <p className="text-xs text-[#536477]">
                  Leave &ldquo;Verified Figure&rdquo; blank to display the qualitative impact theme, or enter an officially audited figure when ready.
                </p>
              </div>
              <div className="space-y-3">
                {config.impactPillars.map((pillar, index) => (
                  <div
                    key={pillar.id}
                    className="p-4 rounded-xl border border-[#DFE6EB] bg-[#F7F9FA] grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#087F83]">{pillar.category}</div>
                      <div className="text-sm font-bold text-[#102C4B]">{pillar.themeTitle}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#536477] mb-1">
                        Verified Figure (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Qualitative Theme Mode"
                        value={pillar.verifiedNumber}
                        onChange={(e) => {
                          const val = e.target.value;
                          updateConfig((prev) => {
                            const updated = [...prev.impactPillars];
                            updated[index] = { ...updated[index], verifiedNumber: val };
                            return { ...prev, impactPillars: updated };
                          });
                        }}
                        className="w-full px-3 py-1.5 text-sm bg-white border border-[#DFE6EB] rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#536477] mb-1">
                        Supporting Description
                      </label>
                      <input
                        type="text"
                        value={pillar.description}
                        onChange={(e) => {
                          const val = e.target.value;
                          updateConfig((prev) => {
                            const updated = [...prev.impactPillars];
                            updated[index] = { ...updated[index], description: val };
                            return { ...prev, impactPillars: updated };
                          });
                        }}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-[#DFE6EB] rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'publish' && (
            <form onSubmit={handleAddNews} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#102C4B]">
                  Publish Verified News or Event Update
                </h3>
                <p className="text-xs text-[#536477]">
                  New items appear immediately on the Homepage and /news-events archive.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                    Update Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    placeholder="e.g., Stroke Force Educator Workshop at Edappal"
                    className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                    Category
                  </label>
                  <select
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value as typeof newsCategory)}
                    className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg bg-white"
                  >
                    <option value="Programme Reports">Programme Reports</option>
                    <option value="Medical Camps">Medical Camps</option>
                    <option value="Awareness Campaigns">Awareness Campaigns</option>
                    <option value="Foundation Events">Foundation Events</option>
                    <option value="Volunteer Activities">Volunteer Activities</option>
                    <option value="Announcements">Announcements</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                  Verified Date Label
                </label>
                <input
                  type="text"
                  value={newsDate}
                  onChange={(e) => setNewsDate(e.target.value)}
                  placeholder="e.g., October 2026"
                  className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#102C4B] mb-1">
                  Summary &amp; Article Body *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newsSummary}
                  onChange={(e) => setNewsSummary(e.target.value)}
                  placeholder="Enter verified report details..."
                  className="w-full px-3 py-2 text-sm border border-[#DFE6EB] rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
              >
                Publish Update
              </button>
            </form>
          )}

          {activeTab === 'export' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-[#DFE6EB] bg-[#EFF7FA]/60 space-y-3">
                <h3 className="text-base font-bold text-[#102C4B]">
                  Export Portable CMS Configuration &amp; Inquiries (JSON)
                </h3>
                <p className="text-xs text-[#536477] leading-relaxed">
                  Download a structured JSON snapshot containing all site content, programme descriptions, impact configurations, and received form inquiries—ready for backup or headless WordPress migration.
                </p>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Site &amp; Inquiry JSON</span>
                </button>
              </div>

              <div className="p-5 rounded-xl border border-[#DFE6EB] bg-white space-y-3">
                <h3 className="text-base font-bold text-[#102C4B]">
                  Import Configuration JSON
                </h3>
                <p className="text-xs text-[#536477]">
                  Restore a previously exported Ayurgreen Foundation JSON configuration file.
                </p>
                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#102C4B] text-[#102C4B] hover:bg-[#F7F9FA] text-xs font-semibold cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Select JSON File to Import</span>
                  <input
                    type="file"
                    accept="application/json"
                    onChange={handleFileImport}
                    className="hidden"
                  />
                </label>
                {importError && (
                  <p className="text-xs text-red-700 font-medium mt-2">{importError}</p>
                )}
              </div>

              <div className="pt-4 border-t border-[#DFE6EB] flex items-center justify-between">
                <span className="text-xs text-[#536477]">
                  Reset site content to initial baseline configuration
                </span>
                <button
                  type="button"
                  onClick={() => {
                    resetConfig();
                    showToast('Reset site configuration to verified baseline defaults.');
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#DFE6EB] text-xs font-medium text-[#536477] hover:text-[#102C4B] hover:bg-[#F7F9FA]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
