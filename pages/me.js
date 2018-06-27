'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Me = (props) => {
  return (
    <Fragment>
      <Header title='Profile' />
      <section className='section'>
        <div className='container'>
          <p>Salut {props.auth.name}.</p>
          <pre>{JSON.stringify(props.punchables, null, '  ')}</pre>
          <pre>{JSON.stringify(props.punches, null, '  ')}</pre>
        </div>
      </section>
    </Fragment>
  )
}

const mapState = state => ({
  auth: state.auth,
  punchables: state.punchables,
  punches: state.punches
})

export default withRematch(initStore, mapState)(Me)
