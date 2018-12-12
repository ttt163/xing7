import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import ApplyAdd from '../../components/ApplyAdd'
import {Link, hashHistory} from 'react-router'

class ActivityApply extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动报名'))
    }
    submit () {
        hashHistory.push('/order-detail')
    }
    render () {
        return <div className="apply-warp">
            <div className="top">
                <h1>蹦床交友派对蹦床交友派对——出大招！放福利！蹦床交友派对——出大招！放福利！——出大招！放福利！</h1>
                <div>
                    <label>集合地：</label>
                    <p>北京 朝阳  惠新西街南口 </p>
                </div>
                <div>
                    <label>目的地：</label>
                    <p>北京 朝阳  惠新西街南口 </p>
                </div>
                <div>
                    <label>活动批次：</label>
                    <p>周六 </p>
                </div>
                <div>
                    <label>单价:</label>
                    <p className="price">¥119/人</p>
                </div>
            </div>
            <div className="apply-legend">
                <div className="title-h4">
                    <h4>报名信息</h4>
                    <div className="line"></div>
                </div>
                <p>
                    报名人信息（本活动的相关通知会通知第1个报名人, 请留意手机短信并准确填写报名人信息，以便办理各种手续和购买保险，最多添加255个）
                </p>
            </div>
            {/* 报名 */}
            <div className="apply-info">
                <div className="add-list">
                    <ApplyAdd />
                </div>
                <div className="btns">
                    <a href="javascript:void(0)">
                        <i className="iconfont icon-add2"></i>
                        <span>新增报名人员</span>
                    </a>
                    <a href="javascript:void(0)">
                        <i className="iconfont icon-import"></i>
                        <span>导入最近报名人员</span>
                    </a>
                </div>
            </div>
            <div className="remark">
                <label>订单备注</label>
                <input placeholder='备注信息' />
            </div>
            {/* 支付方式 */}
            <div className="pay-box">
                <h4>支付方式</h4>
                <div className="pay-ways">
                    <div>
                        <i className="zfb-img"></i>
                        <div>
                            <div>
                                <h5>支付宝支付</h5>
                                <p>推荐有支付宝账户的用户使用</p>
                            </div>
                            <i className="iconfont icon-selected"></i>
                        </div>
                    </div>
                    <div>
                        <i className="wx-img"></i>
                        <div className="no-border">
                            <div>
                                <h5>微信支付</h5>
                                <p>使用微信支付, 安全便捷</p>
                            </div>
                            <i className="iconfont icon-selected"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="check-terms">
                <input type="checkbox" checked/>
                <label>我已阅读并同意</label>
                <Link to="terms">《报名条款》</Link>
            </div>
            {/* 底部 */}
            <div className="apply-footer">
                <div>
                    <label>总金额：¥119</label>
                    <i className="iconfont icon-up"></i>
                </div>
                <a href="javascript:void(0)" onClick={() => this.submit()}>立即报名</a>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(ActivityApply)
