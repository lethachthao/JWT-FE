import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'blue-50': '#17649a',
        'blue-100': '#1178f2',
        'red-50': '#dc2535',
        'green-50': '#11985e',
        'green-100': '#6abd45',
        'blue-200': '#06b6d4',
      },
    },
  },
  plugins: [
    lineClamp, // Sử dụng import thay vì require
  ],
};
export default config;
