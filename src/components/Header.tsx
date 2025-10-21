'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

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
            <div className="relative" onMouseEnter={() => setAboutUsOpen(true)} onMouseLeave={() => setAboutUsOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2">About Us</button>
              {aboutUsOpen && (
                <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg">
                  <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
                  <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Team</Link>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setWhatWeDoOpen(true)} onMouseLeave={() => setWhatWeDoOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2">What We Do</button>
              {whatWeDoOpen && (
                <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg">
                  {/* Dropdown content goes here */}
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2">Events</button>
              {eventsOpen && (
                <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg">
                  {/* Dropdown content goes here */}
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setBlogOpen(true)} onMouseLeave={() => setBlogOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2">Blog</button>
              {blogOpen && (
                <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg">
                  {/* Dropdown content goes here */}
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setNewsOpen(true)} onMouseLeave={() => setNewsOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2">News</button>
              {newsOpen && (
                <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg">
                  {/* Dropdown content goes here */}
                </div>
              )}
            </div>
          </div>

          {/* Right Section: Social and Company Links */}
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/company/disquietcolab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <svg className="h-6 w-6 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/disquiet-colab" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium">GitHub</a>
          </div>
        </div>
      </nav>
    </header>
  );
}