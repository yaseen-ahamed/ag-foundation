import React, { useState } from 'react';
import {
  HeartHandshake,
  Home,
  Accessibility,
  Users,
  Stethoscope,
  GraduationCap,
  ScanLine,
  HandHeart,
  Landmark,
  Microscope,
} from 'lucide-react';

interface ReferencePhotoCropProps {
  crop: { x: number; y: number; w: number; h: number };
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
  imageSrc?: string;
}

const REFERENCE_ASSET = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.20.49_PM_35a2c012.jpeg';
export const STROKE_FORCE_PHOTO = '/assets/aistudio/stroke_force_fc11680c.webp';
export const CHARITY_CARE_PHOTO = '/assets/aistudio/charity_care_6e336a13.webp';
export const REHAB_VILLAGE_PHOTO = '/assets/aistudio/rehab_village_vehicle_4fb8d250.webp';

export const ReferencePhotoCrop: React.FC<ReferencePhotoCropProps> = ({
  crop,
  alt,
  className = 'w-full h-full',
  imageSrc,
}) => {
  const [hasError, setHasError] = useState(false);

  const isStrokeForceCrop = crop.x === 0 && crop.y === 1280;
  const isCharityCareCrop =
    (crop.x === 32 && crop.y === 690) || (crop.x === 76 && crop.y === 706);
  const isRehabVillageCrop =
    (crop.x === 256 && crop.y === 690) || (crop.x === 185 && crop.y === 706);

  const resolvedDirectImage =
    imageSrc ||
    (isStrokeForceCrop
      ? STROKE_FORCE_PHOTO
      : isCharityCareCrop
      ? CHARITY_CARE_PHOTO
      : isRehabVillageCrop
      ? REHAB_VILLAGE_PHOTO
      : undefined);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFF7FA] text-[#102C4B] p-6 text-center ${className}`}
      >
        <HeartHandshake className="w-10 h-10 text-[#087F83] mb-2 opacity-80" />
        <span className="text-xs font-medium text-[#536477] max-w-xs">{alt}</span>
      </div>
    );
  }

  if (resolvedDirectImage) {
    const objectPosClass = isStrokeForceCrop
      ? 'object-[64%_center]'
      : 'object-center';
    return (
      <div className={`relative overflow-hidden bg-[#EFF7FA] ${className}`}>
        <img
          src={resolvedDirectImage}
          alt={alt}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${objectPosClass} block`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EFF7FA] ${className}`}>
      <svg
        viewBox={`${crop.x} ${crop.y} ${crop.w} ${crop.h}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
        role="img"
        aria-label={alt}
      >
        <title>{alt}</title>
        <image
          href={REFERENCE_ASSET}
          width="1024"
          height="1536"
          onError={() => setHasError(true)}
        />
      </svg>
    </div>
  );
};

export const ProgrammeIconBadge: React.FC<{
  iconName: string;
  accentColor?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ iconName, accentColor = '#087F83', size = 'md' }) => {
  const sizeClasses =
    size === 'sm'
      ? 'w-10 h-10'
      : size === 'lg'
      ? 'w-14 h-14'
      : 'w-12 h-12';
  const iconSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-7 h-7' : 'w-6 h-6';

  const renderIcon = () => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className={iconSize} />;
      case 'Home':
        return <Home className={iconSize} />;
      case 'Accessibility':
        return <Accessibility className={iconSize} />;
      case 'Users':
        return <Users className={iconSize} />;
      case 'Stethoscope':
        return <Stethoscope className={iconSize} />;
      case 'GraduationCap':
        return <GraduationCap className={iconSize} />;
      case 'ScanLine':
        return <ScanLine className={iconSize} />;
      case 'HandHeart':
        return <HandHeart className={iconSize} />;
      case 'Landmark':
        return <Landmark className={iconSize} />;
      case 'Microscope':
        return <Microscope className={iconSize} />;
      default:
        return <HeartHandshake className={iconSize} />;
    }
  };

  return (
    <div
      className={`${sizeClasses} rounded-full flex items-center justify-center text-white shadow-sm ring-4 ring-white shrink-0`}
      style={{ backgroundColor: accentColor }}
    >
      {renderIcon()}
    </div>
  );
};

export const BespokeInstitutionalArt: React.FC<{
  type: 'college' | 'radiology' | 'outreach' | 'charity' | 'rehab-village' | 'social-rehab' | 'medical-camps' | 'volunteer';
  alt: string;
  className?: string;
}> = ({ type, alt, className = 'w-full h-full' }) => {
  if (type === 'college') {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden bg-gradient-to-br from-[#EFF7FA] via-[#E3F1F6] to-[#D2E8F0] flex items-center justify-center p-6 ${className}`}
      >
        <svg viewBox="0 0 400 220" className="w-full h-full max-w-[360px]" aria-hidden="true">
          <defs>
            <linearGradient id="colGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#102C4B" />
              <stop offset="100%" stopColor="#087F83" />
            </linearGradient>
          </defs>
          {/* Architectural Campus Columns */}
          <rect x="60" y="165" width="280" height="12" rx="4" fill="#102C4B" opacity="0.15" />
          <rect x="80" y="153" width="240" height="12" rx="3" fill="#102C4B" opacity="0.25" />
          <path d="M200 38 L325 90 L75 90 Z" fill="url(#colGrad)" />
          <rect x="90" y="90" width="220" height="10" fill="#07565B" />
          <rect x="108" y="100" width="16" height="53" rx="2" fill="#102C4B" opacity="0.8" />
          <rect x="158" y="100" width="16" height="53" rx="2" fill="#102C4B" opacity="0.8" />
          <rect x="226" y="100" width="16" height="53" rx="2" fill="#102C4B" opacity="0.8" />
          <rect x="276" y="100" width="16" height="53" rx="2" fill="#102C4B" opacity="0.8" />
          {/* Medical Cross & Graduation Emblem */}
          <circle cx="200" cy="68" r="14" fill="#FFFFFF" />
          <path d="M196 68 H204 M200 64 V72" stroke="#087F83" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === 'radiology') {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden bg-gradient-to-br from-[#0F2942] via-[#102C4B] to-[#087F83] flex items-center justify-center p-6 ${className}`}
      >
        <svg viewBox="0 0 400 220" className="w-full h-full max-w-[360px]" aria-hidden="true">
          {/* Diagnostic Imaging Gantry & Scan Grid */}
          <circle cx="200" cy="110" r="76" fill="none" stroke="#EFF7FA" strokeWidth="10" opacity="0.2" />
          <circle cx="200" cy="110" r="56" fill="none" stroke="#26C6DA" strokeWidth="3" strokeDasharray="8 6" />
          <rect x="145" y="65" width="110" height="90" rx="14" fill="#07565B" stroke="#4DD0E1" strokeWidth="2" />
          {/* Ribcage / Spine stylized diagnostic waveform */}
          <line x1="200" y1="78" x2="200" y2="142" stroke="#E0F7FA" strokeWidth="3" strokeLinecap="round" />
          <path d="M172 90 Q200 84 228 90" fill="none" stroke="#80DEEA" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M168 105 Q200 99 232 105" fill="none" stroke="#80DEEA" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M172 120 Q200 114 228 120" fill="none" stroke="#80DEEA" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M178 134 Q200 128 222 134" fill="none" stroke="#80DEEA" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="125" y1="110" x2="275" y2="110" stroke="#26C6DA" strokeWidth="1.5" opacity="0.7" />
        </svg>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-gradient-to-br from-[#EFF7FA] to-[#DCEEF5] flex items-center justify-center p-6 ${className}`}
    >
      <HeartHandshake className="w-16 h-16 text-[#087F83] opacity-75" />
    </div>
  );
};
