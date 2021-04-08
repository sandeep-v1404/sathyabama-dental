import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const UpdateProfile = ({ history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        if (user) {
            setName(user.name);
            setEmail(user.email);
            setDepartment(user.department);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')
            dispatch(loadUser());

            history.push('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);

        dispatch(updateProfile(formData))
    }

    return (
        <Fragment>
            <MetaData title={'Update Profile'} />
            <div className="container">
                <div className="row my-5 align-items-center justify-content-center">
                    <div className="col-12 col-md-8">
                        <form className="shadow-lg p-3" onSubmit={submitHandler} encType='multipart/form-data'>
                            <div className="form-group">
                                <h4 className="font-weight-bolder">Update Profile</h4>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email_field">Name</label>
                                <input
                                    type="name"
                                    id="name_field"
                                    className="form-control"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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

                            <div className="form-group">
                                <label htmlFor="department_field">Department</label>
                                <input
                                    type="name"
                                    id="name_field"
                                    className="form-control"
                                    name='name'
                                    value={department}
                                    readOnly
                                />
                            </div>
                            <button type="submit" className="btn update-btn btn-block mt-4 mb-3" disabled={loading ? true : false} >Update</button>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateProfile
