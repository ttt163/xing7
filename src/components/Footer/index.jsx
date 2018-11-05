/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import {navData} from '../../public/config'
import './index.scss'
import {Link} from 'react-router'

export default class Footer extends Component {
    render () {
        return (
            <div className='footer-warp'>
                {
                    navData.map((item, index) => (
                        <Link to={item.path} activeClassName="active" onlyActiveOnIndex={true} className='f-nav-item' key={index}>
                            <i className={`iconfont ${item.icon}`}></i>
                            <label>{item.label}</label>
                        </Link>
                    ))
                }
            </div>
        )
    }
}
