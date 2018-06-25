'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'

export default class SearchBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="search-box">
            <input type="text" id="search-box" ref="search-box"/>
            <i className = "fa fa-search" >
            </i>
            </div>
        )
    }
}
