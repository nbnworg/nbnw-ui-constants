// common.d.ts
export declare enum QueryType {
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

export declare enum ComponentSize {
  extrasmall = 'extrasmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
  textRight = 'textRight',
  textDown = 'textDown',
}

export declare enum ComponentColorType {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export declare interface ComponentType {
  size?: ComponentSize;
  colorType?: ComponentColorType;
}

export declare interface Metadata {
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}

export declare interface PostMetadata {
  id: string;
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

export declare interface Post {
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

export declare enum API_PATHS {
  NEWS = '/news',
  AUTHOR = '/author',
  TITLE = '/title',
  COMMENT = '/comment',
  NOTIFY = '/notify',
  DRAFT = '/draft',
}
