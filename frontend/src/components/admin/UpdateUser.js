import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUserDetails, clearErrors } from '../../actions/userActions'
import { UPDATE_USER_RESET } from '../../constants/userConstants'
import PropTypes from 'prop-types';

const UpdateUser = ({ history, match }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('Choose')
    const [department, setDepartment] = useState('Choose');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user);
    const { user } = useSelector(state => state.userDetails)

    const userId = match.params.id;

    useEffect(() => {
        if (user && user.id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setUsername(user.username);
            setEmail(user.email);
            setRole(user.role);
            setDepartment(user.department);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')

            history.push('/admin/users')

            dispatch({
                type: UPDATE_USER_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated, userId, user])

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            username, email, role, department
        }

        dispatch(updateUser(user.id, userData))
    }


    return (
        <Fragment>
            <MetaData title={`Update User`} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-8 my-5">
                                <form className="shadow-lg p-3" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <h2 className="font-weight-bolder">Update User</h2>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name_field">Username</label>
                                        <input
                                            type="name"
                                            id="name_field"
                                            className="form-control"
                                            name='name'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email_field">Email</label>
                                        <input
                                            type="email"
                                            id="email_field"
                                            className="form-control"
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {user && user.department !== "Administrator" && <> <div className="form-group">
                                        <label htmlFor="role_field">Role</label>
                                        <select
                                            id="role_field"
                                            className="form-control"
                                            name='role'
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                        >
                                            <option disabled>Choose</option>
                                            <option value="Authorized">Authorized</option>
                                            <option value="Unauthorized">Unauthorized</option>
                                        </select>
                                    </div>
                                        <div className="form-group">
                                            <label htmlFor="role_field">Department</label>
                                            <select className="form-control" id="department_field" value={department} onChange={(e) => setDepartment(e.target.value)}>
                                                <option disabled>Choose</option>
                                                <option value="D1">D1</option>
                                                <option value="D2">D2</option>
                                                <option value="D3">D3</option>
                                                <option value="D4">D4</option>
                                                <option value="D5">D5</option>
                                                <option value="D6">D6</option>
                                                <option value="D7">D7</option>
                                                <option value="D8">D8</option>
                                                <option value="D9">D9</option>
                                            </select>
                                        </div>
                                    </>
                                    }


                                    <button type="submit" disabled={role === "Administrator"} className="btn update-btn btn-block mt-4 mb-3" >Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}

export default UpdateUser

UpdateUser.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};