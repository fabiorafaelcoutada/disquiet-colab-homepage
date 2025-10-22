'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Import our new navigation config
import { mainNavItems } from '@/config/navigation';

export default function Header() {
    // This one state hook will manage ALL dropdowns
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Left Section: Logo and Main Nav */}
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Disquiet Colab Logo"
                                width={150}
                                height={150}
                                priority
                            />
                        </Link>

                        {/* === DYNAMIC NAVIGATION === */}
                        {mainNavItems.map((item) => {

                            // Case 1: It's a simple link (like "Home" or "Team")
                            if (item.href) {
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-900 px-3 py-2"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            // Case 2: It's a dropdown (like "What We Do")
                            if (item.children) {
                                return (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => setOpenDropdown(item.label)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <button className="text-gray-600 hover:text-gray-900 px-3 py-2">
                                            {item.label}
                                        </button>
                                        {openDropdown === item.label && (
                                            <div className="absolute z-10 w-56 bg-white rounded-md shadow-lg py-1">
                                                {item.children.map((childLink) => (
                                                    <Link
                                                        key={childLink.href}
                                                        href={childLink.href}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {childLink.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return null; // Should not happen
                        })}
                        {/* === END DYNAMIC NAVIGATION === */}

                    </div>

                    {/* Right Section: Social and Company Links (Unchanged) */}
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com/company/disquietcolab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <svg className="h-6 w-6 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/disquiet-colab" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg className="h-6 w-6 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.677-.233.677-.467 0-.233-.007-.867-.011-1.7V19.4c-2.767.6-3.34-.9-3.34-.9-.454-1.156-1.11-1.46-1.11-1.46-.907-.62.068-.606.068-.606 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.086 2.91.83.09-.645.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.682-.104-.253-.448-1.27.097-2.646 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.91-1.295 2.75-1.025 2.75-1.025.546 1.376.202 2.393.097 2.646.64.698 1.03 1.592 1.03 2.682 0 3.84-2.338 4.687-4.562 4.935.36.307.675.915.675 1.846 0 1.337-.012 2.419-.012 2.747 0 .234.207.557.682.467C21.137 20.2 24 16.445 24 12.017 24 6.484 19.523 2 14 2h-2z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}