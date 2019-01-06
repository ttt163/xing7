import React, {Component} from 'react'
import './activity-swiper.scss'
import {Link} from 'react-router'
import {setImg} from '../../public'

export default class ActivitySwiper extends Component {
    render () {
        const {list} = this.props
        return (
            <div className="activity-swiper-warp">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            !list ? '' : list.map((item, index) => (
                                <Link className="swiper-slide" key={index} to={{pathname: '/activity-detail', query: {activityId: item.activeId}}}>
                                    <img src={setImg(item.wheelName)} />
                                    {/* <img src="http://img.saihuitong.com/5426/img/3626466/16517e82082.jpg" /> */}
                                </Link>
                            ))
                        }
                        {/* <Link className="swiper-slide">
                            <img src="http://img.saihuitong.com/5426/img/3626466/16517e82082.jpg" />
                        </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}
