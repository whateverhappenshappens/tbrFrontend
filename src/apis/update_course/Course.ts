export interface Course {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  price: number;
  imageUrl: string;
  badgeText: string;
  rating: number;
  ratingCount: number;
  instructorName: string;
  instructorDesignation: string;
  instructorDescription: string;
  instructorImageUrl: string;
  instructorLinkedin: string;
  startDate: string;
  endDate: string;
}

export type CategoryFilter = 'All' | 'Web Development' | 'Machine Learning' | 'Coding' | 'IOT';