import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Public = ({component: Component, isAuth, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth && restricted ?
                <Redirect to="/" />
            : <Component {...props} key={document.location.href} />
        )} />
    )
}

export default Public
