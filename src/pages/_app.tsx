import '@/styles/generic/_normalize.css'
import '@/styles/generic/_index.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
