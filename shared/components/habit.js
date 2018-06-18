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
    this.onEdit = this.onEdit.bind(this)
    this.onBlur = props.temp ? this.onBlur.bind(this) : null
    this.handleChange = this.handleChange.bind(this)
    this.state = { ggg: '', messageType: props.temp ? '' : 'is-info' }
    this.clickFSM = setupFSM(this)
  }

  onBlur (event) {
    // console.log('BLURRING', event.target, event.target.innerText)
    if (event.target.tagName === 'P') {
      console.log('CLICK EDIT DESC')
      this.setState({ description: event.target.innerText })
      // this.props.description = event.target.innerText
    } else if (event.target.tagName === 'DIV' && event.target.classList.contains('column')) {
      console.log('CLICK EDIT TITLE')
      this.setState({ title: event.target.innerText })
      // this.props.title = event.target.innerText
    }
  }

  punch () { this.props.add({ ggg: this.state.ggg, i: this.props.i }) }

  handleChange (event) { this.setState({ ggg: event.target.value }) }

  onEdit (event) {
    // console.log(typeof event.target.contentEditable, event.target.contentEditable)
    if (event.target.contentEditable === 'true') { return }
    if (event.target.tagName === 'P') {
      console.log('CLICK EDIT DESC')
      event.target.contentEditable = true
      event.target.focus()
    } else if (event.target.tagName === 'DIV' && event.target.classList.contains('column')) {
      console.log('CLICK EDIT TITLE')
      event.target.contentEditable = true
      event.target.focus()
    } else if (event.target.tagName === 'BUTTON') {
      console.log('CONFIRM', this.props, this.state)
    } else {
      console.log('CLICK EDIT don\'t care', event.target.tagName, event.target.className)
    }
  }

  onSubmitDefault (event) {
    event.preventDefault()
    // skip punch on form fields
    if (event.type === 'click' && this.state.messageType === 'is-info' && typeof event.target.value !== 'undefined') { return }
    this.clickFSM()
  }

  render () {
    const { description = 'À faire', title = 'Punchable' } = this.props
    return <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop'>
      <article onBlur={this.onBlur} title={titles[this.state.messageType]} onClick={this.props.temp ? this.onEdit : this.onSubmitDefault} className={`message ${this.state.messageType}${this.props.temp ? ' box' : ''}`}>
        <form onSubmit={this.onSubmitDefault}>
          <div className='message-header'>
            <div className='columns'>
              <div className={`column${this.props.temp ? ' is-italic' : ''}`}>
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
          {this.props.temp && <div className='message-footer'>
            <div className='field'>
              <div className='control is-expanded'>
                <button type='button' className='button is-success is-fullwidth'>CONFIRM</button>
              </div>
            </div>
          </div>}
        </form>
      </article>
    </div>
  }
}

export default Habit
