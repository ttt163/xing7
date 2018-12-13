import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import userImg from '../../public/img/user-img.jpg'
import {Link} from 'react-router'

class Terms extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('个人中心_星七Club'))
    }
    render () {
        return <div className="user-warp">
            <div className="top">
                <div className="user-img">
                    <img src={userImg} />
                </div>
                <h3>152****0178</h3>
                <a href="javascript:void(0)">点我升级成尊享会员</a>
            </div>
            <div className="user-content">
                <Link to="/user-apply">
                    <div>
                        <i className="iconfont icon-hdbm"></i>
                        <label>活动报名</label>
                    </div>
                    <i className="iconfont icon-right"></i>
                </Link>
                <Link to="/user-points">
                    <div>
                        <i className="iconfont icon-wdjf"></i>
                        <label>我的积分</label>
                    </div>
                    <i className="iconfont icon-right"></i>
                </Link>
                <Link to="/user-message">
                    <div>
                        <i className="iconfont icon-znxx"></i>
                        <label>站内消息</label>
                    </div>
                    <i className="iconfont icon-right"></i>
                </Link>
            </div>
            <a className="exit">退出</a>
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
