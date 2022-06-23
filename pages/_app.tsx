
import '../styles/globals.scss'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href='/utv_logo.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  )
}

export default MyApp

