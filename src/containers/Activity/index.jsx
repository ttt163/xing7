import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import ActivityItem from '../../components/ActivityListItem'
import LoadMore from '../../components/LoadMore'
import {axiosAjax} from '../../public'

class Activity extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动汇总'))
    }
    componentDidMount () {
        this.getActivity()
    }
    // 活动列表
    getActivity () {
        let sendData = {
            'currentPage': 1,
            'sizePage': 10
        }
        axiosAjax('post', '/api/club/actives/getAllActives', sendData, (res) => {
            console.log(res, '===')
        })
    }
    // 加载更多
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
            {/* 加载更多 */}
            <LoadMore />
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
