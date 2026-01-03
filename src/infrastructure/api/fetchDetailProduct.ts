import axios from 'axios';
export const fetchDetailProductJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get('/detail.json');
  return response.data;
};