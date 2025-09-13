// js/main.js

import { client } from './sanityClient.js';

const loadComponent = async (url, elementId) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    const text = await response.text();
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = text;
  } catch (error) {
    console.error('Error loading component:', error);
  }
};

const navConfig = {
  'page-home': {
    topLeft: { text: 'ART', href: '/pages/art/' },
    topRight: { text: 'ABOUT', href: '/about.html' },
    bottomLeft: { text: 'BLOG', href: '/pages/blog/' },
    bottomRight: { text: 'OTHER', href: '#' },
  },
  'page-art-gallery': {
    topLeft: { text: 'ART', href: '/pages/art/', active: true },
    topRight: { text: 'ABOUT', href: '/about.html' },
    bottomLeft: { text: 'BLOG', href: '/pages/blog/' },
    bottomRight: { text: 'OTHER', href: '#' },
  },
  'page-blog-gallery': {
    topLeft: { text: 'ART', href: '/pages/art/' },
    topRight: { text: 'ABOUT', href: '/about.html' },
    bottomLeft: { text: 'BLOG', href: '/pages/blog/', active: true },
    bottomRight: { text: 'OTHER', href: '#' },
  },
  'page-about': {
    topLeft: { text: 'ART', href: '/pages/art/' },
    topRight: { text: 'ABOUT', href: '/about.html', active: true },
    bottomLeft: { text: 'BLOG', href: '/pages/blog/' },
    bottomRight: { text: 'OTHER', href: '#' },
  }
};

const configureNavigation = async () => {
  const pageId = document.body.id;
  let pageConfig;

  // NEW LOGIC for Art Series Detail pages
  if (pageId === 'page-art-series-detail') {
    // 1. Fetch the correct order of all series slugs from Sanity
    const artSeriesOrder = await client.fetch(`*[_type == "artSeries"] | order(year desc).slug.current`);
    
    // 2. Get the current slug from the URL parameter
    const params = new URLSearchParams(window.location.search);
    const currentSlug = params.get('slug');

    if (currentSlug && artSeriesOrder.length > 0) {
      const currentIndex = artSeriesOrder.indexOf(currentSlug);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + artSeriesOrder.length) % artSeriesOrder.length;
        const nextIndex = (currentIndex + 1) % artSeriesOrder.length;
        const prevSlug = artSeriesOrder[prevIndex];
        const nextSlug = artSeriesOrder[nextIndex];
        
        const seriesTitle = currentSlug.replace(/-/g, ' ').toUpperCase();

        pageConfig = {
          topLeft: { text: 'ART', href: '/pages/art/' },
          topRight: { text: seriesTitle, href: '#', active: true },
          bottomLeft: { text: 'PREVIOUS', href: `/pages/art/series.html?slug=${prevSlug}` },
          bottomRight: { text: 'NEXT', href: `/pages/art/series.html?slug=${nextSlug}` }
        };
      }
    }
  
  // Logic for Blog Post pages (we'll update this later)
  } else if (pageId.startsWith('page-blog-') && pageId !== 'page-blog-gallery') {
    // This part will need a similar update when we do the blog
    pageConfig = navConfig['page-blog-gallery']; // Default for now
  
  // Original logic for all other static pages
  } else {
    pageConfig = navConfig[pageId];
  }

  if (!pageConfig) {
    console.warn(`No navigation configuration found for page ID: ${pageId}`);
    return;
  }

  const updateLink = (elementId, linkConfig) => {
    const element = document.getElementById(elementId);
    if (element && linkConfig) {
      element.textContent = linkConfig.text || '';
      element.href = linkConfig.href || '#';
      if (linkConfig.active) element.classList.add('active');
    }
  };

  updateLink('nav-top-left', pageConfig.topLeft);
  updateLink('nav-top-right', pageConfig.topRight);
  updateLink('nav-bottom-left', pageConfig.bottomLeft);
  updateLink('nav-bottom-right', pageConfig.bottomRight);
};


document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('/components/_header.html', 'header-placeholder'),
    loadComponent('/components/_footer.html', 'footer-placeholder')
  ]);

  await configureNavigation();
});