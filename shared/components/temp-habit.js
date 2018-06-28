'use strict'

import React, { Component } from 'react'

const defaults = {
  title: 'Titre',
  description: 'Description'
}

class TempHabit extends Component {
  constructor (props) {
    super(props)
    this.onEdit = this.onEdit.bind(this)
    this.onBlurTitle = this.onBlur.bind(this, 'title')
    this.onBlurDescription = this.onBlur.bind(this, 'description')
    this.state = { }
  }

  onBlur (type, event) {
    const val = event.target.innerText.trim()
    if (!val) { return }
    if (val === defaults[type]) { return }
    const obj = {}
    obj[type] = val
    this.setState(obj)
  }

  onEdit (event) {
    this.props.newHabit(this.state, event)
  }

  render () {
    return <div className='column is-half'>
      <div className='box'>
        <article className='message'>
          <form>
            <div className='message-header'>
              <div className='columns'>
                <div onBlur={this.onBlurTitle} suppressContentEditableWarning contentEditable className='column is-italic'>
                  {defaults.title}
                </div>
              </div>
            </div>
            <div className='message-body'>
              <p onBlur={this.onBlurDescription} suppressContentEditableWarning contentEditable className={this.state.description === 'À faire' ? 'is-italic' : undefined}>
                {defaults.description}
              </p>
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
    </div>
  }
}

export default TempHabit
