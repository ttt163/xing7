/**
 * Author：tantingting
 * Time：2018/12/10
 * Description：Description
 */

import React, {Component} from 'react'
import './footer.scss'

export default class DetailFooter extends Component {
    render () {
        const {changePhoneList, showSelect} = this.props
        return (
            <div className="d-footer-warp">
                <div className="ask" onClick={() => changePhoneList()}>
                    <i className="iconfont icon-ask"></i>
                    <span>咨询</span>
                </div>
                <a className="btn" onClick={() => showSelect()}>我要报名</a>
            </div>
        )
    }
}
