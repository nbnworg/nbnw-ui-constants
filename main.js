// index.js
import { supportedCategories } from './news/constants/categories';
import { API_PATHS } from './news/enums/apiPaths';
import { ComponentSize } from './news/enums/componentSize';
import { ComponentColorType } from './news/enums/componentColorType';
import { QueryType } from './news/enums/queryType';
import * as x from './news/interfaces/post';
import * as y from './news/interfaces/componentType';
import * as z from './news/interfaces/metaData';
import * as a from './news/interfaces/postMetaData';
import * as b from './news/interfaces/postEditor';
import * as c from './news/interfaces/postFrontend';

const Metadata = z.Metadata;
const PostMetadata = a.PostMetadata;
const Post = x.Post;
const PostEditor = b.PostEditor;
const PostFrontend = c.PostFrontend;
const ComponentType = y.ComponentType;
export {
  API_PATHS,
  supportedCategories,
  ComponentColorType,
  ComponentSize,
  QueryType,
  ComponentType,
  Metadata,
  PostMetadata,
  Post,
  PostEditor,
  PostFrontend,
};
