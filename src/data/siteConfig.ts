export interface ProgrammeItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Healthcare Access' | 'Rehabilitation' | 'Community Health' | 'Education & Research' | 'Civic Participation';
  featuredOnHome: boolean;
  iconName: 'HeartHandshake' | 'Home' | 'Accessibility' | 'Users' | 'Stethoscope' | 'GraduationCap' | 'ScanLine' | 'HandHeart';
  accentColor: string;
  cropRegion?: { x: number; y: number; w: number; h: number };
  illustrationType: 'charity' | 'rehab-village' | 'social-rehab' | 'outreach' | 'medical-camps' | 'college' | 'radiology' | 'volunteer';
  summary: string;
  heroSubtitle: string;
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
}

export interface ImpactPillar {
  id: string;
  category: string;
  themeTitle: string;
  description: string;
  verifiedNumber: string; // Empty string by default per Phase 1 decision
  iconName: 'Users' | 'Accessibility' | 'HeartHandshake' | 'GraduationCap' | 'HandHeart';
  programmeLink: string;
}

export interface ImpactStoryItem {
  id: string;
  title: string;
  category: 'Beneficiary Stories' | 'Recovery Journeys' | 'Community Impact' | 'Volunteer Experiences' | 'Programme Outcomes';
  summary: string;
  body: string[];
  dateLabel: string;
  relatedProgrammeSlug: string;
  isPlaceholder: boolean;
  cropRegion?: { x: number; y: number; w: number; h: number };
}

export interface NewsEventItem {
  id: string;
  title: string;
  category: 'Programme Reports' | 'Medical Camps' | 'Awareness Campaigns' | 'Foundation Events' | 'Volunteer Activities' | 'Announcements';
  dateLabel: string;
  locationLabel: string;
  summary: string;
  content: string[];
  relatedRoute: string;
  isPlaceholder: boolean;
  cropRegion?: { x: number; y: number; w: number; h: number };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Medical Camps' | 'Rehabilitation Activities' | 'Volunteer Activities' | 'Foundation Events' | 'Community Outreach Programmes';
  caption: string;
  altText: string;
  isVerifiedAsset: boolean;
  cropRegion?: { x: number; y: number; w: number; h: number };
  customImageUrl?: string;
}

export interface GovernanceDocument {
  id: string;
  title: string;
  category: 'Registration Details' | 'Governance Structure' | 'Annual Reports' | 'Financial Reports' | 'Organisational Policies' | 'Compliance Documents';
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
    adminOfficerNote: 'Prepared in alignment with official requirements by Ayurgreen Foundation Administration',
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
    emailVerified: false, // Marked configurable until verified by administrator
    phone: '[Pending Official Telephone Configuration]',
    phoneVerified: false,
    mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Edappal+Kavilpadi+Malappuram+Kerala',
    socials: {
      instagram: '',
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
      'Through programmes such as Charity Care, Rehab Village, Social Rehabilitation and Stroke Force, the Foundation strives to improve access to healthcare, promote recovery and independence, raise community awareness and create opportunities for individuals and families to lead healthier, more dignified lives.',
      'Working alongside communities and institutional partners, Ayurgreen Foundation aims to create meaningful and sustainable social impact.',
    ],
    fullOverview: [
      'Ayurgreen Foundation is a charitable Section 8 non-profit organisation established on 24 May 2022 as the social impact arm of Ayurgreen Group. Rooted in Edappal, Malappuram, Kerala, the Foundation is dedicated to supporting individuals and communities through structured healthcare assistance, rehabilitation support, community outreach programmes, educational engagement, and social welfare activities.',
      'Recognising that health, dignity, and education are closely interconnected, our work bridges clinical support with community-level empowerment—ensuring that vulnerable individuals and families receive not only timely care, but also the long-term rehabilitation and social support required to rebuild independent lives.',
    ],
    ourStory: [
      'Founded on 24 May 2022, Ayurgreen Foundation emerged from the clinical and community experience of Ayurgreen Group. Witnessing firsthand the financial, physical, and social barriers faced by patients recovering from neurological conditions, chronic illness, and acute health emergencies, the Foundation was constituted as a dedicated Section 8 non-profit company to institutionalise compassionate outreach.',
      'Over time, our scope expanded from direct treatment assistance under Charity Care to holistic recovery models like Project Rehab Village and Social Rehabilitation, academic skill-building through Ayurgreen College of Life Sciences, diagnostic access via the Radiology Department at Getwell Hospital, and grassroots preventive education led by Stroke Force.',
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
          'Looking beyond acute medical care to support long-term functional recovery, mobility, counselling, and social reintegration.',
      },
      {
        title: 'Education & Community Participation',
        description:
          'Equipping students, healthcare trainees, and local volunteers with the knowledge to serve as health educators and change-makers.',
      },
    ],
    objectives: [
      {
        number: '01',
        title: 'Accessible Healthcare',
        description:
          'Improve access to essential medical treatment, diagnostic imaging, and supportive healthcare services for underserved individuals and families.',
      },
      {
        number: '02',
        title: 'Community Health Awareness',
        description:
          'Promote preventive health literacy and early symptom recognition through structured grassroot initiatives such as Stroke Force.',
      },
      {
        number: '03',
        title: 'Rehabilitation & Inclusion',
        description:
          'Facilitate physical, functional, and psychosocial recovery through dedicated rehabilitation pathways and community-based reintegration.',
      },
      {
        number: '04',
        title: 'Education & Empowerment',
        description:
          'Support paramedical and life-science education to nurture skilled, compassionate healthcare professionals and informed citizens.',
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
          'Work alongside hospitals, research institutes, colleges, local bodies, and CSR partners to amplify healthcare and educational outcomes.',
      },
      {
        number: '07',
        title: 'Sustainable Social Impact',
        description:
          'Build replicable, accountable community models—such as Training of Trainers—that create lasting improvements in public wellbeing.',
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
    {
      slug: 'charity-care',
      title: 'Charity Care Programme',
      shortTitle: 'Charity Care',
      category: 'Healthcare Access',
      featuredOnHome: true,
      iconName: 'HeartHandshake',
      accentColor: '#7C4DFF',
      cropRegion: { x: 76, y: 706, w: 96, h: 74 },
      illustrationType: 'charity',
      summary:
        'Making essential healthcare and treatment support more accessible for vulnerable individuals and families facing financial hardship.',
      heroSubtitle:
        'Bridging financial gaps so vulnerable individuals and families can access timely medical care and treatment support with dignity.',
      introduction: [
        'The Charity Care Programme is one of the foundational pillars of Ayurgreen Foundation. It is designed to support individuals and families who face severe financial constraints when seeking essential medical evaluation, ongoing therapy, or hospital-based care.',
        'By working closely with healthcare providers and institutional partners, Charity Care ensures that economic vulnerability does not stand in the way of necessary healthcare support and recovery.',
      ],
      purpose:
        'To reduce financial barriers to healthcare access for underserved patients and provide structured, transparent treatment assistance based on genuine need.',
      objectives: [
        'Provide subsidized or supported healthcare assistance for economically vulnerable patients.',
        'Coordinate with partner clinical departments to streamline diagnostic and therapeutic support.',
        'Preserve patient dignity and confidentiality throughout the assessment and care process.',
        'Support continuity of care for individuals requiring extended medical or rehabilitative follow-up.',
      ],
      activities: [
        {
          title: 'Treatment Support & Financial Assistance',
          description:
            'Direct facilitation of subsidized care pathways for eligible beneficiaries undergoing medical or rehabilitative treatment.',
        },
        {
          title: 'Need Assessment & Family Guidance',
          description:
            'Structured evaluation by administrative and social work coordinators to connect families with appropriate institutional support.',
        },
        {
          title: 'Diagnostic & Referral Coordination',
          description:
            'Linking patients with associated diagnostic facilities and clinical specialists to prevent delays in essential care.',
        },
      ],
      intendedAudience: [
        'Economically vulnerable patients requiring medical or rehabilitative care.',
        'Families experiencing acute healthcare expenses due to chronic or sudden illness.',
        'Individuals referred through community medical camps and local outreach networks.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Ongoing treatment support enabling underserved patients to access essential clinical and rehabilitative care.',
        isPlaceholder: true,
      },
      relatedSlugs: ['rehab-village', 'radiology', 'medical-camps'],
    },
    {
      slug: 'rehab-village',
      title: 'Ayurgreen Rehab Village',
      shortTitle: 'Rehab Village',
      category: 'Rehabilitation',
      featuredOnHome: true,
      iconName: 'Home',
      accentColor: '#087F83',
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
      illustrationType: 'rehab-village',
      logoUrl: '/assets/aistudio/rehab_village_logo.webp',
      welcomeHeading: 'WELCOME TO AYURGREEN REHAB VILLAGE',
      aboutHeading: 'About Rehab Village',
      summary:
        'A transformative initiative by Ayurgreen Hospitals set amidst a serene village environment, offering specialized ortho-neuro rehabilitation programs and extended accommodation facilities.',
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
        email: 'rehabvillage@ayurgreenhospitals.com',
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
      relatedSlugs: ['social-rehabilitation', 'charity-care', 'volunteer-activities'],
    },
    {
      slug: 'social-rehabilitation',
      title: 'Social Rehabilitation Programme',
      shortTitle: 'Social Rehabilitation',
      category: 'Rehabilitation',
      featuredOnHome: true,
      iconName: 'Accessibility',
      accentColor: '#26A69A',
      cropRegion: { x: 395, y: 706, w: 112, h: 74 },
      illustrationType: 'social-rehab',
      summary:
        'Supporting individuals and families through rehabilitation, counselling, skill development, and social reintegration.',
      heroSubtitle:
        'Restoring confidence, livelihood readiness, and social inclusion for individuals navigating life after illness or disability.',
      introduction: [
        'Physical recovery is only one part of healing. The Social Rehabilitation Programme addresses the emotional, social, and practical challenges faced by individuals and families following major health events or long-term disability.',
        'Through psychosocial counselling, peer encouragement, adaptive skill development, and community inclusion efforts, the programme helps beneficiaries reconnect with society with dignity and self-reliance.',
      ],
      purpose:
        'To bridge clinical recovery and everyday life by supporting emotional wellbeing, adaptive skills, and meaningful social participation.',
      objectives: [
        'Provide psychosocial support and counselling for patients and families adjusting to life changes.',
        'Facilitate adaptive skill development and confidence-building activities.',
        'Reduce social isolation among individuals living with mobility or neurological challenges.',
        'Encourage inclusive attitudes within local communities, workplaces, and institutions.',
      ],
      activities: [
        {
          title: 'Psychosocial Counselling & Guidance',
          description:
            'Supportive sessions for beneficiaries and families to navigate emotional resilience and recovery adjustments.',
        },
        {
          title: 'Adaptive Skill & Confidence Building',
          description:
            'Structured activities focused on communication, daily autonomy, and vocational readiness where appropriate.',
        },
        {
          title: 'Community Reintegration Support',
          description:
            'Engaging peer networks, volunteers, and family systems to create welcoming spaces for ongoing participation.',
        },
      ],
      intendedAudience: [
        'Individuals transitioning from medical or physical rehabilitation back into community life.',
        'Persons living with long-term physical or neurological disabilities.',
        'Families seeking emotional and social support resources.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Holistic psychosocial and skill-building pathways fostering inclusion, emotional resilience, and dignity.',
        isPlaceholder: true,
      },
      relatedSlugs: ['rehab-village', 'community-outreach', 'volunteer-activities'],
    },
    {
      slug: 'community-outreach',
      title: 'Community Outreach Activities',
      shortTitle: 'Community Outreach',
      category: 'Community Health',
      featuredOnHome: true,
      iconName: 'Users',
      accentColor: '#F57C00',
      cropRegion: { x: 562, y: 706, w: 112, h: 74 },
      illustrationType: 'outreach',
      summary:
        'Taking preventive health awareness, public education, and responsive social welfare support directly to neighbourhoods and local institutions.',
      heroSubtitle:
        'Connecting directly with neighbourhoods, schools, and local organisations to build informed, health-conscious communities.',
      introduction: [
        'Ayurgreen Foundation’s Community Outreach Activities extend healthcare literacy and social support beyond institutional walls directly into local towns, villages, educational campuses, and community centres.',
        'By partnering with resident associations, colleges, and civic groups, our outreach initiatives foster preventive health habits, early disease recognition, and mutual community care.',
      ],
      purpose:
        'To strengthen community-level health awareness, encourage preventive care, and identify individuals who require timely healthcare or social support.',
      objectives: [
        'Conduct regular health awareness dialogues across neighbourhoods, colleges, and community groups.',
        'Promote preventive healthcare practices and early recognition of critical conditions such as stroke.',
        'Build collaborative relationships with local civic bodies, educators, and grassroot leaders.',
        'Connect underserved community members with Foundation programmes and medical camps.',
      ],
      activities: [
        {
          title: 'Neighbourhood & Campus Awareness Sessions',
          description:
            'Interactive talks and educational workshops on lifestyle health, preventive care, and emergency awareness.',
        },
        {
          title: 'Grassroots Stakeholder Collaboration',
          description:
            'Working alongside local clubs, panchayats, and student units to organise localized welfare drives.',
        },
        {
          title: 'Follow-Up & Referral Pathways',
          description:
            'Guiding individuals identified during outreach drives toward appropriate diagnostic or rehabilitative care.',
        },
      ],
      intendedAudience: [
        'Local residents and families across rural and semi-urban communities.',
        'College students, teachers, and youth organisations.',
        'Community groups and local civic associations.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Consistent grassroots engagement bringing health awareness and welfare guidance directly to communities.',
        isPlaceholder: true,
      },
      relatedSlugs: ['medical-camps', 'volunteer-activities', 'charity-care'],
    },
    {
      slug: 'medical-camps',
      title: 'Medical Camps',
      shortTitle: 'Medical Camps',
      category: 'Community Health',
      featuredOnHome: true,
      iconName: 'Stethoscope',
      accentColor: '#087F83',
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
      illustrationType: 'medical-camps',
      summary:
        'Organising accessible community health screening camps, medical consultations, and early-detection guidance in underserved areas.',
      heroSubtitle:
        'Bringing qualified healthcare professionals, primary screenings, and health consultations directly to underserved communities.',
      introduction: [
        'For many individuals and elderly residents, routine health evaluations are delayed due to distance, cost, or lack of awareness. Ayurgreen Foundation organises structured Medical Camps to bring consultations and preliminary health screenings closer to home.',
        'Supported by clinical professionals, paramedics, and student volunteers, these camps focus on early identification of health risks, patient education, and timely referral to ongoing care.',
      ],
      purpose:
        'To provide accessible primary health screenings, medical guidance, and early referral pathways within local communities.',
      objectives: [
        'Organise periodic medical screening and consultation camps in community locations.',
        'Facilitate early detection of common chronic and lifestyle-related health conditions.',
        'Provide clear medical guidance and health education to camp participants.',
        'Refer individuals requiring advanced evaluation to Charity Care or partner clinical facilities.',
      ],
      activities: [
        {
          title: 'Community Health Screenings',
          description:
            'Vital checks, preliminary assessments, and consultations conducted by qualified medical and paramedical teams.',
        },
        {
          title: 'Preventive Health Counselling',
          description:
            'One-on-one and group guidance on nutrition, blood pressure management, stroke warning signs, and healthy aging.',
        },
        {
          title: 'Continuity of Care Referrals',
          description:
            'Structured documentation to connect patients needing further diagnostics or rehabilitation with Foundation programmes.',
        },
      ],
      intendedAudience: [
        'Elderly residents and families in underserved neighbourhoods.',
        'Individuals without regular access to preventive health check-ups.',
        'Community groups hosting local health and wellness initiatives.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Community-based screening and consultation camps supporting early detection and timely medical guidance.',
        isPlaceholder: true,
      },
      relatedSlugs: ['community-outreach', 'charity-care', 'radiology'],
    },
    {
      slug: 'volunteer-activities',
      title: 'Volunteer Activities',
      shortTitle: 'Volunteer Activities',
      category: 'Civic Participation',
      featuredOnHome: true,
      iconName: 'HandHeart',
      accentColor: '#00897B',
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
      illustrationType: 'volunteer',
      summary:
        'Creating meaningful opportunities for students, professionals, and citizens to contribute towards a healthier, more compassionate society.',
      heroSubtitle:
        'Empowering compassionate citizens, students, and healthcare professionals to drive grassroots social impact.',
      introduction: [
        'Volunteers are the heartbeat of Ayurgreen Foundation’s community presence. Our Volunteer Activities programme provides structured pathways for students, healthcare professionals, educators, and community members to contribute their time and skills meaningfully.',
        'From supporting medical camps and rehabilitation workshops to becoming certified community educators in the Stroke Force Training of Trainers (ToT) initiative, volunteers multiply the reach and warmth of every Foundation programme.',
      ],
      purpose:
        'To cultivate civic responsibility and compassionate leadership by engaging volunteers in structured healthcare, educational, and social welfare initiatives.',
      objectives: [
        'Engage students and community members in organised outreach, medical camps, and awareness drives.',
        'Provide structured orientation and Training of Trainers (ToT) opportunities for health educators.',
        'Support patient companionship and inclusive community events under rehabilitation initiatives.',
        'Build a sustainable network of socially conscious youth and professional volunteers.',
      ],
      activities: [
        {
          title: 'Outreach & Medical Camp Coordination',
          description:
            'Assisting with participant registration, logistics, and community navigation during local health camps.',
        },
        {
          title: 'Health Awareness & Peer Education',
          description:
            'Leading structured awareness sessions in colleges and community groups, including Stroke Force workshops.',
        },
        {
          title: 'Rehabilitation & Social Support Engagement',
          description:
            'Contributing to inclusive community gatherings, skill workshops, and supportive companionship initiatives.',
        },
      ],
      intendedAudience: [
        'College and paramedical students seeking meaningful community service.',
        'Healthcare professionals and educators willing to share expertise.',
        'Community members passionate about social welfare and public health.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Active network of student and community volunteers strengthening outreach, education, and patient support.',
        isPlaceholder: true,
      },
      relatedSlugs: ['community-outreach', 'college-of-life-sciences', 'social-rehabilitation'],
    },
    {
      slug: 'college-of-life-sciences',
      title: 'Ayurgreen College of Life Sciences',
      shortTitle: 'College of Life Sciences',
      category: 'Education & Research',
      featuredOnHome: false,
      iconName: 'GraduationCap',
      accentColor: '#102C4B',
      illustrationType: 'college',
      summary:
        'Paramedical and life-science education nurturing skilled, ethical, and compassionate healthcare professionals.',
      heroSubtitle:
        'Advancing paramedical and life-science education to prepare skilled, compassionate professionals committed to community wellbeing.',
      introduction: [
        'Ayurgreen College of Life Sciences is a core educational initiative and associated institution working closely with Ayurgreen Foundation’s mission in healthcare and education.',
        'By combining rigorous paramedical and life-science education with hands-on exposure to rehabilitation, patient care, and community health outreach, the College prepares students not only for healthcare careers, but also for lifelong ethical service.',
      ],
      purpose:
        'To deliver quality paramedical and healthcare education that integrates academic excellence with practical social responsibility.',
      objectives: [
        'Provide structured paramedical and allied health education aligned with modern clinical needs.',
        'Integrate community health outreach and patient empathy into student learning experiences.',
        'Encourage student participation in public health awareness, medical camps, and volunteer initiatives.',
        'Create educational pathways that empower youth with sustainable healthcare careers.',
      ],
      activities: [
        {
          title: 'Paramedical & Allied Health Training',
          description:
            'Academic instruction and practical laboratory learning designed to build strong clinical competencies.',
        },
        {
          title: 'Experiential Community Health Learning',
          description:
            'Opportunities for students to participate in Foundation medical camps, rehabilitation awareness, and Stroke Force sessions.',
        },
        {
          title: 'Student Mentorship & Skill Development',
          description:
            'Fostering communication, ethical patient care, and teamwork among future healthcare professionals.',
        },
      ],
      intendedAudience: [
        'Students aspiring to build careers in paramedical and allied healthcare fields.',
        'Educational institutions collaborating on healthcare skill development.',
        'Communities benefiting from a well-trained, compassionate healthcare workforce.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Preparing future paramedical and healthcare professionals with strong clinical skills and social empathy.',
        isPlaceholder: true,
      },
      relatedSlugs: ['volunteer-activities', 'rehab-village', 'radiology'],
    },
    {
      slug: 'radiology',
      title: 'Radiology Department',
      shortTitle: 'Radiology Department',
      category: 'Healthcare Access',
      featuredOnHome: false,
      iconName: 'ScanLine',
      accentColor: '#07565B',
      illustrationType: 'radiology',
      summary:
        'Advanced diagnostic imaging services delivered with a commitment to patient care and social impact in association with Getwell Hospital.',
      heroSubtitle:
        'Supporting timely, accurate medical diagnosis through accessible imaging services in association with Getwell Hospital.',
      introduction: [
        'Timely and accurate diagnostic imaging is critical for effective medical treatment and neurological care. Working in close association with the Radiology Department at Getwell Hospital, Ayurgreen Foundation supports accessible diagnostic pathways with a social impact focus.',
        'By integrating diagnostic imaging support with the Foundation’s Charity Care and rehabilitation initiatives, patients receive essential evaluations required to guide safe, appropriate clinical decisions.',
      ],
      purpose:
        'To facilitate access to reliable diagnostic imaging services that support early diagnosis, treatment planning, and rehabilitation care.',
      objectives: [
        'Support accessible diagnostic imaging for patients referred through Foundation healthcare initiatives.',
        'Enable timely radiological evaluation critical for conditions such as stroke and physical trauma.',
        'Maintain high standards of patient safety, comfort, and diagnostic clarity.',
        'Collaborate with Charity Care to assist economically vulnerable patients requiring imaging support.',
      ],
      activities: [
        {
          title: 'Diagnostic Imaging Facilitation',
          description:
            'Coordinating essential radiological investigations in partnership with Getwell Hospital’s Radiology Department.',
        },
        {
          title: 'Subsidized Access via Charity Care',
          description:
            'Helping eligible underserved patients access necessary imaging studies without prohibitive financial delay.',
        },
        {
          title: 'Clinical & Rehabilitation Coordination',
          description:
            'Supporting multidisciplinary care teams with diagnostic insights that inform recovery and rehabilitation plans.',
        },
      ],
      intendedAudience: [
        'Patients requiring diagnostic imaging for medical or rehabilitative assessment.',
        'Economically vulnerable individuals supported through the Charity Care Programme.',
        'Clinicians and care teams coordinating patient recovery.',
      ],
      impactStatus: {
        qualitativeSummary:
          'Accessible diagnostic imaging support strengthening early diagnosis and coordinated patient care.',
        isPlaceholder: true,
      },
      relatedSlugs: ['charity-care', 'medical-camps', 'stroke-force'],
    },
  ],
  associatedInstitutions: [
    {
      id: 'inst-college',
      name: 'Ayurgreen College of Life Sciences',
      category: 'Education & Allied Health',
      description:
        'Paramedical education for skilled and compassionate healthcare professionals.',
      iconName: 'Landmark',
      logoUrl: '/assets/aistudio/ayurgreen_college_logo.webp',
      internalRoute: '/programmes/college-of-life-sciences',
    },
    {
      id: 'inst-research',
      name: 'Ayurgreen Scientific Research Institute',
      category: 'Research & Innovation',
      description:
        'Research for better healthcare and community well-being.',
      iconName: 'Microscope',
      logoUrl: '/assets/aistudio/ayurgreen_scientifica_logo.webp',
      internalRoute: '/about#institutions',
    },
    {
      id: 'inst-radiology',
      name: 'Radiology Department, Getwell Hospital',
      category: 'Diagnostic Healthcare',
      description:
        'Advanced imaging services with a social impact.',
      iconName: 'ScanLine',
      logoUrl: '/assets/aistudio/getwell_hospital_logo.webp',
      internalRoute: '/programmes/radiology',
    },
  ],
  impactPillars: [
    {
      id: 'pillar-rehab',
      category: 'Rehabilitation Support',
      themeTitle: 'Rehab Village Care',
      description: 'Patients supported with structured physical recovery and assisted mobility through Project Rehab Village.',
      verifiedNumber: '',
      iconName: 'Accessibility',
      programmeLink: '/programmes/rehab-village',
    },
    {
      id: 'pillar-charity',
      category: 'Beneficiaries Supported',
      themeTitle: 'Charity Care Access',
      description: 'Vulnerable individuals and families receiving treatment support through the Charity Care Programme.',
      verifiedNumber: '',
      iconName: 'HeartHandshake',
      programmeLink: '/programmes/charity-care',
    },
    {
      id: 'pillar-outreach',
      category: 'Community Outreach',
      themeTitle: 'Medical Camps & Outreach',
      description: 'Community members reached through preventive health screenings, medical camps, and Stroke Force awareness.',
      verifiedNumber: '',
      iconName: 'Users',
      programmeLink: '/programmes/medical-camps',
    },
    {
      id: 'pillar-education',
      category: 'Educational Support',
      themeTitle: 'Healthcare Education',
      description: 'Students and trainees engaged through paramedical education and community health learning initiatives.',
      verifiedNumber: '',
      iconName: 'GraduationCap',
      programmeLink: '/programmes/college-of-life-sciences',
    },
    {
      id: 'pillar-volunteers',
      category: 'Volunteer Participation',
      themeTitle: 'Community Volunteers',
      description: 'Trained educators and volunteers contributing to a healthier, more resilient society.',
      verifiedNumber: '',
      iconName: 'HandHeart',
      programmeLink: '/programmes/volunteer-activities',
    },
  ],
  impactStories: [
    {
      id: 'story-template-rehab',
      title: 'Restoring Mobility and Independence Through Structured Rehabilitation',
      category: 'Recovery Journeys',
      summary:
        'Editorial placeholder illustrating how Project Rehab Village and Social Rehabilitation support post-stroke and neuro-rehabilitation recovery while respecting beneficiary privacy.',
      body: [
        'At Ayurgreen Foundation, every recovery journey is guided by respect for individual dignity, clinical privacy, and family participation. Through Project Rehab Village, patients recovering from neurological conditions or mobility impairments receive structured physical support alongside caregiver guidance.',
        'Note on Content Integrity: In accordance with Ayurgreen Foundation’s ethical privacy standards, individual patient names, clinical records, and personal photographs are published only after documented informed consent is verified by the Foundation administration. Administrators can replace or publish consented beneficiary stories directly using the Content Studio.',
      ],
      dateLabel: 'Editorial Framework · Rehabilitation Support',
      relatedProgrammeSlug: 'rehab-village',
      isPlaceholder: true,
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
    },
    {
      id: 'story-template-stroke-force',
      title: 'Building a Network of Community Educators for Early Stroke Recognition',
      category: 'Community Impact',
      summary:
        'How the Stroke Force Training of Trainers (ToT) approach equips college students and local volunteers to teach the BE FAST warning signs across communities.',
      body: [
        'Timely recognition of stroke warning signs is essential for ensuring that individuals reach appropriate medical care without delay. Through Stroke Force, Ayurgreen Foundation conducts structured awareness sessions in colleges, community groups, and local organisations.',
        'By training community educators through our Training of Trainers (ToT) model and evaluating sessions via participant feedback and learning assessments, the initiative empowers citizens to recognise Balance, Eyes, Face, Arm, Speech, and Time (BE FAST) indicators.',
      ],
      dateLabel: 'Programme Spotlight · Stroke Force',
      relatedProgrammeSlug: 'community-outreach',
      isPlaceholder: true,
      cropRegion: { x: 0, y: 1280, w: 400, h: 145 },
    },
    {
      id: 'story-template-volunteer',
      title: 'Student and Citizen Engagement in Community Medical Camps',
      category: 'Volunteer Experiences',
      summary:
        'Editorial placeholder highlighting the role of volunteers and paramedical trainees in organising accessible health camps and outreach dialogues.',
      body: [
        'Volunteers play a vital role across Ayurgreen Foundation’s outreach initiatives—assisting elderly participants at medical camps, supporting awareness drives, and fostering inclusive community environments.',
        'Verified first-person volunteer reflections and documented field outcomes can be added by the Foundation team via the built-in Content Studio as official programme reports are finalized.',
      ],
      dateLabel: 'Editorial Framework · Volunteer Engagement',
      relatedProgrammeSlug: 'volunteer-activities',
      isPlaceholder: true,
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
    },
  ],
  newsEvents: [
    {
      id: 'news-stroke-force-initiative',
      title: 'Stroke Force: Expanding Community-Based Stroke Awareness & Educator Training',
      category: 'Awareness Campaigns',
      dateLabel: 'Ongoing Initiative',
      locationLabel: 'Colleges & Community Settings, Kerala',
      summary:
        'Ayurgreen Foundation’s Stroke Force programme continues to focus on structured community awareness sessions and the Training of Trainers (ToT) model for early stroke sign recognition.',
      content: [
        'Stroke Force is a community-based initiative of Ayurgreen Foundation designed to improve awareness of stroke warning signs and the importance of seeking immediate medical attention.',
        'Through structured awareness sessions in colleges, community groups, local organisations, and neighbourhood forums, the programme introduces the BE FAST recognition method and trains community volunteers to serve as local educators.',
        'Organisations and educational institutions interested in hosting a Stroke Force awareness session can submit a request through our Partner With Us or Contact pages.',
      ],
      relatedRoute: '/stroke-force',
      isPlaceholder: false,
      cropRegion: { x: 0, y: 1280, w: 400, h: 145 },
    },
    {
      id: 'news-placeholder-medical-camp',
      title: '[Upcoming / Recent Medical Camp Report — Pending Official Publication]',
      category: 'Medical Camps',
      dateLabel: 'Publication Slot Ready',
      locationLabel: 'Community Outreach Archive',
      summary:
        'Structured archive slot reserved for verified medical camp dates, participating clinical teams, and community outreach summaries.',
      content: [
        'To maintain strict factual integrity, Ayurgreen Foundation only publishes verified camp dates, locations, and attendance summaries confirmed by the Administrative Office.',
        'Administrators can publish verified Medical Camp reports and event announcements at any time using the Content Studio.',
      ],
      relatedRoute: '/programmes/medical-camps',
      isPlaceholder: true,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
    },
    {
      id: 'news-placeholder-programme-report',
      title: '[Foundation Programme Update & Annual Activity Summary — Template]',
      category: 'Programme Reports',
      dateLabel: 'Publication Slot Ready',
      locationLabel: 'Edappal, Malappuram, Kerala',
      summary:
        'Editorial placeholder for official programme milestones across Charity Care, Project Rehab Village, and Social Rehabilitation.',
      content: [
        'This news archive slot is configured to display verified Foundation announcements, rehabilitation milestones, and institutional updates.',
        'Use the Content Studio in the footer to replace this placeholder with official press releases or activity reports.',
      ],
      relatedRoute: '/programmes',
      isPlaceholder: true,
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
    },
  ],
  galleryItems: [
    {
      id: 'gal-rehab-1',
      title: 'Assisted Mobility & Rehabilitation Support',
      category: 'Rehabilitation Activities',
      caption: 'Healthcare professional supporting a patient during assisted walking and rehabilitation practice.',
      altText: 'Ayurgreen healthcare professional in green scrubs assisting an older gentleman at parallel rehabilitation bars.',
      isVerifiedAsset: true,
      cropRegion: { x: 430, y: 68, w: 560, h: 350 },
    },
    {
      id: 'gal-outreach-1',
      title: 'Stroke Force Community Awareness Session',
      category: 'Community Outreach Programmes',
      caption: 'Stroke Force educator conducting an interactive community awareness session on recognising stroke warning signs.',
      altText: 'Stroke Force educator addressing community participants during an awareness session.',
      isVerifiedAsset: true,
      cropRegion: { x: 0, y: 1280, w: 400, h: 145 },
    },
    {
      id: 'gal-rehab-2',
      title: 'Project Rehab Village Environment',
      category: 'Rehabilitation Activities',
      caption: 'Community-based rehabilitation setting designed to support recovery and reintegration.',
      altText: 'Project Rehab Village building surrounded by greenery and palm trees.',
      isVerifiedAsset: true,
      cropRegion: { x: 185, y: 706, w: 150, h: 74 },
    },
    {
      id: 'gal-rehab-3',
      title: 'Social Rehabilitation & Guided Therapy',
      category: 'Rehabilitation Activities',
      caption: 'One-on-one rehabilitation and functional support session.',
      altText: 'Therapist assisting a beneficiary with hand and arm coordination.',
      isVerifiedAsset: true,
      cropRegion: { x: 395, y: 706, w: 112, h: 74 },
    },
    {
      id: 'gal-camps-1',
      title: 'Community Medical Consultation & Outreach',
      category: 'Medical Camps',
      caption: 'Healthcare consultation and community health interaction during outreach activities.',
      altText: 'Community medical camp and gathering hosted under a canopy.',
      isVerifiedAsset: true,
      cropRegion: { x: 563, y: 706, w: 112, h: 74 },
    },
    {
      id: 'gal-vol-1',
      title: 'Ayurgreen Foundation Volunteers',
      category: 'Volunteer Activities',
      caption: 'Dedicated student and community volunteers participating in Foundation outreach programmes.',
      altText: 'Three smiling volunteers wearing green Ayurgreen shirts.',
      isVerifiedAsset: true,
      cropRegion: { x: 725, y: 706, w: 115, h: 74 },
    },
    {
      id: 'gal-events-1',
      title: 'Charity Care & Compassionate Support',
      category: 'Foundation Events',
      caption: 'Visual emblem representing the Charity Care commitment to accessible healthcare support.',
      altText: 'Hands holding a heart symbol representing Charity Care support.',
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
      title: 'Annual Activity & Programme Report',
      category: 'Annual Reports',
      description:
        'Comprehensive annual review of Charity Care, Project Rehab Village, Social Rehabilitation, Stroke Force, Medical Camps, and educational initiatives.',
      status: 'Pending Official Upload',
      fileType: 'PDF Archive Slot',
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
        'Governs ethical handling of patient information, informed consent for beneficiary stories and photography, and non-discriminatory access to care.',
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
