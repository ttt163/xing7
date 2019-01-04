/**
 * Author：tantingting
 * Time：2018/12/10
 * Description：Description
 */

import React, {Component} from 'react'
import './phone-list.scss'

export default class PhoneList extends Component {
    render () {
        const {hideList, isShow, user} = this.props
        return (
            <div className={!isShow ? 'phone-list-warp hide' : 'phone-list-warp'} >
                <div className="mask" onClick={() => hideList()}></div>
                <ul className="phone-list">
                    <li>
                        <a href={`tel:${user.mobilePhone}`}>
                            <i className="iconfont icon-phone"></i>
                            <div>
                                {user.userName}
                                <span className="captain-tag">领队</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="tel:18745779017">
                            <i className="iconfont icon-phone"></i>
                            <div>
                                小七
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
