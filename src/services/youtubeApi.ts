import axios from 'axios';

export const searchYouTubePodcasts = async (keyword: string) => {
  try {
    // In a real implementation, this would call a backend endpoint
    const response = await axios.get(`/api/youtube-search?keyword=${encodeURIComponent(keyword)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return [];
  }
};