import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'

class OrderDetail extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('订单详情'))
    }
    render () {
        return <div className="">订单详情</div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(OrderDetail)
