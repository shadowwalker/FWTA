import MUI from 'next-mui'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'unstated-typescript'
import Layout from '../components/Layout'
import { SnackbarProvider } from 'notistack'

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
          <SnackbarProvider 
            maxSnack={1}
            preventDuplicate
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transitionDuration={{ 
              exit: 200,
              enter: 200 
            }}
          >
            <Provider>
              <Layout>
                <Component {...pageProps}/>
              </Layout>
            </Provider>
          </SnackbarProvider>
        </MUI>
      </Container>
    )
  }
}
