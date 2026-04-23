const API_KEY = 'AIzaSyC_Qulud01PDHBb6hL2OhzB94EkhGDPMkE';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

/**
 * Format subscriber count into a readable string (e.g., 3.4M, 150K)
 */
export const formatCount = (count) => {
  if (!count) return '0';
  const num = parseInt(count);
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

/**
 * Fetch channel statistics and snippet (for avatar)
 */
export const fetchChannelData = async (channelId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const channel = data.items[0];
      return {
        subscriberCount: formatCount(channel.statistics.subscriberCount),
        avatar: channel.snippet.thumbnails.default.url,
        title: channel.snippet.title
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching channel data:', error);
    return null;
  }
};

/**
 * Fetch details for multiple videos
 */
export const fetchVideosData = async (videoIds) => {
  try {
    const ids = videoIds.filter(id => id.length === 11).join(',');
    if (!ids) return [];
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,statistics&id=${ids}&key=${API_KEY}`
    );
    const data = await response.json();
    if (data.items) {
      return data.items.map(video => ({
        id: video.id,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.maxres?.url || 
                   video.snippet.thumbnails.high?.url || 
                   video.snippet.thumbnails.medium?.url ||
                   video.snippet.thumbnails.default?.url,
        viewCount: video.statistics.viewCount
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching videos data:', error);
    return [];
  }
};
