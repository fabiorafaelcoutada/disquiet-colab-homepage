'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// --- FIX: DECLARE GLOBAL VARIABLE FOR TYPESCRIPT ---
// This tells TypeScript that `dataLayer` exists as an array on the global window object.
declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

export default function CookieConsentBanner() {
    // State to manage whether the banner is visible
    const [isVisible, setIsVisible] = useState(false);

    // Helper function to push the consent status to the data layer
    const applyConsentStatus = useCallback((choice: 'accepted' | 'declined') => {
        const consentState = choice === 'accepted' ? 'granted' : 'denied';

        // Check if dataLayer exists (runtime check)
        if (typeof window.dataLayer !== 'undefined') {
            window.dataLayer.push({
                'analytics_storage': consentState,
                'ad_storage': consentState,
            });

            // If granted, send the event signal (useful for GTM triggers)
            if (choice === 'accepted') {
                window.dataLayer.push({ 'event': 'cookie_consent_granted' });
            }
        }
    }, []);


    // --- EFFECT 1: Check Local Storage and Apply Status ---
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');

        if (consent === null) {
            // No choice made yet, show the banner
            setIsVisible(true);
        } else {
            // Choice found. Apply the saved status immediately on page load.
            applyConsentStatus(consent as 'accepted' | 'declined');
        }
    }, [applyConsentStatus]);


    // --- User Interaction Handler ---
    const handleConsent = (choice: 'accepted' | 'declined') => {
        // 1. Save the user's choice to local storage
        localStorage.setItem('cookieConsent', choice);

        // 2. Hide the banner
        setIsVisible(false);

        // 3. Apply status to dataLayer
        applyConsentStatus(choice);
    };

    if (!isVisible) {
        return null;
    }

    return (
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
