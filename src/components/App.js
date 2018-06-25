'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBox from './SearchBox.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchBox className="container-fluid" />
      </div>
    )
  }
}
