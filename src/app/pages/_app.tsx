import MUI from 'next-mui'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'unstated-typescript'
import Layout from '../components/Layout'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>FWTA</title>
        </Head>
        <MUI>
          <Provider>
            <Layout>
              <Component {...pageProps}/>
            </Layout>
          </Provider>
        </MUI>
      </Container>
    )
  }
}
