'use strict'

import React, { Component } from 'react'

class TempHabit extends Component {
  constructor (props) {
    super(props)
    this.onEdit = this.onEdit.bind(this)
    this.onBlurTitle = this.onBlur.bind(this, 'title')
    this.onBlurDescription = this.onBlur.bind(this, 'description')
    this.state = { }
  }

  onBlur (type, event) {
    const obj = {}
    obj[type] = event.target.innerText
    this.setState(obj)
  }

  onEdit (event) {
    console.log('CONFIRM', this.state)
  }

  render () {
    const { description = 'À faire', title = 'Punchable' } = this.props
    return <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop'>
      <article className='message box'>
        <form>
          <div className='message-header'>
            <div className='columns'>
              <div onBlur={this.onBlurTitle} suppressContentEditableWarning contentEditable className='column is-italic'>
                {title}
              </div>
            </div>
          </div>
          <div className='message-body'>
            <p onBlur={this.onBlurDescription} suppressContentEditableWarning contentEditable className={description === 'À faire' ? 'is-italic' : undefined}>{description}</p>
          </div>
          <div className='message-footer'>
            <div className='field'>
              <div className='control is-expanded'>
                <button onClick={this.onEdit} type='button' className='button is-success is-fullwidth'>CONFIRM</button>
              </div>
            </div>
          </div>
        </form>
      </article>
    </div>
  }
}

export default TempHabit
