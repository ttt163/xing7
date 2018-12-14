/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'

export default class MessageItem extends Component {
    render () {
        return (
            <div className="message-item">
                <a className="user-img" href="javascript:void(0)">
                    <img src="http://st.saihuitong.com/res/img/avatars/system/8_ava036.jpg" />
                </a>
                <div className="message-content">
                    <p><a href="javascript:void(0)" className="color">管理员</a>给我发来站内通知：</p>
                    <p>“欢迎加入, <a className="color" href="/" target="_blank">星七Club</a>，有您相伴, 是我们最大的荣幸 ^_^！”</p>
                    <div className="time">2018-10-30 10:42</div>
                </div>
            </div>
        )
    }
}
