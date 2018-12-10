import React, {Component} from 'react'
import './index.scss'
import { connect } from 'react-redux'
import Title from 'react-title-component'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderNav from '../../components/HeaderNav'

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            navIsShow: false
        }
    }

    showNav () {
        this.setState({
            navIsShow: true
        })
    }

    hideNav () {
        this.setState({
            navIsShow: false
        })
    }

    render () {
        const {publicInfo, location} = this.props
        const {navIsShow} = this.state
        const {title} = publicInfo
        return <div className="page-warp">
            <Title render={title}/>
            <div className="page-main">
                <Header path={location.pathname} pageTitle={title} showNav={() => this.showNav()} />
                <div className='page-main'>
                    {this.props.children}
                </div>
                {
                    /(\/activity-detail)/.test(location.pathname) ? '' : <Footer/>
                }
            </div>
            <HeaderNav isShow={navIsShow} hideNav={() => this.hideNav()} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(Main)
