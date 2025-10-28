import 'katex/dist/katex.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import React from 'react';

// This layout will wrap all pages within the /blog route segment.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
    // We can use a simple div wrapper if we need to apply blog-specific
    // layout styles (e.g., max-width, padding) using a layout.module.css file.
    // If no specific layout styles are needed yet, a React Fragment <> would also work.
    return (
        <div className="blog-section-wrapper w-full">
            {/* The actual page content (e.g., blog index or blog post) renders here */}
            {children}
        </div>
    );
}