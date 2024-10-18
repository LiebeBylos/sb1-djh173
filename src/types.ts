export interface KeywordRanking {
  id: string;
  keyword: string;
  country: string;
  rank: number;
  searchVolume: number;
  trend: 'rising' | 'falling' | 'stable';
  topPodcast: string;
  platforms: {
    apple: number;
    spotify: number;
    youtube: number;
  };
  topPodcasts: {
    title: string;
    rank: number;
  }[];
}