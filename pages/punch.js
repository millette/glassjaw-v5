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
          <div className='columns'>
            <div className='column'>
              <Habits add={props.add} boo={props.boo} punchables={props.punchables} />
            </div>
            <div className='column is-one-fifth'>
              <h2 className='title is-3'>{Math.min(5, props.punches.length)} derniers punches</h2>
              <ol>
                {props.punches.slice(0, 5).map((x, i) => {
                  return <li key={i}>
                    <b>{props.punchables[x.i].title} (#{x.i})</b> {x.ggg && <i>{x.ggg}</i>} {new Date(x.time).toString()}
                  </li>
                })}
              </ol>
            </div>
          </div>
        </Fragment>
        : <p>Vous devez être connecté.</p>}
    </div>
  </section>
</Fragment>

const mapState = (state) => ({
  auth: state.auth,
  punchables: state.punchables,
  punches: state.punches
})

const mapDispatch = ({ punchables: { add: boo }, punches: { add } }) => ({
  add: (payload) => {
    if (!payload.ggg) { delete payload.ggg }
    return add(payload)
  },
  boo: () => {
    return boo({temp: true})
  }
})

export default withRematch(initStore, mapState, mapDispatch)(Punch)
