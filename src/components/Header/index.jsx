/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import {Link, hashHistory} from 'react-router'
import './index.scss'

export default class Header extends Component {
    goBack () {
        hashHistory.goBack()
    }
    render () {
        const {pageTitle, showNav, path} = this.props
        return (
            <div className={path === '/user' ? 'header-warp user-header' : 'header-warp'}>
                {path === '/' ? (
                    <Link to='/user'>
                        <i className='iconfont icon-user'></i>
                    </Link>
                ) : (
                    <a href="javascript:void(0)" onClick={() => { this.goBack() }} className='go-back'>
                        <i className='iconfont icon-back'></i>
                    </a>
                )}
                {path === '/user' ? '' : <h3 className='page-title'>{pageTitle}</h3>}
                <a href="javascript:void(0)" className='h-nav' onClick={() => showNav()}>
                    <i className='iconfont icon-nav'></i>
                </a>
            </div>
        )
    }
}
