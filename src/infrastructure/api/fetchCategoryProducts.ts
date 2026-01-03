import axios from 'axios';
import { IProductFilter } from '@/shared/types/global';

export const fetchCategoryProductsJson = async (params: { slug: string } & Partial<IProductFilter>) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const response = await axios.get('/category-products.json', { params });
  return response.data;
};
