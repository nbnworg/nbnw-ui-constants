import { Metadata } from './metaData';
export interface PostMetadata extends Metadata {
  id: string;
  category: string;
  tags: string[];
  summary?: string;
  title: string;
  reviewers?: string[];
  href: string;
  images?: string[];
  imageAttribution?: string;
}
