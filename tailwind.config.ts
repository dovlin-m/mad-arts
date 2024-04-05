import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './content/**/*.{md,json}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.{js,ts,vue}',
  ],
  theme: {
    screens: {
      sm: '768px',
      lg: '1220px',
    },
    container: {
      center: true,
      screens: {
        lg: '1220px',
      },
      padding: {
        DEFAULT: '12px',
        sm: '24px',
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
