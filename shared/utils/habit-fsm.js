'use strict'

import { configure } from 'finity'

const setup = (self) => {
  let timer
  const timeout = 30

  const ready = () => {
    clearInterval(timer)
    self.setState({ countdown: 0, readonly: false, messageType: 'is-info' })
  }

  const confirm = () => {
    self.punch()
    clearInterval(timer)
    self.setState({ countdown: 0, ggg: '', messageType: 'is-success' })
  }

  const punched = () => {
    self.setState({ countdown: timeout, readonly: true, messageType: 'is-warning' })
    timer = setInterval(() => {
      const countdown = --self.state.countdown
      self.setState({ countdown })
      if (!countdown) { clearInterval(timer) }
    }, 1000)
  }

  const wrkr = configure()
    .initialState('ready')
    .on('click').transitionTo('punched').withAction(punched)
    .state('punched')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(timeout * 1000).transitionTo('confirmed').withAction(confirm)
    .state('confirmed')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(3000).transitionTo('ready').withAction(ready)
    .start()

  return wrkr.handle.bind(wrkr, 'click')
}

export default setup
