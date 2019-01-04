import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import ActivityItem from '../../components/ActivityListItem'
import LoadMore from '../../components/LoadMore'
import {getActivityList} from '../../actions/activity'

class Activity extends Component {
    constructor () {
        super()
        this.state = {
            currentPage: 1,
            sizePage: 10,
            pageCount: 1,
            hasMore: false
        }
    }
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动汇总'))
    }
    componentDidMount () {
        this.getActivity()
    }
    // 活动列表
    getActivity () {
        const {dispatch} = this.props
        const {currentPage, sizePage} = this.state
        let sendData = {
            'currentPage': currentPage,
            'sizePage': sizePage
        }
        // console.log(dispatch(getActivityList(sendData)))
        dispatch(getActivityList(sendData)).then((res) => {
            const {totalData} = res.page
            let pageCount = Math.ceil(totalData / sizePage)
            this.setState({
                ...this.state,
                pageCount: pageCount,
                hasMore: !(!pageCount || currentPage === pageCount)
            })
        })
    }
    // 加载更多
    loadingMore (e) {
        const {hasMore} = this.state
        if (!hasMore) {
            return
        }
        if ($('.loading-more').offset().top - $(e.target).offset().top < $(e.target).height()) {
            console.log('加载更多')
        }
    }
    render () {
        const {hasMore} = this.state
        const {list} = this.props
        return <div className="activity-wrap" onScroll={(e) => { this.loadingMore(e) }}>
            <div className="activity-list clearfix">
                {
                    list.map((item, index) => (
                        <ActivityItem item={item} key={index} />
                    ))
                }
            </div>
            {/* 加载更多 */}
            <LoadMore hasMore={hasMore} />
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        list: state.activity.list
    }
}

export default connect(mapStateToProps)(Activity)
