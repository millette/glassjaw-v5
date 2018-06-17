'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Habits from '../shared/components/habits'

const Punch = (props) => <Fragment>
  <Header title='Punch' />
  <section className='section'>
    <div className='container is-fluid'>
      {props.auth.name
        ? <Fragment>
          <div className='content'>
            <div className='columns'>
              <div className='column'>
                <Habits auth={props.auth} />
              </div>
              <div className='column is-narrow'>
                <h2>Asrtola</h2>
                <pre>{JSON.stringify(props.auth, null, '  ')}</pre>
              </div>
            </div>
          </div>
        </Fragment>
        : <p>Vous devez être connecté.</p>}
    </div>
  </section>
</Fragment>

const mapState = state => ({
  auth: state.auth
})

export default withRematch(initStore, mapState)(Punch)
