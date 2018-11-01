import React, { Component } from 'react'
import './index.scss'

export default class Main extends Component {
    componentWillMount () {
        document.title='index'
    }
    render () {
        return <div>
            1111233
            {this.props.children}
        </div>
    }
}