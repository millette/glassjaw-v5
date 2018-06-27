'use strict'

import React, { Component } from 'react'

class TempHabit extends Component {
  constructor (props) {
    super(props)
    this.onEdit = this.onEdit.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.state = { }
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

  onEdit (event) {
    // console.log(typeof event.target.contentEditable, event.target.contentEditable)
    if (event.target.contentEditable === 'true') { return }
    if (event.target.tagName === 'P') {
      console.log('CLICK EDIT DESC')
      // event.target.contentEditable = true
      // event.target.focus()
    } else if (event.target.tagName === 'DIV' && event.target.classList.contains('column')) {
      console.log('CLICK EDIT TITLE')
      // event.target.contentEditable = true
      // event.target.focus()
    } else if (event.target.tagName === 'BUTTON') {
      console.log('CONFIRM', this.props, this.state)
    } else {
      console.log('CLICK EDIT don\'t care', event.target.tagName, event.target.className)
    }
  }

  render () {
    const { description = 'À faire', title = 'Punchable' } = this.props
    return <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop'>
      <article onBlur={this.onBlur} onClick={this.onEdit} className='message box'>
        <form>
          <div className='message-header'>
            <div className='columns'>
              <div suppressContentEditableWarning contentEditable className='column is-italic'>
                {title}
              </div>
            </div>
          </div>
          <div className='message-body'>
            <p suppressContentEditableWarning contentEditable className={description === 'À faire' ? 'is-italic' : undefined}>{description}</p>
          </div>
          <div className='message-footer'>
            <div className='field'>
              <div className='control is-expanded'>
                <button type='button' className='button is-success is-fullwidth'>CONFIRM</button>
              </div>
            </div>
          </div>
        </form>
      </article>
    </div>
  }
}

export default TempHabit
