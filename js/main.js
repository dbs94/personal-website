// This function fetches HTML content from a file and injects it into a specified element.
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
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
};


// ==========================
//  --- NAVIGATION LINKS ---
// ==========================
// This function sets the navigation links and active states based on the current page.
const configureNavigation = () => {
    const pageId = document.body.id;

    // Get references to the placeholder links in the header and footer
    const navTopLeft = document.getElementById('nav-top-left');
    const navTopRight = document.getElementById('nav-top-right');
    const navBottomLeft = document.getElementById('nav-bottom-left');
    const navBottomRight = document.getElementById('nav-bottom-right');

    // Ensure all links exist before trying to modify them
    if (!navTopLeft || !navTopRight || !navBottomLeft || !navBottomRight) {
        return;
    }

// =================================
//  --- NAVIGATION LINKS SET-UP ---
// =================================
    // Set the content and links for each link based on the page's ID
    switch (pageId) {

    // =====================
    //  --- HOME PAGE ---
    // =====================
        case 'page-home':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'pages/art/index.html';
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = 'pages/about.html';
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'pages/blog/index.html';
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = 'index.html';
            break;

    // =======================
    //  --- ART HOME PAGE ---
    // =======================
        case 'page-art-gallery':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopLeft.classList.add('active');
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = '/pages/about.html';
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = '/pages/blog/index.html';
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = '/index.html';
            break;

    // ======================
    //    --- F24 PAGE ---
    // ======================
        case 'page-art-f24':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = '06oct24.html';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = 'wax-on-paper.html';
            break;

    // ==========================
    //  --- WAX ON PAPER PAGE ---
    // ==========================
        case 'page-art-wax-on-paper':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = 'f24.html';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = 'breaking-points.html';
            break;

    // =============================
    //  --- BREAKING POINTS PAGE ---
    // =============================
        case 'page-art-breaking-points':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = 'wax-on-paper.html';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = 'sm24.html';
            break;

    // =============================
    //       --- SM24 PAGE ---
    // =============================
        case 'page-art-sm24':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = 'breaking-points.html';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = '06oct24.html';
            break;

    // =============================
    //     --- 06OCT24 PAGE ---
    // =============================
        case 'page-art-06oct24':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = 'sm24.html';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = 'f24.html';
            break;

        // --- ART DETAIL TEMPLATE PAGE ---
        case 'page-art-detail':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'index.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = '#';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = '#';
            break;

    // ========================
    //  --- BLOG HOME PAGE ---
    // ========================
        case 'page-blog-gallery':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = '/pages/art/index.html';
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = '/pages/about.html'; // UPDATED
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'index.html';
            navBottomLeft.classList.add('active');
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = '/index.html';
            break;

        // --- BLOG POST TEMPLATE PAGE ---
        case 'page-blog-post':
            navTopLeft.textContent = 'BLOG';
            navTopLeft.href = 'blog.html';
            navTopRight.textContent = '';
            navTopRight.href = '#';
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = '#';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = '#';
            break;

    // =====================
    //  --- ABOUT PAGE ---
    // =====================
        case 'page-about':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = '/pages/art/index.html';
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = 'about.html';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'blog/index.html';
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = '/index.html';
            break;
    }
};


// When the page loads, load the components and then configure them.
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('/components/_header.html', 'header-placeholder');
    await loadComponent('/components/_footer.html', 'footer-placeholder');
    
    // Once the HTML is loaded, run the function to set the correct links
    configureNavigation();
});