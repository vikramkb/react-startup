import { Provider } from 'react-redux'

import yelpApp from './Reducers'

import ReactDOM from 'react-dom'

import React from 'react'

import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import { Router, Route } from 'react-router'

import History from './History'

import App from './components/App'
import './styles/app.scss'
const store = createStore(yelpApp, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <Router history={History.getHistory()}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
