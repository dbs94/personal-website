// schemas/artSeries.ts

// Imports the "building block" functions from the Sanity library.
// 'defineType' is used to create a new schema definition.
// 'defineField' is used to define each individual field within a schema.
import {defineType, defineField} from 'sanity'

// This is the main function that defines the entire "Art Series" content type.
// 'export default' makes this schema available to the rest of the Sanity Studio.
export default defineType({
  // --- Basic Schema Information ---
  
  // The internal name for this content type, used in code and API queries.
  // Must be unique and should not contain spaces or special characters.
  name: 'artSeries',
  
  // The human-readable name that appears in the Sanity Studio sidebar.
  title: 'Art Series',
  
  // Defines the type of schema. 'document' means it's a top-level, editable content type.
  type: 'document',

  ordering: [
    {
      title: 'Year, Newest First', // The display name for this sorting option
      name: 'yearDesc',           // The internal name for this sorting option
      by: [{field: 'year', direction: 'desc'}], // Sort by the 'year' field, descending
    },
  ],

  // --- Fields ---
  // An array that holds all the fields for an "Art Series".
  // Each object in this array defines one field in the Sanity Studio form.
  fields: [
    
    // --- Title Field ---
    defineField({
      name: 'title',          // The field's name in the API.
      title: 'Title',         // The label that appears in the Studio.
      type: 'string',         // The data type, in this case, a single line of text.
      description: 'The title of the art series.', // Helper text for content editors.
      validation: (Rule) => Rule.required(), // A validation rule making this field mandatory.
    }),
    
    // --- Year Field ---
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',         // The data type, for numerical input.
      description: 'The year the series was created.',
      validation: (Rule) => Rule.required(),
    }),
    
    // --- Slug Field ---
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',           // A special type for generating URL-friendly text.
      description: 'The unique URL part for this series. Click "Generate" to create it from the title.',
      options: {
        source: 'title',      // Automatically generates the slug from the 'title' field.
        maxLength: 96,        // Sets a maximum length for the slug.
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // --- Description Field ---
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',           // The data type, for a multi-line text area.
      description: 'A brief description of the series.',
    }),
    
    // --- Cover Image Field ---
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',          // The data type for uploading images.
      description: 'The main image that represents the series on the gallery page.',
      options: {
        hotspot: true,      // Enables the hotspot/crop tool for better image framing.
      },
      // You can add fields directly to an image to capture more data, like alt text.
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
    
    // --- Pieces Field (Array of Objects) ---
    defineField({
      name: 'pieces',
      title: 'Pieces',
      type: 'array',          // The data type for a list of items.
      description: 'The individual artwork pieces within this series.',
      
      // 'of' specifies what type of items can be added to this array.
      of: [
        // This defines the structure of each item in the "Pieces" list.
        defineField({
          name: 'artworkPiece',
          title: 'Artwork Piece',
          type: 'object',     // 'object' means each item is a collection of nested fields.
          
          // These are the fields that make up a single "Artwork Piece".
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