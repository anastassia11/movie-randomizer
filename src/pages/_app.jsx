import Footer from '@/components/footer/Footer'
import '@/styles/globals.css'
import { BASE_URL } from '@/utils/constants'
import axios from 'axios'

export default function App({ Component, pageProps }) {
  console.log(pageProps)
  return <div className='flex flex-col h-screen items-center justify-between p-7'>
    <Component {...pageProps} />
    <Footer />
  </div>
}

App.getInitialProps = async ({ Component }) => {
  const pageProps = Component.getInitialProps
  const { data } = await axios.get(`${BASE_URL}/api/movies`)
  return { pageProps: { ...pageProps, data } }
}