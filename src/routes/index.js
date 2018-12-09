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
        <Route path='/activity' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Activity').default)
            }, 'Activity')
        }}/>
        <Route path='/activity-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ActivityDetail').default)
            }, 'ActivityDetail')
        }}/>
    </Route>
</div>

export default rootRoutes
