/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'

export default class Header extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    goBack () {
        history.back()
    }
    render () {
        const {pageTitle, showNav, path} = this.props
        return (
            <div className='header-warp'>
                {path === '/' ? (
                    <Link to='/user'>
                        <i className='iconfont icon-user'></i>
                    </Link>
                ) : (
                    <a href="javascript:void(0)" onClick={() => { this.goBack() }} className='go-back'>
                        <i className='iconfont icon-back'></i>
                    </a>
                )}
                <h3 className='page-title'>{pageTitle}</h3>
                <a href="javascript:void(0)" className='h-nav' onClick={() => showNav()}>
                    <i className='iconfont icon-nav'></i>
                </a>
            </div>
        )
    }
}
