import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app/**/*.{vue,js,ts}', './components/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#090909',
        bone: '#f0efe9',
        acid: '#c7ff18',
        smoke: '#a5a59f'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace']
      }
    }
  }
}
