import { Maybe } from '../types';

export type MetadataTag = { value?: Maybe<string> };
export type MetadataCollection = { items: Array<Maybe<MetadataTag>> };
