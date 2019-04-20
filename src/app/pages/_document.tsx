import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { MuiStyles } from 'next-mui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage()

    return {
      ...page,
      styles: <MuiStyles />
    }
  }

  render() {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content='FWTA' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='FWTA' />
          <meta name='description' content='FWTA is a project embraces the vision to create cross-platform mobile first applications using morden web technologies and best practices.' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#FFFFFF' />
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
          
          <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/static/icons/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
     
          <meta name='twitter:card' content='FWTA' />
          <meta name='twitter:site' content='@DavidWShadow' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='FWTA' />
          <meta property='og:image' content='/static/icons/apple-touch-icon.png' />
          <style>{
            `
            html, body, #__next {
              height: 100%;
              overflow-x: hidden;
            }
            #__next {
              max-width: 600px;
              margin: 0 auto;
            }
            `
          }</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
