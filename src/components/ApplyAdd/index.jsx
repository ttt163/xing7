/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'

export default class ApplyAdd extends Component {
    editForm (key, val) {
        const {edit, index} = this.props
        edit({[key]: val}, index)
    }

    render () {
        const {item, index, del} = this.props
        return (
            <div className='add-warp'>
                <div className="add-title">
                    <h5>第{index + 1}个报名人</h5>
                    {
                        index === 0 ? '' : <i className="iconfont icon-del" onClick={() => del(index)}></i>
                    }
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>真实姓名</span>
                    </label>
                    <div className="form-input">
                        <input value={item.name} onChange={(e) => this.editForm('name', e.target.value)} placeholder="1-30个字符"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>手机号码</span>
                    </label>
                    <div className="form-input">
                        <input value={item.phone} onChange={(e) => this.editForm('phone', e.target.value)} placeholder="请输入11位手机号码"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>微信名字</span>
                    </label>
                    <div className="form-input">
                        <input value={item.nickName} onChange={(e) => this.editForm('nickName', e.target.value)} placeholder="你的微信昵称"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>身份证号</span>
                    </label>
                    <div className="form-input">
                        <input value={item.idCard} onChange={(e) => this.editForm('idCard', e.target.value)} placeholder="购买保险"/>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <i className="need-fill">*</i>
                        <span>上车地点</span>
                    </label>
                    <div className="form-select">
                        <select ref="selectSite" onChange={(e) => this.editForm('site', e.target.value)} value={item.site}>
                            <option value="">请选择</option>
                            <option value="五道口地铁站B口东200米展春园西路">五道口地铁站B口东200米展春园西路</option>
                        </select>
                        <i className="iconfont icon-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}
