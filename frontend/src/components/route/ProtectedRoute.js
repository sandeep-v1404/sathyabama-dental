import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (isAuthenticated === false) {
                            return <Redirect to='/login' />
                        }

                        if (isAdmin === true && user.department !== 'Administrator') {
                            return <Redirect to="/" />
                        }

                        return <Component {...props} />
                    }}
                />
            )}
        </Fragment>
    )
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
    isAdmin: PropTypes.any,
    component: PropTypes.any,
};