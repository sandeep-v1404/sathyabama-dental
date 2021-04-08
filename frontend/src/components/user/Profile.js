import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />
                    <div className="container">
                        <div className="row justify-content-around mt-5 user-info">
                            <div className="col-12 col-md-5">
                                <h4>Full Name</h4>
                                <p>{user.name}</p>

                                <h4>Email Address</h4>
                                <p>{user.email}</p>

                                <h4>Joined On</h4>
                                <p>{String(user.createdAt).substring(0, 10)}</p>

                                <h4>Department</h4>
                                <p>{user.department}</p>

                                <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                    Change Password
                            </Link>
                                <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block">
                                    Edit Profile
                            </Link>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Profile
