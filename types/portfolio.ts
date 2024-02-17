import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface PortfolioItem extends ParsedContent {
  title: string;
  description: string;
  id: string;
  group: number;
  date: string;
  images: string[];
}
