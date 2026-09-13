export type PageRoute = 
  | 'home'
  | 'about'
  | 'solutions'
  | 'solaris'
  | 'industries'
  | 'projects'
  | 'hsqe'
  | 'resources'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'electrical' | 'generators' | 'ups' | 'smart-energy' | 'ict' | 'voltage';
  iconName: string;
  features: string[];
  specs?: string[];
  applications: string[];
  image: string;
}

export interface SolarisSolution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  technicalHighlights: string[];
  targetFacilities: string[];
  icon: string;
  image: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  subtitle: string;
  targetClients: string[];
  keyChallenges: string[];
  recommendedSolutions: string[];
  caseStudyHighlight?: {
    title: string;
    impact: string;
  };
  image: string;
  icon: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  location: string;
  year: string;
  capacity: string;
  summary: string;
  challenge: string;
  solutionProvided: string;
  results: string[];
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface ResourceDocument {
  id: string;
  title: string;
  category: 'Profile' | 'Brochure' | 'Guide' | 'Whitepaper' | 'Technical';
  fileSize: string;
  description: string;
  pages: number;
  featured?: boolean;
}

export interface SolarAssessmentInput {
  institutionName: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  facilityType: string;
  monthlyGridBillUGX: number;
  monthlyGeneratorFuelUGX: number;
  averageOutageHoursDaily: number;
  primaryEnergyGoal: 'cost-reduction' | 'zero-outage' | 'sustainability' | 'all';
  hasExistingGenerator: boolean;
  generatorKVA?: number;
}

export interface AssessmentResult {
  recommendedSolarKW: number;
  recommendedBatteryKWh: number;
  estimatedAnnualSavingsUGX: number;
  estimatedPaybackYears: number;
  co2OffsetTonsPerYear: number;
  feasibilityScore: number;
  readinessCategory: 'High Solar Potential' | 'Optimal Hybrid Candidate' | 'Custom Infrastructure Upgrade Needed';
}
