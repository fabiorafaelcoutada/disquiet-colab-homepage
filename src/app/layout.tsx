import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// NOTE: Assuming Header and Footer paths are correct relative to layout.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsentBanner from '@/components/CookieConsentBanner'; // Imported banner

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Disquiet CoLab, your partner in Innovation",
    description: "Disquiet CoLab Official Website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header />

        <main>
            {children}
        </main>

        <Footer />

        {/* === INTEGRATED COOKIE BANNER === */}
        {/* Since this is a Client Component, placing it directly here works.
           It will hydrate separately from the surrounding Server Components. */}
        <CookieConsentBanner />
        {/* ================================ */}
        </body>
        </html>
    );
}