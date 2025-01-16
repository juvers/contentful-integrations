import { Maybe } from '../types';
import { MetadataTag } from '../types/metadata';

export const getMetadataValuesArray = (
  metadata?: Maybe<Maybe<MetadataTag>[]>
): string[] | undefined => {
  const stringList = metadata?.reduce((list, item) => {
    item?.value && list.push(item.value);
    return list;
  }, [] as string[]);
  const noDuplicatesOrNotApplicable = [
    ...Array.from(new Set(stringList)),
  ].filter((value) => value.toLowerCase() !== 'not applicable');

  if (noDuplicatesOrNotApplicable.length === 0) {
    return undefined;
  }
  return noDuplicatesOrNotApplicable;
};

export const getMetadataValues = (
  metadata?: Maybe<Maybe<MetadataTag>[]>
): string | undefined => {
  const noDuplicatesOrNotApplicable = getMetadataValuesArray(metadata);
  if (!noDuplicatesOrNotApplicable) {
    return undefined;
  }
  return noDuplicatesOrNotApplicable.join(', ');
};
