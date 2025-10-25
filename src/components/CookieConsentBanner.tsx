'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// Define the precise type structure for the dataLayer object
type DataLayerEvent = {
    [key: string]: any; // Use a broad Record type for event properties
    event?: string;
    analytics_storage?: 'granted' | 'denied';
    ad_storage?: 'granted' | 'denied';
};

// --- FIX 1: Use the custom type to remove 'any' from the global declaration ---
declare global {
    interface Window {
        dataLayer: DataLayerEvent[];
    }
}
// --------------------------------------------------------------------------

export default function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    // FIX 2: Use the custom type for the function parameter
    const pushToDataLayer = (data: DataLayerEvent) => {
        // Use standard window check
        if (typeof window !== 'undefined' && window['dataLayer']) {
            window['dataLayer'].push(data);
        }
    };

    // Helper function to push the consent status to the data layer
    const applyConsentStatus = useCallback((choice: 'accepted' | 'declined') => {
        const consentState = choice === 'accepted' ? 'granted' : 'denied';

        pushToDataLayer({
            'analytics_storage': consentState,
            'ad_storage': consentState,
        });

        if (choice === 'accepted') {
            pushToDataLayer({ 'event': 'cookie_consent_granted' });
        }
    }, []);


    // --- EFFECT 1: Check Local Storage and Apply Status (Unchanged) ---
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            setIsVisible(true);
        } else {
            applyConsentStatus(consent as 'accepted' | 'declined');
        }
    }, [applyConsentStatus]);


    // --- User Interaction Handler (Unchanged) ---
    const handleConsent = (choice: 'accepted' | 'declined') => {
        localStorage.setItem('cookieConsent', choice);
        setIsVisible(false);
        applyConsentStatus(choice);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-gray-900 dark:bg-gray-700 text-white p-4 shadow-2xl">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                <p className="text-sm md:text-base">
                    We use cookies to bring you a personalized experience.
                    <br className="block md:hidden"/>
                    By clicking “Accept,” you agree to our use of cookies as described in our{' '}
                    <Link href="/legal/cookie-policy" className="text-blue-400 hover:underline font-medium">
                        Cookie Policy
                    </Link>
                </p>
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