import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(132.67deg, rgba(241, 102, 51, 0.8) -5.44%, rgba(253, 45, 125, 0.8) 101.81%)',
        'border-gradient':
          'linear-gradient(132.67deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.8) -5.44%, rgba(241, 102, 51, 0.8) 26.17%, rgba(253, 45, 125, 0.8) 64.16%, rgba(21, 18, 18, 0.8) 101.18%)',
      },
    },
  },
  plugins: [],
};
export default config;
