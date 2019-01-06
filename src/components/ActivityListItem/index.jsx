import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
import {setImg, formatDateRagge} from '../../public'

export default class ActivityItem extends Component {
    render () {
        const {pathName, item} = this.props
        const {activeBath} = item
        return (
            <Link to={{pathname: '/activity-detail', query: {activityId: item.activeId}}} className='activity-item'>
                {
                    pathName === '/' ? (
                        <div className='top'>
                            <img className="item-img" src={setImg(item.itemImg)}/>
                        </div>
                    ) : (
                        <div className='top'>
                            <img className="item-img" src={setImg(item.itemImg)} />
                            {/* <div className="item-status">已结束</div> */}
                            {parseInt(item.isopen) === 9 ? <div className="item-recommend"></div> : ''}
                            {
                                !activeBath || !activeBath.startTime ? '' : <div className="item-time">{formatDateRagge(activeBath.startTime, activeBath.endTime, '/')}}</div>
                            }
                        </div>
                    )
                }
                <div className="info">
                    <h3 className="item-title">{item.title}</h3>
                    {
                        pathName === '/' ? '' : (
                            <div className="item-site">
                                <p>{item.gatherAddress}</p>
                                <span>|</span>
                                <p>{!activeBath || !activeBath.currentPeople ? 0 : activeBath.currentPeople}人已报名</p>
                            </div>
                        )
                    }
                    {
                        !activeBath || !activeBath.price ? (
                            <div className="item-price">￥0（<i className="iconfont icon-vip"></i>￥0）</div>
                        ) : (
                            <div className="item-price">￥{activeBath.price}（<i className="iconfont icon-vip"></i>￥{activeBath.vipPrice}）<sub>起</sub></div>
                        )
                    }
                </div>
            </Link>
        )
    }
}

/* export default class ActivityItem extends Component {
    render () {
        const {pathName} = this.props
        return (
            <Link to='/activity-detail' className='activity-item'>
                {
                    pathName === '/' ? (
                        <div className='top'>
                            <img className="item-img" src="http://img.saihuitong.com/5426/img/3626466/1667cd0eec9.jpg-cw480h320"/>
                        </div>
                    ) : (
                        <div className='top'>
                            <img className="item-img" src="http://img.saihuitong.com/5426/img/3626466/1667cd0eec9.jpg-cw480h320" />
                            <div className="item-status">已结束</div>
                            <div className="item-recommend"></div>
                            <div className="item-time">2018/07/05-2019/01/02</div>
                        </div>
                    )
                }
                <div className="info">
                    <h3 className="item-title">周三/六酒吧场| 人生就要及时行乐，爱乐酒吧放肆嗨（elements club）</h3>
                    {
                        pathName === '/' ? '' : (
                            <div className="item-site">
                                <p>黑龙江哈尔滨集合</p>
                                <span>|</span>
                                <p>23人已报名</p>
                            </div>
                        )
                    }
                    <div className="item-price">￥750（<i className="iconfont icon-vip"></i>￥700）<sub>起</sub></div>
                </div>
            </Link>
        )
    }
} */
