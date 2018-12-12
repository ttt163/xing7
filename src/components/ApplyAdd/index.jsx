/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'

export default class ApplyAdd extends Component {
    render () {
        return (
            <div className='add-warp'>
                <div className="add-title">
                    <h5>第1个报名人</h5>
                    <i className="iconfont icon-del"></i>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>真实姓名</span>
                    </label>
                    <div className="form-input">
                        <input placeholder="1-30个字符"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>手机号码</span>
                    </label>
                    <div className="form-input">
                        <input placeholder="请输入11位手机号码"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>微信名字</span>
                    </label>
                    <div className="form-input">
                        <input placeholder="你的微信昵称"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>身份证号</span>
                    </label>
                    <div className="form-input">
                        <input placeholder="购买保险"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>上车地点</span>
                    </label>
                    <div className="form-select">
                        <select>
                            <option>请选择</option>
                            <option>五道口地铁站B口东200米展春园西路</option>
                        </select>
                        <i className="iconfont icon-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}
