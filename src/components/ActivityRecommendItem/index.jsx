import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'

export default class RecommendItem extends Component {
    render () {
        return (
            <Link to='/activity-detail' className='activity-item'>
                <div className='activity-img'>
                    <img src="http://img.saihuitong.com/5426/img/3626466/166e849ca98.jpg-w702" />
                </div>
                <div className="info">
                    <h3 className="item-title">周三/六酒吧场| 人生就要及时行乐，爱乐酒吧放肆嗨（elements club）</h3>
                    <div className="item-price">￥750（<i className="iconfont icon-vip"></i>￥700）</div>
                </div>
            </Link>
        )
    }
}
