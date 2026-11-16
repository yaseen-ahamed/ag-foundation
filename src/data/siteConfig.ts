export interface ProgrammeCustomSection {
  id: string;
  kicker?: string;
  heading: string;
  paragraphs?: string[];
  bulletsIntro?: string;
  bullets?: {
    label?: string;
    text: string;
  }[];
  bulletsFooter?: string;
  steps?: {
    stepLabel: string;
    title: string;
    description: string;
  }[];
  pathwayChain?: string[];
  highlightNote?: string;
  cards?: {
    badge?: string;
    title: string;
    imageUrl?: string;
    meta?: { label: string; value: string }[];
    paragraphs: string[];
    impactTitle?: string;
    impactBullets?: string[];
  }[];
  ctaButtons?: {
    label: string;
    to: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
}

export interface CharityCareStats {
  indicators: {
    label: string;
    value: string;
    description: string;
  }[];
  annualData: {
    year: string;
    totalCases: number;
    fullAssistance: number;
    partialAssistance: number;
  }[];
  totals: {
    totalCases: number;
    fullAssistance: number;
    partialAssistance: number;
  };
  footnote?: string;
}

export interface ProgrammeItem {
  slug: string;
  title: string;
  detailTitle?: string;
  shortTitle: string;
  category:
    | 'Healthcare Access'
    | 'Rehabilitation'
    | 'Community Health'
    | 'Education & Research'
    | 'Civic Participation';
  featuredOnHome: boolean;
  iconName:
    | 'HeartHandshake'
    | 'Home'
    | 'Accessibility'
    | 'Users'
    | 'Stethoscope'
    | 'GraduationCap'
    | 'ScanLine'
    | 'HandHeart';
  accentColor: string;
  imageUrl?: string;
  heroVideoEmbedUrl?: string;
  cropRegion?: { x: number; y: number; w: number; h: number };
  illustrationType:
    | 'charity'
    | 'rehab-village'
    | 'social-rehab'
    | 'outreach'
    | 'medical-camps'
    | 'college'
    | 'radiology'
    | 'volunteer';
  summary: string;
  heroSubtitle: string;
  heroLeadParagraphs?: string[];
  introduction: string[];
  purpose: string;
  objectives: string[];
  activities: {
    title: string;
    description: string;
  }[];
  intendedAudience: string[];
  impactStatus: {
    qualitativeSummary: string;
    verifiedMetricLabel?: string;
    verifiedMetricValue?: string;
    isPlaceholder: boolean;
  };
  relatedSlugs: string[];
  logoUrl?: string;
  welcomeHeading?: string;
  aboutHeading?: string;
  vision?: string;
  mission?: string;
  activitiesHeading?: string;
  activitiesIntro?: string[];
  stakeholdersHeading?: string;
  stakeholdersIntro?: string;
  stakeholders?: {
    role: string;
    description: string;
  }[];
  whyHeading?: string;
  whyIntro?: string;
  whyItems?: {
    label: string;
    description: string;
  }[];
  collaborateHeading?: string;
  collaborateIntro?: string;
  collaboratePartners?: {
    title: string;
    description: string;
  }[];
  volunteerOpportunities?: {
    intro: string;
    bullets: string[];
    closing: string;
  };
  patientsConsultationNote?: string;
  directContact?: {
    prompt: string;
    name: string;
    phone: string;
    email: string;
  };
  charityStats?: CharityCareStats;
  customSections?: ProgrammeCustomSection[];
}

export interface AssociatedInstitution {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: 'Landmark' | 'Microscope' | 'ScanLine';
  logoUrl?: string;
  internalRoute?: string;
  externalUrl?: string;
  buttonLabel?: string;
}

export interface ImpactPillar {
  id: string;
  category: string;
  themeTitle: string;
  description: string;
  verifiedNumber: string;
  iconName:
    | 'Users'
    | 'Accessibility'
    | 'HeartHandshake'
    | 'GraduationCap'
    | 'HandHeart'
    | 'Home';
  programmeLink: string;
}

export interface ImpactStoryItem {
  id: string;
  title: string;
  category:
    | 'Beneficiary Stories'
    | 'Recovery Journeys'
    | 'Community Impact'
    | 'Volunteer Experiences'
    | 'Programme Outcomes';
  summary: string;
  body: string[];
  dateLabel: string;
  relatedProgrammeSlug: string;
  isPlaceholder: boolean;
  cropRegion?: { x: number; y: number; w: number; h: number };
}

export interface EventGalleryImage {
  url: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}

export interface NewsEventItem {
  id: string;
  slug?: string;
  title: string;
  category:
    | 'Programme Reports'
    | 'Medical Camps'
    | 'Awareness Campaigns'
    | 'Foundation Events'
    | 'Volunteer Activities'
    | 'Announcements';
  dateLabel: string;
  locationLabel: string;
  summary: string;
  content: string[];
  relatedRoute: string;
  isPlaceholder: boolean;
  cropRegion?: { x: number; y: number; w: number; h: number };
  imageUrl?: string;
  heroSubtitle?: string;
  partnerOrOrganiser?: string;
  impactMetricValue?: string;
  impactMetricLabel?: string;
  highlights?: string[];
  activities?: {
    title: string;
    description: string;
  }[];
  stakeholders?: string[];
  galleryImages?: EventGalleryImage[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Medical Camps'
    | 'Rehabilitation Activities'
    | 'Volunteer Activities'
    | 'Foundation Events'
    | 'Community Outreach Programmes';
  caption: string;
  altText: string;
  isVerifiedAsset: boolean;
  cropRegion?: { x: number; y: number; w: number; h: number };
  customImageUrl?: string;
}

export interface GovernanceDocument {
  id: string;
  title: string;
  category:
    | 'Registration Details'
    | 'Governance Structure'
    | 'Annual Reports'
    | 'Financial Reports'
    | 'Organisational Policies'
    | 'Compliance Documents';
  description: string;
  status: 'Verified Fact' | 'Pending Official Upload';
  publicationYear?: string;
  fileType?: string;
  downloadUrl?: string;
}

export interface InquirySubmission {
  id: string;
  type: 'volunteer' | 'partnership' | 'contact';
  createdAt: string;
  status: 'New' | 'Reviewed' | 'Archived';
  name: string;
  email: string;
  phone: string;
  organizationOrLocation: string;
  interestOrCategory: string;
  skillsOrAvailability?: string;
  message: string;
}

export interface SiteConfiguration {
  organization: {
    name: string;
    legalStatus: string;
    establishedDate: string;
    parentGroup: string;
    tagline: string;
    domain: string;
    adminOfficerNote: string;
    logos: {
      foundation: string;
      strokeForce: string;
      referenceComposite: string;
      heroBanner: string;
    };
  };
  contact: {
    officeTitle: string;
    addressLine1: string;
    addressLine2: string;
    stateCountry: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
    mapQueryUrl: string;
    socials: {
      instagram: string;
      linkedin: string;
      facebook: string;
      youtube: string;
    };
  };
  donation: {
    isConfigured: boolean;
    bankName: string;
    accountName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
    upiId: string;
    onlineGatewayUrl: string;
    taxExemptionNote: string;
    transparencyStatement: string;
  };
  about: {
    shortIntro: string[];
    fullOverview: string[];
    ourStory: string[];
    vision: string;
    missionPoints: string[];
    coreValues: {
      title: string;
      description: string;
    }[];
    objectives: {
      number: string;
      title: string;
      description: string;
    }[];
    leadershipNote: string;
    leadershipMembers: {
      id: string;
      name: string;
      role: string;
      bio: string;
      isPlaceholder: boolean;
    }[];
  };
  programmes: ProgrammeItem[];
  associatedInstitutions: AssociatedInstitution[];
  impactPillars: ImpactPillar[];
  impactStories: ImpactStoryItem[];
  newsEvents: NewsEventItem[];
  galleryItems: GalleryItem[];
  governanceDocs: GovernanceDocument[];
}

export const INITIAL_SITE_CONFIG: SiteConfiguration = {
  organization: {
    name: 'Ayurgreen Foundation',
    legalStatus: 'Section 8 Non-Profit Company',
    establishedDate: '24 May 2022',
    parentGroup: 'Ayurgreen Group',
    tagline: 'Healthcare & Education for Social Impact',
    domain: 'ayurgreenfoundation.org',
    adminOfficerNote:
      'Prepared in alignment with official requirements by Ayurgreen Foundation Administration',
    logos: {
      foundation: '/assets/aistudio/ayurgreen_foundation_logo__35041206.png',
      strokeForce: '/assets/aistudio/STROKE_FORCE_logo_0fbe0ada.png',
      referenceComposite: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.20.49_PM_35a2c012.jpeg',
      heroBanner: '/assets/aistudio/ayurgreen_care_492328da.png',
    },
  },
  contact: {
    officeTitle: 'Admin Office, Ayurgreen Campus',
    addressLine1: 'Edappal, Kavilpadi',
    addressLine2: 'Malappuram District',
    stateCountry: 'Kerala, India',
    email: 'info@ayurgreenfoundation.org',
    emailVerified: true,
    phone: '+91 89 430 555 18',
    phoneVerified: true,
    mapQueryUrl:
      'https://www.google.com/maps?ll=10.803627,76.006511&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=17502553929433422522',
    socials: {
      instagram: 'https://www.instagram.com/ayurgreen__foundation/',
      linkedin: '',
      facebook: '',
      youtube: '',
    },
  },
  donation: {
    isConfigured: false,
    bankName: '[Pending Official Bank Configuration]',
    accountName: 'Ayurgreen Foundation',
    accountNumber: '[Configure in Content Studio]',
    ifscCode: '[Configure in Content Studio]',
    branchName: 'Edappal, Malappuram, Kerala',
    upiId: '[Pending Verified UPI ID]',
    onlineGatewayUrl: '',
    taxExemptionNote:
      'Statutory tax-exemption certificates (such as 12A / 80G registration references) will be published here upon verification by the Foundation administration.',
    transparencyStatement:
      'Ayurgreen Foundation is committed to complete financial stewardship and accountability. Contributions are directed toward documented healthcare assistance, rehabilitation support, community health education, and social welfare initiatives. Official receipts and utilization disclosures are issued only through verified Foundation channels.',
  },
  about: {
    shortIntro: [
      'Ayurgreen Foundation is the social impact arm of Ayurgreen Group, established on 24 May 2022 as a Section 8 non-profit company. The Foundation works to address social needs through initiatives spanning healthcare, rehabilitation, education and community development.',
      'Through programmes such as Charity Care, Rehab Village, Social Rehabilitation, Volunteer Internship, Education With Purpose (EWP), and Stroke Force, the Foundation strives to improve access to healthcare, promote recovery and independence, raise community awareness and create opportunities for individuals and families to lead healthier, more dignified lives.',
      'Working alongside communities and institutional partners, Ayurgreen Foundation aims to create meaningful and sustainable social impact.',
    ],
    fullOverview: [
      'Ayurgreen Foundation is a charitable Section 8 non-profit organisation established on 24 May 2022 as the social impact arm of Ayurgreen Group. Rooted in Edappal, Malappuram, Kerala, the Foundation is dedicated to supporting individuals and communities through structured healthcare assistance, rehabilitation support, community outreach programmes, educational scholarships, student internships, and social welfare activities.',
      'Recognising that health, dignity, and education are closely interconnected, our work bridges clinical support with community-level empowerment—ensuring that vulnerable individuals, students, and families receive not only timely care, but also the long-term rehabilitation, educational opportunities, and social support required to build independent futures.',
    ],
    ourStory: [
      'Founded on 24 May 2022, Ayurgreen Foundation emerged from the clinical and community experience of Ayurgreen Group. Witnessing firsthand the financial, physical, and social barriers faced by patients recovering from neurological conditions, chronic illness, and acute health emergencies, the Foundation was constituted as a dedicated Section 8 non-profit company to institutionalise compassionate outreach.',
      'Over time, our scope expanded across core programmes including the Charity Care Programme, Social Rehabilitation Programme, Rehab Village Project, Volunteer Internship Programme, Education With Purpose (EWP) Scholarship Programme, Stroke Awareness Medical Camps, and our flagship community initiative Stroke Force.',
    ],
    vision:
      'To promote equitable access to healthcare and social wellbeing through structured community initiatives and institutional partnerships.',
    missionPoints: [
      'Support healthcare access for vulnerable individuals.',
      'Implement community health programmes.',
      'Promote health awareness and preventive care.',
      'Facilitate rehabilitation and social support initiatives.',
      'Encourage educational engagement and volunteerism in healthcare.',
    ],
    coreValues: [
      {
        title: 'Compassion & Human Dignity',
        description:
          'Every individual deserves respectful, empathetic care that honours their autonomy, privacy, and family context.',
      },
      {
        title: 'Equitable Healthcare Access',
        description:
          'Reducing financial, geographic, and informational barriers so essential diagnostics, treatment, and recovery support reach those in need.',
      },
      {
        title: 'Trust, Transparency & Accountability',
        description:
          'Operating as a compliant Section 8 non-profit with truthful reporting, ethical governance, and clear stewardship of community trust.',
      },
      {
        title: 'Rehabilitation, Independence & Inclusion',
        description:
          'Looking beyond acute medical care to support long-term functional recovery, mobility, counselling, vocational support, and social reintegration.',
      },
      {
        title: 'Education & Community Participation',
        description:
          'Supporting deserving students through EWP scholarships and equipping youth and volunteers to serve as compassionate change-makers.',
      },
    ],
    objectives: [
      {
        number: '01',
        title: 'Accessible Healthcare',
        description:
          'Improve access to essential medical treatment, diagnostic services, medicines, and supportive healthcare for underserved individuals and families.',
      },
      {
        number: '02',
        title: 'Community Health Awareness',
        description:
          'Promote preventive health literacy and early symptom recognition through structured grassroots initiatives such as Stroke Force and medical camps.',
      },
      {
        number: '03',
        title: 'Rehabilitation & Inclusion',
        description:
          'Facilitate physical, functional, vocational, and psychosocial recovery through dedicated rehabilitation pathways and community-based reintegration.',
      },
      {
        number: '04',
        title: 'Education & Empowerment',
        description:
          'Reduce financial barriers to higher education through the EWP Scholarship Programme and nurture skilled, compassionate healthcare professionals.',
      },
      {
        number: '05',
        title: 'Community Development',
        description:
          'Address broader determinants of social wellbeing through local outreach camps, family counselling, and responsive welfare activities.',
      },
      {
        number: '06',
        title: 'Institutional Collaboration',
        description:
          'Work alongside hospitals, research institutes, colleges, Rotary clubs, NGOs, and CSR partners to amplify healthcare and educational outcomes.',
      },
      {
        number: '07',
        title: 'Sustainable Social Impact',
        description:
          'Build replicable, accountable community models—such as Training of Trainers and structured student internships—that create lasting improvements in public wellbeing.',
      },
    ],
    leadershipNote:
      'Official Board of Directors and Executive Leadership biographies are maintained by the Ayurgreen Foundation Administrative Office. Verified profiles can be published via the Content Studio.',
    leadershipMembers: [
      {
        id: 'lead-placeholder-1',
        name: '[Board Member / Director Profile Pending Publication]',
        role: 'Board of Directors — Ayurgreen Foundation',
        bio: 'Official biography, institutional responsibilities, and credentials will be updated by the Foundation administration prior to public release.',
        isPlaceholder: true,
      },
      {
        id: 'lead-placeholder-2',
        name: 'Salmanul Faris',
        role: 'Administrative Officer — Ayurgreen Foundation',
        bio: 'Coordinates administrative operations, institutional documentation, and digital platform governance for Ayurgreen Foundation.',
        isPlaceholder: false,
      },
    ],
  },
  programmes: [
    // 1. CHARITY CARE PROGRAMME
    {
      slug: 'charity-care',
      title: 'Charity Care Programme',
      detailTitle: 'Charity Care Programme',
      shortTitle: 'Charity Care',
      category: 'Healthcare Access',
      featuredOnHome: true,
      iconName: 'HeartHandshake',
      accentColor: '#7C3AED',
      cropRegion: { x: 76, y: 706, w: 96, h: 74 },
      illustrationType: 'charity',
      aboutHeading: 'About the Programme',
      summary:
        'Providing financial assistance to eligible patients facing economic difficulties, helping them access essential healthcare and treatment.',
      heroSubtitle: 'Making Healthcare Accessible to Those in Need',
      introduction: [
        'The Charity Care Programme is an initiative of Ayurgreen Foundation, implemented in association with Ayurgreen Hospital to address financial barriers to healthcare.',
        'The programme aims to ensure that financial difficulties do not prevent individuals from accessing necessary medical treatment, diagnostic services, medicines and rehabilitation.',
        'Through a structured, need-based support system, the programme identifies financially vulnerable patients and facilitates appropriate assistance based on their medical requirements and socio-economic circumstances.',
      ],
      purpose:
        'We believe that financial hardship should not be the sole factor determining whether a person can access necessary healthcare.',
      objectives: [
        'Full or partial financial assistance towards treatment costs.',
        'Support for medicines and medical consumables.',
        'Assistance with diagnostic investigations.',
        'Support for therapy and rehabilitation services.',
      ],
      activitiesHeading: 'How the Programme Works',
      activities: [
        {
          title: '1. Application',
          description:
            'Patients submit an application with relevant medical, personal and financial information.',
        },
        {
          title: '2. Initial Screening',
          description:
            "Applications are reviewed to identify cases that meet the programme's basic eligibility criteria.",
        },
        {
          title: '3. Document Verification',
          description:
            'Supporting documents, including identity proof, financial records and medical documents, are examined.',
        },
        {
          title: '4. Socio-Economic Assessment',
          description:
            "The patient's household income, expenditure, family responsibilities, liabilities and capacity to contribute towards treatment are assessed.",
        },
        {
          title: '5. Support Decision',
          description:
            'The case is reviewed to determine eligibility and the appropriate level of financial assistance, considering medical urgency and financial need.',
        },
      ],
      stakeholdersHeading: 'Who Can Benefit?',
      stakeholdersIntro:
        'The programme primarily supports (eligibility is determined through a socio-economic assessment and verification process):',
      intendedAudience: [
        'Patients with limited financial capacity to afford treatment.',
        'Individuals requiring long-term or continuous medical care.',
        'Patients undergoing rehabilitation or therapy.',
        'Economically vulnerable families facing significant medical expenses.',
        'Patients at risk of discontinuing necessary treatment because of financial constraints.',
      ],
      charityStats: {
        indicators: [
          {
            label: 'Patients Supported',
            value: '90',
            description: 'Total number of patients who received assistance',
          },
          {
            label: 'Full Assistance',
            value: '47',
            description: 'Number of patients who received 100% assistance',
          },
          {
            label: 'Partial Assistance',
            value: '43',
            description: 'Number of patients who received partial assistance',
          },
          {
            label: 'Years of Service',
            value: '4',
            description: 'Number of years the programme has been operational (2023–2026)',
          },
        ],
        annualData: [
          { year: '2023', totalCases: 11, fullAssistance: 11, partialAssistance: 0 },
          { year: '2024', totalCases: 24, fullAssistance: 13, partialAssistance: 11 },
          { year: '2025', totalCases: 36, fullAssistance: 13, partialAssistance: 23 },
          { year: '2026', totalCases: 19, fullAssistance: 10, partialAssistance: 9 },
        ],
        totals: {
          totalCases: 90,
          fullAssistance: 47,
          partialAssistance: 43,
        },
        footnote:
          'Annual beneficiary reporting (2023–2026) across full (100%) and partial financial assistance pathways.',
      },
      customSections: [
        {
          id: 'why-charity-care',
          heading: 'Why Charity Care?',
          paragraphs: [
            'The cost of healthcare can create significant challenges for individuals and families, particularly those requiring long-term treatment or rehabilitation. Financial difficulties may lead to delayed treatment, interruptions in care or an inability to access essential medical services.',
            'The Charity Care Programme addresses these challenges by providing a systematic mechanism to assess patient needs and facilitate appropriate financial assistance.',
          ],
        },
        {
          id: 'who-can-benefit-charity',
          heading: 'Who Can Benefit?',
          bulletsIntro: 'The programme primarily supports:',
          bullets: [
            { text: 'Patients with limited financial capacity to afford treatment.' },
            { text: 'Individuals requiring long-term or continuous medical care.' },
            { text: 'Patients undergoing rehabilitation or therapy.' },
            { text: 'Economically vulnerable families facing significant medical expenses.' },
            {
              text: 'Patients at risk of discontinuing necessary treatment because of financial constraints.',
            },
          ],
          bulletsFooter:
            'Eligibility is determined through a socio-economic assessment and verification process.',
        },
        {
          id: 'types-of-support-charity',
          heading: 'Types of Support',
          bulletsIntro:
            "Depending on the patient's needs and assessment outcome, assistance may include:",
          bullets: [
            { text: 'Full or partial financial assistance towards treatment costs.' },
            { text: 'Support for medicines and medical consumables.' },
            { text: 'Assistance with diagnostic investigations.' },
            { text: 'Support for therapy and rehabilitation services.' },
          ],
          bulletsFooter:
            "The nature and extent of assistance depend on the patient's medical requirements, financial circumstances and the programme's assessment and approval process.",
        },
        {
          id: 'our-approach-charity',
          heading: 'Our Approach',
          paragraphs: [
            'The Charity Care Programme follows a structured and accountable approach to healthcare assistance. By combining clinical requirements with socio-economic assessment, the programme aims to direct available resources towards patients who need them most.',
            'Ayurgreen Foundation coordinates the assessment and financial assistance process in association with Ayurgreen Hospital, which provides the necessary clinical services and treatment.',
          ],
        },
        {
          id: 'our-commitment-charity',
          heading: 'Our Commitment',
          paragraphs: [
            'We believe that financial hardship should not be the sole factor determining whether a person can access necessary healthcare.',
            'Through the Charity Care Programme, Ayurgreen Foundation continues to work towards more equitable access to treatment and rehabilitation for individuals and families facing financial difficulties.',
            'Together, we work towards a healthcare system that places dignity, compassion and accessibility at its heart.',
          ],
        },
      ],
      impactStatus: {
        qualitativeSummary:
          '90 patients supported between 2023 and 2026, including 47 patients who received 100% financial assistance and 43 patients who received partial assistance.',
        verifiedMetricLabel: 'Patients Supported',
        verifiedMetricValue: '90',
        isPlaceholder: false,
      },
      relatedSlugs: ['social-rehabilitation', 'rehab-village', 'medical-camps'],
    },

    // 2. SOCIAL REHABILITATION PROGRAMME
    {
      slug: 'social-rehabilitation',
      title: 'Social Rehabilitation Programme',
      detailTitle: 'Social Rehabilitation Programme',
      shortTitle: 'Social Rehabilitation',
      category: 'Rehabilitation',
      featuredOnHome: true,
      iconName: 'Accessibility',
      accentColor: '#0D9488',
      imageUrl: '/assets/aistudio/social_rehab_program_3edebc6f.png',
      cropRegion: { x: 395, y: 706, w: 112, h: 74 },
      illustrationType: 'social-rehab',
      aboutHeading: 'About the Programme',
      summary:
        'Supporting individuals through rehabilitation, counselling, vocational development, social support and family reintegration.',
      heroSubtitle: 'Beyond Recovery. Towards Independence.',
      introduction: [
        'Recovery does not end with medical treatment. For many individuals affected by stroke, neurological conditions, disabilities and long-term illnesses, returning to everyday life brings social, emotional and economic challenges.',
        "Ayurgreen Foundation's Social Rehabilitation Programme aims to bridge the gap between medical recovery and meaningful social reintegration. The programme focuses on helping individuals regain independence, explore livelihood opportunities, strengthen family support and participate more fully in society.",
      ],
      purpose:
        'To help individuals move beyond the limitations imposed by illness or disability and work towards greater independence, dignity, social inclusion and an improved quality of life.',
      objectives: [
        "Individual Rehabilitation Support: Understanding each individual's social circumstances, functional abilities, skills and rehabilitation needs.",
        "Vocational Rehabilitation & Livelihood Support: Providing vocational guidance and coordinating suitable employment or livelihood opportunities.",
        'Family-Centred Support: Recognising the impact of illness on families through counselling, caregiver support, and livelihood guidance.',
        'Psychosocial Support: Encouraging emotional wellbeing, confidence, motivation and social participation.',
        'Community Reintegration: Supporting individuals in returning to community life and rebuilding social connections.',
        'Multidisciplinary Coordination: Working with rehabilitation professionals, including Occupational Therapy services.',
      ],
      activitiesHeading: 'Our Approach',
      activities: [
        {
          title: '1. Individual Rehabilitation Support',
          description:
            "Understanding each individual's social circumstances, functional abilities, skills and rehabilitation needs to develop appropriate support plans.",
        },
        {
          title: '2. Vocational Rehabilitation & Livelihood Support',
          description:
            "Providing vocational guidance and coordinating suitable employment or livelihood opportunities based on an individual's abilities and circumstances.",
        },
        {
          title: '3. Family-Centred Support',
          description:
            'Recognising the impact of illness on families through counselling, caregiver support, livelihood guidance and coordination of social support services.',
        },
        {
          title: '4. Psychosocial Support',
          description:
            'Encouraging emotional wellbeing, confidence, motivation and social participation throughout the rehabilitation journey.',
        },
        {
          title: '5. Community Reintegration',
          description:
            'Supporting individuals in returning to community life, rebuilding social connections and participating in meaningful daily activities.',
        },
        {
          title: '6. Multidisciplinary Coordination',
          description:
            'Working with rehabilitation professionals, including Occupational Therapy services, to align functional abilities with individual rehabilitation goals and suitable vocational opportunities.',
        },
      ],
      stakeholdersHeading: 'Who Can Benefit?',
      stakeholdersIntro:
        'The programme is intended to support individuals and families affected by:',
      intendedAudience: [
        'Stroke and neurological conditions.',
        'Physical disabilities and functional limitations.',
        'Long-term illnesses affecting independence and employment.',
        'Challenges in returning to work or previous social roles.',
        'Financial and psychosocial difficulties associated with illness or disability.',
      ],
      customSections: [
        {
          id: 'who-can-benefit-social',
          heading: 'Who Can Benefit?',
          bulletsIntro:
            'The programme is intended to support individuals and families affected by:',
          bullets: [
            { text: 'Stroke and neurological conditions.' },
            { text: 'Physical disabilities and functional limitations.' },
            { text: 'Long-term illnesses affecting independence and employment.' },
            { text: 'Challenges in returning to work or previous social roles.' },
            {
              text: 'Financial and psychosocial difficulties associated with illness or disability.',
            },
          ],
          bulletsFooter:
            'Support is planned according to individual needs, functional abilities and available resources.',
        },
        {
          id: 'how-it-works-social',
          heading: 'How It Works',
          pathwayChain: [
            'Identification',
            'Assessment',
            'Individual Rehabilitation Planning',
            'Support & Coordination',
            'Follow-up',
          ],
          paragraphs: [
            'The programme follows a structured pathway that begins with identifying individuals who may benefit from social rehabilitation. Social and functional assessments help guide rehabilitation planning, vocational support, family interventions and subsequent follow-up.',
          ],
        },
        {
          id: 'our-goal-social',
          heading: 'Our Goal',
          paragraphs: [
            'To help individuals move beyond the limitations imposed by illness or disability and work towards greater independence, dignity, social inclusion and an improved quality of life.',
          ],
        },
        {
          id: 'inclusive-community-social',
          heading: 'Building a More Inclusive Community',
          paragraphs: [
            "Ayurgreen Foundation believes that meaningful rehabilitation must address not only physical recovery but also the social and economic circumstances that shape a person's life.",
            'Through coordinated support and institutional partnerships, the Social Rehabilitation Programme seeks to create opportunities for individuals to rebuild their lives and participate more fully in their families and communities.',
            'Together, we work towards a society where recovery leads to renewed opportunities, independence and belonging.',
          ],
          ctaButtons: [
            { label: 'Become a Volunteer', to: '/volunteer', variant: 'primary' },
            {
              label: 'Explore Partnership Opportunities',
              to: '/partner-with-us',
              variant: 'secondary',
            },
            { label: 'Contact Us', to: '/contact', variant: 'outline' },
          ],
        },
      ],
      impactStatus: {
        qualitativeSummary:
          'Bridging medical recovery and meaningful social reintegration through vocational guidance, family-centred counselling, and multidisciplinary support.',
        isPlaceholder: false,
      },
      relatedSlugs: ['rehab-village', 'charity-care', 'volunteer-internship'],
    },

    // 3. REHAB VILLAGE PROJECT
    {
      slug: 'rehab-village',
      title: 'Rehab Village Project',
      detailTitle: 'Ayurgreen Rehab Village',
      shortTitle: 'Rehab Village',
      category: 'Rehabilitation',
      featuredOnHome: true,
      iconName: 'Home',
      accentColor: '#D97706',
      heroVideoEmbedUrl: 'https://www.youtube.com/embed/2olvFRcleew?rel=0&modestbranding=1',
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
      illustrationType: 'rehab-village',
      logoUrl: '/assets/aistudio/rehab_village_logo.webp',
      welcomeHeading: 'WELCOME TO AYURGREEN REHAB VILLAGE',
      aboutHeading: 'About Rehab Village',
      summary:
        'A community-based rehabilitation initiative focused on recovery, functional independence, social participation and reintegration.',
      heroSubtitle:
        'Rehab Village is a transformative initiative by Ayurgreen Hospitals, designed to redefine rehabilitation and patient care amidst a serene and nurturing village environment.',
      introduction: [
        'Rehab Village is a transformative initiative by Ayurgreen Hospitals, designed to redefine rehabilitation and patient care. Set amidst a serene village environment, Rehab Village offers a unique and nurturing space for patients to recover and regain independence. By integrating traditional healing techniques with modern medical advancements, Rehab Village ensures holistic, patient-centered care tailored to individual needs.',
        'Patients benefit from specialized ortho-neuro rehabilitation programs, extended accommodation facilities like service villas and apartments, and a supportive community atmosphere that enhances their recovery journey.',
      ],
      vision:
        'To be a globally recognized leader in community-integrated rehabilitation, blending advanced therapeutic care with a supportive village atmosphere. Rehab Village strives to empower patients to regain independence while contributing to local economic development through sustainable partnerships with the community, enhancing both healthcare and livelihoods.',
      mission:
        'To provide accessible, affordable and holistic rehabilitation services through state-of-the-art facilities, expert care, and partnerships with local communities. Ayurgreen Rehab village is committed to enhancing patient well-being by combining traditional and modern therapies, prioritizing personalized care, and promoting responsible tourism that contributes to economic and social growth.',
      purpose:
        'To provide accessible, affordable and holistic rehabilitation services through state-of-the-art facilities, expert care, and partnerships with local communities.',
      objectives: [
        'Integrate traditional healing techniques with modern medical advancements for holistic, patient-centered care.',
        'Provide specialized ortho-neuro rehabilitation programs and extended accommodation in home stays, service villas, and apartments.',
        'Empower patients to regain independence while contributing to local economic development through sustainable community partnerships.',
        'Promote medical and responsible tourism that contributes to economic and social growth.',
      ],
      activitiesHeading: 'Activities at Rehab Village',
      activitiesIntro: [
        'Rehab Village focuses on providing patient accommodation in home stays, service villas, and apartments across different ranges. These accommodations are furnished and equipped with necessary facilities to ensure comfort and convenience.',
        'Patients receive visits from doctors once a day at their accommodation, as per their health status. Additional services include housekeeping, laundry, food support, and door-to-door delivery from the restaurant. Treatments are provided exclusively at Ayurgreen Hospitals, where patients can access a variety of therapeutic and medical services.',
      ],
      activities: [
        {
          title: 'Extended Patient Accommodation',
          description:
            'Furnished and equipped home stays, service villas, and apartments across different ranges within a 5 km radius of Edappal to ensure comfort and convenience.',
        },
        {
          title: 'Daily Doctor Visits & Support Services',
          description:
            'Patients receive visits from doctors once a day at their accommodation as per their health status, along with housekeeping, laundry, food support, and door-to-door delivery from the restaurant.',
        },
        {
          title: 'Treatments at Ayurgreen Hospitals',
          description:
            'Treatments are provided exclusively at Ayurgreen Hospitals, where patients can access specialized ortho-neuro rehabilitation and a variety of therapeutic and medical services.',
        },
      ],
      stakeholdersHeading: 'Stakeholders at Rehab Village',
      stakeholdersIntro:
        'Rehab Village thrives through collaboration with its diverse stakeholders, including government and local bodies, tourism departments, and others who contribute to its success:',
      stakeholders: [
        {
          role: 'Patients',
          description:
            'The primary beneficiaries who receive top-quality care and rehabilitation services.',
        },
        {
          role: 'Families and Caregivers',
          description:
            'Guided on providing continued support during and after rehabilitation.',
        },
        {
          role: 'Healthcare Professionals',
          description:
            'Doctors, therapists, and staff contributing their expertise in a specialized setting.',
        },
        {
          role: 'Accommodation Partners',
          description:
            'Homestay providers, service villas, and apartments offering extended accommodation within a 5 km radius of Edappal.',
        },
        {
          role: 'Local Community',
          description:
            'Benefiting from job creation and economic development opportunities.',
        },
        {
          role: 'Volunteers',
          description:
            'Actively involved in enhancing the patient experience and community support.',
        },
      ],
      whyHeading: 'Why Rehab Village',
      whyIntro:
        'Rehab Village stands out as a unique and holistic rehabilitation initiative that integrates modern medical approaches with a supportive village-style environment. Here are key reasons to choose Rehab Village:',
      whyItems: [
        {
          label: 'For Patients',
          description:
            'Affordable and personalized care in a supportive environment, complemented by extended accommodation facilities such as service villas and apartments. Additional services include volunteer support, doctor visits, 24/7 support, travel assistance, housekeeping, laundry services, and door-to-door delivery from the restaurant, ensuring a seamless and comfortable experience.',
        },
        {
          label: 'For Caregivers',
          description:
            'Peace of mind knowing loved ones are in expert hands and receiving holistic care.',
        },
        {
          label: 'For Local Businesses',
          description:
            'Increased economic activity through partnerships with accommodation providers and local services.',
        },
        {
          label: 'For Healthcare Professionals',
          description:
            'Opportunities for skill development and contributions to innovative rehabilitation practices.',
        },
        {
          label: 'For Volunteers',
          description:
            'Meaningful engagement and the chance to make a positive impact.',
        },
        {
          label: 'Collaboration with Government and Local Bodies',
          description:
            'Partnerships with government and local authorities ensure seamless operations, infrastructure support, and enhanced accessibility for patients.',
        },
        {
          label: 'Integration with Tourism Departments',
          description:
            'Promoting medical and responsible tourism to boost economic and cultural engagement while fostering community development.',
        },
      ],
      collaborateHeading: 'How to Collaborate with Rehab Village',
      collaborateIntro:
        'Rehab Village welcomes collaborations with a variety of stakeholders to enhance its operations and expand its impact. Opportunities include:',
      collaboratePartners: [
        {
          title: 'Extended Accommodation Partners',
          description:
            'Homestay providers, service villas, and apartments within a 5 km radius can join us in providing a comfortable and supportive environment for patients.',
        },
        {
          title: 'Transportation Providers',
          description:
            'To ensure our patients have easy and safe access to the Rehab Village, we are partnering with trusted transportation providers. We aim for a reliable, comfortable transportation services for individual or group transfers, including accessible vehicles for those with mobility needs.',
        },
      ],
      volunteerOpportunities: {
        intro:
          'Rehab Village invites volunteers to join its mission of transforming patient care. Opportunities include:',
        bullets: [
          'Assisting patients with daily activities and therapeutic sessions.',
          'Organizing and participating in recreational and community events.',
          'Providing administrative support or contributing to research initiatives.',
        ],
        closing:
          "Volunteering at Ayurgreen Hospital & Rehab Village is a mutually beneficial experience. The organization gains valuable support in patient care and daily operations, while volunteers receive practical experience, skill development, and opportunities for personal and career growth. It's a chance to make a real impact while gaining insights into the field of healthcare and rehabilitation.",
      },
      patientsConsultationNote:
        'Patients seeking rehabilitation services can directly visit Ayurgreen Hospitals for consultation. Based on the patient’s needs, the hospital team will guide them to the appropriate Rehab Village accommodation facilities.',
      directContact: {
        prompt:
          'Are you interested in learning more about Rehab Village or joining our community as a partner, or volunteer? Get in touch with us today:',
        name: 'Ayurgreen Rehab Village',
        phone: '+91 89 430 555 18',
        email: 'info@ayurgreenfoundation.org',
      },
      intendedAudience: [
        'Patients: The primary beneficiaries who receive top-quality care and rehabilitation services.',
        'Families and Caregivers: Guided on providing continued support during and after rehabilitation.',
        'Healthcare Professionals: Doctors, therapists, and staff contributing their expertise in a specialized setting.',
        'Accommodation Partners: Homestay providers, service villas, and apartments within a 5 km radius of Edappal.',
        'Local Community: Benefiting from job creation and economic development opportunities.',
        'Volunteers: Actively involved in enhancing the patient experience and community support.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Empowering patients to regain independence through specialized ortho-neuro rehabilitation, extended village accommodation, and sustainable local community partnerships.',
        isPlaceholder: false,
      },
      relatedSlugs: ['social-rehabilitation', 'charity-care', 'volunteer-internship'],
    },

    // 4. VOLUNTEER INTERNSHIP PROGRAMME
    {
      slug: 'volunteer-internship',
      title: 'Volunteer Internship Programme',
      detailTitle: 'Volunteer Internship Programme',
      shortTitle: 'Volunteer Internship',
      category: 'Civic Participation',
      featuredOnHome: true,
      iconName: 'HandHeart',
      accentColor: '#059669',
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
      illustrationType: 'volunteer',
      aboutHeading: 'About the Programme',
      summary:
        'Providing students with structured opportunities to gain practical experience in community engagement, social service and healthcare-related initiatives.',
      heroSubtitle: 'Learning Through Service. Growing Through Experience.',
      heroLeadParagraphs: [
        'The Volunteer Internship Programme of Ayurgreen Foundation provides students with opportunities to gain practical exposure to healthcare, rehabilitation, and patient support services through structured volunteering experiences.',
        'The programme aims to bridge the gap between academic learning and real-world experience by engaging students in supervised activities within the healthcare environment. Through direct exposure to hospital operations and patient support systems, volunteers develop essential skills, compassion, responsibility, and a deeper understanding of patient-centred care.',
        'By encouraging young people to participate in meaningful service, Ayurgreen Foundation seeks to nurture socially responsible individuals who understand the value of empathy, teamwork, and community engagement.',
      ],
      introduction: [
        'The Volunteer Internship Programme introduces students to the functioning of a healthcare institution while allowing them to contribute to non-clinical patient support activities under appropriate supervision.',
        'The programme combines orientation, departmental exposure, guided volunteering, and reflective learning. Students gain insight into the responsibilities of healthcare teams and the importance of coordination in delivering a positive patient experience.',
        'The programme also provides an opportunity for students to understand the challenges faced by patients and their families, particularly those requiring rehabilitation and ongoing support.',
      ],
      purpose:
        'To bridge the gap between academic learning and real-world experience by engaging students in supervised, compassionate patient support activities within the healthcare environment.',
      objectives: [
        'Practical Exposure: Introduce students to healthcare and rehabilitation environments beyond the classroom.',
        'Skill Development: Strengthen communication, teamwork, coordination, and organisational skills.',
        'Compassionate Care: Encourage empathy, respect, and sensitivity towards patients and their families.',
        'Social Responsibility: Promote a culture of volunteering and service among young people.',
        'Professional Development: Develop discipline, accountability, and an understanding of professional conduct.',
        'Patient Support: Contribute to a more supportive and accessible healthcare environment through supervised volunteer assistance.',
      ],
      activitiesHeading: 'Volunteer Activities',
      activitiesIntro: [
        'Volunteers participate in designated support activities based on programme requirements, departmental needs, and their level of orientation.',
      ],
      activities: [
        {
          title: 'Patient Assistance',
          description:
            'Guiding patients and visitors to the appropriate departments and supporting elderly individuals and persons with mobility challenges.',
        },
        {
          title: 'Information Support',
          description:
            'Assisting at designated help desks and providing general directions and information under staff supervision.',
        },
        {
          title: 'Rehabilitation Exposure',
          description:
            'Observing rehabilitation services and gaining an understanding of patient support systems and the role of rehabilitation professionals.',
        },
        {
          title: 'Mobility Assistance',
          description:
            'Supporting wheelchair movement and other approved patient-mobility activities under appropriate staff guidance and safety protocols.',
        },
        {
          title: 'Administrative Assistance',
          description:
            'Helping with approved documentation, schedules, attendance records, and daily activity reports.',
        },
      ],
      stakeholdersHeading: 'Programme Participants & Impact',
      intendedAudience: [
        'Students of Ayurgreen College of Life & Sciences (ACLAS) and partner educational institutions.',
        'Young people seeking structured healthcare and rehabilitation volunteering exposure.',
        'Patients and visitors benefiting from guided, compassionate non-clinical support.',
      ],
      customSections: [
        {
          id: 'vol-activities-disclaimer',
          heading: 'Clear Scope of Volunteer Responsibilities',
          paragraphs: [
            'All volunteer activities are carried out within clearly defined responsibilities. Volunteers do not undertake clinical procedures or replace the duties of qualified healthcare professionals.',
          ],
        },
        {
          id: 'vol-programme-structure',
          heading: 'Programme Structure',
          paragraphs: [
            'The internship follows a structured approach to ensure meaningful learning and responsible participation.',
          ],
          steps: [
            {
              stepLabel: '01',
              title: 'Orientation and Induction',
              description:
                'Students are introduced to the organisation, healthcare environment, volunteer responsibilities, communication practices, professional conduct, patient confidentiality, and safety protocols.',
            },
            {
              stepLabel: '02',
              title: 'Departmental Exposure',
              description:
                'Volunteers receive supervised exposure to designated service areas, which may include the Physiotherapy Department, Front Desk, International Desk, and other approved support services.',
            },
            {
              stepLabel: '03',
              title: 'Guided Volunteering',
              description:
                'Students participate in assigned non-clinical support activities under the guidance of departmental staff.',
            },
            {
              stepLabel: '04',
              title: 'Documentation and Reflection',
              description:
                'Volunteers maintain daily reports documenting their activities, observations, learning experiences, and feedback.',
            },
            {
              stepLabel: '05',
              title: 'Monitoring and Evaluation',
              description:
                'Attendance, discipline, participation, communication, and overall performance are reviewed throughout the programme.',
            },
          ],
        },
        {
          id: 'vol-first-batch',
          kicker: 'Milestone Achievement',
          heading: 'First Batch: A Beginning Towards Meaningful Service',
          paragraphs: [
            'The first batch of the Volunteer Internship Programme was conducted by Ayurgreen Foundation for 14 students of Ayurgreen College of Life Sciences.',
            'The internship followed a structured rotational schedule, with students attending duties on Fridays, Saturdays, and Sundays. Each volunteer completed approximately seven duty days during the programme, with duty hours from 9:00 AM to 5:00 PM.',
            'Students gained exposure to the Physiotherapy Department, Front Desk, and International Desk, participating in patient assistance, information support, administrative activities, and observational learning.',
            "The programme concluded with a certificate distribution ceremony recognising the students' participation and contribution. The experience also provided valuable insights for strengthening future batches through improved departmental coordination, structured learning modules, and closer academic collaboration.",
            "The successful completion of the first batch marks an important step in Ayurgreen Foundation's efforts to create meaningful opportunities for student volunteering in healthcare and rehabilitation.",
          ],
        },
        {
          id: 'vol-impact',
          heading: 'Impact of the Programme',
          bullets: [
            {
              label: 'For Students',
              text: 'The programme offers opportunities to develop practical understanding of healthcare operations, improve interpersonal skills, strengthen professional discipline, and cultivate empathy through exposure to real-world patient care environments.',
            },
            {
              label: 'For Patients and the Institution',
              text: 'Supervised volunteer assistance can support patient guidance, improve visitor coordination, and contribute to a more welcoming healthcare environment while allowing staff to focus on their professional responsibilities.',
            },
            {
              label: 'For the Community',
              text: 'By engaging students in healthcare volunteering, the programme encourages social responsibility, community participation, and a culture of service among young people.',
            },
          ],
        },
        {
          id: 'vol-looking-ahead',
          heading: 'Looking Ahead',
          paragraphs: [
            'Ayurgreen Foundation aims to strengthen and expand the Volunteer Internship Programme through collaborations with educational institutions, improved training modules, structured departmental rotations, and systematic monitoring and evaluation.',
            'Future programmes will focus on improving learning outcomes, ensuring meaningful student participation, and creating a consistent framework for safe and effective volunteering.',
            'Through this initiative, Ayurgreen Foundation seeks to build a generation of compassionate, responsible, and socially engaged young people who recognise that healthcare is not only about treatment but also about dignity, support, and human connection.',
          ],
        },
        {
          id: 'vol-be-part',
          heading: 'Be Part of the Journey',
          paragraphs: [
            'We welcome opportunities to collaborate with educational institutions and engage students in meaningful healthcare and rehabilitation volunteering experiences.',
          ],
          ctaButtons: [
            { label: 'Register as a Volunteer', to: '/volunteer', variant: 'primary' },
            {
              label: 'Collaborate as an Institution',
              to: '/partner-with-us',
              variant: 'secondary',
            },
            { label: 'Contact Us', to: '/contact', variant: 'outline' },
          ],
        },
      ],
      impactStatus: {
        qualitativeSummary:
          'First batch successfully completed by 14 students of Ayurgreen College of Life Sciences across Physiotherapy, Front Desk, and International Desk rotations.',
        verifiedMetricLabel: 'First Batch Cohort',
        verifiedMetricValue: '14 Students',
        isPlaceholder: false,
      },
      relatedSlugs: ['ewp-scholarship', 'rehab-village', 'social-rehabilitation'],
    },

    // 5. EWP SCHOLARSHIP PROGRAMME (EDUCATION WITH PURPOSE)
    {
      slug: 'ewp-scholarship',
      title: 'EWP Scholarship Programme',
      detailTitle: 'Education With Purpose (EWP)',
      shortTitle: 'EWP Scholarship',
      category: 'Education & Research',
      featuredOnHome: true,
      iconName: 'GraduationCap',
      accentColor: '#2563EB',
      imageUrl: '/assets/aistudio/ewp_program.JPG_dbea8171.jpeg',
      cropRegion: { x: 850, y: 706, w: 115, h: 74 },
      illustrationType: 'college',
      logoUrl: '/assets/aistudio/ayurgreen_college_logo.webp',
      welcomeHeading: 'Supporting Dreams, Creating Purpose.',
      aboutHeading: 'About the EWP Programme',
      summary:
        'Supporting eligible students through educational assistance and scholarship opportunities to help reduce financial barriers to learning.',
      heroSubtitle:
        'Making education more accessible. Creating opportunities for a better future.',
      heroLeadParagraphs: [
        'Education has the power to transform lives, strengthen families, and create opportunities for future generations. However, financial difficulties can prevent deserving students from pursuing their educational ambitions.',
        'The Education With Purpose (EWP) Programme, an initiative of Ayurgreen Foundation, aims to address this challenge by supporting students who face financial barriers to higher education.',
        "Through need-based scholarship assistance, EWP seeks to make education more accessible to deserving students at Ayurgreen College of Life & Sciences (ACLAS). The programme reflects our belief that financial circumstances should not become an unnecessary obstacle to a student's educational journey.",
        'By extending targeted financial support to eligible students, EWP aims to help them continue their studies, develop their potential, and work towards a more secure future.',
        'Our belief is simple: when we support a student’s education, we invest in the future of an individual, a family, and society.',
      ],
      introduction: [
        'Education With Purpose is an educational support initiative developed by Ayurgreen Foundation to improve access to higher education for students experiencing financial hardship.',
        'The programme provides scholarship assistance to eligible students of Ayurgreen College of Life & Sciences, based on an assessment of their financial circumstances and educational needs.',
        "Rather than relying on income alone, the assessment considers the applicant's overall family situation, including household income, the number of dependants, existing financial commitments, medical expenses, available family support, and the practical challenges involved in financing education.",
        'Through this approach, EWP aims to direct support towards students who need it while maintaining a structured and transparent scholarship process.',
        'The programme also seeks to encourage educational continuity and responsible participation in academic life.',
      ],
      purpose:
        'When we support a student’s education, we invest in the future of an individual, a family, and society.',
      objectives: [
        '1. Improve Access to Education: To help eligible students pursue higher education despite financial difficulties.',
        '2. Support Financially Vulnerable Families: To provide targeted scholarship assistance to students whose families face significant financial constraints.',
        "3. Promote Educational Continuity: To reduce financial pressure that may affect a student's ability to continue their education.",
        '4. Encourage Personal Development: To create opportunities for students to build knowledge, develop professional skills, and work towards their aspirations.',
        '5. Strengthen Social Mobility: To support education as a pathway towards improved opportunities for individuals and their families.',
        '6. Ensure Responsible Scholarship Allocation: To maintain a structured process for application, assessment, verification, approval, and monitoring.',
      ],
      activitiesHeading: 'How the Scholarship Assessment Works',
      activitiesIntro: [
        "EWP follows a need-based assessment process designed to understand each applicant's circumstances before a scholarship decision is made.",
      ],
      activities: [
        {
          title: 'Step 1: Application Submission',
          description:
            'Interested students submit their scholarship application along with the required personal, educational, financial, and supporting information.',
        },
        {
          title: 'Step 2: Review of Family Circumstances',
          description:
            "The application is reviewed to understand the applicant's household situation, earning capacity, financial commitments, and educational needs.",
        },
        {
          title: 'Step 3: Personal Interaction',
          description:
            'Applicants may be invited for an interview or discussion to clarify the information provided and understand their circumstances in greater detail.',
        },
        {
          title: 'Step 4: Verification',
          description:
            'The information provided may be verified through supporting documents, telephone enquiries, community recommendations, or local-level verification, as considered necessary.',
        },
        {
          title: 'Step 5: Assessment and Recommendation',
          description:
            "The application is assessed based on the available information and the programme's eligibility and assessment criteria. A suitable level of scholarship support may then be recommended.",
        },
        {
          title: 'Step 6: Final Approval',
          description:
            'The scholarship decision is subject to approval by the competent authority in accordance with the EWP programme framework.',
        },
        {
          title: 'Step 7: Communication and Documentation',
          description:
            'Approved students are informed of their scholarship details, applicable fee arrangements, and relevant terms and conditions. The approval is documented for administrative and financial records.',
        },
      ],
      stakeholdersHeading: 'Who Can Apply?',
      stakeholdersIntro:
        'The EWP Scholarship Programme is intended for students seeking admission to eligible programmes at Ayurgreen College of Life & Sciences who require financial assistance to pursue their education.',
      intendedAudience: [
        'Total household income and the stability of earnings.',
        'Number of family members and dependants.',
        'Existing loans and financial obligations.',
        'Medical expenses and other essential household costs.',
        'Availability of financial support from family members or other sources.',
        'Housing and general living circumstances.',
        "The family's ability to meet educational expenses.",
        'Relevant supporting documents and community recommendations.',
      ],
      customSections: [
        {
          id: 'why-ewp-matters',
          heading: 'Why EWP Matters',
          paragraphs: [
            'For many families, the cost of higher education represents a significant financial commitment. Limited household income, unstable employment, existing loans, medical expenses, and other family responsibilities can make it difficult to meet educational expenses.',
            'In some cases, students must depend on borrowing or other forms of financial assistance to continue their studies. Others may have limited access to alternative support.',
            'EWP was developed in response to these challenges.',
          ],
          bulletsIntro: 'By providing need-based scholarship assistance, the programme aims to:',
          bullets: [
            { text: 'Reduce financial barriers to higher education.' },
            { text: 'Support students from economically disadvantaged backgrounds.' },
            { text: 'Help families manage the financial demands of education.' },
            { text: 'Promote fairer access to educational opportunities.' },
            {
              text: 'Encourage students to pursue their academic goals with greater confidence.',
            },
            {
              text: 'Contribute to the development of skilled and socially responsible individuals.',
            },
          ],
          bulletsFooter:
            "EWP represents Ayurgreen Foundation's commitment to extending its social impact beyond healthcare and into education.",
        },
        {
          id: 'who-can-apply-ewp',
          heading: 'Who Can Apply?',
          paragraphs: [
            'The EWP Scholarship Programme is intended for students seeking admission to eligible programmes at Ayurgreen College of Life & Sciences who require financial assistance to pursue their education.',
            'Applicants are assessed individually, with particular consideration given to their financial circumstances and the level of support required.',
          ],
          bulletsIntro: 'The assessment may consider:',
          bullets: [
            { text: 'Total household income and the stability of earnings.' },
            { text: 'Number of family members and dependants.' },
            { text: 'Existing loans and financial obligations.' },
            { text: 'Medical expenses and other essential household costs.' },
            {
              text: 'Availability of financial support from family members or other sources.',
            },
            { text: 'Housing and general living circumstances.' },
            { text: "The family's ability to meet educational expenses." },
            { text: 'Relevant supporting documents and community recommendations.' },
          ],
          bulletsFooter:
            "A recommendation from an authorised community representative or institution may support an application. However, the recommendation alone does not guarantee scholarship approval. Eligibility, scholarship availability, and the applicable support level are determined according to the programme's current guidelines and the decisions of the competent authority.",
        },
        {
          id: 'scholarship-support-ewp',
          heading: 'Scholarship Support',
          paragraphs: [
            "EWP provides scholarship assistance according to the applicable programme guidelines and the student's approved eligibility.",
            'The level of assistance is determined in accordance with the scholarship structure approved for the relevant admission cycle. The applicable benefit and the resulting amount payable by the student are communicated through the official fee structure and individual scholarship approval.',
            "Scholarship support is intended to reduce the student's eligible educational fee burden. It should not be assumed to cover every expense associated with studying.",
            'Admission charges, examination fees, travel, accommodation, food, internship expenses, and other additional costs may be excluded, depending on the applicable fee structure and scholarship terms.',
            'Students are advised to review the current fee details and scholarship conditions before confirming admission.',
          ],
          highlightNote:
            'Please note: Submission of an application does not guarantee scholarship approval. All awards are subject to assessment, availability, and final approval.',
        },
        {
          id: 'how-to-apply-ewp',
          heading: 'How to Apply',
          paragraphs: [
            'Students who wish to apply for the EWP Scholarship Programme can follow these steps:',
          ],
          steps: [
            {
              stepLabel: '1',
              title: 'Enquire About Eligibility',
              description:
                'Contact Ayurgreen College of Life & Sciences to confirm whether the programme is available for your intended course and admission cycle.',
            },
            {
              stepLabel: '2',
              title: 'Obtain the Application Form',
              description:
                'Request the EWP scholarship application form and review the application requirements.',
            },
            {
              stepLabel: '3',
              title: 'Complete the Application',
              description:
                'Provide accurate information about your family, household income, financial circumstances, and educational plans.',
            },
            {
              stepLabel: '4',
              title: 'Submit Supporting Documents',
              description:
                'Attach the documents requested by the institution. These may include relevant identity, income, financial, or other supporting records.',
            },
            {
              stepLabel: '5',
              title: 'Provide a Recommendation, Where Required',
              description:
                'Submit the recommendation letter or other community-level supporting documentation required under the current application process.',
            },
            {
              stepLabel: '6',
              title: 'Participate in Verification',
              description:
                'Be available for any interview, telephone enquiry, or additional verification requested by the programme team.',
            },
            {
              stepLabel: '7',
              title: 'Await the Official Decision',
              description:
                'The application will be reviewed through the established assessment and approval process. Applicants will be informed of the decision and, where approved, the applicable scholarship details.',
            },
          ],
          bulletsFooter:
            'For information about current application dates, eligible courses, required documents, and submission procedures, please contact Ayurgreen College of Life & Sciences.',
        },
        {
          id: 'ewp-transparency',
          heading: 'Our Commitment to Transparency',
          paragraphs: [
            'Ayurgreen Foundation recognises that scholarship assistance must be administered with care, fairness, and accountability.',
            'The EWP Programme therefore follows a structured process for collecting applications, assessing financial need, verifying information where necessary, recording decisions, and communicating approved benefits.',
            'Scholarship decisions are made in accordance with the applicable programme framework and the approval of the competent authority.',
            "The Foundation also recognises the importance of protecting applicants' personal and financial information. Information collected during the application and verification process is intended to be handled for legitimate programme administration and assessment purposes.",
            'Through these measures, EWP aims to build a scholarship programme that is both supportive of students and responsible in its use of available resources.',
          ],
        },
        {
          id: 'ewp-beyond-financial',
          heading: 'Beyond Financial Assistance',
          paragraphs: [
            'The value of education extends beyond obtaining a qualification. It creates opportunities to develop knowledge, discover abilities, build confidence, and contribute meaningfully to society.',
            'For students facing financial hardship, timely educational support can help make the difference between an aspiration that remains out of reach and an opportunity they can pursue.',
            'Through EWP, Ayurgreen Foundation seeks to help deserving students move forward with their education and work towards their goals.',
            'Every student has potential. Our aim is to help financial support become a bridge between that potential and the opportunities education can create.',
            'Education With Purpose — Supporting Dreams, Creating Purpose.',
          ],
          ctaButtons: [
            {
              label: 'ACLAS — Ayurgreen College of Life & Sciences',
              to: '/programmes/college-of-life-sciences',
              variant: 'primary',
            },
            {
              label: 'Enquire About EWP Scholarship',
              to: '/contact',
              variant: 'secondary',
            },
          ],
        },
      ],
      impactStatus: {
        qualitativeSummary:
          'Need-based scholarship assistance making higher education at Ayurgreen College of Life & Sciences (ACLAS) accessible to deserving students.',
        isPlaceholder: false,
      },
      relatedSlugs: ['college-of-life-sciences', 'volunteer-internship', 'charity-care'],
    },

    // 6. STROKE AWARENESS MEDICAL CAMPS / MEDICAL CAMPS & COMMUNITY OUTREACH
    {
      slug: 'medical-camps',
      title: 'Stroke Awareness Medical Camps',
      detailTitle: 'Medical Camps & Community Outreach',
      shortTitle: 'Medical Camps',
      category: 'Community Health',
      featuredOnHome: true,
      iconName: 'Stethoscope',
      accentColor: '#DC2626',
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      illustrationType: 'medical-camps',
      aboutHeading: 'About the Programme',
      summary:
        'Organising community outreach and awareness activities to promote stroke prevention, recognition of warning signs and the importance of timely medical attention.',
      heroSubtitle: 'Taking Healthcare Beyond Hospital Walls',
      introduction: [
        'Ayurgreen Foundation supports community health and wellbeing through medical camps, health awareness programmes and outreach activities conducted in collaboration with healthcare professionals, institutional partners and community organisations.',
        'By bringing together medical and non-medical teams, these initiatives aim to extend health education, promote preventive care and connect communities with relevant healthcare knowledge and services.',
      ],
      purpose:
        'To extend health education, promote preventive care and connect communities with relevant healthcare knowledge and services beyond hospital walls.',
      objectives: [
        'Health Awareness: Educating communities about health conditions, prevention, early identification of symptoms and the importance of timely medical care.',
        'Multidisciplinary Participation: Bringing together doctors, rehabilitation professionals and other healthcare personnel to address different aspects of health and wellbeing.',
        'Community Partnerships: Collaborating with local organisations and community groups to reach people effectively.',
        'Inclusive Outreach: Conducting programmes for different communities, including underserved groups and beneficiaries of partner organisations.',
      ],
      activitiesHeading: 'Our Approach',
      activitiesIntro: ['Our community outreach activities focus on:'],
      activities: [
        {
          title: 'Health Awareness',
          description:
            'Educating communities about health conditions, prevention, early identification of symptoms and the importance of timely medical care.',
        },
        {
          title: 'Multidisciplinary Participation',
          description:
            'Bringing together doctors, rehabilitation professionals and other healthcare personnel to address different aspects of health and wellbeing.',
        },
        {
          title: 'Community Partnerships',
          description:
            'Collaborating with local organisations and community groups to reach people effectively.',
        },
        {
          title: 'Inclusive Outreach',
          description:
            'Conducting programmes for different communities, including underserved groups and beneficiaries of partner organisations.',
        },
      ],
      stakeholdersHeading: 'Outreach Partners & Beneficiaries',
      intendedAudience: [
        'Communities across Kozhikode, Malappuram, and surrounding districts.',
        'Beneficiaries of partner organisations such as ILA Foundation.',
        'Local civic bodies and service clubs including Rotary Club Calicut Cyber City and Nilambur Rotary Club.',
      ],
      customSections: [
        {
          id: 'outreach-activities-camps',
          kicker: 'Documented Field Impact',
          heading: 'Our Community Outreach Activities',
          cards: [
            {
              badge: '01 · District-Level Camp',
              title: '1. District-Level Stroke Awareness & Rehabilitation Medical Camp',
              imageUrl: '/assets/aistudio/stroke_camp_-_calicut_3972d47b.png',
              meta: [
                { label: 'Location', value: 'Thondayad, Kozhikode' },
                { label: 'Organised by', value: 'Ayurgreen Foundation' },
                { label: 'In association with', value: 'Rotary Club Calicut Cyber City' },
              ],
              paragraphs: [
                'Ayurgreen Foundation, in association with Rotary Club Calicut Cyber City, organised a free district-level medical camp focused on stroke awareness, rehabilitation and recovery support.',
                'The programme provided patients and caregivers with guidance on stroke rehabilitation, physiotherapy, occupational therapy, robotic rehabilitation, nutrition and supportive care approaches. A stroke survivor also shared his recovery journey, highlighting the importance of continuous rehabilitation and support.',
              ],
              impactTitle: 'Impact',
              impactBullets: ['More than 40 participants benefited from the programme.'],
            },
            {
              badge: '02 · Collaborative Camp',
              title: '2. Koode Medical Camp',
              imageUrl: '/assets/aistudio/medical_camp_3776972f.webp',
              meta: [
                { label: 'Date', value: '1 November 2025' },
                { label: 'Venue', value: 'Ayurgreen Hospital, Edappal' },
                { label: 'Organised by', value: 'Ayurgreen Foundation' },
                { label: 'In collaboration with', value: 'ILA Foundation' },
              ],
              paragraphs: [
                'The Koode Medical Camp was organised to improve access to healthcare for beneficiaries associated with ILA Foundation. The initiative combined medical consultations with caregiver guidance, health education and supportive engagement activities.',
                'Participants received individual medical guidance and information about home-based care, government welfare schemes and available support services. The programme also helped identify patients requiring continued assistance.',
              ],
              impactTitle: 'Impact at a glance',
              impactBullets: [
                '54 patients participated in the camp.',
                "3 patients were subsequently enrolled in Ayurgreen Foundation's Charity Care Programme following assessment.",
              ],
            },
            {
              badge: '03 · My City, Healthy City Initiative',
              title: '3. Nilambur Stroke Awareness Medical Camp',
              meta: [
                { label: 'Location', value: 'Nilambur, Malappuram' },
                { label: 'In collaboration with', value: 'Nilambur Rotary Club' },
              ],
              paragraphs: [
                'Ayurgreen Foundation, in collaboration with Nilambur Rotary Club under the My City, Healthy City initiative, conducted a stroke awareness medical camp to promote awareness of stroke prevention, early recognition of warning signs, timely medical intervention and rehabilitation.',
                'The programme brought together medical and rehabilitation professionals to share essential health information and highlight the importance of recognising stroke symptoms and seeking immediate medical attention.',
              ],
              impactTitle: 'Impact at a glance',
              impactBullets: [
                '30 Participants — Reached through stroke awareness and health education.',
              ],
            },
          ],
        },
      ],
      impactStatus: {
        qualitativeSummary:
          'Over 124 participants directly supported across the Kozhikode District-Level Camp (40+), Koode Medical Camp (54 patients, 3 enrolled in Charity Care), and Nilambur Camp (30 participants).',
        verifiedMetricLabel: 'Camp Participants',
        verifiedMetricValue: '124+',
        isPlaceholder: false,
      },
      relatedSlugs: ['charity-care', 'rehab-village', 'social-rehabilitation'],
    },

    // 7. AYURGREEN COLLEGE OF LIFE & SCIENCES (ACLAS)
    {
      slug: 'college-of-life-sciences',
      title: 'Ayurgreen College of Life & Sciences (ACLAS)',
      detailTitle: 'Ayurgreen College of Life & Sciences (ACLAS)',
      shortTitle: 'ACLAS',
      category: 'Education & Research',
      featuredOnHome: false,
      iconName: 'GraduationCap',
      accentColor: '#4F46E5',
      illustrationType: 'college',
      logoUrl: '/assets/aistudio/ayurgreen_college_logo.webp',
      summary:
        'An educational institution offering programmes in healthcare and allied disciplines.',
      heroSubtitle:
        'An educational institution offering programmes in healthcare and allied disciplines within the Ayurgreen ecosystem.',
      introduction: [
        'Ayurgreen College of Life & Sciences (ACLAS) is an educational institution offering programmes in healthcare and allied disciplines, connected with Ayurgreen Foundation as part of the broader Ayurgreen ecosystem.',
        'Through initiatives such as the Education With Purpose (EWP) Scholarship Programme and the Volunteer Internship Programme, Ayurgreen Foundation works closely with ACLAS to reduce financial barriers to higher education and provide students with supervised practical exposure in healthcare and rehabilitation.',
      ],
      purpose:
        'To deliver quality education in healthcare and allied disciplines while nurturing socially responsible, skilled, and compassionate professionals.',
      objectives: [
        'Offer structured educational programmes in healthcare and allied disciplines.',
        'Partner with Ayurgreen Foundation on the Education With Purpose (EWP) need-based scholarship initiative.',
        'Engage students in the Volunteer Internship Programme across hospital and rehabilitation departments.',
        'Encourage youth participation in Stroke Force awareness and community health outreach.',
      ],
      activities: [
        {
          title: 'Healthcare & Allied Disciplines Education',
          description:
            'Academic instruction and practical training designed to build strong professional competencies in healthcare.',
        },
        {
          title: 'EWP Scholarship Access',
          description:
            'Supporting eligible students experiencing financial hardship through need-based scholarship assessment.',
        },
        {
          title: 'Supervised Hospital Volunteering',
          description:
            'Enabling students to gain real-world exposure in Physiotherapy, Front Desk, International Desk, and patient support.',
        },
      ],
      intendedAudience: [
        'Students pursuing higher education in healthcare and allied disciplines.',
        'Applicants seeking need-based financial support through the EWP Scholarship Programme.',
        'Student volunteers participating in the Volunteer Internship Programme.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Connected educational institution supporting student scholarships (EWP) and structured healthcare internships.',
        isPlaceholder: false,
      },
      relatedSlugs: ['ewp-scholarship', 'volunteer-internship', 'radiology'],
    },

    // 8. RADIOLOGY DEPARTMENT – GETWELL HOSPITAL
    {
      slug: 'radiology',
      title: 'Radiology Department – Getwell Hospital',
      detailTitle: 'Radiology Department – Getwell Hospital',
      shortTitle: 'Radiology Department',
      category: 'Healthcare Access',
      featuredOnHome: false,
      iconName: 'ScanLine',
      accentColor: '#0891B2',
      illustrationType: 'radiology',
      logoUrl: '/assets/aistudio/getwell_hospital_logo.webp',
      summary:
        'A diagnostic imaging service supporting clinical care through radiology services.',
      heroSubtitle:
        'A diagnostic imaging service supporting clinical care through radiology services within the Ayurgreen ecosystem.',
      introduction: [
        'The Radiology Department at Getwell Hospital is a diagnostic imaging service supporting clinical care through radiology services.',
        'As an associated service connected with Ayurgreen Foundation, it contributes to the broader healthcare ecosystem by supporting timely diagnostic investigations, including assistance facilitated through the Foundation’s Charity Care Programme.',
      ],
      purpose:
        'To support clinical care and accurate medical diagnosis through reliable radiology and diagnostic imaging services.',
      objectives: [
        'Provide diagnostic imaging services supporting clinical and neurological care.',
        'Coordinate with Ayurgreen Foundation’s Charity Care Programme to assist eligible patients requiring diagnostic investigations.',
        'Maintain high standards of patient safety, comfort, and diagnostic clarity.',
      ],
      activities: [
        {
          title: 'Diagnostic Imaging Services',
          description:
            'Supporting clinical decision-making and rehabilitation planning through radiology investigations.',
        },
        {
          title: 'Charity Care Diagnostic Support',
          description:
            'Facilitating access to diagnostic investigations for financially vulnerable patients assessed under Charity Care.',
        },
        {
          title: 'Multidisciplinary Clinical Support',
          description:
            'Working alongside doctors and rehabilitation teams to support timely diagnosis and continuity of care.',
        },
      ],
      intendedAudience: [
        'Patients requiring diagnostic imaging for clinical or rehabilitative evaluation.',
        'Eligible beneficiaries supported for diagnostic investigations under the Charity Care Programme.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Diagnostic imaging service supporting clinical care and Charity Care diagnostic assistance.',
        isPlaceholder: false,
      },
      relatedSlugs: ['charity-care', 'medical-camps', 'rehab-village'],
    },
  ],
  associatedInstitutions: [
    {
      id: 'inst-college',
      name: 'Ayurgreen College of Life & Sciences (ACLAS)',
      category: 'Education & Allied Disciplines',
      description:
        'An educational institution offering programmes in healthcare and allied disciplines.',
      iconName: 'Landmark',
      logoUrl: '/assets/aistudio/ayurgreen_college_logo.webp',
      internalRoute: '/programmes/college-of-life-sciences',
      externalUrl: 'https://ayurgreencollege.com/',
      buttonLabel: 'Visit Website',
    },
    {
      id: 'inst-research',
      name: 'Ayurgreen Scientifica Research Institute',
      category: 'Scientific Research & Academics',
      description:
        'An institution focused on scientific research and related academic and professional activities.',
      iconName: 'Microscope',
      logoUrl: '/assets/aistudio/ayurgreen_scientifica_logo.webp',
      internalRoute: '/about#institutions',
      externalUrl: 'https://ayurgreenscientifica.org/',
      buttonLabel: 'Visit Website',
    },
    {
      id: 'inst-radiology',
      name: 'Radiology Department – Getwell Hospital',
      category: 'Diagnostic Imaging Service',
      description:
        'A diagnostic imaging service supporting clinical care through radiology services.',
      iconName: 'ScanLine',
      logoUrl: '/assets/aistudio/getwell_hospital_logo.webp',
      internalRoute: '/programmes/radiology',
      externalUrl: 'https://getwell-hospital-naduvattom.vercel.app/',
      buttonLabel: 'Visit Website',
    },
  ],
  impactPillars: [
    {
      id: 'pillar-charity',
      category: 'Patients Supported',
      themeTitle: 'Charity Care Programme',
      description:
        'Patients supported through full and partial financial assistance towards essential medical treatment, diagnostics, and care.',
      verifiedNumber: '112+',
      iconName: 'HeartHandshake',
      programmeLink: '/programmes/charity-care',
    },
    {
      id: 'pillar-rehab',
      category: 'Rehabilitation Support',
      themeTitle: 'Rehab Village',
      description:
        'Community-based rehabilitation initiative providing affordable accommodation, patient support and livelihood opportunities for local community members.',
      verifiedNumber: '230+',
      iconName: 'Home',
      programmeLink: '/programmes/rehab-village',
    },
    {
      id: 'pillar-outreach',
      category: 'Medical Camps',
      themeTitle: 'Community Health Outreach',
      description:
        'Through medical camps and community-based health initiatives.',
      verifiedNumber: '200+',
      iconName: 'Users',
      programmeLink: '/programmes/medical-camps',
    },
    {
      id: 'pillar-volunteers',
      category: 'Student Internship',
      themeTitle: 'Volunteer Internship',
      description:
        'Students of Ayurgreen College of Life Sciences trained through structured hospital and rehabilitation volunteering batches.',
      verifiedNumber: '47+',
      iconName: 'HandHeart',
      programmeLink: '/programmes/volunteer-internship',
    },
  ],
  impactStories: [
    {
      id: 'story-charity-care-impact',
      title: '90 Patients Supported Through Structured Charity Care Assistance (2023–2026)',
      category: 'Programme Outcomes',
      summary:
        'Between 2023 and 2026, the Charity Care Programme has supported 90 financially vulnerable patients in association with Ayurgreen Hospital, providing 100% assistance to 47 patients and partial assistance to 43 patients.',
      body: [
        'The Charity Care Programme is an initiative of Ayurgreen Foundation, implemented in association with Ayurgreen Hospital to ensure that financial difficulties do not prevent individuals from accessing necessary medical treatment, diagnostic services, medicines, and rehabilitation.',
        'Across four years of service (2023–2026), the programme has supported 90 patients/cases through a rigorous 5-step socio-economic assessment and verification process: 11 patients in 2023 (11 receiving 100% assistance), 24 patients in 2024 (13 receiving 100% assistance), 36 patients in 2025 (13 receiving 100% assistance), and 19 patients in 2026 (10 receiving 100% assistance).',
      ],
      dateLabel: '2023–2026 · Charity Care Programme',
      relatedProgrammeSlug: 'charity-care',
      isPlaceholder: false,
      cropRegion: { x: 76, y: 706, w: 96, h: 74 },
    },
    {
      id: 'story-medical-camps-outreach',
      title: 'Taking Healthcare Beyond Hospital Walls: Kozhikode, Edappal & Nilambur Medical Camps',
      category: 'Community Impact',
      summary:
        'In collaboration with Rotary Club Calicut Cyber City, ILA Foundation, and Nilambur Rotary Club, Ayurgreen Foundation conducted specialized stroke awareness and community medical camps reaching over 124 participants.',
      body: [
        'At the District-Level Stroke Awareness & Rehabilitation Medical Camp in Thondayad, Kozhikode (in association with Rotary Club Calicut Cyber City), more than 40 participants received guidance on stroke rehabilitation, physiotherapy, occupational therapy, robotic rehabilitation, and nutrition, alongside a stroke survivor sharing his recovery journey.',
        'At the Koode Medical Camp on 1 November 2025 at Ayurgreen Hospital, Edappal (in collaboration with ILA Foundation), 54 patients participated in consultations and caregiver guidance, and 3 patients were subsequently enrolled in the Charity Care Programme. In Nilambur, Malappuram (with Nilambur Rotary Club under the My City, Healthy City initiative), 30 participants were reached through stroke awareness and health education.',
      ],
      dateLabel: 'Community Outreach · Medical Camps',
      relatedProgrammeSlug: 'medical-camps',
      isPlaceholder: false,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
    },
    {
      id: 'story-volunteer-internship-batch1',
      title: 'First Batch of Volunteer Internship Programme Completed by 14 ACLAS Students',
      category: 'Volunteer Experiences',
      summary:
        '14 students of Ayurgreen College of Life Sciences completed structured rotational duties across the Physiotherapy Department, Front Desk, and International Desk, learning compassionate patient support through service.',
      body: [
        'The first batch of the Volunteer Internship Programme was conducted by Ayurgreen Foundation for 14 students of Ayurgreen College of Life Sciences. Following a structured rotational schedule on Fridays, Saturdays, and Sundays (9:00 AM to 5:00 PM), each volunteer completed approximately seven duty days.',
        'Students participated in non-clinical patient assistance, mobility support, help desk guidance, administrative documentation, and rehabilitation observation, concluding with a certificate distribution ceremony recognising their contribution.',
      ],
      dateLabel: 'First Batch · Volunteer Internship Programme',
      relatedProgrammeSlug: 'volunteer-internship',
      isPlaceholder: false,
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
    },
  ],
  newsEvents: [
    {
      id: 'news-koode-medical-camp',
      slug: 'koode-medical-camp',
      title: 'Koode Medical Camp in Collaboration with ILA Foundation',
      category: 'Medical Camps',
      dateLabel: '1 November 2025',
      locationLabel: 'Ayurgreen Hospital, Edappal',
      heroSubtitle:
        'Bridging Community Healthcare Access, Caregiver Guidance & Long-Term Charity Care Support',
      partnerOrOrganiser: 'Ayurgreen Foundation in collaboration with ILA Foundation',
      impactMetricValue: '54',
      impactMetricLabel: 'Patients Consulted · 3 Enrolled in Charity Care',
      summary:
        '54 patients participated in medical consultations, caregiver guidance, and health education; 3 patients were subsequently enrolled in the Charity Care Programme following assessment.',
      content: [
        'The Koode Medical Camp was organised on 1 November 2025 at Ayurgreen Hospital, Edappal by Ayurgreen Foundation in collaboration with ILA Foundation to improve access to healthcare for beneficiaries associated with ILA Foundation.',
        'The initiative combined specialist medical consultations with caregiver guidance, preventive health education, and supportive community engagement activities. Participants and their families received individual medical guidance alongside practical information about home-based care, government welfare schemes, and rehabilitation support services.',
        'Impact at a glance: 54 patients participated in the camp, and 3 financially vulnerable patients were subsequently enrolled in Ayurgreen Foundation’s Charity Care Programme following structured socio-economic assessment.',
      ],
      highlights: [
        '54 patients and family members received dedicated medical consultations and rehabilitation guidance.',
        '3 deserving patients identified during the camp were enrolled directly into the Charity Care Programme.',
        'Dedicated sessions on home-based caregiver management, assistive mobility, and social welfare schemes.',
        'Joint community coordination between Ayurgreen Hospital clinical teams, student volunteers, and ILA Foundation.',
      ],
      activities: [
        {
          title: 'Specialist Medical & Rehabilitation Consultations',
          description:
            'Individual clinical evaluation for patients experiencing neurological, orthopaedic, and chronic health conditions.',
        },
        {
          title: 'Caregiver Guidance & Home-Care Literacy',
          description:
            'Equipping family members with safe patient-handling techniques, daily therapy routines, and emotional support strategies.',
        },
        {
          title: 'Welfare Scheme & Support Navigation',
          description:
            'Providing clear information on government health schemes, disability support pathways, and institutional rehabilitation options.',
        },
        {
          title: 'Charity Care Socio-Economic Screening',
          description:
            'Identifying financially vulnerable patients requiring ongoing treatment and enrolling eligible cases into Charity Care.',
        },
      ],
      stakeholders: [
        'Beneficiaries and families associated with ILA Foundation',
        'Patients requiring neurological and orthopaedic rehabilitation support',
        'Family caregivers seeking home-based care guidance',
        'Ayurgreen Hospital doctors, therapists, and Foundation volunteers',
      ],
      relatedRoute: '/programmes/medical-camps',
      isPlaceholder: false,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      imageUrl: '/assets/aistudio/medical_camp_3776972f.webp',
      galleryImages: [
        {
          url: '/assets/aistudio/medical_camp_3776972f.webp',
          alt: 'Speaker addressing patients and families at the Koode Medical Camp at Ayurgreen Campus, Edappal',
          caption: 'Interactive health education and caregiver address during the Koode Medical Camp at Ayurgreen Campus.',
          objectPosition: 'left center',
        },
        {
          url: '/assets/aistudio/charity_care_6e336a13.webp',
          alt: 'Clinical care and diagnostic assistance supporting patients enrolled in the Charity Care Programme from the Koode Medical Camp',
          caption: 'Clinical screening and treatment support linking camp beneficiaries to the Charity Care Programme.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/medical_camp_3776972f.webp',
          alt: 'Wide view of 54 patients and caregivers gathered under the Koode Medical Camp pavilion at Ayurgreen Hospital, Edappal',
          caption: '54 beneficiaries and caregivers participating in the Koode Medical Camp in collaboration with ILA Foundation.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/social_rehab_program_3edebc6f.png',
          alt: 'Rehabilitation consultation and patient support guidance provided by Ayurgreen specialists',
          caption: 'Individualised rehabilitation counselling and functional recovery guidance for patients and families.',
          objectPosition: '82% center',
        },
        {
          url: '/assets/aistudio/volunteer_activit_801ee57d.webp',
          alt: 'Ayurgreen Foundation student volunteers assisting patients and coordinating registration at the medical camp',
          caption: 'Student volunteers and coordinators facilitating patient assistance and camp registration.',
          objectPosition: 'center 35%',
        },
        {
          url: '/assets/aistudio/rehab_village_vehicle_4fb8d250.webp',
          alt: 'Accessible patient transport vehicle supporting mobility-challenged participants at Ayurgreen Campus',
          caption: 'Accessible campus transport supporting elderly and mobility-challenged camp participants.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/medical_camp_3776972f.webp',
          alt: 'Community members and caregivers seated during the health awareness session at Koode Medical Camp, Edappal',
          caption: 'Community members engaging in preventive healthcare and home-based care discussions.',
          objectPosition: 'right center',
        },
      ],
    },
    {
      id: 'news-calicut-stroke-camp',
      slug: 'calicut-stroke-camp',
      title: 'Calicut Stroke Awareness & Rehabilitation Camp (District-Level)',
      category: 'Medical Camps',
      dateLabel: 'Community Outreach Report',
      locationLabel: 'Thondayad, Kozhikode',
      heroSubtitle:
        'District-Level Stroke Awareness, Multidisciplinary Rehabilitation & Survivor Testimony',
      partnerOrOrganiser: 'Ayurgreen Foundation in association with Rotary Club Calicut Cyber City',
      impactMetricValue: '40+',
      impactMetricLabel: 'Participants Benefited in Kozhikode',
      summary:
        'Organised in association with Rotary Club Calicut Cyber City, providing over 40 participants with guidance on stroke rehabilitation, physiotherapy, occupational therapy, and robotic rehabilitation.',
      content: [
        'Ayurgreen Foundation, in association with Rotary Club Calicut Cyber City, organised a free district-level medical camp at Thondayad, Kozhikode focused on stroke awareness, multidisciplinary rehabilitation, and long-term recovery support.',
        'The programme provided patients, stroke survivors, and caregivers with expert guidance on stroke rehabilitation, physiotherapy, occupational therapy, robotic rehabilitation, clinical nutrition, and supportive care approaches. A stroke survivor also shared his personal recovery journey, inspiring families and highlighting the transformative impact of continuous, structured rehabilitation.',
        'Impact at a glance: More than 40 participants and families across Kozhikode benefited from the district-level programme.',
      ],
      highlights: [
        'Over 40 participants, stroke survivors, and family caregivers reached across Kozhikode district.',
        'Organised in collaboration with Rotary Club Calicut Cyber City at Thondayad, Kozhikode.',
        'Expert sessions covering physiotherapy, occupational therapy, robotic rehabilitation, and nutrition.',
        'Firsthand recovery testimony shared by a stroke survivor to motivate patients and families.',
      ],
      activities: [
        {
          title: 'Stroke Prevention & Early Recognition Session',
          description:
            'Educating participants and families on stroke risk factors, warning signs, and the importance of timely medical intervention.',
        },
        {
          title: 'Physiotherapy, Occupational & Robotic Rehab Guidance',
          description:
            'Demonstrating modern neuro-rehabilitation pathways including robotic therapy and functional independence training.',
        },
        {
          title: 'Clinical Nutrition & Supportive Care',
          description:
            'Dietary counselling and secondary stroke prevention strategies tailored for recovering patients.',
        },
        {
          title: 'Stroke Survivor Experience Sharing',
          description:
            'An inspiring session where a stroke survivor shared practical insights on resilience, therapy adherence, and family support.',
        },
      ],
      stakeholders: [
        'Stroke survivors and neurological rehabilitation patients in Kozhikode',
        'Family members and primary home caregivers',
        'Members of Rotary Club Calicut Cyber City',
        'Ayurgreen neuro-rehabilitation specialists, physiotherapists, and occupational therapists',
      ],
      relatedRoute: '/programmes/medical-camps',
      isPlaceholder: false,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      imageUrl: '/assets/aistudio/stroke_camp_-_calicut_3972d47b.png',
      galleryImages: [
        // 1. Left Top (Portrait/Square)
        {
          url: '/assets/aistudio/Screenshot_2026-05-07_141015_be0a4072.png',
          alt: 'Ayurgreen neuro-rehabilitation specialist conducting a one-on-one functional assessment with a stroke survivor at the Calicut medical camp',
          caption: 'One-on-one physiotherapy and neuro-rehabilitation assessment for stroke survivors.',
          objectPosition: 'center 25%',
        },
        // 2. Left Bottom (Portrait/Square)
        {
          url: '/assets/aistudio/Screenshot_2026-05-08_151131_5ff92d80.png',
          alt: 'Ayurgreen Foundation student volunteers registering a participant at the Calicut Stroke Awareness and Rehabilitation Camp intake desk',
          caption: 'Student volunteers welcoming and registering participants at the camp intake desk.',
          objectPosition: 'center 25%',
        },
        // 3. Center Top (Wide Landscape)
        {
          url: '/assets/aistudio/Screenshot_2026-05-07_140630_5933b37e.png',
          alt: 'Specialist medical consultation in front of the Together Against Stroke Free Stroke Medical Camp 2026 banner at Thondayad, Kozhikode with Rotary Calicut Cybercity',
          caption: 'Medical consultation under the "Together Against Stroke — Free Stroke Medical Camp 2026" banner in Thondayad, Kozhikode.',
          objectPosition: 'center 35%',
        },
        // 4. Center Middle (Wide Landscape)
        {
          url: '/assets/aistudio/Screenshot_2026-05-08_151305_4c1c5eb8.png',
          alt: 'Ayurgreen nursing team at the Vitals Checking station measuring blood pressure for a wheelchair-assisted stroke survivor in Kozhikode',
          caption: 'Nursing team checking blood pressure and clinical vitals for a stroke survivor at the Vitals Checking desk.',
          objectPosition: 'center 28%',
        },
        // 5. Center Bottom (Wide Landscape)
        {
          url: '/assets/aistudio/Screenshot_2026-05-07_140707_5f7161ef.png',
          alt: 'Occupational therapist guiding a patient through hand-grip dynamometer and fine-motor rehabilitation exercises at the Calicut Stroke Camp',
          caption: 'Occupational therapy station (C2) evaluating hand-grip strength and upper-limb motor recovery.',
          objectPosition: 'center 30%',
        },
        // 6. Right Top (Portrait/Square)
        {
          url: '/assets/aistudio/Screenshot_2026-05-07_141207_35c53cde.png',
          alt: 'Clinical dietitian counselling a stroke patient and family caregiver on nutrition and secondary stroke prevention at the Calicut camp',
          caption: 'Clinical nutrition and dietetics consultation (E1) for stroke recovery and secondary prevention.',
          objectPosition: 'center 35%',
        },
        // 7. Right Bottom (Portrait/Square)
        {
          url: '/assets/aistudio/Screenshot_2026-05-08_151027_cfd7ab6d.png',
          alt: 'Ayurgreen clinical coordinator briefing student volunteers beside the Ortho Neuro Rehabilitation standee at the Calicut Stroke Camp',
          caption: 'Clinical team and student volunteers coordinating patient pathways beside the Ortho-Neuro Rehabilitation banner.',
          objectPosition: 'center 25%',
        },
      ],
    },
    {
      id: 'news-nilambur-stroke-camp',
      slug: 'nilambur-stroke-camp',
      title: 'Nilambur Stroke Awareness Medical Camp',
      category: 'Medical Camps',
      dateLabel: 'My City, Healthy City Initiative',
      locationLabel: 'Nilambur, Malappuram',
      heroSubtitle:
        'Promoting Early Stroke Recognition, Preventive Health Literacy & Timely Intervention',
      partnerOrOrganiser: 'Ayurgreen Foundation in collaboration with Nilambur Rotary Club',
      impactMetricValue: '30+',
      impactMetricLabel: 'Participants Reached in Nilambur',
      summary:
        'Conducted in collaboration with Nilambur Rotary Club, reaching 30 participants with stroke prevention education, warning sign recognition, and rehabilitation guidance.',
      content: [
        'Ayurgreen Foundation, in collaboration with Nilambur Rotary Club under the My City, Healthy City initiative, conducted a dedicated stroke awareness medical camp in Nilambur, Malappuram to promote community-wide awareness of stroke prevention, early recognition of warning signs, timely medical intervention, and structured rehabilitation.',
        'The programme brought together medical doctors, physiotherapists, and rehabilitation professionals to share essential health information and highlight the life-saving importance of recognising stroke symptoms early using the BE FAST framework and seeking immediate hospital care.',
        'Impact at a glance: 30 participants and families in Nilambur were reached directly through stroke awareness and preventive health education.',
      ],
      highlights: [
        '30 community members reached through interactive stroke education and health consultations.',
        'Conducted under the "My City, Healthy City" initiative in partnership with Nilambur Rotary Club.',
        'Focused training on the BE FAST stroke warning sign recognition method for rapid emergency response.',
        'Guidance on post-stroke neuro-rehabilitation and preventive lifestyle management.',
      ],
      activities: [
        {
          title: 'BE FAST Warning Sign Education',
          description:
            'Teaching community members to identify Balance loss, Eyesight changes, Facial drooping, Arm weakness, and Speech difficulty.',
        },
        {
          title: 'Preventive Health & Risk Factor Screening',
          description:
            'Raising awareness on managing hypertension, diabetes, and lifestyle factors to prevent stroke occurrence.',
        },
        {
          title: 'Post-Stroke Rehabilitation Pathways',
          description:
            'Informing families about multidisciplinary physiotherapy, occupational therapy, and social rehabilitation support.',
        },
        {
          title: 'Rotary Community Collaboration',
          description:
            'Partnering with local civic leaders from Nilambur Rotary Club to extend health literacy into neighbourhood networks.',
        },
      ],
      stakeholders: [
        'Residents and families of Nilambur, Malappuram District',
        'Nilambur Rotary Club members and civic volunteers',
        'Individuals at risk of stroke and their family caregivers',
        'Ayurgreen Foundation medical and rehabilitation outreach team',
      ],
      relatedRoute: '/programmes/medical-camps',
      isPlaceholder: false,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      imageUrl: '/assets/aistudio/stroke_force_fc11680c.webp',
      galleryImages: [
        {
          url: '/assets/aistudio/stroke_force_fc11680c.webp',
          alt: 'Stroke Force community awareness initiative promoting early stroke recognition and caregiver support in Nilambur',
          caption: 'Empowering families in Nilambur with early stroke recognition and compassionate recovery support.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/social_rehab_program_3edebc6f.png',
          alt: 'Rehabilitation specialist guiding a patient during community stroke recovery outreach',
          caption: 'One-on-one rehabilitation guidance and functional recovery counselling.',
          objectPosition: '82% center',
        },
        {
          url: '/assets/aistudio/medical_camp_3776972f.webp',
          alt: 'Community health session and medical consultation organized by Ayurgreen Foundation in Malappuram',
          caption: 'Community members participating in stroke prevention and health education discussions.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/stroke_camp_-_calicut_3972d47b.png',
          alt: 'Stroke awareness presentation highlighting the BE FAST warning signs in collaboration with Rotary partners',
          caption: 'Clinical presentation on recognising stroke warning signs and acting fast during the golden hour.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/volunteer_activit_801ee57d.webp',
          alt: 'Ayurgreen Foundation outreach volunteers coordinating participant registration and health education materials',
          caption: 'Foundation volunteers assisting participants with health awareness resources.',
          objectPosition: 'center 35%',
        },
        {
          url: '/assets/aistudio/charity_care_6e336a13.webp',
          alt: 'Clinical screening and blood pressure check during Ayurgreen Foundation outreach',
          caption: 'Preventive clinical screening and patient support during community medical outreach.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/rehab_village_vehicle_4fb8d250.webp',
          alt: 'Ayurgreen Rehab Village accessible transport supporting community rehabilitation outreach across Malappuram',
          caption: 'Dedicated outreach logistics connecting Malappuram communities with Ayurgreen rehabilitation care.',
          objectPosition: 'center center',
        },
      ],
    },
    {
      id: 'news-run-fast-marathon',
      slug: 'run-fast-marathon',
      title: 'RUN FAST Mini Marathon — Stroke Force Public Awareness Initiative',
      category: 'Awareness Campaigns',
      dateLabel: '29 October 2025',
      locationLabel: 'Edappal, Malappuram',
      heroSubtitle:
        'Together Against Stroke: Recognising Stroke Signs, Acting Fast & Saving Lives Through Public Action',
      partnerOrOrganiser:
        'Ayurgreen Foundation · Stroke Force · Niramaya Rehab Speciality Hospital · Getwell Hospitals · ACLAS',
      impactMetricValue: '250+',
      impactMetricLabel: 'Runners, Volunteers & Healthcare Advocates United',
      summary:
        'Public mini marathon organised on World Stroke Day (29 October 2025) in Edappal, Malappuram to promote active living and spread the life-saving message of recognising stroke warning signs and acting fast.',
      content: [
        'The RUN FAST Stroke Awareness Marathon 2025 was organised on 29 October 2025 in Edappal, Malappuram as a flagship public engagement event under Ayurgreen Foundation’s Stroke Force initiative. Held under the banner "Together Against Stroke", the marathon united citizens, senior runners, youth athletes, police officials, medical professionals, and student volunteers to champion stroke prevention and rapid emergency response.',
        'Inaugurated at the Ayurgreen Campus in the presence of law enforcement officials and institutional leadership from Ayurgreen Hospitals, Niramaya Rehab Speciality Hospital, Getwell Hospitals, Green Health, and Ayurgreen College of Life & Sciences (ACLAS), the marathon transformed the streets of Edappal into a vibrant movement for community health literacy.',
        'Along the route, dedicated medical support stations, doctors, and student volunteers ensured runner safety while engaging onlookers with the core Stroke Force message: Recognising Stroke Signs (BE FAST). Acting Fast. Saving Lives.',
      ],
      highlights: [
        'Organised on 29 October 2025 in Edappal, Malappuram under the theme "Together Against Stroke".',
        'Flagged off in the presence of Police Sub-Inspector and Ayurgreen Group leadership at Ayurgreen Campus.',
        'Wide participation spanning youth athletes, senior citizens, healthcare professionals, and ACLAS student volunteers.',
        'Full on-route medical support, hydration stations, bib registration desks, and post-marathon certificate distribution.',
      ],
      activities: [
        {
          title: 'Participant Registration & Bib Distribution',
          description:
            'Structured morning registration desks at Ayurgreen Campus equipping every runner with official RUN FAST marathon bibs and stroke awareness kits.',
        },
        {
          title: 'Official Inauguration & Flag-Off Ceremony',
          description:
            'Dignitaries, police officials, and hospital leadership addressed the runners on stroke prevention before flagging off the marathon.',
        },
        {
          title: 'Public Awareness Run Across Edappal',
          description:
            'Runners of all age groups carried the "Run FAST — Together Against Stroke" message across Edappal with medical and volunteer teams stationed along the route.',
        },
        {
          title: 'Post-Marathon Recognition & Certificate Ceremony',
          description:
            'Celebrating participants, senior runners, and student volunteers with official RUN FAST certificates and community fellowship.',
        },
      ],
      stakeholders: [
        'Public marathon runners, youth athletes, and senior citizen participants across Malappuram',
        'Local law enforcement officials and civic representatives in Edappal',
        'Doctors, physiotherapists, and staff of Niramaya Rehab Speciality Hospital & Getwell Hospitals',
        'Student volunteers and faculty of Ayurgreen College of Life & Sciences (ACLAS)',
      ],
      relatedRoute: '/stroke-force',
      isPlaceholder: false,
      cropRegion: { x: 0, y: 1280, w: 400, h: 145 },
      imageUrl: '/assets/aistudio/WhatsApp_Image_2026-05-31_at_8.02.03_PM_356e57f4.jpeg',
      galleryImages: [
        // 1. Left Top (Portrait/Square)
        {
          url: '/assets/aistudio/ChatGPT_Image_Jun_1__2026__11_05_29_AM_1dd09152.png',
          alt: 'Four senior marathon runners proudly displaying RUN FAST bibs 141, 169, 135, and 168 at Ayurgreen Campus, Edappal',
          caption: 'Senior marathon athletes wearing bibs 141, 169, 135, and 168 leading by example for active, stroke-free living.',
          objectPosition: 'center 20%',
        },
        // 2. Left Bottom (Portrait/Square)
        {
          url: '/assets/aistudio/ChatGPT_Image_Jun_1__2026__11_11_00_AM_05c335b7.png',
          alt: 'Two marathon runners wearing bibs 82 and 161 running side by side during the RUN FAST Stroke Awareness Marathon in Edappal',
          caption: 'Runners #82 and #161 demonstrating endurance and community spirit along the Edappal route.',
          objectPosition: 'center 15%',
        },
        // 3. Center Top (Wide Landscape)
        {
          url: '/assets/aistudio/WhatsApp_Image_2026-05-31_at_8.02.03_PM_356e57f4.jpeg',
          alt: 'Dignitaries, police sub-inspector, healthcare leaders, and runners holding the RUN FAST Stroke Awareness Marathon 2025 banner on 29 October 2025 in Edappal',
          caption: 'Official inauguration line-up with the "Run FAST — Stroke Awareness Marathon 2025 (29 October, Edappal, Malappuram)" banner.',
          objectPosition: 'center 55%',
        },
        // 4. Center Middle (Wide Landscape)
        {
          url: '/assets/aistudio/WhatsApp_Image_2025-12-10_at_3.12.56_PM_facd180d.jpeg',
          alt: 'Marathon runners with numbered bibs lined up at the starting line behind the Run FAST Together Against Stroke banner',
          caption: 'Runners gathered at the starting line ready to champion the "Together Against Stroke" message.',
          objectPosition: 'center 60%',
        },
        // 5. Center Bottom (Wide Landscape)
        {
          url: '/assets/aistudio/WhatsApp_Image_2025-12-10_at_3.15.38_PM_495d7371.jpeg',
          alt: 'Large group photograph of student volunteers, certificate holders, and Ayurgreen staff celebrating after the RUN FAST Stroke Awareness Marathon',
          caption: 'Student volunteers, runners with certificates, and hospital staff celebrating a successful marathon at Ayurgreen Campus.',
          objectPosition: 'center 45%',
        },
        // 6. Right Top (Portrait/Square)
        {
          url: '/assets/aistudio/ChatGPT_Image_Jun_1__2026__11_04_27_AM_c8a34d12.png',
          alt: 'Runner wearing bib 222 striding along the Edappal highway during the RUN FAST Stroke Awareness Marathon 2025',
          caption: 'Participant #222 in action along the Edappal marathon route spreading public stroke awareness.',
          objectPosition: 'center 20%',
        },
        // 7. Right Bottom (Portrait/Square)
        {
          url: '/assets/aistudio/ChatGPT_Image_Jun_1__2026__11_09_43_AM_e8fcf908.png',
          alt: 'Smiling marathon participants and healthcare team members wearing RUN FAST bibs 190, 173, 136, and 126',
          caption: 'Healthcare staff and community runners wearing bibs 190, 173, 136, and 126 at Ayurgreen Campus.',
          objectPosition: 'center 20%',
        },
      ],
    },
    {
      id: 'news-national-reading-day',
      slug: 'national-reading-day',
      title: 'National Reading Day — Educational & Community Engagement',
      category: 'Foundation Events',
      dateLabel: '19 June · Annual Observance',
      locationLabel: 'Ayurgreen Campus, Edappal',
      heroSubtitle:
        'Fostering Lifelong Learning, Health Literacy & Intellectual Curiosity Among Future Healthcare Leaders',
      partnerOrOrganiser: 'Ayurgreen Foundation & Ayurgreen College of Life & Sciences (ACLAS)',
      impactMetricValue: '19 June',
      impactMetricLabel: 'Annual Campus & Student Literacy Observance',
      summary:
        'Promoting knowledge sharing, literacy, and reflective learning among students, volunteers, and the healthcare community.',
      content: [
        'As part of its deep commitment to educational empowerment and youth enrichment, Ayurgreen Foundation observes National Reading Day on 19 June alongside students, faculty, and volunteers across Ayurgreen College of Life & Sciences (ACLAS) and the wider Ayurgreen ecosystem.',
        'The observance features interactive faculty addresses, reflective reading sessions, and discussions on how continuous learning and health literacy strengthen compassionate clinical and community service.',
        'By connecting academic curiosity with social responsibility, the initiative complements the Foundation’s Education With Purpose (EWP) Scholarship Programme and Volunteer Internship pathways.',
      ],
      highlights: [
        'Observed annually on 19 June at Ayurgreen Campus, Edappal with students and healthcare faculty.',
        'Interactive reading, note-taking, and knowledge-sharing sessions led by academic mentors.',
        'Reinforces health literacy and empathetic communication skills among future allied health professionals.',
        'Integrated with Ayurgreen Foundation’s youth development and educational scholarship initiatives.',
      ],
      activities: [
        {
          title: 'Faculty Address on Reading & Healthcare Empathy',
          description:
            'Educators guide students on how reading broadens clinical perspective, critical thinking, and patient empathy.',
        },
        {
          title: 'Student Reflective Reading & Discussion Circle',
          description:
            'Students engage in structured reading exercises, reflective writing, and peer discussions on science and society.',
        },
        {
          title: 'Health Literacy & Community Outreach Alignment',
          description:
            'Preparing students to translate medical knowledge into accessible plain-language health education for communities.',
        },
        {
          title: 'Promotion of Academic Excellence (EWP)',
          description:
            'Highlighting educational opportunities and scholarship support available through Education With Purpose (EWP).',
        },
      ],
      stakeholders: [
        'Students of Ayurgreen College of Life & Sciences (ACLAS)',
        'Academic faculty, mentors, and healthcare educators',
        'Student interns of the Volunteer Internship Programme',
        'Recipients and applicants of the EWP Scholarship Programme',
      ],
      relatedRoute: '/programmes/ewp-scholarship',
      isPlaceholder: false,
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
      imageUrl: '/assets/aistudio/national_reding_day_dc3855d2.png',
      galleryImages: [
        {
          url: '/assets/aistudio/national_reding_day_dc3855d2.png',
          alt: 'Faculty member addressing students during the National Reading Day June 19 session at Ayurgreen Campus',
          caption: 'Faculty mentor addressing students during the National Reading Day (June 19) observance.',
          objectPosition: 'left center',
        },
        {
          url: '/assets/aistudio/ewp_program.JPG_dbea8171.jpeg',
          alt: 'Students and faculty gathered for educational empowerment under Ayurgreen Foundation',
          caption: 'Empowering deserving students through academic mentorship and the EWP Scholarship Programme.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/national_reding_day_dc3855d2.png',
          alt: 'Wide view of Ayurgreen College of Life Sciences students taking notes during the National Reading Day observance',
          caption: 'Students of Ayurgreen College of Life & Sciences participating in reflective reading and note-taking.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/volunteer_activit_801ee57d.webp',
          alt: 'Student volunteers engaging in collaborative learning and community service preparation',
          caption: 'Bridging classroom learning with compassionate hospital and community volunteering.',
          objectPosition: 'center 35%',
        },
        {
          url: '/assets/aistudio/WhatsApp_Image_2025-12-10_at_3.15.36_PM_1ccdaa8d.jpeg',
          alt: 'Students and youth volunteers of Ayurgreen Foundation gathered on campus',
          caption: 'Vibrant student community participating in Foundation educational and outreach programmes.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/national_reding_day_dc3855d2.png',
          alt: 'Students seated in the campus hall engaging with reading materials on National Reading Day',
          caption: 'Cultivating lifelong reading habits and intellectual curiosity among healthcare students.',
          objectPosition: 'right center',
        },
        {
          url: '/assets/aistudio/ewp_program.JPG_dbea8171.jpeg',
          alt: 'Academic leadership and students at Ayurgreen College of Life Sciences, Edappal',
          caption: 'Supporting the next generation of healthcare professionals through structured academic initiatives.',
          objectPosition: 'right center',
        },
      ],
    },
    {
      id: 'news-world-environment-day',
      slug: 'world-environment-day',
      title: 'World Environment Day — Green Campus & Community Wellbeing Drive',
      category: 'Foundation Events',
      dateLabel: '5 June · Annual Observance',
      locationLabel: 'Ayurgreen Campus & Rehab Village, Edappal',
      heroSubtitle:
        'Nurturing a Sustainable, Nature-Integrated Healing Environment for Patients & Communities',
      partnerOrOrganiser: 'Ayurgreen Foundation · Ayurgreen Campus & Rehab Village Team',
      impactMetricValue: '5 June',
      impactMetricLabel: 'Annual Green Campus Pledge & Sustainability Drive',
      summary:
        'Celebrating environmental stewardship and sustainable community living in alignment with Ayurgreen’s healing village ethos.',
      content: [
        'Recognising the profound connection between environmental health, serene surroundings, and human recovery, Ayurgreen Foundation, healthcare staff, and student volunteers observe World Environment Day every year on 5 June across Ayurgreen Campus and Rehab Village in Edappal.',
        'During the observance, doctors, nurses, therapists, and students come together for the collective Green Handprint Pledge banner, tree-planting drives, and campus sustainability initiatives.',
        'These efforts directly support the tranquil, nature-integrated healing atmosphere of Ayurgreen Campus and Rehab Village—where clean air, greenery, and eco-friendly practices foster physical and emotional wellbeing for recovering patients.',
      ],
      highlights: [
        'Collective World Environment Day handprint pledge banner signed by students, clinicians, and staff.',
        'Promotes environmental stewardship across Ayurgreen Campus and the surrounding Rehab Village community.',
        'Highlights the link between a serene, green environment and holistic ortho-neuro patient rehabilitation.',
        'Supported by eco-friendly patient transport and sustainable campus practices.',
      ],
      activities: [
        {
          title: 'Green Handprint Pledge Campaign',
          description:
            'Students, clinicians, and staff place painted handprints on the World Environment Day pledge banner to affirm their commitment to sustainability.',
        },
        {
          title: 'Campus Tree Planting & Greening Drive',
          description:
            'Planting native saplings and maintaining shaded green corridors around the hospital and rehabilitation campus.',
        },
        {
          title: 'Eco-Friendly Rehab Village Mobility',
          description:
            'Promoting zero-emission electric patient transport vehicles connecting homestays and Ayurgreen Hospitals.',
        },
        {
          title: 'Environmental Health & Wellbeing Awareness',
          description:
            'Sensitising youth volunteers and community members on waste reduction, clean water, and healthy living environments.',
        },
      ],
      stakeholders: [
        'Healthcare professionals, nurses, and therapists at Ayurgreen Campus',
        'Students and volunteers of Ayurgreen College of Life & Sciences',
        'Patients and caregivers residing in Ayurgreen Rehab Village accommodations',
        'Local community partners in Edappal, Malappuram',
      ],
      relatedRoute: '/programmes/rehab-village',
      isPlaceholder: false,
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
      imageUrl: '/assets/aistudio/world_environment_day_fa6ae0f5.png',
      galleryImages: [
        {
          url: '/assets/aistudio/world_environment_day_fa6ae0f5.png',
          alt: 'Healthcare staff and students gathered around the World Environment Day handprint pledge banner at Ayurgreen Campus',
          caption: 'Students and clinical staff participating in the World Environment Day handprint pledge banner at Ayurgreen Campus.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/rehab_village_vehicle_4fb8d250.webp',
          alt: 'Zero-emission electric vehicle of Ayurgreen Rehab Village promoting eco-friendly patient transport',
          caption: 'Eco-friendly electric transport supporting sustainable patient mobility across Rehab Village.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/world_environment_day_fa6ae0f5.png',
          alt: 'Close-up of the World Environment Day handprint pledge banner by Ayurgreen Foundation in Edappal',
          caption: 'Collective green pledge affirming environmental stewardship across the Ayurgreen ecosystem.',
          objectPosition: 'center 60%',
        },
        {
          url: '/assets/aistudio/volunteer_activit_801ee57d.webp',
          alt: 'Ayurgreen Foundation student volunteers participating in campus sustainability and community wellbeing activities',
          caption: 'Student volunteers leading campus sustainability and community wellbeing initiatives.',
          objectPosition: 'center 35%',
        },
        {
          url: '/assets/aistudio/WhatsApp_Image_2025-12-10_at_3.13.16_PM__4__a2a96c97.jpeg',
          alt: 'Shaded green banyan tree corridor in Edappal where Ayurgreen outreach teams engage with the community',
          caption: 'Preserving green community spaces and natural shade corridors across Edappal.',
          objectPosition: 'center center',
        },
        {
          url: '/assets/aistudio/world_environment_day_fa6ae0f5.png',
          alt: 'Architecture and green trees of Ayurgreen Campus during the World Environment Day observance',
          caption: 'Nature-integrated campus architecture designed to foster a calm, healing environment.',
          objectPosition: 'left top',
        },
        {
          url: '/assets/aistudio/social_rehab_program_3edebc6f.png',
          alt: 'Holistic patient wellbeing and rehabilitation in a supportive, nature-integrated campus setting',
          caption: 'Connecting environmental serenity with dignified patient recovery and wellbeing.',
          objectPosition: '82% center',
        },
      ],
    },
  ],
  galleryItems: [
    {
      id: 'gal-runfast-marathon',
      title: 'RUN FAST Stroke Awareness Mini Marathon — Inaugural Banner',
      category: 'Community Outreach Programmes',
      caption:
        'Dignitaries, police sub-inspector, healthcare leaders, and marathon runners uniting in Edappal, Malappuram on 29 October 2025 for the RUN FAST Stroke Awareness Marathon.',
      altText:
        'Participants holding the Run FAST Stroke Awareness Marathon 2025 banner at Ayurgreen Campus, Edappal.',
      isVerifiedAsset: true,
      cropRegion: { x: 0, y: 1280, w: 400, h: 145 },
      customImageUrl: '/assets/aistudio/WhatsApp_Image_2026-05-31_at_8.02.03_PM_356e57f4.jpeg',
    },
    {
      id: 'gal-runfast-startline',
      title: 'RUN FAST Marathon — Starting Line Assembly',
      category: 'Community Outreach Programmes',
      caption:
        'Runners lined up behind the Together Against Stroke starting banner at Ayurgreen Campus, Edappal.',
      altText:
        'Marathon runners with bibs lined up behind the Run FAST Stroke Awareness Marathon 2025 banner.',
      isVerifiedAsset: true,
      customImageUrl: '/assets/aistudio/WhatsApp_Image_2025-12-10_at_3.12.56_PM_facd180d.jpeg',
    },
    {
      id: 'gal-runfast-volunteers',
      title: 'RUN FAST Marathon — Student Volunteers & Certificate Holders',
      category: 'Volunteer Activities',
      caption:
        'Student volunteers, runners with participation certificates, and hospital staff celebrating after completing the RUN FAST Stroke Awareness Marathon.',
      altText:
        'Large group photograph of student volunteers and marathon participants at Ayurgreen Campus.',
      isVerifiedAsset: true,
      customImageUrl: '/assets/aistudio/WhatsApp_Image_2025-12-10_at_3.15.38_PM_495d7371.jpeg',
    },
    {
      id: 'gal-runfast-seniors',
      title: 'RUN FAST Marathon — Senior Citizen Athletes',
      category: 'Community Outreach Programmes',
      caption:
        'Senior marathon runners proudly displaying bibs 141, 169, 135, and 168 during the RUN FAST Stroke Awareness Marathon.',
      altText:
        'Four senior marathon runners wearing Run FAST bibs 141, 169, 135, and 168.',
      isVerifiedAsset: true,
      customImageUrl: '/assets/aistudio/ChatGPT_Image_Jun_1__2026__11_05_29_AM_1dd09152.png',
    },
    {
      id: 'gal-calicut-camp',
      title: 'Calicut District-Level Stroke Awareness & Rehabilitation Camp',
      category: 'Medical Camps',
      caption:
        'Free district-level stroke awareness and rehabilitation camp in Thondayad, Kozhikode in association with Rotary Club Calicut Cyber City.',
      altText:
        'Speakers and participants at the Calicut Stroke Awareness and Rehabilitation Medical Camp.',
      isVerifiedAsset: true,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      customImageUrl: '/assets/aistudio/stroke_camp_-_calicut_3972d47b.png',
    },
    {
      id: 'gal-calicut-vitals',
      title: 'Calicut Stroke Camp — Vitals & Nursing Assessment',
      category: 'Medical Camps',
      caption:
        'Ayurgreen nursing team checking blood pressure and clinical vitals for a stroke survivor at the Kozhikode camp.',
      altText:
        'Nurses checking blood pressure for a wheelchair-assisted patient at the Calicut Stroke Medical Camp.',
      isVerifiedAsset: true,
      customImageUrl: '/assets/aistudio/Screenshot_2026-05-08_151305_4c1c5eb8.png',
    },
    {
      id: 'gal-calicut-ot',
      title: 'Calicut Stroke Camp — Occupational Therapy & Motor Assessment',
      category: 'Rehabilitation Activities',
      caption:
        'Occupational therapist guiding a stroke survivor through hand-grip strength and fine-motor exercises in Kozhikode.',
      altText:
        'Occupational therapist conducting hand-grip rehabilitation assessment with a patient.',
      isVerifiedAsset: true,
      customImageUrl: '/assets/aistudio/Screenshot_2026-05-07_140707_5f7161ef.png',
    },
    {
      id: 'gal-reading-day',
      title: 'National Reading Day Observance',
      category: 'Foundation Events',
      caption:
        'Interactive session with students and faculty observing National Reading Day at Ayurgreen Foundation.',
      altText:
        'Speaker addressing students in front of the National Reading Day June 19 screen.',
      isVerifiedAsset: true,
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
      customImageUrl: '/assets/aistudio/national_reding_day_dc3855d2.png',
    },
    {
      id: 'gal-environment-day',
      title: 'World Environment Day — Pledge & Green Campus Drive',
      category: 'Foundation Events',
      caption:
        'Students and healthcare volunteers participating in the World Environment Day handprint pledge banner at Ayurgreen Campus.',
      altText:
        'Students and staff gathered around the World Environment Day handprint banner at Ayurgreen Foundation.',
      isVerifiedAsset: true,
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
      customImageUrl: '/assets/aistudio/world_environment_day_fa6ae0f5.png',
    },
    {
      id: 'gal-rehab-1',
      title: 'Ayurgreen Rehab Village Accessible Transport & Campus',
      category: 'Rehabilitation Activities',
      caption:
        'Dedicated Rehab Village electric vehicle providing accessible patient transport at Ayurgreen Campus.',
      altText:
        'Ayurgreen Rehab Village blue electric vehicle parked at the entrance of Ayurgreen Campus.',
      isVerifiedAsset: true,
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
    },
    {
      id: 'gal-camps-1',
      title: 'Koode Medical Camp & Community Outreach',
      category: 'Medical Camps',
      caption:
        'Taking healthcare beyond hospital walls through the Koode Medical Camp in collaboration with ILA Foundation at Ayurgreen Campus, Edappal.',
      altText: 'Koode Medical Camp gathering of patients, families, and healthcare team at Ayurgreen Campus.',
      isVerifiedAsset: true,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      customImageUrl: '/assets/aistudio/medical_camp_3776972f.webp',
    },
    {
      id: 'gal-vol-1',
      title: 'Volunteer Internship & Community Service',
      category: 'Volunteer Activities',
      caption:
        'Students and volunteers participating in supervised healthcare and community support activities.',
      altText: 'Ayurgreen Foundation volunteers participating in community service.',
      isVerifiedAsset: true,
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
    },
    {
      id: 'gal-events-1',
      title: 'Charity Care & Compassionate Support',
      category: 'Foundation Events',
      caption:
        'Making healthcare accessible to those in need in association with Ayurgreen Hospital.',
      altText: 'Clinical care and blood donation support under Charity Care.',
      isVerifiedAsset: true,
      cropRegion: { x: 76, y: 706, w: 96, h: 74 },
    },
  ],
  governanceDocs: [
    {
      id: 'gov-reg-1',
      title: 'Section 8 Non-Profit Incorporation Record',
      category: 'Registration Details',
      description:
        'Ayurgreen Foundation was established on 24 May 2022 as a Section 8 non-profit company and serves as the social impact arm of Ayurgreen Group. Official CIN and incorporation certificate PDF can be attached by the administrator.',
      status: 'Verified Fact',
      publicationYear: '2022',
      fileType: 'Institutional Record',
    },
    {
      id: 'gov-struct-1',
      title: 'Organisational & Institutional Governance Charter',
      category: 'Governance Structure',
      description:
        'Outlines the governance oversight of Ayurgreen Foundation, administrative coordination at Ayurgreen Campus (Edappal, Kavilpadi, Malappuram, Kerala), and institutional alignment with associated entities.',
      status: 'Verified Fact',
      publicationYear: '2022–Present',
      fileType: 'Governance Summary',
    },
    {
      id: 'gov-annual-1',
      title: 'Charity Care Annual Beneficiary Summary (2023–2026)',
      category: 'Annual Reports',
      description:
        'Documented record of 90 patients supported between 2023 and 2026 under the Charity Care Programme (47 receiving 100% assistance and 43 receiving partial assistance).',
      status: 'Verified Fact',
      publicationYear: '2023–2026',
      fileType: 'Programme Impact Record',
    },
    {
      id: 'gov-fin-1',
      title: 'Audited Financial Statements & Utilization Report',
      category: 'Financial Reports',
      description:
        'Statutory audited balance sheet, income and expenditure account, and donor fund utilization statement.',
      status: 'Pending Official Upload',
      fileType: 'PDF Archive Slot',
    },
    {
      id: 'gov-pol-1',
      title: 'Beneficiary Privacy, Safeguarding & Data Protection Policy',
      category: 'Organisational Policies',
      description:
        'Governs ethical handling of patient and scholarship applicant information, informed consent for beneficiary stories and photography, and non-discriminatory access to care.',
      status: 'Verified Fact',
      publicationYear: 'Current',
      fileType: 'Policy Standard',
    },
    {
      id: 'gov-comp-1',
      title: 'CSR Eligibility & Statutory Tax Exemption Certificates (12A / 80G / CSR-1)',
      category: 'Compliance Documents',
      description:
        'Repository for verified statutory certificates required by institutional donors and corporate CSR partners.',
      status: 'Pending Official Upload',
      fileType: 'Compliance Slot',
    },
  ],
};
