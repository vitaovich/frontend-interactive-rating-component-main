import '@/styles/globals.css'
import { Overpass } from '@next/font/google'
import type { AppProps } from 'next/app'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${overpass.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
