export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number;
  comment: string;
  ratingsBreakdown: {
    academicExcellence: number;
    conduciveEnvironment: number;
    moralDiscipline: number;
    qualityOfFacilities: number;
    securityMeasures: number;
    relationshipManagement: number;
    curriculum: number;
  };
}

export interface StoryItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  fullText: string;
  date: string;
  readTime: string;
  image: string;
  tag: 'FEATURED' | 'ACADEMICS' | 'ATHLETICS' | 'EARLY YEARS' | 'COMMUNITY';
}

export interface ProgramItem {
  id: string;
  title: string;
  ageGroup: string;
  curriculum: string;
  description: string;
  highlights: string[];
  schedule: string;
}

export interface SchoolStats {
  academicExcellence: string;
  academicYear: string;
  ratio: string;
  environment: string;
  category: string;
  coCurricular: string;
  location: string;
  rating: string;
}
