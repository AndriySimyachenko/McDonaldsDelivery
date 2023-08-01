import {defineType} from 'sanity'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Section name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of The Restaurant',
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'rating',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
