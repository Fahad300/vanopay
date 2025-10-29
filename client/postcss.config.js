/**
 * PostCSS configuration for Tailwind CSS v4
 * Tailwind v4 requires @tailwindcss/postcss plugin instead of tailwindcss
 * Using ES module syntax to match Next.js 16 App Router
 */
export default {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {},
    },
};

