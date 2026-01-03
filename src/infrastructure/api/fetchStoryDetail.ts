import axios from 'axios';
import { IStory } from '@/shared/types/global';

export const fetchStoryDetailJson = async ({ slug }: { slug: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const response = await axios.get('/stories.json');
  const allStories: IStory[] = [
    response.data.data.featured,
    ...response.data.data.list
  ];
  const story = allStories.find((s: IStory) => s.slug === slug);

  if (!story) {
    throw new Error('Story not found');
  }

  return { data: story };
};

export const fetchRelatedStoriesJson = async ({ category, excludeId }: { category: string; excludeId: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await axios.get('/stories.json');
  const allStories: IStory[] = [
    response.data.data.featured,
    ...response.data.data.list
  ];
  const related = allStories
    .filter((s: IStory) => s.category === category && s.id !== excludeId)
    .slice(0, 3);

  return { data: related };
};
