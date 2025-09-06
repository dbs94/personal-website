/**
 * =================================================================
 * BLOG POSTS DATA
 * =================================================================
 * This is the "database" for all my blog posts.
 *
 * TO ADD A NEW POST:
 * 1. Add a new object to the `blogPosts` array below.
 * 2. Make sure the `slug` is unique and matches your HTML filename.
 * =================================================================
 */

// /js/blog-posts-data.js

const blogPosts = [

    // Add new blog post objects here as I write them

    {
        slug: 'blog-post-template',
        title: 'A Look at the F24 Art Series',
        date: '2025-09-05', // Use YYYY-MM-DD for easy sorting
        description: 'A deep dive into the concepts and techniques behind the F24 series of works on paper.',
        heroImage: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith.webp',
        tags: ['art', 'process', 'f24']
    },
    {
        slug: 'finding-inspiration',
        title: 'Finding Inspiration in Unlikely Places',
        date: '2025-08-22',
        description: 'How to break out of a creative rut by looking for inspiration beyond the studio walls.',
        heroImage: '/images/blog-images/inspiration-photo.webp',
        tags: ['creativity', 'inspiration']
    },
];