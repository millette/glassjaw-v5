'use strict'

export default {
  state: [],
  reducers: {
    add: (state, payload) => [{ ...payload, time: Date.now() }, ...state]
  }
}
