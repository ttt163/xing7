/**
 * Author：tantingting
 * Time：2018/12/10
 * Description：Description
 */

import React, {Component} from 'react'
import './selectBox.scss'

export default class SelectBox extends Component {
    render () {
        const {isShow, hideBox} = this.props
        return (
            <div className="select-box-warp" style={{display: !isShow ? 'none' : 'block'}}>
                <div className="mask" onClick={() => hideBox()}></div>
                <div className="select-box">
                    <div className="top">
                        <div className="activity-img">
                            <img src="http://img.saihuitong.com/5426/img/3626466/1665f20e74b.jpg-w702" />
                        </div>
                        <div className="info">
                            <h3>周三/六酒吧场| 人生就要及时行乐，爱乐酒吧放肆嗨（elements club）</h3>
                            <p>余位：27</p>
                        </div>
                    </div>
                    <div className="contain">
                        <div className='select-item'>
                            <label>选择批次：</label>
                            <ul className="clearfix">
                                <li className="selected">周三男士</li>
                                <li>周三女士</li>
                                <li>圣诞节</li>
                                <li>12日-14日</li>
                                <li>12日-14日</li>
                                <li>12日-14日</li>
                                <li>12日-14日</li>
                            </ul>
                        </div>
                        <div className="select-item">
                            <label>选择人数：</label>
                            <div className="select-person">
                                <p>¥&nbsp;750/人</p>
                                <div className="action-box">
                                    <i className="iconfont icon-reduce"></i>
                                    <span>1</span>
                                    <i className="iconfont icon-add"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="left">
                            <p>1人</p>
                            <p>批次：周三男士</p>
                        </div>
                        <div className="btn">确定</div>
                    </div>
                </div>
            </div>
        )
    }
}
