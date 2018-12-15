import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
// import {axiosAjax, calculatePx} from '../../public/index'
import {axiosAjax} from '../../public/index'
import ActivitySwiper from '../../components/Index/activity-swiper'
import xing7 from '../../public/img/xing7.jpg'
import IndexActivityItem from '../../components/Index/index-activity-item'
import {Link} from 'react-router'
import ActivityItem from '../../components/ActivityListItem'

class Index extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('首页'))
        let data = {
            userName: 'zhaom',
            password: 'zhaom'
        }
        axiosAjax('post', 'api/login', data, (res) => {
        })
    }
    componentDidMount () {
        this.setSwiper()
    }
    setSwiper () {
        let recommendSwiper = new Swiper('.activity-swiper-warp .swiper-container', {
            loop: true
        })
        console.log(recommendSwiper)
        // recommendSwiper.autoplay = true
        /* let swiperItem = $('.activity-swiper-warp').find('.swiper-slide')
        if (swiperItem.length > 1) {
            let winW = document.body.scrollWidth
            let itemW = calculatePx(680)
            let space = calculatePx(20)
            let recommendSwiper = new Swiper('.activity-swiper-warp .swiper-container', {
                width: itemW * 3 + space * 2,
                slidesPerView: 3,
                initialSlide: 1,
                slidesOffsetBefore: (winW - itemW - space * 2) / 2 + space,
                spaceBetween: space,
                grabCursor: true,
                loop: true
            })
            console.log(recommendSwiper)
            // recommendSwiper.autoplay = true
        } */
    }
    render () {
        console.log(this.props)
        const {location} = this.props
        return <div className='index-warp'>
            {/* 首页轮播 */}
            <ActivitySwiper />
            {/* 推荐活动 */}
            <div className="activity-recommend">
                <div className="recommend-label">
                    <div>
                        <img src={xing7} />
                        <h2 className="color">推荐活动</h2>
                    </div>
                    <Link to="/activity">更多<i className="iconfont icon-right"></i></Link>
                </div>
                <div className='recommend-list'>
                    <IndexActivityItem />
                </div>
            </div>
            <div className="activity-recommend">
                <div className="recommend-label">
                    <div>
                        <img src={xing7} />
                        <h2 className="color">推荐活动</h2>
                    </div>
                    <Link to="/activity">更多<i className="iconfont icon-right"></i></Link>
                </div>
                <div className='recommend-list'>
                    <IndexActivityItem />
                </div>
            </div>
            {/* 独家活动 */}
            <div className="activity-exclusive">
                <div className="recommend-label">
                    <div>
                        <img src={xing7} />
                        <h2 className="color">独家活动</h2>
                    </div>
                    <Link to="/activity">更多<i className="iconfont icon-right"></i></Link>
                </div>
                <div className="x-scroll">
                    <div className='list'>
                        <ActivityItem pathName={location.pathname} />
                        <ActivityItem pathName={location.pathname} />
                        <ActivityItem pathName={location.pathname} />
                    </div>
                </div>
            </div>
            {/* 室内活动 */}
            <div className="activity-indoor">
                <div className="recommend-label">
                    <div>
                        <img src={xing7} />
                        <h2 className="color">室内活动</h2>
                    </div>
                    <Link to="/activity">更多<i className="iconfont icon-right"></i></Link>
                </div>
                <div className='list clearfix'>
                    <ActivityItem pathName={location.pathname} />
                    <ActivityItem pathName={location.pathname} />
                    <ActivityItem pathName={location.pathname} />
                    <ActivityItem pathName={location.pathname} />
                </div>
            </div>
            {/* 户外活动 */}
            <div className="activity-indoor">
                <div className="recommend-label">
                    <div>
                        <img src={xing7} />
                        <h2 className="color">户外活动</h2>
                    </div>
                    <Link to="/activity">更多<i className="iconfont icon-right"></i></Link>
                </div>
                <div className='list clearfix'>
                    <ActivityItem pathName={location.pathname} />
                    <ActivityItem pathName={location.pathname} />
                    <ActivityItem pathName={location.pathname} />
                    <ActivityItem pathName={location.pathname} />
                </div>
            </div>
            {/* 星七团建 */}
            <div className="activity-recommend">
                <div className="recommend-label">
                    <div>
                        <img src={xing7} />
                        <h2 className="color">星七团建</h2>
                    </div>
                    <Link to="/activity">更多<i className="iconfont icon-right"></i></Link>
                </div>
                <div className='recommend-list'>
                    <IndexActivityItem />
                </div>
            </div>
            {/* 联系我们 */}
            <div className="contact">
                <h2>联系我们</h2>
                <a href="tel:18745779017">
                    <i className="iconfont icon-phone"></i>
                    <label> 电话： </label>
                    <p>18745779017<span> (小七)</span></p>
                </a>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(Index)
