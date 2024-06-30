export enum QueryType {
  CHANGE = 'change',
  INREVIEW = 'inreview',
  PENDINGREVIEW = 'pendingreview',
  PENDINGREVIEWBYEDITOR = 'pendingreviewbyeditor',
  PENDINGREVIEWBYADMIN = 'pendingreviewbyadmin',
  INCOMPLETE = 'incomplete',
  ID = 'id',
  APPROVE = 'approve',
  APPROVED = 'approved',
  APPROVEBYEDITOR = 'statusupdate',
  STATUSCHANGE = 'semiapprove',
  APPROVEBYADMIN = 'approve',
  LATEST = 'latest',
  SEARCH = 'search',
  AUTHOR = 'author',
}
export enum ComponentSize {
  extrasmall = 'extrasmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
  textRight = 'textRight',
  textDown = 'textDown',
}

export enum ComponentColorType {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}
export interface ComponentType {
  size?: ComponentSize;
  colorType?: ComponentColorType;
}

export interface Metadata {
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}
export interface PostMetadata {
  id: string; // Same as postid.
  category: string;
  tags: string[];
  summary?: string;
  title: string;
  reviewers?: string[];
  href: string;
  images?: string[];
  imageAttribution?: string;
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}

export interface Post {
  id: string;
  contents: string[];
  subcategory?: string;
  content: string;
  date: number;
  approved: string;
  category: string;
  tags: string[];
  summary?: string;
  title: string;
  reviewers?: string[];
  href: string;
  images?: string[];
  imageAttribution?: string;
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}
export enum API_PATHS {
  NEWS = '/news',
  AUTHOR = '/author',
  TITLE = '/title',
  COMMENT = '/comment',
  NOTIFY = '/notify',
  DRAFT = '/draft',
}
