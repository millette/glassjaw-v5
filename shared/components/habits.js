'use strict'

import React, { Fragment } from 'react'
import Habit from './habit'

const habits = [
  {
    title: 'That jazz',
    description: '1 Allo je suis la tete êtes vous Noel pépin?'
  },
  {
    description: '2 Êtes vous Noel pépin?'
  },
  {
    description: '3 Je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '4 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '5 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '6 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '7 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '8 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '9 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
  },
  {
    description: '11 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  },
  {
    description: '12 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?'
  }
]

//  <pre>{JSON.stringify(props.auth, null, '  ')}</pre>

const Habits = (props) => <Fragment>
  <h2>Mes habitudes</h2>
  <div className='columns is-mobile is-multiline'>
    {habits.map((props, i) => <Habit key={i} i={i} {...props} />)}
  </div>
</Fragment>

export default Habits
