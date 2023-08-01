import {defineType} from 'sanity'

export default defineType({
  name: 'option',
  title: 'Option',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
})
