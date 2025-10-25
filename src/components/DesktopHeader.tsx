'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// 1. Removed unused import of rightNavItems
import { mainNavItems } from '../config/navigation';
import { NavLink } from '../config/navigation-types';

// NOTE: The RightLink helper component has been removed entirely.

// Export a component, not as default
export function DesktopHeader() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Define a constant for the logo width to use as a spacer for perfect centering
    const LOGO_WIDTH = 150;

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
            <nav className="container mx-auto px-6 py-3">

                {/* Main container: uses flex items-center w-full */}
                <div className="flex items-center w-full">

                    {/* 1. LOGO SECTION (Fixed Left Position) */}
                    <Link href="/">
                        <Image
                            src="/logo.png" alt="Disquiet CoLab Logo" width={LOGO_WIDTH} height={150} priority
                            className="block dark:hidden"
                        />
                        <Image
                            src="/logo-light.png" alt="Disquiet CoLab Logo" width={LOGO_WIDTH} height={150} priority
                            className="hidden dark:block"
                        />
                    </Link>

                    {/* 2. NAVIGATION LINKS (Centered in Remaining Space) */}
                    <div className="flex items-center justify-center flex-grow space-x-4">

                        {/* Primary Navigation Links */}
                        {mainNavItems.map((item) => {
                            if (item.href) {
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }
                            if (item.children) {
                                return (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => setOpenDropdown(item.label)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 font-medium">
                                            {item.label}
                                        </button>
                                        {openDropdown === item.label && (
                                            <div className="absolute z-10 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                                                {item.children.map((childLink) => (
                                                    <Link
                                                        key={childLink.href}
                                                        href={childLink.href}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                        onClick={() => setOpenDropdown(null)}
                                                    >
                                                        {childLink.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>

                    {/* 3. PUSH ELEMENT (Spacer to ensure visual centering) */}
                    {/* This empty div takes up the same width as the logo to balance the layout. */}
                    <div style={{ width: `${LOGO_WIDTH}px`, height: '1px' }}></div>

                </div>
            </nav>
        </header>
    );
}