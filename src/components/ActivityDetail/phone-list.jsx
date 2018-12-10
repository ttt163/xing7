/**
 * Author：tantingting
 * Time：2018/12/10
 * Description：Description
 */

import React, {Component} from 'react'
import './phone-list.scss'

export default class PhoneList extends Component {
    render () {
        const {hideList, isShow} = this.props
        return (
            <div className={!isShow ? 'phone-list-warp hide' : 'phone-list-warp'} >
                <div className="mask" onClick={() => hideList()}></div>
                <ul className="phone-list">
                    <li>
                        <a href="tel:18618372012">
                            <i className="iconfont icon-phone"></i>
                            <div>
                                李燕
                                <span className="captain-tag">领队</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="tel:18618372012">
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
