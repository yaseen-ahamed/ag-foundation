import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Users,
  GraduationCap,
  ClipboardCheck,
  AlertCircle,
  HeartPulse,
  Handshake,
  PhoneCall,
  Download,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { SeoHead, Breadcrumbs, SectionHeading } from '../components/common/UIElements';
import { ReferencePhotoCrop } from '../components/visuals/FoundationVisual';

interface BeFastSign {
  letter: string;
  word: string;
  question: string;
  details: string;
  actionTip: string;
}

const BE_FAST_SIGNS: BeFastSign[] = [
  {
    letter: 'B',
    word: 'Balance',
    question: 'Is there a sudden loss of balance or coordination?',
    details:
      'Watch for sudden dizziness, unsteadiness, difficulty walking, or leaning to one side without an obvious cause.',
    actionTip: 'Ask the person to sit safely and check for any other sudden neurological signs.',
  },
  {
    letter: 'E',
    word: 'Eyes',
    question: 'Is there sudden blurred, double, or lost vision?',
    details:
      'Sudden trouble seeing out of one or both eyes, or sudden visual field loss, is a key warning sign of stroke.',
    actionTip: 'Ask whether their vision changed suddenly in one or both eyes.',
  },
  {
    letter: 'F',
    word: 'Face',
    question: 'Does one side of the face droop or feel numb?',
    details:
      'Facial weakness or asymmetry—especially around the mouth or eyelid—often appears suddenly during a stroke.',
    actionTip: 'Ask the person to smile and observe if one side of the face droops.',
  },
  {
    letter: 'A',
    word: 'Arm',
    question: 'Is one arm weak or numb?',
    details:
      'Sudden weakness, heaviness, or numbness in one arm or leg (especially on one side of the body) is a classic indicator.',
    actionTip: 'Ask the person to raise both arms and check if one arm drifts downward.',
  },
  {
    letter: 'S',
    word: 'Speech',
    question: 'Is speech slurred, strange, or difficult to understand?',
    details:
      'Sudden difficulty speaking, slurred words, or trouble understanding simple spoken sentences indicates potential neurological urgency.',
    actionTip: 'Ask the person to repeat a simple sentence and listen for slurring or confusion.',
  },
  {
    letter: 'T',
    word: 'Time',
    question: 'Time to seek immediate medical attention.',
    details:
      'If you observe any of these signs—even if they appear to fluctuate—every minute matters. Note the time when symptoms first appeared.',
    actionTip: 'Seek emergency medical care at a stroke-ready hospital immediately.',
  },
];

export const StrokeForcePage: React.FC = () => {
  const { config } = useSite();
  const [selectedBeFast, setSelectedBeFast] = useState<number>(0);

  const activeSign = BE_FAST_SIGNS[selectedBeFast];

  return (
    <>
      <SeoHead
        title="Stroke Force — Community Stroke Awareness | Ayurgreen Foundation"
        description="Recognising Stroke Signs. Acting Fast. Saving Lives. Stroke Force is a community-based stroke awareness initiative of Ayurgreen Foundation."
        canonicalPath="/stroke-force"
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#EFF7FA] via-[#E5F2F7] to-[#D4EAF2] border-b border-[#DFE6EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Stroke Force' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-7 space-y-5">
              <div className="w-20 h-[2px] bg-[#087F83]" aria-hidden="true" />
              <div className="bg-white/90 inline-block p-4 rounded-2xl border border-[#DFE6EB] shadow-2xs">
                <img
                  src={config.organization.logos.strokeForce}
                  alt="Stroke Force — An Initiative by Ayurgreen Foundation"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#087F83] text-white font-nav text-xs font-semibold uppercase tracking-[0.08em]">
                  Featured Project
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#087F83]">
                  An initiative of Ayurgreen Foundation
                </span>
              </div>

              <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-editorial font-light text-[#102C4B] leading-[1.08]">
                Stroke Force — Community Stroke Awareness.
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-[#087F83]">
                Recognising Stroke Signs. Acting Fast. Saving Lives.
              </p>

              <p className="text-base text-[#102C4B]/85 leading-relaxed max-w-2xl">
                A flagship community awareness initiative that equips people with the knowledge to recognise stroke warning signs, understand the urgency of treatment and spread life-saving awareness within their communities.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://github.com/yaseen-ahamed/ag-foundation/releases/download/strokeforce/strokeforce.apk"
                  download="strokeforce.apk"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#102C4B] hover:bg-[#07565B] text-white text-sm font-semibold transition-colors shadow-2xs whitespace-nowrap"
                  title="Download Stroke Force Android App (APK)"
                  aria-label="Download Stroke Force APK for Android"
                >
                  <Download className="w-4 h-4 text-[#5EEAD4]" />
                  <span>Download App (APK)</span>
                </a>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Become a Community Educator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/partner-with-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-[#F7F9FA] text-[#102C4B] border border-[#087F83] text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Host a Session at Your Institution</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#DFE6EB] shadow-md bg-[#102C4B]">
                <div className="h-64 sm:h-72 relative">
                  <ReferencePhotoCrop
                    crop={{ x: 0, y: 1280, w: 400, h: 145 }}
                    alt="Stroke Force educator leading a community stroke awareness session"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5 bg-[#102C4B] text-white flex items-center justify-between gap-4">
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-[#4DD0E1] block">
                      Community-Driven Health Literacy
                    </span>
                    Structured sessions across colleges, local organisations, and neighbourhoods.
                  </div>
                  <HeartPulse className="w-7 h-7 text-[#4DD0E1] shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Notice */}
      <div className="bg-[#102C4B] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-center">
          <AlertCircle className="w-4 h-4 text-[#4DD0E1] shrink-0" />
          <span>
            Educational Initiative Notice: Stroke Force provides community health awareness and education. This website does not provide emergency medical services—if you suspect a stroke, seek immediate emergency medical care.
          </span>
        </div>
      </div>

      {/* Introduction & Why Stroke Force? */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83]">
                01. Introduction
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B]">
                What is Stroke Force?
              </h2>
              <div className="w-16 h-0.5 bg-[#087F83]" aria-hidden="true" />
              <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
                Stroke is a time-sensitive medical emergency where early recognition by family members, colleagues, or bystanders can make a vital difference in reaching hospital care promptly. Yet in many communities, warning signs are misunderstood or overlooked until crucial time has passed.
              </p>
              <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
                Initiated by Ayurgreen Foundation, <strong>Stroke Force</strong> brings structured, accessible stroke education directly to everyday community spaces—equipping citizens with practical knowledge to recognise warning signs and act without hesitation.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#F7F9FA] rounded-3xl border border-[#DFE6EB] p-7 sm:p-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F83]">
                02. Why Stroke Force?
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial text-[#102C4B]">
                Bridging the Awareness Gap
              </h2>
              <p className="text-sm text-[#536477] leading-relaxed">
                Delayed hospital arrival often happens because early symptoms—such as sudden balance loss, visual changes, facial drooping, arm weakness, or slurred speech—are mistaken for fatigue or minor ailments.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 text-sm text-[#102C4B]">
                  <CheckCircle2 className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                  <span>
                    <strong>Demystifying Warning Signs:</strong> Teaching clear, memorable recognition frameworks in local languages.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#102C4B]">
                  <CheckCircle2 className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                  <span>
                    <strong>Reducing Hesitation:</strong> Encouraging families and bystanders to prioritise immediate medical evaluation.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#102C4B]">
                  <CheckCircle2 className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                  <span>
                    <strong>Empowering Youth &amp; Citizens:</strong> Turning college students and community volunteers into informed first-responders of awareness.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive BE FAST Recognition Guide */}
      <section
        aria-labelledby="be-fast-heading"
        className="py-14 sm:py-18 bg-[#EFF7FA] border-y border-[#DFE6EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Recognising Stroke Warning Signs"
            title="Learn the BE FAST Method"
            subtitle="Stroke Force educates communities on the internationally recognised BE FAST framework to identify sudden stroke warning signs quickly. Select each letter below to explore."
          />

          {/* Interactive Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {BE_FAST_SIGNS.map((sign, idx) => {
              const isSelected = idx === selectedBeFast;
              return (
                <button
                  key={sign.letter}
                  type="button"
                  onClick={() => setSelectedBeFast(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#102C4B] text-white border-[#102C4B] shadow-md'
                      : 'bg-white text-[#102C4B] border-[#DFE6EB] hover:border-[#087F83]'
                  }`}
                >
                  <div
                    className={`text-2xl sm:text-3xl font-editorial mb-1 ${
                      isSelected ? 'text-[#4DD0E1]' : 'text-[#087F83]'
                    }`}
                  >
                    {sign.letter}
                  </div>
                  <div className="text-sm font-bold">{sign.word}</div>
                </button>
              );
            })}
          </div>

          {/* Active BE FAST Detail Card */}
          <div className="bg-white rounded-3xl border border-[#DFE6EB] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xs">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-[#087F83] text-white font-editorial text-2xl flex items-center justify-center">
                  {activeSign.letter}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#087F83]">
                    BE FAST Stroke Indicator
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102C4B]">
                    {activeSign.word} — {activeSign.question}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#536477] leading-relaxed">
                {activeSign.details}
              </p>

              <div className="p-4 rounded-xl bg-[#F7F9FA] border border-[#DFE6EB] flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#087F83] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#102C4B]">
                  <strong>Community Awareness Guidance:</strong> {activeSign.actionTip}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#102C4B] text-white rounded-2xl p-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4DD0E1]">
                Why Time Matters
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Recognising even one sudden BE FAST sign is a reason to act immediately. Do not wait to see if symptoms improve on their own.
              </p>
              <div className="pt-2 text-xs text-white/75">
                Part of the Stroke Force curriculum delivered by Ayurgreen Foundation educators.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach: 3 Pillars (Community-Based Awareness, Training of Trainers, Quality & Engagement) */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="How Stroke Force Works"
            title="Our Approach to Community Education"
            subtitle="Stroke Force combines grassroots sessions, structured volunteer training, and quality assessment to ensure sustainable community impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#EFF7FA] text-[#087F83] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial text-[#102C4B]">
                  Community-Based Awareness
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                  We conduct structured, interactive awareness sessions in colleges, community groups, local organisations, residential forums, and civic spaces—making stroke literacy accessible to everyone regardless of medical background.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFE6EB] text-xs font-semibold text-[#102C4B]">
                Colleges · Community Groups · Local Organisations
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#EFF7FA] text-[#087F83] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial text-[#102C4B]">
                  Training Community Educators (ToT)
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                  Through our structured <strong>Training of Trainers (ToT)</strong> programme, community volunteers and students are trained in verified stroke awareness material and communication skills so they can confidently lead peer sessions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFE6EB] text-xs font-semibold text-[#102C4B]">
                Training of Trainers · Peer Health Leadership
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl border border-[#DFE6EB] bg-[#F7F9FA] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#EFF7FA] text-[#087F83] flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial text-[#102C4B]">
                  Quality &amp; Community Engagement
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                  Every Stroke Force activity is guided by clear educational standards and monitored through participant feedback, pre/post learning assessments, and structured reporting to improve clarity and effectiveness continuously.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFE6EB] text-xs font-semibold text-[#102C4B]">
                Participant Feedback · Learning Assessments · Reporting
              </div>
            </div>
          </div>

          {/* Our Goal Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#102C4B] text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4DD0E1]">
                Our Goal
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial">
                A Stroke-Aware Community Where Every Household Knows How to Act Fast
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                By combining compassionate public education with trained community volunteers, Stroke Force aims to ensure that stroke warning signs are recognised early and individuals receive timely medical attention—protecting lives, dignity, and long-term recovery.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/programmes/rehab-village"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Explore Post-Stroke Rehab Village</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Be Part of Stroke Force — 3 Clear CTAs */}
      <section className="py-14 sm:py-18 bg-[#F7F9FA] border-t border-[#DFE6EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            kicker="Take Action"
            title="Be Part of Stroke Force"
            subtitle="Join Ayurgreen Foundation in expanding community stroke awareness across colleges, workplaces, and neighbourhoods."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#DFE6EB] p-6 flex flex-col justify-between">
              <div>
                <Users className="w-8 h-8 text-[#087F83] mb-4" />
                <h3 className="text-lg font-bold text-[#102C4B] mb-2">
                  Volunteer With Us
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Join our Training of Trainers (ToT) programme and help conduct stroke awareness workshops in your college or community.
                </p>
              </div>
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#087F83] hover:bg-[#07565B] text-white text-xs font-semibold transition-colors"
              >
                <span>Volunteer With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-[#DFE6EB] p-6 flex flex-col justify-between">
              <div>
                <Handshake className="w-8 h-8 text-[#087F83] mb-4" />
                <h3 className="text-lg font-bold text-[#102C4B] mb-2">
                  Partner With Us
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Colleges, CSR teams, local bodies, and community organisations can partner with Stroke Force to host structured awareness sessions.
                </p>
              </div>
              <Link
                to="/partner-with-us"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#102C4B] hover:bg-[#087F83] text-white text-xs font-semibold transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-[#DFE6EB] p-6 flex flex-col justify-between">
              <div>
                <PhoneCall className="w-8 h-8 text-[#087F83] mb-4" />
                <h3 className="text-lg font-bold text-[#102C4B] mb-2">
                  Contact Us
                </h3>
                <p className="text-xs sm:text-sm text-[#536477] leading-relaxed mb-6">
                  Reach out to the Ayurgreen Foundation administrative team to request educational materials or schedule an introductory dialogue.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-[#087F83] text-[#102C4B] hover:bg-[#EFF7FA] text-xs font-semibold transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#087F83]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
