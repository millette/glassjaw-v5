'use strict'

export default {
  state: [
    {
      title: 'That jazz',
      description: '1 Allo je suis la tete êtes vous Noel pépin?'
    },
    {
    },
    {
      description: '2 Êtes vous Noel pépin?'
    }
  ],
  reducers: {
    add: (state, payload) => {
      console.log('ADD PUNCHABLES', payload)
      return [...state, payload]
    }
  }
}
