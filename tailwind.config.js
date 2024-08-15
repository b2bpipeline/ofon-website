/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
        './node_modules/flowbite/**/*.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'c-black': '#1F2122',
                'c-white': '#FFFFFF',
                'c-orange': '#F25921',
                'c-yellow': '#FBB718',
                'c-brown': '#241E22',
                'c-yellow-light': '#FEEDC5',
            },
            boxShadow: {
                solid: '8px 8px 0 0 rgba(251, 183, 24, 1)',
            },
            animation: {
                'loop-scroll': 'loop-scroll 25s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
        fontFamily: {
            heading: ['Rubik', 'sans-serif'],
            body: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [require('flowbite/plugin')],
};
