import axios from 'axios';

export const fetchAgentsJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/agents.json');
  return response.data;
};
