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
        date: '2025-09-05',
        description: 'A deep dive into the concepts and techniques behind the F24 series of works on paper.',
        heroImage: {
            small: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith-400w.webp',
            medium: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith-800w.webp',
            large: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith-1200w.webp'
        },
        tags: ['art', 'process', 'f24']
    },

    {
        slug: 'the-first-step',
        title: 'The First Step',
        date: '2024-11-20',
        description: 'How to break out of a creative rut by looking for inspiration beyond the studio walls.',
        heroImage: {
            small: '/images/blog-images/the-first-step-blog-post-dylan-burnside-smith-400w.webp',
            medium: '/images/blog-images/the-first-step-blog-post-dylan-burnside-smith-800w.webp',
            large: '/images/blog-images/the-first-step-blog-post-dylan-burnside-smith-1200w.webp'
        },
        tags: ['creativity', 'inspiration']
    }

];