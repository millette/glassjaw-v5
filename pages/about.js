'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const About = () => <Fragment>
  <Header title='Accueil' />
  <section className='section'>
    <div className='container'>
      <div className='content'>
        <div className='columns'>
          <div className='column'>
            <h2>Prototype</h2>
            <p>
              Fee
            </p>
          </div>
          <div className='column'>
            <h2>Asrtola</h2>
            <p>
              Fooo
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(About)
