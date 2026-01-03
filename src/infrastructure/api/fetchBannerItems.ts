import axios from 'axios';

export const fetchBannerItemsJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/banner-items.json');
  return response.data;
};
