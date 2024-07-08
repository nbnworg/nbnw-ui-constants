// index.js
import { supportedCategories } from './newsDefinitions/constants/categories';
import { API_PATHS } from './newsDefinitions/enums/apiPaths';
import { ComponentSize } from './newsDefinitions/enums/componentSize';
import { ComponentColorType } from './newsDefinitions/enums/componentColorType';
import { QueryType } from './newsDefinitions/enums/queryType';
import * as x from './newsDefinitions/interfaces/post';
import * as y from './newsDefinitions/interfaces/componentType';
import * as z from './newsDefinitions/interfaces/metaData';
import * as a from './newsDefinitions/interfaces/postMetaData';
import * as b from './newsDefinitions/interfaces/postEditor';
import * as c from './newsDefinitions/interfaces/postFrontend';

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
