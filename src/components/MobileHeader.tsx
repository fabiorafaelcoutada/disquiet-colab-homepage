'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { mainNavItems } from '@/config/navigation';
import { NavLink } from '@/config/navigation-types';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

// MobileMenuLink component (unchanged)
function MobileMenuLink({ item, onClick }: { item: NavLink, onClick: () => void }) {
    const linkProps = item.isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};

    return (
        <Link
            href={item.href}
            {...linkProps}
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            onClick={onClick}
        >
            {item.label}
        </Link>
    );
}

export function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const closeMenu = () => {
        setIsOpen(false);
        setOpenSubMenu(null);
    };

    const toggleSubMenu = (label: string) => {
        setOpenSubMenu(openSubMenu === label ? null : label);
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md relative z-20">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/logo.png" alt="Disquiet Colab Logo" width={150} height={150} priority
                            className="block dark:hidden"
                        />
                        <Image
                            src="/logo-light.png" alt="Disquiet Colab Logo" width={150} height={150} priority
                            className="hidden dark:block"
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Vertical Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">

                        {/* Main Nav Items (The primary purpose of the menu) */}
                        {mainNavItems.map((item) => {

                            // Case 1: Simple link
                            if (item.href) {
                                return <MobileMenuLink key={item.label} item={item as NavLink} onClick={closeMenu} />;
                            }

                            // Case 2: Dropdown/Collapsible button
                            if (item.children) {
                                const isSubMenuOpen = openSubMenu === item.label;
                                return (
                                    <div key={item.label}>
                                        {/* The button to open the sub-menu */}
                                        <button
                                            onClick={() => toggleSubMenu(item.label)}
                                            className="flex items-center justify-between w-full font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {item.label}
                                            <HiChevronDown
                                                className={`h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        {/* Conditionally render the sub-menu */}
                                        {isSubMenuOpen && (
                                            <div className="flex flex-col space-y-2 pl-4 pt-2">
                                                {item.children.map((child) => (
                                                    <MobileMenuLink key={child.href} item={child} onClick={closeMenu} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return null;
                        })}

                        {/* ❌ REMOVED: The Separator and the mapping of rightNavItems
                           are gone, as requested.
                        */}
                    </div>
                )}
            </nav>
        </header>
    );
}
