import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
import {setImg} from '../../public'

export default class RecommendItem extends Component {
    render () {
        const {item} = this.props
        const {activeBath} = item
        return (
            <Link to={{pathname: '/activity-detail', query: {activityId: item.activeId}}} className='activity-item'>
                <div className='activity-img'>
                    <img src={setImg(item.itemImg)} />
                </div>
                <div className="info">
                    <h3 className="item-title">{item.title}</h3>
                    <div className="item-price">￥{activeBath.price}（<i className="iconfont icon-vip"></i>￥{<activeBath className="vipPrice"></activeBath>}）</div>
                </div>
            </Link>
        )
    }
}
