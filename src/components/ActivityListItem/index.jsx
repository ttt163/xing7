import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'

export default class ActivityItem extends Component {
    render () {
        return (
            <Link to='/activity-detail' className='activity-item'>
                <div className='top'>
                    <img className="item-img" src="http://img.saihuitong.com/5426/img/3626466/1667cd0eec9.jpg-cw480h320" />
                    <div className="item-status">已结束</div>
                    <div className="item-recommend"></div>
                    <div className="item-time">2018/07/05-2019/01/02</div>
                </div>
                <div className="info">
                    <h3 className="item-title">周三/六酒吧场| 人生就要及时行乐，爱乐酒吧放肆嗨（elements club）</h3>
                    <div className="item-site">
                        <p>黑龙江哈尔滨集合</p>
                        <span>|</span>
                        <p>23人已报名</p>
                    </div>
                    <div className="item-price">￥750（<i className="iconfont icon-vip"></i>￥700）<sub>起</sub></div>
                </div>
            </Link>
        )
    }
}
