'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  constructor(props) {
    console.log('testing')
    super(props)
  }

  render() {
    return <h1>Hello World!</h1>
  }
}
