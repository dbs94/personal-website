// schemas/blogPost.ts

// Imports the necessary "building block" functions from the Sanity library.
import {defineType, defineField} from 'sanity'

// This is the main function that defines the "Blog Post" content type.
export default defineType({
  // --- Basic Schema Information ---
  
  // The internal name for this content type, used in API queries.
  name: 'blogPost',
  
  // The human-readable name that appears in the Sanity Studio.
  title: 'Blog Post',
  
  // Defines this as a top-level, editable document.
  type: 'document',

  // --- Default Sorting for the Studio ---
  // This tells Sanity how to sort the list of blog posts by default.
  ordering: [
    {
      title: 'Published Date, Newest First', // The display name for this sorting option.
      name: 'publishedAtDesc',               // The internal name for this sorting option.
      by: [{field: 'publishedAt', direction: 'desc'}], // Sort by the 'publishedAt' field, descending.
    },
  ],

  // --- Fields ---
  // The array of fields that make up a blog post.
  fields: [
    // --- Title Field ---
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string', // A single line of text.
      validation: (Rule) => Rule.required(), // Makes this field mandatory.
    }),
    
    // --- Slug Field ---
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',   // A special field for creating URL-friendly text.
      options: {
        source: 'title', // Automatically generates the slug from the 'title' field.
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // --- Published At Field ---
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime', // A field for selecting a specific date and time.
      initialValue: () => new Date().toISOString(), // Automatically sets the default to the current time.
      validation: (Rule) => Rule.required(),
    }),
    
    // --- Hero Image Field ---
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the smart cropping tool.
      },
      // Adds a nested 'alt' text field to every hero image.
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    
    // --- Excerpt Field ---
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'A short summary of the post for the blog index page.',
      type: 'text', // A multi-line text area.
      rows: 3,      // Sets the default height of the text area.
      validation: (Rule) => Rule.required().max(200), // Must be filled in and less than 200 characters.
    }),
    
    // --- Body Field (Rich Text Editor) ---
    defineField({
      name: 'body',
      title: 'Body',
      description: 'The main content of the blog post.',
      type: 'array', // Defines this field as Sanity's rich text editor, Portable Text.
      of: [
        {
          type: 'block', // This allows for paragraphs, headings, lists, bold/italic text, etc.
        },
        // If we fix the image issue, we would add {type: 'bodyImage'} here.
      ],
    }),
  ],
})