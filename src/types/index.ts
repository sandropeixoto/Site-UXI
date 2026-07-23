export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlights: string[];
}

export interface SegmentationCriterion {
  category: string;
  items: string[];
  icon: string;
}

export interface QualityControlPillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  tag: string;
}

export interface MetricComparison {
  title: string;
  value: string;
  numericValue: number;
  unit: string;
  description: string;
  badge: string;
  traditional: string;
  uxi: string;
}

export interface ResourceMaterial {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  downloadUrl?: string;
  fileSize: string;
  tags: string[];
}

export interface SocialPost {
  id: string;
  username: string;
  handle: string;
  date: string;
  content: string;
  imageAlt: string;
  category: string;
  likes: number;
  comments: number;
  shares: number;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  studyType: 'eleitoral' | 'opiniao' | 'mercado' | 'outro';
  sampleSize: string;
  message: string;
}
