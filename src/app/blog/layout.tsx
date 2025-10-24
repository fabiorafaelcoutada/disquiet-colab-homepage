import 'katex/dist/katex.min.css';
import React from 'react';

// This layout will wrap all pages within the /blog route segment.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="blog-wrapper">
            {/* We can add a blog-specific header/sidebar here if needed */}

            <main>{children}</main>

            {/* We can add a blog-specific footer here if needed */}
        </div>
    );
}