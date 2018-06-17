'use strict'

import { configure } from 'finity'

const setup = (self) => {
  const ready = () => self.setState({ readonly: false, messageType: 'is-info' })

  return configure()
    .initialState('ready')
    .on('click').transitionTo('punched')
    .withAction(() => self.setState({ readonly: true, messageType: 'is-warning' }))
    .state('punched')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(5000).transitionTo('confirmed')
    .withAction(() => self.setState({ ggg: '', messageType: 'is-success' }))
    .state('confirmed')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(3000).transitionTo('ready').withAction(ready)
    .start()
}

export default setup
