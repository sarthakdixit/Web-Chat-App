import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Private = ({component: Component, isAuth, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth ?
                <Component {...props} key={document.location.href} />
            : <Redirect to="/auth" />
        )} />
    )
}

export default Private