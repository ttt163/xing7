import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import LoadMore from '../../components/LoadMore'
import OrderItem from '../../components/order-item'

class Terms extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('我的活动报名_星七Club'))
    }
    render () {
        return <div className="user-apply-warp">
            {/* 订单列表 */}
            <div className="order-list">
                <OrderItem />
            </div>
            {/* 加载更多 */}
            <LoadMore />
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(Terms)
