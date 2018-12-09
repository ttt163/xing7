import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import ActivityItem from '../../components/ActivityListItem'
import loadingImg from '../../public/img/loding.gif'

class Activity extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动汇总'))
    }
    loadingMore (e) {
        if ($('.loading-more').offset().top - $(e.target).offset().top < $(e.target).height()) {
            console.log('加载更多')
        }
    }
    render () {
        return <div className="activity-wrap" onScroll={(e) => { this.loadingMore(e) }}>
            <div className="activity-list clearfix">
                <ActivityItem />
                <ActivityItem />
                <ActivityItem />
            </div>
            <div className="loading-more clearfix">
                <img src={loadingImg} />
                <span>正在加载中...</span>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(Activity)
