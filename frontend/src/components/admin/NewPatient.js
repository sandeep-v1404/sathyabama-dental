import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newPatient, clearErrors } from '../../actions/patientActions'
import { NEW_PATIENT_RESET } from '../../constants/patientConstants'

const NewPatient = ({ history }) => {
    const [outPatientId, setOutPatientId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("Choose");
    const [occupation, setOccupation] = useState("");
    const [contactNumber, setContactNumber] = useState(0);
    const [residentialAddress, setResidentialAddress] = useState("");

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.newPatient);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/patients');
            alert.success('Patient created successfully');
            dispatch({ type: NEW_PATIENT_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            outPatientId, name, age, sex, occupation, contactNumber, residentialAddress
        }
        dispatch(newPatient(userData));
    }

    return (
        <Fragment>
            <MetaData title={'New Patient'} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Fragment>
                            <div className="container wrapper my-5">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-12 col-md-8">
                                        <form className="p-3 shadow-lg" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <h1 className="mb-4">New Patient </h1>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="id_field">Id</label>
                                                <input
                                                    type="text"
                                                    placeholder="YYYY----"
                                                    id="id_field"
                                                    className="form-control"
                                                    value={outPatientId}
                                                    onChange={(e) => setOutPatientId(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_field">Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Abraham"
                                                    id="name_field"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="age_field">Age</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    placeholder="25"
                                                    id="age_field"
                                                    className="form-control"
                                                    value={age}
                                                    onChange={(e) => setAge(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category_field">Sex</label>
                                                <select className="form-control" id="category_field" value={sex} onChange={(e) => setSex(e.target.value)}>
                                                    <option disabled>Choose</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="occupation_field">Occupation</label>
                                                <input
                                                    type="text"
                                                    id="occupation_field"
                                                    className="form-control"
                                                    value={occupation}
                                                    onChange={(e) => setOccupation(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="contactNumber_field">Contact Number</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    id="contactNumber_field"
                                                    className="form-control"
                                                    value={contactNumber}
                                                    onChange={(e) => setContactNumber(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="residentialAddress_field">Residential Address</label>
                                                <textarea
                                                    type="text"
                                                    id="residentialAddress_field"
                                                    className="form-control"
                                                    value={residentialAddress}
                                                    onChange={(e) => setResidentialAddress(e.target.value)}
                                                />
                                            </div>
                                            <button
                                                id="login_button"
                                                type="submit"
                                                className="btn btn-block py-3"
                                            >
                                                CREATE
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default NewPatient
