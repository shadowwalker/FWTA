import MUI from 'next-mui'
import App, { Container } from 'next/app'
import Head from 'next/head'

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
          <Component {...pageProps}/>
        </MUI>
      </Container>
    )
  }
}
