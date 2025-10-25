import { NavItem, NavLink } from './navigation-types'; // <-- Ensure this is correct

// NOTE: I am assuming your definitions for NavItem and NavLink are now
// in a separate file (navigation-types.ts) as per the project standard.

/**
 * This is the main navigation.
 */
export const mainNavItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'What We Do',
        children: [
            { label: 'Technologies', href: '/whatwedo/technologies' },
            { label: 'Industries We Serve', href: '/whatwedo/industries' },
            { label: 'Our Services', href: '/whatwedo/services' },
        ],
    },
    { label: 'Team', href: '/team' },
    { label: 'Events', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' },
];

/**
 * These are the links for the right side header/mobile footer social section.
 */
export const rightNavItems: NavItem[] = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/disquietcolab',
        isExternal: true
    },
    {
        label: 'GitHub',
        href: 'https://github.com/disquiet-colab',
        isExternal: true
    },
    { label: 'Contact', href: '/contact' },
];

/**
 * NEW: Links for the Footer's Resources/Legal column.
 */
export const resourceLinks: NavLink[] = [
    // Note: We use NavLink[] here because these are simple leaf links.
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
    // Add more legal/info pages here easily!
];