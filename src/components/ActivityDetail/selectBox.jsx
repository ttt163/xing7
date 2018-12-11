/**
 * Author：tantingting
 * Time：2018/12/10
 * Description：Description
 */

import React, {Component} from 'react'
import './selectBox.scss'
import {hashHistory} from 'react-router'

const list = ['周三男士', '周三女士', '圣诞节', '12日-14日']

export default class SelectBox extends Component {
    constructor (props) {
        super(props)
        this.state = {
            time: !props.time ? list[2] : props.time,
            person: !props.person ? 1 : props.person
        }
    }

    setDate (key, val) {
        this.setState({[key]: val})
    }

    submit () {
        hashHistory.push('/terms')
    }

    render () {
        const {isShow, hideBox} = this.props
        const {time, person} = this.state
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
                                {
                                    list.map((item, index) => (
                                        <li key={index} className={item === time ? 'selected' : ''} onClick={() => this.setDate('time', item)}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="select-item">
                            <label>选择人数：</label>
                            <div className="select-person">
                                <p>¥&nbsp;750/人</p>
                                <div className="action-box">
                                    <i className="iconfont icon-reduce" onClick={() => this.setDate('person', person - 1 < 1 ? 1 : person - 1)}></i>
                                    <span>{person}</span>
                                    <i className="iconfont icon-add" onClick={() => this.setDate('person', person + 1 > 10 ? 10 : person + 1)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="left">
                            <p>{person}人</p>
                            <p>批次：{time}</p>
                        </div>
                        <div className="btn" onClick={() => this.submit()}>确定</div>
                    </div>
                </div>
            </div>
        )
    }
}
