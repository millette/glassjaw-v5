'use strict'

import { configure } from 'finity'

const setup = (self) => {
  const ready = () => self.setState({ readonly: false, messageType: 'is-info' })

  const confirm = () => {
    self.punch()
    self.setState({ ggg: '', messageType: 'is-success' })
  }

  const punched = () => self.setState({ readonly: true, messageType: 'is-warning' })

  const wrkr = configure()
    .initialState('ready')
    .on('click').transitionTo('punched').withAction(punched)
    .state('punched')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(30000).transitionTo('confirmed').withAction(confirm)
    .state('confirmed')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(3000).transitionTo('ready').withAction(ready)
    .start()

  return wrkr.handle.bind(wrkr, 'click')
}

export default setup
