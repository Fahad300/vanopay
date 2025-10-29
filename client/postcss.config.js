/**
 * PostCSS configuration for Tailwind CSS v4
 * Tailwind v4 requires @tailwindcss/postcss plugin instead of tailwindcss
 * Using CommonJS to avoid module type warnings
 */
module.exports = {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {},
    },
};
