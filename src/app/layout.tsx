import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from '@/components/CookieConsentBanner';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

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
        <html lang="en" suppressHydrationWarning>
        <head>
            <title>{metadata.title as string}</title>
            <meta name="description" content={metadata.description as string} />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header />
        <main>
            {children}
        </main>
        <Footer />

        <CookieConsentBanner />

        {/* 2. INTEGRATE THE SCROLL BUTTON */}
        <ScrollToTopButton />
        </body>
        </html>
    );
}