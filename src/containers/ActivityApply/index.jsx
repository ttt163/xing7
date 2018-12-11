import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'

class ActivityApply extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动报名'))
    }
    render () {
        return <div className="">活动报名</div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(ActivityApply)
