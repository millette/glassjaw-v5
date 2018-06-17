'use strict'

import React, { Component } from 'react'
import setupFSM from '../utils/habit-fsm'

const titles = {
  'is-info': 'Click to punch',
  'is-warning': 'Click to undo',
  'is-success': 'Click to confirm'
}

class Habit extends Component {
  constructor (props) {
    super(props)
    this.onSubmitDefault = this.onSubmitDefault.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { ggg: '', messageType: 'is-info' }
    this.clickFSM = setupFSM(this)
  }

  punch () {
    console.log('PUNCH', this.state.ggg, this.props.i)
  }

  handleChange (event) {
    this.setState({ ggg: event.target.value })
  }

  onSubmitDefault (event) {
    event.preventDefault()
    // skip click on form fields
    if (event.type === 'click' && this.state.messageType === 'is-info' && typeof event.target.value !== 'undefined') { return }
    this.clickFSM()
  }

  render () {
    const { children, title = 'Punchable' } = this.props
    return <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop'>
      <article title={titles[this.state.messageType]} onClick={this.onSubmitDefault} className={`message ${this.state.messageType}`}>
        <div className='message-header'>
          <p>{title}</p>
        </div>
        <div className='message-body'>
          {children}
          <form onSubmit={this.onSubmitDefault}>
            <div className='field'>
              <div className='control'>
                <input readOnly={this.state.readonly} className='input is-primary' type='text' placeholder='Value, comment or description' value={this.state.ggg} onChange={this.handleChange} />
              </div>
            </div>
          </form>
        </div>
      </article>
    </div>
  }
}

export default Habit
