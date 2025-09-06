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

// The one true order for all art series pages
const artSeriesOrder = [
    'f24',
    'wax-on-paper',
    'breaking-points',
    'sm24',
    '06oct24'
];

// Simplified navConfig, with all repetitive art series pages removed
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
    'page-blog-post': {
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
    const pageId = document.body.id;
    let pageConfig; // Use 'let' so we can modify it

    // --- NEW: DYNAMIC LOGIC FOR ART SERIES PAGES ---
   if (pageId && pageId.startsWith('page-art-') && pageId !== 'page-art-gallery') {
        const currentSlug = pageId.replace('page-art-', '');
        const currentIndex = artSeriesOrder.indexOf(currentSlug);

        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + artSeriesOrder.length) % artSeriesOrder.length;
            const nextIndex = (currentIndex + 1) % artSeriesOrder.length;

            const prevSlug = artSeriesOrder[prevIndex];
            const nextSlug = artSeriesOrder[nextIndex];

            // Dynamically build the configuration for this art page
            pageConfig = {
                topLeft: { text: 'ART', href: '/pages/art/index.html' },
                topRight: { text: currentSlug.toUpperCase(), href: '#', active: true },
                bottomLeft: { text: 'PREVIOUS', href: `/pages/art/${prevSlug}.html` },
                bottomRight: { text: 'NEXT', href: `/pages/art/${nextSlug}.html` }
            };
        }
    } else {
        // --- ORIGINAL LOGIC for all other pages ---
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