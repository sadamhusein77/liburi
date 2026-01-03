import axios from 'axios';

export const fetchStoriesJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/stories.json');
  return response.data;
};
