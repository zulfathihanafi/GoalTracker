import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import Head from 'next/head'
import { lightTheme } from '../components/Theme'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []) ;
  return (
    <div style={{ 'background-color': lightTheme.background }}>
      <Head>
        <title>Goal Progress Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>

  )
}

export default MyApp

