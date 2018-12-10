import React, {Component} from 'react'
import './index.scss'
import { connect } from 'react-redux'
import {setPageTitle} from '../../actions/public'
import DetailFooter from '../../components/ActivityDetail/footer'
import PhoneList from '../../components/ActivityDetail/phone-list'
import SelectBox from '../../components/ActivityDetail/selectBox'

class ActivityDetail extends Component {
    constructor () {
        super()
        this.state = {
            showPhoneList: false,
            showSelectBox: false
        }
    }
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动标题'))
    }

    changePhoneList () {
        this.setState({
            showPhoneList: !this.state.showPhoneList
        })
    }

    showSelect () {
        this.setState({
            showSelectBox: true
        })
    }
    render () {
        const {showPhoneList, showSelectBox} = this.state
        return <div className="detail-warp">
            <div className="top">
                <img className="activity-img" src="http://img.saihuitong.com/5426/img/3626466/1665f20e74b.jpg-w702"/>
                <div className="detail-info">
                    <h1>中国雪乡，一生中一定要去看看的冬天！</h1>
                    <div>
                        <div>费用<span className="price">750</span>/人</div>
                        <div className="right">余位<span className="num">（374）</span>/已报名<span className="num">（23）</span></div>
                    </div>
                    <div>
                        <div>会员费用<span className="price">750</span>/人</div>
                    </div>
                </div>
            </div>
            <div className='page-box'>
                <div className='page-box-item'>
                    <label>
                        <i className="iconfont icon-site"></i>
                        <span>集合地：</span>
                    </label>
                    <p>北京 朝阳  elements 酒吧 </p>
                </div>
                <div className='page-box-item'>
                    <label>
                        <i className="iconfont icon-site"></i>
                        <span>集合地：</span>
                    </label>
                    <p>北京 朝阳  elements 酒吧 </p>
                </div>
                <div className='page-box-item'>
                    <label>
                        <i className="iconfont icon-time"></i>
                        <span>活动时间：</span>
                    </label>
                    <p>12/12-12/13、12/15-12/16、12/15-12/16、12/15-12/16</p>
                </div>
                <div className='page-box-item'>
                    <label>
                        <i className="iconfont icon-user"></i>
                        <span>领队：</span>
                    </label>
                    <div><span>李燕</span><a className="ml20" href="tel:18618372012">18618372012</a></div>
                </div>
            </div>
            <div className='page-box'>
                <div className='page-box-item between' onClick={() => this.showSelect()}>
                    <div>
                        <label><span>选择批次：</span></label>
                        <div>周三男士</div>
                    </div>
                    <a href="javascript:void(0)" className="select">
                        <span>选择</span>
                        <i className='iconfont icon-right'></i>
                    </a>
                </div>
            </div>
            <div className='page-box'>
                <div className='page-box-item between'>
                    <label><span>咨询留言</span></label>
                    <i className='iconfont icon-right'></i>
                </div>
            </div>
            {/* 选择批次 */}
            <SelectBox isShow={showSelectBox} hideBox={() => this.setState({showSelectBox: false})} />
            {/* 底部 */}
            <DetailFooter changePhoneList={() => this.changePhoneList()} showSelect={() => this.showSelect()} />
            <PhoneList hideList={() => this.setState({showPhoneList: false})} isShow={showPhoneList} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(ActivityDetail)
