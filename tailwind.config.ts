import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors:{
    //   primary: '#8D0F9E',
    //   secondary: '#d9d9d9',
    //   white: '#ffffff',
    //   black: '#000000',
      

    // },

    maxWidth:{
      container: '1520px',
      contentContainer: '1280px',
    },

    screens:{
       xs: "320px",
       sm: "375px",
       sml: "500px",
       md: "667px",
       mdl: "768px",
       lg: "960px",
       lgl: "1024px", 
       xl: "1280px",
       "2xl": "1400px",
    },

    boxShadow:{
      bannerShadow: "0 1px 2px 1px #00000026",
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
