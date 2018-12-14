import React, {Component} from 'react'
import './activity-swiper.scss'
import {Link} from 'react-router'

export default class ActivitySwiper extends Component {
    render () {
        return (
            <div className="activity-swiper-warp">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Link className="swiper-slide">
                            <img src="http://img.saihuitong.com/5426/img/3626466/16517eee159.jpg" />
                            {/* <img src="http://img.saihuitong.com/5426/img/3626466/1670c48ce86.jpg-cw300h200" /> */}
                        </Link>
                        <Link className="swiper-slide">
                            <img src="http://img.saihuitong.com/5426/img/3626466/16517e82082.jpg" />
                            {/* <img src="http://img.saihuitong.com/5426/img/3626466/1675e5c8677.jpg-cw300h200" /> */}
                        </Link>
                        <Link className="swiper-slide">
                            <img src="http://img.saihuitong.com/5426/img/3626466/16517eee159.jpg" />
                            {/* <img src="http://img.saihuitong.com/5426/img/3626466/16686bfb116.jpg-cw300h200" /> */}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
