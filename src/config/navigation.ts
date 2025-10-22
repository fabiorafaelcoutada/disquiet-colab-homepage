// This file will store all our navigation data
import { NavItem } from './navigation-types'; // <-- 1. Import the types

export type NavLink = {
    label: string;
    href: string;
};

/**
 * This is the main navigation that will be rendered
 * in the header. To add/remove/change links,
 * you ONLY need to edit this array.
 */
export const mainNavItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'What We Do',
        children: [
            { label: 'Technologies', href: '/whatwedo/technologies' },
            { label: 'Industries We Serve', href: '/whatwedo/industries' },
            // To add more, just add a new object here:
            // { label: 'Our Services', href: '/whatwedo/services' },
        ],
    },
    { label: 'Team', href: '/team' },
    { label: 'Events', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' },
];
/**
 * These are the links for the right side of the desktop header
 * and the bottom of the mobile menu.
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