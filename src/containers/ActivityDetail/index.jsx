import React, {Component} from 'react'
import './index.scss'
import { connect } from 'react-redux'
import {setPageTitle} from '../../actions/public'

class ActivityDetail extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动标题'))
    }
    render () {
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
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(ActivityDetail)
