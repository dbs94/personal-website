/**
 * =================================================================
 * ART SERIES DATA
 * =================================================================
 * This is the "database" for all my art series. The order of the
 * series here will determine the "Previous/Next" navigation order.
 *
 * TO ADD A NEW SERIES:
 * 1. Add a new object to the `artSeries` array below.
 * 2. The `slug` must be unique and match your HTML filename.
 * =================================================================
 */

const artSeries = [

    // Add new series objects here

    // ============
    //  -- F24 --
    // ============
    {
        slug: 'f24',
        title: 'F24',
        year: 2024,
        description: 'Flowers / 2024. This series further investigates the fine line between painting and photography. I see my photographs as paintings painted by light, allowing the natural, unpredictable world in front of me to inform the composition of the canvas. This series, in particular, explores the world of flowers.',
        coverImage: {
            small: '/images/cover-images/art-cover-images/cover-f24-2024-dylan-burnside-smith-400w.webp',
            medium: '/images/cover-images/art-cover-images/cover-f24-2024-dylan-burnside-smith-800w.webp',
            large: '/images/cover-images/art-cover-images/cover-f24-2024-dylan-burnside-smith-1200w.webp'
        },
        altText: "Cover art for the F24 series. A textured abstract image where light-painted green textures dominate, revealing suggestions of red and white flowers beneath, blending photographic and painterly qualities.",
        pieces: [
            {
                title: 'No.1, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no1-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no1-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no1-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.1 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.2, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no2-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no2-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no2-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.2 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.3, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no3-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no3-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no3-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.3 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.4, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no4-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no4-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no4-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.4 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.5, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no5-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no5-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no5-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.5 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.6, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no6-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no6-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no6-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.6 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.9, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no9-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no9-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no9-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.9 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.11, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no11-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.11 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.12, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no12-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no12-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no12-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.12 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.13, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no13-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no13-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no13-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.13 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.14, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no14-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no14-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no14-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.14 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.15, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no15-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no15-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no15-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.15 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.19, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no19-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no19-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no19-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.19 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.25, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no25-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no25-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no25-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.25 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            },
            {
                title: 'No.28, F24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/f24/no28-f24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/f24/no28-f24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/f24/no28-f24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.28 from the F24 series. A vibrant and abstract floral photograph, transformed with a heavy, painterly texture that blends color and light into an impressionistic scene.'
            }
        ]
    },

    // ====================
    //  -- WAX ON PAPER --
    // ====================
    {
        slug: 'wax-on-paper',
        title: 'Wax on Paper',
        year: 2024,
        description: 'Wax on Paper explores themes of fate and control. Each piece of paper begins its journey by getting scrunched up. The wax reveals the unique marks created by its fate. The application of wax is also an element of control. The process is fast and chaotic.',
        coverImage: {
            small: '/images/cover-images/art-cover-images/cover-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
            medium: '/images/cover-images/art-cover-images/cover-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
            large: '/images/cover-images/art-cover-images/cover-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
        },
        altText: "Cover art for the 'Wax on Paper' series. A highly textured abstract image that reveals the marks created by the paper's folds. The fold marks have been revealed by using wax crayons in a frottage effect.",
        pieces: [
            {
                title: 'No.1, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no1-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no1-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no1-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.1 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.2, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no2-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no2-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no2-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.2 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.3, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no3-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no3-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no3-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.3 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.4, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no4-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no4-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no4-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.4 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.5, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no5-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no5-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no5-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.5 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.6, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no6-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no6-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no6-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.6 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.7, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no7-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no7-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no7-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.7 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.8, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no8-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no8-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no8-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.8 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.9, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no9-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no9-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no9-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.9 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.10, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no10-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no10-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no10-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.10 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.11, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no11-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no11-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no11-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.11 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.12, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no12-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no12-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no12-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.12 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.13, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no13-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no13-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no13-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.13 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.14, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no14-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no14-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no14-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.14 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            },
            {
                title: 'No.15, Wax On Paper',
                year: 2024,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/wax-on-paper/no15-wax-on-paper-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/wax-on-paper/no15-wax-on-paper-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/wax-on-paper/no15-wax-on-paper-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: "No.15 from the Wax on Paper series. A textured abstract artwork created using a wax frottage technique on scrunched paper. The process reveals the paper's unique network of creases and folds, capturing the interplay between chaos and control."
            }
        ]
    },

    // ========================
    //  -- BREAKING POINTS --
    // ========================
    {
        slug: 'breaking-points',
        title: 'Breaking Points',
        year: 2023,
        description: 'Breaking Points explores the final moments of a waves life. It captures the unique forms created by waves at the peak of breaking.',
        coverImage: {
            small: '/images/cover-images/art-cover-images/cover-breaking-points-2023-dylan-burnside-smith-400w.webp',
            medium: '/images/cover-images/art-cover-images/cover-breaking-points-2023-dylan-burnside-smith-800w.webp',
            large: '/images/cover-images/art-cover-images/cover-breaking-points-2023-dylan-burnside-smith-1200w.webp'
        },
        altText: "Cover art for the 'Breaking Points' series. A high-contrast abstract image capturing the chaotic, textured spray of a wave at its breaking point, interwoven with vibrant shades of blue.",
        pieces: [
            {
                title: 'No.1, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no1-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no1-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no1-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.1 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.2, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no2-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no2-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no2-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.2 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.3, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no3-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no3-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no3-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.3 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.4, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no4-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no4-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no4-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.4 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.5, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no5-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no5-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no5-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.5 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.6, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no6-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no6-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no6-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.6 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.7, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no7-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no7-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no7-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.7 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.8, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no8-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no8-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no8-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.8 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.9, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no9-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no9-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no9-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.9 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.10, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no10-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no10-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no10-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.10 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.11, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no11-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no11-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no11-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.11 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            },
            {
                title: 'No.12, Breaking Points',
                year: 2023,
                dimensions: '59.4 x 42 cm',
                editions: '1 of 5',
                image: {
                    small: '/images/art-images/breaking-points/no12-breaking-points-2023-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/breaking-points/no12-breaking-points-2023-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/breaking-points/no12-breaking-points-2023-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.12 from the Breaking Points series. A high-contrast, abstract photograph capturing the energetic and chaotic moment a wave breaks. The image focuses on the turbulent forms and textures of sea spray, rendered in dramatic tones.'
            }
        ]
    },

    // ============
    //  -- SM24 --
    // ============
    {
        slug: 'sm24',
        title: 'SM24 / Scotland',
        year: 2024,
        description: 'Scotland / March / 2024. When a photo is taken, the light that hits the sensor is now light from the past. This means that a photograph is essentially a document of a memory. If the photograph captures the light truthfully then the photograph is more integral than a memory. Memories alone can become distorted. This investigation explores my photography as reflections of memory rather than representations of reality.',
        coverImage: {
            small: '/images/cover-images/art-cover-images/cover-sm24-2024-dylan-burnside-smith-400w.webp',
            medium: '/images/cover-images/art-cover-images/cover-sm24-2024-dylan-burnside-smith-800w.webp',
            large: '/images/cover-images/art-cover-images/cover-sm24-2024-dylan-burnside-smith-1200w.webp'
        },
        altText: "Cover art for the 'SM24 / Scotland' series. An abstract photograph of a stone wall leading towards hazy, dark trees under a blue sky, manipulated to appear soft and distorted, exploring photography as a reflection of memory over reality.",
        pieces: [
            {
                title: 'No.1, SM24',
                year: 2024,
                dimensions: '59.4 x 84.1 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no1-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no1-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no1-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.1 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.2, SM24',
                year: 2024,
                dimensions: '84.1 x 59.4 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no2-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no2-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no2-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.2 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.3, SM24',
                year: 2024,
                dimensions: '84.1 x 59.4 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no3-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no3-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no3-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.3 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.4, SM24',
                year: 2024,
                dimensions: '84.1 x 59.4 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no4-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no4-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no4-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.4 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.5, SM24',
                year: 2024,
                dimensions: '84.1 x 59.4 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no5-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no5-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no5-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.5 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.6, SM24',
                year: 2024,
                dimensions: '84.1 x 59.4 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no6-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no6-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no6-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.6 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.7, SM24',
                year: 2024,
                dimensions: '59.4 x 84.1 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no7-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no7-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no7-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.7 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.8, SM24',
                year: 2024,
                dimensions: '59.4 x 84.1 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no8-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no8-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no8-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.8 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.9, SM24',
                year: 2024,
                dimensions: '59.4 x 84.1 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no9-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no9-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no9-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.9 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.10, SM24',
                year: 2024,
                dimensions: '59.4 x 84.1 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no10-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no10-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no10-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.10 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            },
            {
                title: 'No.11, SM24',
                year: 2024,
                dimensions: '84.1 x 59.4 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/sm24/no11-sm24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/sm24/no11-sm24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/sm24/no11-sm24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.11 from the SM24 series. An impressionistic photograph of the Scottish landscape, with a soft, painterly blur to evoke a distant memory.'
            }
        ]
    },

    // ================
    //  -- 06OCT24 --
    // ================
    {
        slug: '06oct24',
        title: '06OCT24',
        year: 2024,
        description: '06 / October / 2024. Part of an investigation, exploring ways to make my photography have a painterly feel during the date of the 6th of October, 2024. From the experiment, three photographs stood out to me so I turned them into a triptych.',
        coverImage: {
            small: '/images/cover-images/art-cover-images/cover-06oct24-2024-dylan-burnside-smith-400w.webp',
            medium: '/images/cover-images/art-cover-images/cover-06oct24-2024-dylan-burnside-smith-800w.webp',
            large: '/images/cover-images/art-cover-images/cover-06oct24-2024-dylan-burnside-smith-1200w.webp'
        },
        altText: "Cover art for the '06OCT24' series. A vibrant, impressionistic photograph of a flower field, where a painterly blur blends the greens, oranges, and purples into an abstract, dream-like canvas as part of a triptych.",
        pieces: [
            {
                title: 'No.1, 06OCT24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/06oct24/no1-06oct24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/06oct24/no1-06oct24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/06oct24/no1-06oct24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.1 from the 06OCT24 triptych. An impressionistic and dreamlike photograph of a natural scene, transformed with a soft, painterly texture. The image blends color, light, and motion to create a vibrant and ethereal atmosphere.'
            },
            {
                title: 'No.2, 06OCT24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/06oct24/no2-06oct24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/06oct24/no2-06oct24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/06oct24/no2-06oct24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.2 from the 06OCT24 triptych. An impressionistic and dreamlike photograph of a natural scene, transformed with a soft, painterly texture. The image blends color, light, and motion to create a vibrant and ethereal atmosphere.'
            },
            {
                title: 'No.3, 06OCT24',
                year: 2024,
                dimensions: '48.7 x 70.5 cm',
                editions: '1 of 3',
                image: {
                    small: '/images/art-images/06oct24/no3-06oct24-2024-dylan-burnside-smith-400w.webp',
                    medium: '/images/art-images/06oct24/no3-06oct24-2024-dylan-burnside-smith-800w.webp',
                    large: '/images/art-images/06oct24/no3-06oct24-2024-dylan-burnside-smith-1200w.webp'
                },
                altText: 'No.3 from the 06OCT24 triptych. An impressionistic and dreamlike photograph of a natural scene, transformed with a soft, painterly texture. The image blends color, light, and motion to create a vibrant and ethereal atmosphere.'
            }
        ]
    },
];