import React, {Component} from 'react'
import './index.scss'
import { connect } from 'react-redux'
import DetailFooter from '../../components/ActivityDetail/footer'
import PhoneList from '../../components/ActivityDetail/phone-list'
import SelectBox from '../../components/ActivityDetail/selectBox'
import ActivityRecommend from '../../components/ActivityRecommend'
import {getActivityDetail, selectBatch} from '../../actions/detail'
import {setImg, formatDateRagge} from '../../public/index'

class ActivityDetail extends Component {
    constructor () {
        super()
        this.state = {
            showPhoneList: false,
            showSelectBox: false,
            timeStr: ''
        }
    }
    componentWillMount () {
        this.getDetail()
    }

    getDetail () {
        const {dispatch, location} = this.props
        dispatch(getActivityDetail({activeId: location.query.activityId})).then((res) => {
            this.activityTimes(res.batchs)
        })
    }

    changePhoneList () {
        this.setState({
            showPhoneList: !this.state.showPhoneList
        })
    }

    showSelect () {
        this.setState({
            showSelectBox: true
        })
    }

    activityTimes (batchs) {
        let times = []
        let timesStr = []
        batchs.map((item) => {
            let currTime = {start: new Date(item.startTime).getTime(), end: new Date(item.endTime).getTime()}
            if (!times.length) {
                times.push(currTime)
            } else {
                let index = times.findIndex((time) => {
                    return time.start === currTime.start && item.end === currTime.end
                })
                if (index === -1) {
                    times.push(currTime)
                }
            }
        })
        times.map((item) => {
            timesStr.push(formatDateRagge(item.start, item.end, '/'))
        })
        this.setState({timeStr: timesStr.join('、')})
    }

    createMarkup (activeIntro) {
        // let _str = '<div data-contents=""><div data-block="true" data-editor="eqrjo" data-offset-key="1tgjc-0-0"><div data-offset-key="1tgjc-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="1tgjc-0-0" style="font-weight: bold; color: rgb(255, 0, 0);"><span data-text="true">dssdafdasfdasd</span></span></div></div><div data-block="true" data-editor="eqrjo" data-offset-key="ehpkh-0-0"><div data-offset-key="ehpkh-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="ehpkh-0-0" style="font-weight: bold; color: rgb(255, 127, 0); font-style: italic;"><span data-text="true">safafafaf</span></span></div></div></div>'
        let _str = activeIntro.content1 + activeIntro.content2 + activeIntro.content3 + activeIntro.content4
        return {__html: _str}
    }
    render () {
        const {showPhoneList, showSelectBox, timeStr} = this.state
        const {dispatch, detailData} = this.props
        const {data, batch, recommend} = detailData
        return (
            !data || !batch ? <div className="detail-warp"></div> : (
                <div className="detail-warp">
                    <div className="top">
                        <img className="activity-img" src={setImg(data.itemImg)}/>
                        <div className="detail-info">
                            <h1>{data.title}</h1>
                            <div>
                                <div>费用<span className="price">{batch.price}</span>/人</div>
                                <div className="right">余位<span className="num">（{batch.maxPeople - batch.currentPeople}）</span>/已报名<span className="num">（{batch.currentPeople}）</span></div>
                            </div>
                            <div>
                                <div>会员费用<span className="price">{batch.vipPrice}</span>/人</div>
                            </div>
                        </div>
                    </div>
                    <div className='page-box'>
                        <div className='page-box-item'>
                            <label>
                                <i className="iconfont icon-site"></i>
                                <span>集合地：</span>
                            </label>
                            <p>{data.gatherAddress} </p>
                        </div>
                        <div className='page-box-item'>
                            <label>
                                <i className="iconfont icon-site"></i>
                                <span>目的地：</span>
                            </label>
                            <p>{data.destAddress}</p>
                        </div>
                        <div className='page-box-item'>
                            <label>
                                <i className="iconfont icon-time"></i>
                                <span>活动时间：</span>
                            </label>
                            <p>{timeStr}</p>
                        </div>
                        <div className='page-box-item'>
                            <label>
                                <i className="iconfont icon-user"></i>
                                <span>领队：</span>
                            </label>
                            <div><span>{data.user.userName}</span><a className="ml20" href={`tel:${data.user.mobilePhone}`}>{data.user.mobilePhone}</a></div>
                        </div>
                    </div>
                    <div className='page-box'>
                        <div className='page-box-item between' onClick={() => this.showSelect()}>
                            <div>
                                <label><span>选择批次：</span></label>
                                <div>{batch.bathName}</div>
                            </div>
                            <a href="javascript:void(0)" className="select">
                                <span>选择</span>
                                <i className='iconfont icon-right'></i>
                            </a>
                        </div>
                    </div>
                    {/* <div className='page-box'>
                <div className='page-box-item between'>
                    <label><span>咨询留言</span></label>
                    <i className='iconfont icon-right'></i>
                </div>
            </div> */}
                    {/* 详细信息 */}
                    <div className="activity-info">
                        <h3 className="info-title">详细信息</h3>
                        <div className="desc">
                            <div dangerouslySetInnerHTML={this.createMarkup(data.activeIntro)}/>
                        </div>
                    </div>
                    {/* 相关推荐 */}
                    {
                        !recommend.length ? '' : <ActivityRecommend list={recommend} />
                    }
                    {/* 选择批次 */}
                    <SelectBox isShow={showSelectBox} hideBox={() => this.setState({showSelectBox: false})} data={data} select={batch} selectBatch={(obj) => dispatch(selectBatch(obj))} />
                    {/* 底部 */}
                    <DetailFooter changePhoneList={() => this.changePhoneList()} showSelect={() => this.showSelect()} />
                    <PhoneList hideList={() => this.setState({showPhoneList: false})} isShow={showPhoneList} user={data.user} />
                </div>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detailData: state.detailData
    }
}

export default connect(mapStateToProps)(ActivityDetail)
