'use strict'

import App, {Container} from 'next/app'
import React from 'react'

/*
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = getPersistor()

console.log('persistor:', typeof persistor, persistor)
*/

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Component {...pageProps} />
    </Container>
  }
}

export default MyApp

/*
const Root = () => <PersistGate persistor={persistor}>
  <MyApp />
</PersistGate>

export default Root
*/
