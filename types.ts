
export interface MetroProject {
  id: string;
  name: string;
  developer: string;
  station: string;
  distance: string; // e.g., "300m"
  address?: string;
  priceRange: string; 
  legalStatus: 'CERTIFIED' | 'PENDING' | 'WARNING';
  potential: 'HIGH' | 'MEDIUM' | 'LOW';
  
  // Axe-Dalio Algorithm Parameters
  locationScore: number; // 1-10
  densityScore: number;  // 1-10: Amenities & Population
  timePenalty: number;   // 1-5: Years to completion (Higher is worse)
  riskFactor: number;    // 1-5: Legal/Financial risk (Higher is worse)

  // Derived Fields (Calculated via Algorithm)
  muiScore?: number; // 0-100
  verdict?: 'STRONG BUY' | 'ACCUMULATE' | 'HOLD' | 'LIQUIDATE' | 'TOXIC';

  // Display Fields
  tags?: string[];
  description?: string; // Legacy/Fallback summary
  heroImage?: string;
  
  // NEW: Structured Forensic Dossier
  forensicData?: {
    warningLevel: 'CAUTION' | 'CRITICAL' | 'SAFE' | 'NEUTRAL';
    auditDate: string;
    zones: {
      id: string;
      title: string;
      iconName: 'SCALE' | 'SATELLITE' | 'BRAIN' | 'AXE'; // Mapped in UI
      items: {
        subtitle: string;
        content: string;
        type: 'FACT' | 'RISK' | 'INSIGHT' | 'OPPORTUNITY';
      }[];
    }[];
  };
  
  // Financials
  entryPrice?: string;
  yield?: string;
  
  // Asset DNA
  dna?: {
    landArea: string;
    scale: string;
    density: string;
    tenure: string;
  };

  amenities?: string[];
  fees?: {
    distressPrice: string;
    rentalPrice: string;
    managementFee: string;
    parkingFee: string;
    sinkingFund: string;
  };

  // Market Price Matrix (New)
  priceHistory?: {
    period: string;
    primaryPrice: string; // CĐT ra hàng
    secondaryPrice: string; // Giá thị trường
    variance: string; // Chênh lệch %
    status: 'PREMIUM' | 'DISCOUNT' | 'CRASH';
  }[];

  // THE KILL SWITCH: Capital Rotation Recommendation
  recommendedSwap?: {
    targetProjectId: string;
    targetName: string;
    reason: string;
    upside: string; // e.g., "Yield +6%"
  };

  commute?: {
    cbd: string;
    airport: string;
    hitech: string;
  };

  swot?: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };

  // Specific risk warnings for the detail view
  risks?: string[];

  legalChecklist?: {
    approval1500: boolean;
    salesPermit: boolean;
    foundation: boolean;
    pinkBook: boolean;
  };
  
  analystVerdictText?: {
    targetBuyer: string;
    avoid: string;
  };
}

export interface ArticleContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'warning' | 'quote' | 'image';
  text?: string | string[];
  imageUrl?: string;
  caption?: string;
}

export interface AnalysisArticle {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  category: 'MARKET' | 'LEGAL' | 'INFRASTRUCTURE' | 'FORENSIC' | 'SCANDAL'; 
  imageUrl: string;
  content: ArticleContentBlock[];
  isLocked?: boolean; // New field for gating content
}

export interface EconomicEvent {
  id: string;
  time: string;
  event: string;
  impact: 'High' | 'Medium' | 'Low';
  previous: string;
  forecast: string;
  actual: string;
}

export interface BankRate {
  id: string;
  bankName: string;
  code: string;
  rate12M: string;
  lendingRate: string;
  trend: 'UP' | 'DOWN' | 'FLAT';
}

export enum LegalStatus {
  CERTIFIED = 'Đã có sổ',
  PENDING = 'Đang chờ',
  WARNING = 'Rủi ro pháp lý'
}

export enum Potential {
  HIGH = 'Tăng trưởng cao',
  MEDIUM = 'Ổn định',
  LOW = 'Thấp'
}

export type InvestmentBudget = '< 10 Billion' | '10 - 20 Billion' | '20 - 50 Billion' | '> 50 Billion (VIP)';
