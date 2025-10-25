import Link from 'next/link';
// Assuming these imports are correct for your configuration
import { mainNavItems, rightNavItems } from '../config/navigation';
import { NavItem } from '../config/navigation-types';
import { HiOutlineMail } from 'react-icons/hi'; // Icon for Contact

// Helper function to get social icon SVGs (reused logic from DesktopHeader/Footer)
const getSocialIcon = (label: string) => {
    const commonClasses = "h-6 w-6";
    switch (label) {
        case 'LinkedIn':
            return (<svg className={commonClasses} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>);
        case 'GitHub':
            return (<svg className={commonClasses} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.677-.233.677-.467 0-.233-.007-.867-.011-1.7V19.4c-2.767.6-3.34-.9-3.34-.9-.454-1.156-1.11-1.46-1.11-1.46-.907-.62.068-.606.068-.606 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.086 2.91.83.09-.645.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.682-.104-.253-.448-1.27.097-2.646 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.91-1.295 2.75-1.025 2.75-1.025.546 1.376.202 2.393.097 2.646.64.698 1.03 1.592 1.03 2.682 0 3.84-2.338 4.687-4.562 4.935.36.307.675.915.675 1.846 0 1.337-.012 2.419-.012 2.747 0 .234.207.557.682.467C21.137 20.2 24 16.445 24 12.017 24 6.484 19.523 2 14 2h-2z" clipRule="evenodd"/></svg>);
        default:
            return null;
    }
};

export function MobileFooter() {
    const primaryLinks = mainNavItems.filter(item => !item.children);
    const whatWeDoLinks = mainNavItems.find(item => item.label === 'What We Do')?.children || [];
    const socialLinks = rightNavItems.filter(item => item.isExternal);
    const contactLink = rightNavItems.find(item => item.href === '/contact');

    return (
        // Only displayed on mobile (md:hidden). Uses the same dark colors.
        <footer className="bg-gray-800 dark:bg-black text-gray-300 dark:text-gray-400 p-6 md:hidden">
            <div className="container mx-auto">

                {/* SECTION 1: Company Info and Social Links */}
                <div className="border-b border-gray-700 pb-6 mb-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">Disquiet CoLab</h3>
                    <p className="text-sm">Driving innovation in embedded systems, AI, and secure connectivity.</p>

                    <div className="flex space-x-4 pt-2">
                        {socialLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-200"
                                aria-label={link.label}
                            >
                                {getSocialIcon(link.label)}
                            </a>
                        ))}
                        {/* Contact Email/Link */}
                        {contactLink && (
                            <Link href={contactLink.href || '#'} className="text-gray-400 hover:text-white transition duration-200 flex items-center space-x-1">
                                <HiOutlineMail className="h-6 w-6" />
                                <span className="sr-only">Contact</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* SECTION 2: Navigation Links (Stacked Lists) */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">

                    {/* COLUMN A: Company / Main */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Company</h4>
                        <ul className="space-y-3">
                            {primaryLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href || '#'} className="text-sm hover:text-white transition duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN B: Expertise / Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Expertise</h4>
                        <ul className="space-y-3">
                            {whatWeDoLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-white transition duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR: Copyright and Credit */}
                <div className="text-center text-xs pt-8 mt-6 border-t border-gray-700">
                    <p>&copy; {new Date().getFullYear()} Disquiet CoLab. All rights reserved.</p>
                    <p className="mt-2 text-gray-500">Crafted by <Link href="/team/fabio-cunha" className="text-blue-400 hover:underline">Fábio Cunha</Link></p>
                </div>

            </div>
        </footer>
    );
}
