import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration
 * Configured to work alongside Ant Design without conflicts
 * Preflight is disabled to prevent CSS reset conflicts with Ant Design
 */
const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    corePlugins: {
        // Disable preflight to avoid conflicts with Ant Design's base styles
        preflight: false,
    },
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;

