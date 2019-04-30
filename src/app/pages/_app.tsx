import App, { Container } from 'next/app'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'unstated-typescript'
import MUI from 'next-mui'
import AppContainer from '../containers/AppContainer'
import Shell from '../components/Shell'
import Layout from '../components/Layout'

const appContainer  = new AppContainer().init()

// TODO:
//   - custom MUI theme

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
        <Provider inject={[appContainer]}>
          <MUI>
            <SnackbarProvider 
              maxSnack={1}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              preventDuplicate
            >
              <Shell>
                <Layout>
                  <Component {...pageProps}/>
                </Layout>
              </Shell>
            </SnackbarProvider>
          </MUI>
        </Provider>
      </Container>
    )
  }
}
