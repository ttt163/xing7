import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import LoadMore from '../../components/LoadMore'
import MessageItem from '../../components/MessageItem'

class Terms extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('站内消息_星七Club'))
    }
    loadingMore (e) {
        if ($('.loading-more').offset().top - $(e.target).offset().top < $(e.target).height()) {
            console.log('加载更多')
        }
    }
    render () {
        return <div className="user-message-warp" onScroll={(e) => this.loadingMore(e)}>
            <div className="message-list">
                <MessageItem />
                <MessageItem />
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
