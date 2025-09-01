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

    // Set the content and links for each link based on the page's ID
    switch (pageId) {
        case 'page-home':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'art.html';
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = 'about.html'; // UPDATED
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'blog.html';
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = 'index.html';
            break;

        case 'page-art-gallery':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'art.html';
            navTopLeft.classList.add('active');
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = 'about.html'; // UPDATED
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'blog.html';
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = 'index.html';
            break;

        case 'page-art-detail':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'art.html';
            navTopRight.textContent = 'F24';
            navTopRight.href = '#';
            navTopRight.classList.add('active');
            navBottomLeft.textContent = 'PREVIOUS';
            navBottomLeft.href = '#';
            navBottomRight.textContent = 'NEXT';
            navBottomRight.href = '#';
            break;

        case 'page-blog-gallery':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'art.html';
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = 'about.html'; // UPDATED
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'blog.html';
            navBottomLeft.classList.add('active');
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = 'index.html';
            break;

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

        // --- NEW CASE FOR THE ABOUT PAGE ---
        case 'page-about':
            navTopLeft.textContent = 'ART';
            navTopLeft.href = 'art.html';
            navTopRight.textContent = 'ABOUT';
            navTopRight.href = 'about.html';
            navTopRight.classList.add('active'); // Set active style
            navBottomLeft.textContent = 'BLOG';
            navBottomLeft.href = 'blog.html';
            navBottomRight.textContent = 'OTHER';
            navBottomRight.href = 'index.html';
            break;
    }
};

// When the page loads, load the components and then configure them.
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('_header.html', 'header-placeholder');
    await loadComponent('_footer.html', 'footer-placeholder');
    
    // Once the HTML is loaded, run the function to set the correct links
    configureNavigation();
});