import axios from 'axios';

export const fetchProductCategoriesJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/product-categories.json');
  return response.data;
};
