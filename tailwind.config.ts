import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app/**/*.{vue,js,ts}', './components/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#090909',
        bone: '#f0efe9',
        acid: '#00dc82',
        'aws-orange': '#ff9900',
        smoke: '#a5a59f'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace']
      }
    }
  }
}
