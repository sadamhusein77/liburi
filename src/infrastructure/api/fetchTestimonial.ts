import axios from 'axios';

export const fetchTestimonialJson = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get('/testimonial.json');
  return response.data;
};
