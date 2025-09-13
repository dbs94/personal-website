// schemas/artSeries.ts

import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'artSeries',
  title: 'Art Series',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the art series.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'The year the series was created.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The unique URL part for this series. Click "Generate" to create it from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the series.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The main image that represents the series on the gallery page.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'A short description of the image for accessibility.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'pieces',
      title: 'Pieces',
      type: 'array',
      description: 'The individual artwork pieces within this series.',
      of: [
        defineField({
          name: 'artworkPiece',
          title: 'Artwork Piece',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'year', title: 'Year', type: 'number', validation: (Rule) => Rule.required()}),
            defineField({name: 'dimensions', title: 'Dimensions', type: 'string'}),
            defineField({name: 'editions', title: 'Editions', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({name: 'alt', title: 'Alternative Text', type: 'string', validation: (Rule) => Rule.required()}),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})