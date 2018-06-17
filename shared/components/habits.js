'use strict'

import React, { Fragment } from 'react'
import Habit from './habit'

const habits = [
  {
    title: 'That jazz',
    children: <p>1 Allo je suis la tete êtes vous Noel pépin?</p>
  },
  {
    children: <p>2 Êtes vous Noel pépin?</p>
  },
  {
    children: <Fragment>
      <p>3 Je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
      <p>Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
      <p>Je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
    </Fragment>
  },
  {
    children: <p>4 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  },
  {
    children: <Fragment>
      <p>5 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
      <p>Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
    </Fragment>
  },
  {
    children: <p>6 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  },
  {
    children: <Fragment>
      <p>7 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
      <p>Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
    </Fragment>
  },
  {
    children: <p>8 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  },
  {
    children: <p>9 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  },
  {
    children: <p>10 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  },
  {
    children: <p>11 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  },
  {
    children: <p>12 Allo je suis la tete êtes vous Noel pépin? Êtes vous Noel pépin?</p>
  }
]

const Habits = (props) => <Fragment>
  <h2>Mes habitudes</h2>
  <pre>{JSON.stringify(props.auth, null, '  ')}</pre>
  <div className='columns is-mobile is-multiline'>
    {habits.map((props, i) => <Habit key={i} i={i} {...props} />)}
  </div>
</Fragment>

export default Habits
