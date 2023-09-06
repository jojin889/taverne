import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'images',
  title: 'Image',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

  ],
})
