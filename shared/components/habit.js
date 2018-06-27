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

  punch () { this.props.add({ ggg: this.state.ggg, i: this.props.i }) }

  handleChange (event) { this.setState({ ggg: event.target.value }) }

  onSubmitDefault (event) {
    event.preventDefault()
    // skip punch on form fields
    if (event.type === 'click' && this.state.messageType === 'is-info' && typeof event.target.value !== 'undefined') { return }
    this.clickFSM()
  }

  render () {
    const { description = 'À faire', title = 'Punchable' } = this.props
    return <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop'>
      <article onBlur={this.onBlur} title={titles[this.state.messageType]} onClick={this.onSubmitDefault} className={`message ${this.state.messageType}`}>
        <form onSubmit={this.onSubmitDefault}>
          <div className='message-header'>
            <div className='columns'>
              <div className='column'>
                {title}
              </div>
              {this.state.countdown && <div className='column is-narrow'>
                {' '}<small><i>undo ({this.state.countdown}s)</i></small>
              </div>}
            </div>
          </div>
          <div className='message-body'>
            <p className={description === 'À faire' ? 'is-italic' : undefined}>{description}</p>
            <div className='field'>
              <div className='control'>
                <input readOnly={this.state.readonly} className='input is-primary' type='text' placeholder='Value, comment or description' value={this.state.ggg} onChange={this.handleChange} />
              </div>
            </div>
          </div>
        </form>
      </article>
    </div>
  }
}

export default Habit
