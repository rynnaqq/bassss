export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'Culture' | 'Architecture' | 'Tech & Ethics' | 'Fashion & Form' | 'Visual Essays';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  issueNumber: string;
  date: string;
  readTime: string;
  coverImage: string;
  secondaryImage?: string;
  excerpt: string;
  contentParagraphs: string[];
  pullQuote?: string;
  audioDuration?: string;
  featured?: boolean;
  trendingRank?: number;
}

export interface Issue {
  number: string;
  title: string;
  theme: string;
  releaseDate: string;
  coverImage: string;
  summary: string;
  featuredArticlesCount: number;
}

export interface PhotoEssay {
  id: string;
  title: string;
  photographer: string;
  location: string;
  image: string;
  caption: string;
  aspectRatio: string;
}
