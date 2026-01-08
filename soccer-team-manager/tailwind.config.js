/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Custom color palette for soccer theme
      colors: {
        'soccer': {
          'primary': '#2E7D32', // Green for soccer field
          'secondary': '#FFA726', // Orange for energy
          'accent': '#1976D2', // Blue for trust
          'field': '#4CAF50', // Grass green
          'ball': '#FFFFFF', // White
          'warning': '#FF5722', // Red for warnings
          'success': '#4CAF50', // Success green
          'info': '#2196F3', // Info blue
          'light': '#F5F5F5', // Light gray
          'dark': '#212121', // Dark gray
        },
        // Extended Material Design color palette
        'material': {
          'primary': '#1976D2',
          'primary-light': '#42A5F5',
          'primary-dark': '#1565C0',
          'secondary': '#FFA726',
          'secondary-light': '#FFB74D',
          'secondary-dark': '#F57C00',
          'surface': '#FFFFFF',
          'background': '#FAFAFA',
          'error': '#F44336',
          'on-primary': '#FFFFFF',
          'on-secondary': '#000000',
          'on-surface': '#000000',
          'on-background': '#000000',
          'on-error': '#FFFFFF',
        }
      },
      // Custom spacing scale that complements Material Design
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
        'xs': '0.5rem',   // 8px
        'sm': '0.75rem',  // 12px
        'md': '1rem',     // 16px
        'lg': '1.5rem',   // 24px
        'xl': '2rem',     // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
      },
      // Custom typography scale
      fontFamily: {
        'soccer': ['Roboto', 'Helvetica Neue', 'sans-serif'],
        'display': ['Roboto', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],    // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1' }],          // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
      },
      // Responsive breakpoints to match Angular Material
      screens: {
        'xs': '600px',    // Extra small devices
        'sm': '960px',    // Small devices
        'md': '1280px',   // Medium devices
        'lg': '1920px',   // Large devices
        'xl': '2560px',   // Extra large devices
      },
      // Custom shadows for depth
      boxShadow: {
        'material-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'material-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'material-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'material-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'material-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      },
      // Custom border radius
      borderRadius: {
        'material': '4px',
        'material-lg': '8px',
        'material-xl': '12px',
      },
      // Animation and transitions
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      // Z-index scale
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      }
    },
  },
  plugins: [],
  // Safelist important classes that might be used dynamically
  safelist: [
    'bg-soccer-primary',
    'bg-soccer-secondary',
    'bg-soccer-field',
    'text-soccer-primary',
    'text-soccer-secondary',
    'border-soccer-primary',
    'shadow-material-1',
    'shadow-material-2',
    'shadow-material-3',
  ]
}
