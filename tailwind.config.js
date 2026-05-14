/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        foreground: '#343232',
        muted: '#828282',
        subtle: '#a8a8a8',
        border: '#dddddd',
        brand: '#6277f6',
        'hero-blue': '#006fcf',
        'hero-coral': '#db5a5a',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'hero':    ['70px', { lineHeight: '84px',  letterSpacing: '-1.3px'  }],
        'page-h1': ['52px', { lineHeight: '65px',  letterSpacing: '-1.1px'  }],
        'h2':      ['28px', { lineHeight: '38px',  letterSpacing: '-0.84px' }],
        'h3':      ['22px', { lineHeight: '26px',  letterSpacing: '0'       }],
        'nav':     ['16px', { lineHeight: '1.45'                            }],
        'label':   ['14px', { lineHeight: '19px'                            }],
        'body':    ['16px', { lineHeight: '21px'                            }],
        'logo':    ['18px', { lineHeight: '1.5'                             }],
      },
      borderRadius: {
        'card': '20px',
        'pill': '9999px',
        'tag': '30px',
      },
      boxShadow: {
        'card': '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
      },
      spacing: {
        'page-x': '150px',
        'nav-y': '30px',
      },
    },
  },
  plugins: [],
}
