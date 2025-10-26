import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Image {
  name: string,
  size?: string,
  important?: number,
  id?: string,
}

export interface PortfolioItem extends ParsedContent {
  title: string,
  description: string,
  id: string,
  group: number,
  date: string,
  images: Image[],
  index: number,
}
