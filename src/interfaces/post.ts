import { Metadata } from './metaData';
import { PostMetadata } from './postMetaData';
export interface Post extends PostMetadata {
  contents: string[];
  subcategory?: string;
  content: string;
  approved?: string;
}
