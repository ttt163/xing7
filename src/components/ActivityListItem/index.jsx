import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
import {setImg} from '../../public'

export default class ActivityItem extends Component {
    render () {
        const {pathName, item} = this.props
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
                            {/*<div className="item-status">已结束</div>*/}
                            <div className="item-recommend"></div>
                            <div className="item-time">2018/07/05-2019/01/02</div>
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
                                <p>23人已报名</p>
                            </div>
                        )
                    }
                    <div className="item-price">￥750（<i className="iconfont icon-vip"></i>￥700）<sub>起</sub></div>
                </div>
            </Link>
        )
    }
}
