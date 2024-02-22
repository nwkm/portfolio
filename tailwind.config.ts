import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                navy: '#0a192f',
                lightNavy: '#172a45',
                slate: '#8892b0',
                white: '#e6f1ff',
                green: '#64ffda',
            },
            fontFamily: {
                'orbitron-medium': 'var(--font-orbitron)',
                'oxanium-medium': 'var(--font-oxanium)',
            },
        },
    },
    plugins: [],
};
export default config;
