
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

const navConfig = {
    
    // HOME PAGE
    'page-home': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html' },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },

    // ART HOME PAGE
    'page-art-gallery': {
        topLeft: { text: 'ART', href: '/pages/art/index.html', active: true },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html' },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },

    // F24 ART SERIES
    'page-art-f24': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'F24', href: '#', active: true },
        bottomLeft: { text: 'PREVIOUS', href: '06oct24.html' },
        bottomRight: { text: 'NEXT', href: 'wax-on-paper.html' },
    },

    // WAX ON PAPER ART SERIES
    'page-art-wax-on-paper': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'F24', href: '#', active: true },
        bottomLeft: { text: 'PREVIOUS', href: 'f24.html' },
        bottomRight: { text: 'NEXT', href: 'breaking-points.html' },
    },

    // BREAKING POINTS ART SERIES
    'page-art-breaking-points': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'F24', href: '#', active: true },
        bottomLeft: { text: 'PREVIOUS', href: 'wax-on-paper.html' },
        bottomRight: { text: 'NEXT', href: 'sm24.html' },
    },

    // SM24 ART SERIES
    'page-art-sm24': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'F24', href: '#', active: true },
        bottomLeft: { text: 'PREVIOUS', href: 'breaking-points.html' },
        bottomRight: { text: 'NEXT', href: '06oct24.html' },
    },

    // 06OCT24 ART SERIES
    'page-art-06oct24': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'F24', href: '#', active: true },
        bottomLeft: { text: 'PREVIOUS', href: 'sm24.html' },
        bottomRight: { text: 'NEXT', href: 'f24.html' },
    },

    // BLOG HOME PAGE
    'page-blog-gallery': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html', active: true },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },

        // BLOG POST PAGE
    'page-blog-post': {
        topLeft: { text: 'ART', href: '/pages/art/index.html' },
        topRight: { text: 'ABOUT', href: '/pages/about.html' },
        bottomLeft: { text: 'BLOG', href: '/pages/blog/index.html', active: true },
        bottomRight: { text: 'OTHER', href: '/index.html' },
    },

    // ABOUT ME PAGE
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
    const pageConfig = navConfig[pageId];

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