/**
 * Author：tantingting
 * Time：2018/12/29
 * Description：Description
 */

import React, {Component} from 'react'
import {Link} from 'react-router'
import './index-activity-nav.scss'
import {activityNavData} from '../../public/config'

export default class IndexActivityNav extends Component {
    render () {
        return (
            <ul className="index-nav-warp">
                {
                    activityNavData.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link to={item.path}>
                                <i className={`iconfont ${item.icon}`}></i>
                                <label>{item.label}</label>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
