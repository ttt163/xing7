/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'
import loadingImg from '../../public/img/loding.gif'
import noMoreImg from '../../public/img/nomore_bg.png'

export default class LoadMore extends Component {
    render () {
        const {hasMore} = this.props
        return (
            <div className="loading-more">
                {
                    !hasMore ? (
                        <div className="no-more">
                            <img src={noMoreImg} />
                        </div>
                    ) : (
                        <div className="has-more">
                            <img src={loadingImg} />
                            <span>正在加载中...</span>
                        </div>
                    )
                }
            </div>
        )
    }
}
