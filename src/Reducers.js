import { sample } from './reducers/counter'

import { combineReducers } from 'redux'

const yelpApp = combineReducers({
  sample,
})

export default yelpApp
