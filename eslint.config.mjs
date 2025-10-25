import next from 'eslint-config-next'; // Next.js recommended rules
import globals from "globals";

// Use the standard array configuration format
const eslintConfig = [
    // 1. Apply Next.js base configuration
    next,

    // 2. Define global environment settings
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                // Ensure globals like window and document are recognized
            },
        },
        // Ensure all files are processed by default
        files: ["**/*.{js,jsx,ts,tsx}"],
    },

    // 3. TARGETED FIX: Override for CookieConsentBanner
    {
        // Apply this rule ONLY to the file containing the external data layer implementation
        files: ["src/components/CookieConsentBanner.tsx"],
        rules: {
            // CRITICAL FIX: Temporarily disable the strict 'no-explicit-any' rule
            // for this file only, because the 'window.dataLayer' structure requires it.
            "@typescript-eslint/no-explicit-any": "off",

            // Optional: Since you're not using standard next/typescript extension,
            // you might need to manually add other essential rules here if they fail.
        }
    },

    // 4. Ignore patterns
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
            "**/*.config.js", // Ignore config files if necessary
        ],
    },
];

export default eslintConfig;