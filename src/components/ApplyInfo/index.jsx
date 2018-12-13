/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'

export default class ApplyInfo extends Component {
    render () {
        const {item, index} = this.props
        return (
            <div className='apply-info-warp'>
                <div className="add-title">
                    <h5>第{index + 1}个报名人</h5>
                </div>
                <div className="add-item">
                    <label>真实姓名 </label>
                    <div className="form-input">{item.name}</div>
                </div>
                <div className="add-item">
                    <label>手机号码</label>
                    <div className="form-input">{item.phone}</div>
                </div>
                <div className="add-item">
                    <label>微信名字</label>
                    <div className="form-input">{item.nickName}</div>
                </div>
                <div className="add-item">
                    <label>身份证号</label>
                    <div className="form-input">{item.idCard}</div>
                </div>
                <div className="add-item">
                    <label>上车地点</label>
                    <div className="form-input">{item.site}</div>
                </div>
            </div>
        )
    }
}
