import { BLOCKS, Document } from '@contentful/rich-text-types';

/**
 * All values, including nested values, within type are optional
 */
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const richTextParagraph: DeepPartial<Document> = {
  nodeType: BLOCKS.DOCUMENT,
  content: [
    {
      nodeType: BLOCKS.PARAGRAPH,
      content: [
        {
          nodeType: 'text',
          value: 'Test ',
          marks: [],
        },
      ],
    },
  ],
};
