'use client';

import React from 'react';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';

export default function ContactPage() {
    // --- Contact Data Hardcoded Internally ---
    const contactData = {
        title: "Get in Touch",
        subtitle: "We're here to help you solve complex embedded systems challenges. Reach out directly using the information below.",
        email: "contact@disquiet-colab.com",
        phone: "+351 XXX XXX XXX",
        address: "Braga, Portugal",
        introCopy: "Our team specializes in complex embedded software, AI acceleration, and deterministic networking (TSN), and we strive to respond to all technical inquiries within one business day."
    };

    return (
        // flex-grow ensures the sticky footer works
        <div className="flex-grow w-full py-16 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* LEFT COLUMN: Main Introductory Copy (Now primary content) */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">

                    {/* Title and Subtitle */}
                    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{contactData.title}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        {contactData.subtitle}
                    </p>

                    {/* Render the introductory copy */}
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold dark:text-white">We're Here to Help</h2>
                        <p>{contactData.introCopy}</p>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Details (Sidebar) */}
                <div className="lg:col-span-1 space-y-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Direct Contact</h2>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                        <HiOutlineMail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                            <a href={`mailto:${contactData.email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                                {contactData.email}
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                        <HiOutlinePhone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                            <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                                {contactData.phone}
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                        <HiOutlineLocationMarker className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-400">{contactData.address}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}