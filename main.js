// index.js
import { supportedCategories } from './constants/categories';
import { API_PATHS } from './enums/apiPaths';
import { ComponentSize } from './enums/componentSize';
import { ComponentColorType } from './enums/componentColorType';
import { QueryType } from './enums/queryType';
import * as x from './interfaces/post';
import * as y from './interfaces/componentType';
import * as z from './interfaces/metaData';
import * as a from './interfaces/postMetaData';
import * as b from './interfaces/postEditor';
import * as c from './interfaces/postFrontend';

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
