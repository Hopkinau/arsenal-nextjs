import Layout from '@/components/layout'
import '@/styles/scss/main.scss'
import { Fragment } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <Fragment>
    <Head>
      <link rel="shortcut icon" href="image/favicon.ico" type="image/x-icon" />
    </Head>
    <Layout>
  <Component {...pageProps} />
      </Layout> 
       </Fragment>
  )
}
