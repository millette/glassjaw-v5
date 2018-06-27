'use strict'

// import Finity, { configure } from 'finity'
import { configure } from 'finity'

const setupFSM = (self, timeout = 30) => {
  let timer

  const ready = () => {
    clearInterval(timer)
    self.setState({ countdown: false, readonly: false, messageType: 'is-info' })
  }

  const confirm = () => {
    clearInterval(timer)
    self.punch()
    self.setState({ countdown: false, ggg: '', messageType: 'is-success' })
  }

  const stop = (a, b, c) => {
    clearInterval(timer)
    c.stateMachine.currentStateMachine.stop()
  }

  const unmount = (a, b, c) => {
    self.punch()
    stop(a, b, c)
  }

  const punched = () => {
    self.setState({ countdown: timeout, readonly: true, messageType: 'is-warning' })
    timer = setInterval(() => {
      const countdown = --self.state.countdown || false
      self.setState({ countdown })
      if (!countdown) { clearInterval(timer) }
    }, 1000)
  }

  // const wrkr1 = configure()
  const wrkr = configure()
    .initialState('ready')
    .on('click').transitionTo('punched').withAction(punched)
    .on('componentWillUnmount').internalTransition()
    .state('punched')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(timeout * 1000).transitionTo('confirmed').withAction(confirm)
    .on('componentWillUnmount').internalTransition().withAction(unmount)
    .state('confirmed')
    .on('click').transitionTo('ready').withAction(ready)
    .onTimeout(3000).transitionTo('ready').withAction(ready)
    .on('componentWillUnmount').internalTransition().withAction(stop)
    // .global()
    // .onStateExit((state) => console.log(`Exiting state '${state}'`))
    // .getConfig()
    .start()

  // const wrkr = Finity.start(wrkr1)
  return {
    click: wrkr.handle.bind(wrkr, 'click'),
    stop: wrkr.handle.bind(wrkr, 'componentWillUnmount')
  }
}

export default setupFSM
