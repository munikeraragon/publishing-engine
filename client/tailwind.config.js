const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './src/**/*.{ts,tsx,js,jsx}'
        //'./src/pages/**/*.{js,ts,jsx,tsx}',
        //'./src/modules/**/*.{js,ts,jsx,tsx}',
        //'./src/ui/**/*.{js,ts,jsx,tsx}',
        //'./src/stories/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cyan: colors.cyan,
                teal: colors.teal
            },
            height: (theme) => ({
                'screen/2': 'calc(100% - 64)'
            })
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            primary: 'rgb(10, 10, 10) 4px 4px 0px 0px',
            magical: '0 .125rem .625rem rgba(90,97,105,.12)'
        }
    },
    variants: {
        extend: {}
    },
    presets: [require('tailwindcss/colors')],
    plugins: [require('@tailwindcss/forms')]
};
