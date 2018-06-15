'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import Auth from './auth'

class MainMenu extends Component {
  constructor (props) {
    super(props)
    this.state = { active: false }
    this.toggleActive = this.toggle.bind(this)
  }

  toggle () {
    this.setState({ active: !this.state.active })
  }

  render () {
    return <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link href='/' prefetch><a className='navbar-item has-text-weight-bold'>Accueil</a></Link>
          <button role='button' onClick={this.toggleActive} className={`navbar-burger${this.state.active ? ' is-active' : ''}`} aria-label='menu' aria-expanded='false'>
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>
        <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
          <div className='navbar-start'>
            <Link href='/about' prefetch><a className='navbar-item'>À propos</a></Link>
          </div>
          <div className='navbar-end'>
            <Auth />
          </div>
        </div>
      </div>
    </nav>
  }
}

export default MainMenu
