'use strict'

import React, { Component, Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Habits from '../shared/components/habits'

class Punch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temp: false
    }
    this.handleNewPunchable = this.handleNewPunchable.bind(this)
  }

  handleNewPunchable (ev) {
    console.log('New habit, coming up!')
    this.setState({ temp: !this.state.temp })
  }

  render () {
    return <Fragment>
      <Header title='Punch' />
      <section className='section'>
        <div className='container is-fluid'>
          {this.props.auth.name
            ? <Fragment>
              <div className='columns'>
                <div className='column'>
                  <Habits temp={this.state.temp} add={this.props.add} boo={this.handleNewPunchable} punchables={this.props.punchables} />
                </div>
                <div className='column is-one-fifth'>
                  <h2 className='title is-3'>{Math.min(5, this.props.punches.length)} derniers punches</h2>
                  <ol>
                    {this.props.punches.slice(0, 5).map((x, i) => {
                      return <li key={i}>
                        <b>{this.props.punchables[x.i].title} (#{x.i})</b> {x.ggg && <i>{x.ggg}</i>} {new Date(x.time).toString()}
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
  }
}

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
