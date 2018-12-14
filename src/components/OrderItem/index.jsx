/**
 * Author：tantingting
 * Time：2018/11/5
 * Description：Description
 */

import React, {Component} from 'react'
import './index.scss'

export default class OrderItem extends Component {
    render () {
        return (
            <div className="order-item">
                <div className="top">
                    <h3 className="color">订单号：20181213152219924489</h3>
                    <span>交易已取消</span>
                </div>
                <div className="contain">
                    <img src="http://img.saihuitong.com/5426/img/3626466/1667cd0eec9.jpg-cw480h320" />
                    <div className="info">
                        <h3>蹦床交友派对——出大招！放福利！蹦床交友派对——出大招！放福利蹦床交友派对——出大招！放福利</h3>
                        <p>选择批次：周六</p>
                        <div>
                            <p>数量：2人</p>
                            <div className="price color">¥1500</div>
                        </div>
                    </div>
                </div>
                <div className="btns clearfix">
                    <div className="btn-del">删除订单</div>
                </div>
            </div>
        )
    }
}
