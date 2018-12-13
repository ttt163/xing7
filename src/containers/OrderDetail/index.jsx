import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import ActivityRecommend from '../../components/ActivityRecommend'
import ApplyInfo from '../../components/ApplyInfo'
import {hashHistory} from 'react-router'

class OrderDetail extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('订单详情'))
    }
    componentDidMount () {
        const {applyInfo} = this.props
        if (!applyInfo.persons.length) {
            hashHistory.goBack()
        }
    }
    render () {
        const {applyInfo} = this.props
        const {persons} = applyInfo
        return <div className="order-warp">
            <div className="top">
                <label>订单状态：</label>
                <span className="color">待付款</span>
            </div>
            <div className="activity-info">
                <h1>蹦床交友派对——出大招！放福利！蹦床交友派对——出大招！放福利！蹦床交友派对——出大招！放福利！</h1>
                <div className="form-line">
                    <div>
                        <label>集合地: </label>
                        <span>北京 朝阳  惠新西街南口 </span>
                    </div>
                    <div>
                        <label>目的地: </label>
                        <span>北京 朝阳  惠新西街南口 </span>
                    </div>
                    <div>
                        <label>开始时间: </label>
                        <span>2018-12-15</span>
                    </div>
                    <div>
                        <label>活动批次: </label>
                        <span>周六</span>
                    </div>
                    <div>
                        <label>订单号: </label>
                        <span>20181213123146835982</span>
                    </div>
                    <div>
                        <label>报名数量: </label>
                        <span>2</span>
                    </div>
                    <div>
                        <label>下单时间: </label>
                        <span>2018-12-13 12:31</span>
                    </div>
                    <div>
                        <label>报名方式: </label>
                        <span>个人报名</span>
                    </div>
                </div>
            </div>
            <div className="pay-info form-line">
                <div>
                    <label>订单类型: </label>
                    <span>全额付款</span>
                </div>
                <div>
                    <label>总金额: </label>
                    <span>¥119x2</span>
                </div>
                <div>
                    <label>应付金额: </label>
                    <p><span className="color">¥238</span>（在线支付）</p>
                </div>
                <div>
                    <label>联系人: </label>
                    <span>啊啊吃&nbsp;&nbsp;&nbsp;&nbsp;15201270178</span>
                </div>
            </div>
            {/* 报名信息 */}
            <div className="apply-info">
                {
                    persons.map((item, index) => (
                        <ApplyInfo key={index} item={item} index={index} />
                    ))
                }
            </div>
            {/* 相关推荐 */}
            <ActivityRecommend />
            {/* 底部 */}
            <div className="order-footer">
                <a className="btn-cancel" href="javascript:void(0)">取消订单</a>
                <a className="btn-confirm" href="javascript:void(0)">付款</a>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        applyInfo: state.applyInfo
    }
}

export default connect(mapStateToProps)(OrderDetail)
