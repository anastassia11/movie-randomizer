import Footer from '@/components/footer/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className='flex flex-col h-screen items-center justify-between p-7'>
    <Component {...pageProps} />
    <Footer />
  </div>
}
