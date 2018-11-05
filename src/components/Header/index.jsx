/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'

export default class Header extends Component {
    goBack () {
        history.back()
    }
    render () {
        const {pageTitle, showNav} = this.props
        return (
            <div className='header-warp'>
                <a href="javascript:void(0)" onClick={() => { this.goBack() }} className='go-back'>
                    <i className='iconfont icon-back'></i>
                </a>
                <h3 className='page-title'>{pageTitle}</h3>
                <a href="javascript:void(0)" className='h-nav' onClick={() => showNav()}>
                    <i className='iconfont icon-nav'></i>
                </a>
            </div>
        )
    }
}
