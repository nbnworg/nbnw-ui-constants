export interface Metadata {
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}
export interface PostMetadata extends Metadata {
  id: string; // Same as postid.
  category: string;
  tags: string[];
  summary?: string;
  title: string;
  reviewers?: string[];
  href: string;
  images?: string[];
  imageAttribution?: string;
}

export interface Post extends PostMetadata {
  contents: string[];
  subcategory?: string;
  content: string;
  approved?: string;
}
export interface PostEditor extends Post {
  date: number;
}
export interface PostFrontend extends Post {
  date: string;
}
