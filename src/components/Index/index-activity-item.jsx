import React, {Component} from 'react'
import './index-activity-item.scss'
import {Link} from 'react-router'

export default class IndexActivityItem extends Component {
    render () {
        return (
            <Link to="/activity-detail" className="index-activity-item">
                <img src="http://img.saihuitong.com/5426/img/3626466/1670c48ce86.jpg-cw300h200" />
                <div>
                    <h3>周三/六酒吧场| 人生就要及时行乐，爱乐酒吧放肆嗨（elements club）</h3>
                    <div className="btn">我要报名</div>
                    <p>报名截止：2018-12-16 04:00</p>
                </div>
            </Link>
        )
    }
}
