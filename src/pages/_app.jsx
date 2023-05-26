import Footer from '@/components/Footer'
import { useAppStore } from '@/store/store'
import '@/styles/globals.css'
import { BASE_URL } from '@/utils/constants'
import axios from 'axios'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }) {
  const { setItems, items } = useAppStore()

  useEffect(() => {
    !items.length && setItems(pageProps.data)
  }, [pageProps.data, items, setItems])

  return <div className={`flex flex-col h-screen justify-between items-center p-8 ${inter.className}`}>
    <Component {...pageProps} />
    <Footer />
  </div>
}

App.getInitialProps = async ({ Component }) => {
  const pageProps = Component.getInitialProps
  const { data } = await axios.get(`${BASE_URL}/api/movies`)
  return { pageProps: { ...pageProps, data } }
}

export default App