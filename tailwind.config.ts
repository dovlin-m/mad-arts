import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './content/**/*.md',
    './pages/**/*.vue',
    './app.{js,ts,vue}',
  ],
  theme: {
    screens: {
      sm: '768px',
      lg: '1264px',
    },
    container: {
      center: true,
      screens: {
        lg: '1264px',
      },
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    extend: {
      colors: {
        'primary': '#241a2a',
      },
      fontFamily: {
        'exo': '"Exo", sans-serif',
      },

    },
  },
  corePlugins: {
    preflight: false,
  },
};
