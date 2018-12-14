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

    loadingMore (e) {
        console.log('11')
        if ($('.loading-more').offset().top - $(e.target).offset().top < $(e.target).height()) {
            console.log('加载更多')
        }
    }
    render () {
        return <div className="user-apply-warp" onScroll={(e) => this.loadingMore(e)}>
            {/* 订单列表 */}
            <div className="order-list">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
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
