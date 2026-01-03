import axios from 'axios';

export const fetchBrowseByCategoriesJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/browse-by-categories.json');
  return response.data;
};
