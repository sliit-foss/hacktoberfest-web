import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1200 })
    if(process.browser){
      window.addEventListener('load', Aos.refresh)
    }
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
