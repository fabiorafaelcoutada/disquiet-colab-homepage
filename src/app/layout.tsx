import type { Metadata } from "next";
// NOTE: Assuming your import path for Header/Footer is correct relative to layout.tsx (../components vs @/components)
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from '@/components/CookieConsentBanner';

const GTM_ID = "GTM-MH6VNMPJ";

// FIX: Correcting the Geist_Mono font constructor usage.
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({ // <-- CORRECTED CONSTRUCTOR
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
        <head>
            {/* Title and description handled by Next.js <Head> wrapper if needed, but direct meta tags work too. */}
            <title>{metadata.title as string}</title>
            <meta name="description" content={metadata.description as string} />

            {/* 2. GTM Consent Mode Initialization (High in <head>) */}
            <script
                id="gtm-consent-default"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        
                        // Set consent to 'denied' by default (required for GDPR compliance)
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'analytics_storage': 'denied',
                            'wait_for_update': 500
                        });
                        
                        // Push an event to fire GTM as soon as the consent status is defined
                        dataLayer.push({'event': 'default_consent_set'}); 
                    `,
                }}
            />

            {/* 3. GTM Standard Script (Load GTM) */}
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `,
                }}
            />
        </head>
        <body
            // Applying both font variables via className
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* GTM Noscript Part */}
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{display:'none', visibility:'hidden'}}
            ></iframe>
        </noscript>

        <Header />
        <main>
            {children}
        </main>
        <Footer />

        <CookieConsentBanner />
        </body>
        </html>
    );
}