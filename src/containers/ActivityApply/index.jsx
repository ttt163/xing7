import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import ApplyAdd from '../../components/ApplyAdd'
import {Link, hashHistory} from 'react-router'
import {addPerson, delPerson, editPerson, initPerson} from '../../actions/apply'

class ActivityApply extends Component {
    constructor () {
        super()
        this.state = {
            showPrice: false
        }
    }

    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动报名'))
    }

    componentDidMount () {
        const {dispatch, detailData} = this.props
        const {batch} = detailData
        console.log(batch.selectPerson)
        dispatch(initPerson())
        dispatch(addPerson(batch.selectPerson - 1))
    }

    submit () {
        if (!this.validateForm()) {
            return
        }
        hashHistory.push('/order-detail')
    }

    // 校验
    validateForm () {
        return true
    }

    render () {
        const {showPrice} = this.state
        const {applyInfo, dispatch, detailData} = this.props
        const {persons} = applyInfo
        const {data, batch} = detailData
        return <div className="apply-warp">
            <div className="top">
                <h1>{data.title}</h1>
                <div>
                    <label>集合地：</label>
                    <p>{data.gatherAddress}</p>
                </div>
                <div>
                    <label>目的地：</label>
                    <p>{data.destAddress}</p>
                </div>
                <div>
                    <label>活动批次：</label>
                    <p>{batch.bathName} </p>
                </div>
                <div>
                    <label>单价:</label>
                    <p className="price">{batch.price}/人</p>
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
                    {
                        persons.map((item, index) => (
                            <ApplyAdd key={index} item={item} index={index} del={(index) => dispatch(delPerson(index))} edit={(obj, index) => dispatch(editPerson(obj, index))} />
                        ))
                    }
                </div>
                <div className="btns">
                    <a href="javascript:void(0)" onClick={() => dispatch(addPerson())}>
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
                    <i className={!showPrice ? 'iconfont icon-down' : 'iconfont icon-up'} onClick={() => this.setState({showPrice: !showPrice})}></i>
                </div>
                <a className="btn" href="javascript:void(0)" onClick={() => this.submit()}>立即报名</a>
            </div>
            {/*  价格说明 */}
            <div className="price-desc" style={{display: !showPrice ? 'none' : 'block'}}>
                <div className="mask" onClick={() => this.setState({showPrice: false})}></div>
                <div className="price-content">
                    <h6>价格详情</h6>
                    <div className="info">
                        <div>
                            <label>订单金额</label>
                            <span>238 X 1 = ￥238.00</span>
                        </div>
                        <div>
                            <label>实付总额</label>
                            <span>￥238</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        applyInfo: state.applyInfo,
        detailData: state.detailData
    }
}

export default connect(mapStateToProps)(ActivityApply)
