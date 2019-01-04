/**
 * Author：tantingting
 * Time：2018/12/10
 * Description：Description
 */

import React, {Component} from 'react'
import './selectBox.scss'
import {hashHistory} from 'react-router'
import {setImg} from '../../public'

export default class SelectBox extends Component {
    constructor (props) {
        super(props)
        this.state = {
            person: !props.selectBatch || !props.selectBatch.selectPerson ? 1 : props.selectBatch.selectPerson
        }
    }

    setDate (key, val) {
        this.setState({[key]: val})
    }

    submit () {
        const {person} = this.state
        const {select, selectBatch} = this.props
        selectBatch({...select, selectPerson: person})
        hashHistory.push('/terms')
    }

    render () {
        const {isShow, hideBox, data, select, selectBatch} = this.props
        const {person} = this.state
        return (
            <div className="select-box-warp" style={{display: !isShow ? 'none' : 'block'}}>
                <div className="mask" onClick={() => hideBox()}></div>
                <div className="select-box">
                    <div className="top">
                        <div className="activity-img">
                            <img src={setImg(data.itemImg)} />
                        </div>
                        <div className="info">
                            <h3>{data.title}</h3>
                            <p>余位：{select.currentPeople}</p>
                        </div>
                    </div>
                    <div className="contain">
                        <div className='select-item'>
                            <label>选择批次：</label>
                            <ul className="clearfix">
                                {
                                    data.batchs.map((item, index) => (
                                        <li key={index} className={select.batchId === item.batchId ? 'selected' : ''} onClick={() => selectBatch(item)}>{item.bathName}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="select-item">
                            <label>选择人数：</label>
                            <div className="select-person">
                                <p>¥&nbsp;{select.price}/人</p>
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
                            <p>批次：{select.bathName}</p>
                        </div>
                        <div className="btn" onClick={() => this.submit()}>确定</div>
                    </div>
                </div>
            </div>
        )
    }
}
