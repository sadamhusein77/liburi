import axios from 'axios';
export const fetchTreasureProductJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get('/treasure-product.json');
  return response.data;
};