'use strict'

import React, { Fragment } from 'react'
import Habit from './habit'

const Habits = (props) => <Fragment>
  <h2>Mes habitudes</h2>
  <div className='columns is-mobile is-multiline'>
    {props.punchables.map((x, i) => <Habit add={props.add} key={i} i={i} {...x} />)}
  </div>
</Fragment>

export default Habits
