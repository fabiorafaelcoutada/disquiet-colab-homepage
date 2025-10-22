// This file will store all our navigation data

export type NavLink = {
    label: string;
    href: string;
};

export type NavItem = {
    label: string;
    href?: string; // Use this if it's a direct link
    children?: NavLink[]; // Use this if it's a dropdown
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