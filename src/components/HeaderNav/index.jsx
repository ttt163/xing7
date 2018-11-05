/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'
import {navData} from '../../public/config'
import {Link} from 'react-router'

export default class Header extends Component {
    render () {
        const {isShow, hideNav} = this.props
        return (
            <div className="header-nav" style={{display: !isShow ? 'none' : 'block'}}>
                <div onClick={() => { hideNav() }} className="mask" style={{display: !isShow ? 'none' : 'block'}}></div>
                <div className={!isShow ? 'header-nav-contain' : 'header-nav-contain show'}>
                    <h1 className="nav-title">星七Club</h1>
                    <div className="nav-main">
                        {
                            navData.map((item, index) => (
                                <Link className="nav-item" key={index} to={item.path}>
                                    <label>{item.label}</label>
                                    <i className="iconfont icon-right"></i>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
