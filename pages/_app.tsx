
import '../styles/globals.scss'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState<boolean>(false);

     Router.events.on('routeChangeStart', (url) => {
       setLoading(true);
      });

     Router.events.on('routeChangeComplete', (url) => {
       setLoading(false);
     });
    

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href='/favicon.png' />
      </Head>
      <Layout>
        {loading ? (
            <Loading />
          ) : (
            <Component {...pageProps} />
          )}
       
      </Layout>
    </div>
    
  )
}

export default MyApp

