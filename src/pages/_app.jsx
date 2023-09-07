import Footer from '@/components/Footer'
import { useAppStore } from '@/store/store'
import "../styles/globals.css"
import "../styles/main.css"
import styles from "../styles/Home.module.css"
import { BASE_URL } from '@/utils/constants'
import axios from 'axios'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }) {
  const { setItems, items = [] } = useAppStore()

  useEffect(() => {
    !items?.length && setItems({ data: pageProps.data })
  }, [pageProps.data, items, setItems])

  return (
    <div className={styles.container}>
      <Head>
        <title>The best movie APP</title>
        <meta name="description" content="Movie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

App.getInitialProps = async ({ Component }) => {
  const pageProps = Component.getInitialProps
  const { data } = await axios.get(`${BASE_URL}/api/movies`)
  return { pageProps: { ...pageProps, data } }
}

export default App