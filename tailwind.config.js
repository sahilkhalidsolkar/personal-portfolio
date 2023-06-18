/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  // safelist: {
  //   standard: [
  //     'text-2xl',
  //     'text-3xl',
  //     'text-4xl',
  //     'text-5xl',
  //     'text-6xl',
  //     'sm:text-2xl',
  //     'sm:text-3xl',
  //     'sm:text-4xl',
  //     'sm:text-5xl',
  //     'sm:text-6xl',
  //     'md:text-2xl',
  //     'md:text-3xl',
  //     'md:text-4xl',
  //     'md:text-5xl',
  //     'md:text-6xl',
  //     'lg:text-2xl',
  //     'lg:text-3xl',
  //     'lg:text-4xl',
  //     'lg:text-5xl',
  //     'lg:text-6xl',
  //   ],

  // }
}
