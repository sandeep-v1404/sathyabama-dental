import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getPatientDetails, updatePatient } from '../../actions/patientActions'
import { UPDATE_PATIENT_RESET } from '../../constants/patientConstants'
import MetaData from '../layout/MetaData'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const UpdatePatient = ({ match }) => {
    const history = useHistory()
    const [outPatientId, setOutPatientId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("Choose");
    const [occupation, setOccupation] = useState("");
    const [contactNumber, setContactNumber] = useState(0);
    const [residentialAddress, setResidentialAddress] = useState("");

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, patient } = useSelector(state => state.patientDetails)
    const { error: updateError, isUpdated } = useSelector(state => state.patient);

    const patientId = match.params.id;
    useEffect(() => {
        if (patient && patient.id !== patientId) {
            dispatch(getPatientDetails(patientId));
        } else {
            setOutPatientId(patient.outPatientId);
            setName(patient.name);
            setAge(patient.age);
            setSex(patient.sex);
            setOccupation(patient.occupation);
            setContactNumber(patient.contactNumber);
            setResidentialAddress(patient.residentialAddress)
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }
        if (isUpdated) {
            history.replace("/admin/patients")
            window.location.reload();

            alert.success('Patient updated successfully');
            dispatch({ type: UPDATE_PATIENT_RESET })
        }
    }, [dispatch, alert, error, isUpdated, history, updateError, patient, patientId])

    const submitHandler = (e) => {
        e.preventDefault();
        const patientData = {
            outPatientId, name, age, sex, occupation, contactNumber, residentialAddress
        }

        dispatch(updatePatient(patient.id, patientData));
    }

    return (
        <Fragment>
            <MetaData title={'Update Patient'} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Fragment>
                            <div className="container wrapper my-5">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-12 col-md-8">
                                        <form className="p-3 shadow-lg" onSubmit={submitHandler}>
                                            <h1 className="mb-4">Update Patient Details</h1>

                                            <div className="form-group">
                                                <label htmlFor="name_field">Id</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={outPatientId}
                                                    readOnly
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
                                                UPDATE
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

export default UpdatePatient

UpdatePatient.propTypes = {
    match: PropTypes.any,
};