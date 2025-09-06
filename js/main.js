const loadComponent = async (url, elementId) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const text = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = text;
        } else {
            console.error(`Element with ID '${elementId}' not found.`);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
};

// ======================================
// --- NAVIGATION CONFIGURATION ---
// ======================================

// Art series order
const artSeriesOrder = [
    // Add new art slugs here as I make them
    'f24',
    'wax-on-paper',
    'breaking-points',
    'sm24',
    '06oct24'
];


// navConfig
const navConfig = {
    'page-home': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html' },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },
    'page-art-gallery': {
        topLeft: { text: 'ART', href: '/pages/art/index.html', active: true },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html' },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },
    'page-blog-gallery': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html', active: true },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },
    'page-about': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'ABOUT', href: '/pages/about.html', active: true },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html' },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    }
};

// ==============================
// --- NAVIGATION LINK SET-UP ---
// ==============================

const configureNavigation = () => {

    let blogPostOrder = [];
    if (typeof blogPosts !== 'undefined') {
        // Sort by date to ensure "previous" and "next" are chronological
        const sortedPosts = blogPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        blogPostOrder = sortedPosts.map(post => post.slug);
    }

    const pageId = document.body.id;
    let pageConfig;

    // Dynamic logic for Art Series pages
    if (pageId && pageId.startsWith('page-art-') && pageId !== 'page-art-gallery') {
        const currentSlug = pageId.replace('page-art-', '');
        const currentIndex = artSeriesOrder.indexOf(currentSlug);

        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + artSeriesOrder.length) % artSeriesOrder.length;
            const nextIndex = (currentIndex + 1) % artSeriesOrder.length;
            const prevSlug = artSeriesOrder[prevIndex];
            const nextSlug = artSeriesOrder[nextIndex];

            pageConfig = {
                topLeft: { text: 'ART', href: '/pages/art/index.html' },
                topRight: { text: currentSlug.toUpperCase().replace(/-/g, ' '), href: '#', active: true },
                bottomLeft: { text: 'PREVIOUS', href: `/pages/art/${prevSlug}.html` },
                bottomRight: { text: 'NEXT', href: `/pages/art/${nextSlug}.html` }
            };
        }
    
    // Dynamic logic for Blog Post pages
    } else if (pageId && pageId.startsWith('page-blog-') && pageId !== 'page-blog-gallery') {
        const currentSlug = pageId.replace('page-blog-', '');
        const currentIndex = blogPostOrder.indexOf(currentSlug);

        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + blogPostOrder.length) % blogPostOrder.length;
            const nextIndex = (currentIndex + 1) % blogPostOrder.length;
            const prevSlug = blogPostOrder[prevIndex];
            const nextSlug = blogPostOrder[nextIndex];

            pageConfig = {
                topLeft: { text: 'BLOG', href: '/pages/blog/index.html' },
                topRight: { text: currentSlug.toUpperCase().replace(/-/g, ' '), href: '#', active: true },
                bottomLeft: { text: 'PREVIOUS POST', href: `/pages/blog/posts/${prevSlug}.html` },
                bottomRight: { text: 'NEXT POST', href: `/pages/blog/posts/${nextSlug}.html` }
            };
        }

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
            if (linkConfig.active) {
                element.classList.add('active');
            }
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

    configureNavigation();
});