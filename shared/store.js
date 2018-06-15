'use strict'

import { init } from '@rematch/core'
import * as models from './models'
import createRematchPersist from '@rematch/persist'

const persistPlugin = createRematchPersist({
  debug: true
})

export const initStore = (initialState = {}) => init({
  models,
  plugins: [persistPlugin],
  redux: { initialState }
})
