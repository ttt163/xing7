import React from 'react'
import { Route, IndexRoute } from 'react-router'

const rootRoutes = <div>
    <Route path="/" getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Main').default)
        }, 'Main')
    }}>
        <IndexRoute getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Index').default)
            }, 'Index')
        }}/>
        <Route path='/' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Index').default)
            }, 'Index')
        }}/>
        <Route path='/activity(/:type)' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity').default)
            }, 'Activity')
        }}/>
        <Route path='/activity-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityDetail').default)
            }, 'ActivityDetail')
        }}/>
        <Route path='/terms' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Terms').default)
            }, 'Terms')
        }}/>
        <Route path='/apply' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityApply').default)
            }, 'ActivityApply')
        }}/>
        <Route path='/user' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/User').default)
            }, 'Terms')
        }}/>
        <Route path='/user-apply' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/UserApply').default)
            }, 'UserApply')
        }}/>
        <Route path='/user-message' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/UserMessage').default)
            }, 'UserMessage')
        }}/>
        <Route path='/order-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/OrderDetail').default)
            }, 'OrderDetail')
        }}/>
    </Route>
</div>

export default rootRoutes
