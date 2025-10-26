'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi'; // Icon for the up arrow

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Threshold in pixels to show the button (e.g., 300px down)
    const SCROLL_THRESHOLD = 300;

    // Function to scroll the window to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Function to toggle button visibility based on scroll position
    const toggleVisibility = useCallback(() => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    // Set up scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [toggleVisibility]);

    return (
        <button
            onClick={scrollToTop}
            // Uses fixed positioning and only appears when isVisible is true
            className={`
                fixed 
                bottom-8 right-8 
                p-3 rounded-full 
                bg-blue-600 text-white 
                shadow-xl 
                transition-opacity duration-300
                z-40
                ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
            aria-label="Scroll to top"
        >
            <HiOutlineArrowUp className="h-6 w-6" />
        </button>
    );
}
