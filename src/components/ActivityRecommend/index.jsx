/**
 * Author：tantingting
 * Time：2018/12/11
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'
import RecommendItem from '../ActivityRecommendItem'

export default class ActivityRecommend extends Component {
    render () {
        return (
            <div className="activity-recommend">
                <div className="recommend-title">
                    <h4>相关推荐</h4>
                    <div className="line"></div>
                </div>
                <div className="recommend-list clearfix">
                    <RecommendItem />
                    <RecommendItem />
                </div>
            </div>
        )
    }
}
