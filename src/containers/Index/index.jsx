import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import {axiosAjax} from '../../public/index'

class Index extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('首页'))
        let data = {
            userName: 'zhaom',
            password: 'zhaom'
        }
        axiosAjax('post', 'api/login', data, (res) => {
            console.log(res, '===')
        })
    }
    render () {
        return <div className=''>首页</div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(Index)
