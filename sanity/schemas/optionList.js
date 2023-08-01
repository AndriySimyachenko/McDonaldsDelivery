import {defineType} from 'sanity'

export default defineType({
  name: 'optionList',
  title: 'Option List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'optionType',
      title: 'Option Type',
      type: 'string',
      options: {
        list: ['Single Choice', 'Multiple Choice'],
      },
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'option'}]}],
    },
  ],
})
