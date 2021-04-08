import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'

const Register = ({ history }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        department: 'Choose',
    })

    const { name, email, password, department } = user;

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('department', department);

        dispatch(register(formData))
    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Fragment>

            <MetaData title={'Register User'} />

            <div className="container wrapper">
                <div className="row my-5 align-items-center justify-content-center">
                    <div className="col-12 col-md-8">
                        <form className="shadow-lg p-3" onSubmit={submitHandler} encType='multipart/form-data'>
                            <div className="form-group">
                                <h2 className="font-weight-bolder">Register</h2>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email_field">Name</label>
                                <input
                                    type="name"
                                    id="name_field"
                                    className="form-control"
                                    name='name'
                                    value={name}
                                    onChange={onChange}
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
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password_field">Password</label>
                                <input
                                    type="password"
                                    id="password_field"
                                    className="form-control"
                                    name='password'
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department_field">Department</label>

                                <select className="form-control" name='department' id="department_field" value={department} onChange={onChange}>
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
                            <button
                                id="register_button"
                                type="submit"
                                className="btn btn-block py-3"
                                disabled={loading ? true : false}
                            >
                                REGISTER
                        </button>
                            <div className="form-group mt-2 mb-3">
                                <Link to="/login" className="pull-right">Have an Account ? Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
