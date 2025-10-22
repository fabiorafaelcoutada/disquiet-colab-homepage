export type NavLink = {
    label: string;
    href: string;
    isExternal?: boolean;
};

export type NavItem = {
    label: string;
    href?: string;
    isExternal?: boolean;
    children?: NavLink[];
};