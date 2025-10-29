import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 configuration
 * Configured to work alongside Ant Design without conflicts
 * Note: Tailwind v4 handles preflight differently - it's controlled via CSS imports
 * The preflight is disabled by importing only components and utilities layers
 */
const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;

