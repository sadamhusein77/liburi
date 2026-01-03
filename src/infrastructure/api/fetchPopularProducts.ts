import axios from 'axios';

export const fetchPopularProductsJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/popular-products.json');
  return response.data;
};
