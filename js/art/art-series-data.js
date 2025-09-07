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

    {
        slug: 'f24',
        title: 'F24',
        year: 2024,
        coverImage: '/images/cover-images/art-cover-images/cover-f24-2024-dylan-burnside-smith.webp',
        altText: "Cover art for the F24 series. A textured abstract image where light-painted green textures dominate, revealing suggestions of red and white flowers beneath, blending photographic and painterly qualities."
    },
    {
        slug: 'wax-on-paper',
        title: 'Wax on Paper',
        year: 2024,
        coverImage: '/images/cover-images/art-cover-images/cover-wax-on-paper-2024-dylan-burnside-smith.webp',
        altText: "Cover art for the 'Wax on Paper' series. A highly textured abstract image that reveals the marks created by the paper's folds. The fold marks have been revealed by using wax crayons in a frottage effect."
    },
    {
        slug: 'breaking-points',
        title: 'Breaking Points',
        year: 2023,
        coverImage: '/images/cover-images/art-cover-images/cover-breaking-points-2023-dylan-burnside-smith.webp',
        altText: "Cover art for the 'Breaking Points' series. A high-contrast abstract image capturing the chaotic, textured spray of a wave at its breaking point, interwoven with vibrant shades of blue."
    },
    {
        slug: 'sm24',
        title: 'SM24 / Scotland',
        year: 2024,
        coverImage: '/images/cover-images/art-cover-images/cover-sm24-2024-dylan-burnside-smith.webp',
        altText: "Cover art for the 'SM24 / Scotland' series. An abstract photograph of a stone wall leading towards hazy, dark trees under a blue sky, manipulated to appear soft and distorted, exploring photography as a reflection of memory over reality."
    },
    {
        slug: '06oct24',
        title: '06OCT24',
        year: 2024,
        coverImage: '/images/cover-images/art-cover-images/cover-06oct24-2024-dylan-burnside-smith.webp',
        altText: "Cover art for the '06OCT24' series. A vibrant, impressionistic photograph of a flower field, where a painterly blur blends the greens, oranges, and purples into an abstract, dream-like canvas as part of a triptych."
    }
];