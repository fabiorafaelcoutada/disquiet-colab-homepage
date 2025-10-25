'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsentBanner() {
    // State to manage whether the banner is visible
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 1. Check if the user has already made a choice
        const consent = localStorage.getItem('cookieConsent');

        // If consent is NOT found, show the banner
        if (consent === null) {
            setIsVisible(true);
        }
    }, []);

    // Function to handle the user's choice
    const handleConsent = (choice: 'accepted' | 'declined') => {
        // 2. Save the user's choice to local storage
        localStorage.setItem('cookieConsent', choice);

        // 3. Hide the banner
        setIsVisible(false);

        // Optionally, if 'accepted', you would initialize tracking scripts here:
        // if (choice === 'accepted') {
        //   console.log("Cookies accepted. Initializing Google Analytics...");
        //   // window.dataLayer.push({ 'event': 'cookie_consent_granted' });
        // }
    };

    if (!isVisible) {
        return null;
    }

    return (
        // Fixed position at the bottom for maximum visibility
        <div className="fixed inset-x-0 bottom-0 z-50 bg-gray-900 dark:bg-gray-700 text-white p-4 shadow-2xl">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">

                {/* Text and Link */}
                <p className="text-sm md:text-base">
                    We use cookies to bring you a personalized experience.
                    <br className="block md:hidden"/>
                    By clicking “Accept,” you agree to our use of cookies as described in our{' '}
                    <Link href="/legal/cookie-policy" className="text-blue-400 hover:underline font-medium">
                        Cookie Policy
                    </Link>
                </p>

                {/* Buttons */}
                <div className="flex space-x-3 flex-shrink-0">
                    <button
                        onClick={() => handleConsent('declined')}
                        className="px-4 py-2 text-sm border border-gray-500 rounded-lg hover:bg-gray-700 transition duration-150"
                    >
                        Decline
                    </button>
                    <button
                        onClick={() => handleConsent('accepted')}
                        className="px-4 py-2 text-sm font-semibold bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition duration-150"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}