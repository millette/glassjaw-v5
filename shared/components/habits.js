'use strict'

import React, { Fragment } from 'react'
import Habit from './habit'
import TempHabit from './temp-habit'

const Habits = (props) => <Fragment>
  <h2 className='title is-3'>
    Mes habitudes
  </h2>
  <h3 className='subtitle is-4'>
    {props.boo && <button onClick={props.boo} className='button is-primary'>Ajouter une habitude</button>}
  </h3>
  <div className='columns is-mobile is-multiline'>
    {props.punchables.map((x, i) => <Habit add={props.add} key={i} i={i} {...x} />)}
    {props.temp ? <TempHabit /> : null}
  </div>
</Fragment>

export default Habits
