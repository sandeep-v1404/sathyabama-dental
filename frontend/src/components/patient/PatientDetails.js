import React, { Fragment, useState, useEffect } from 'react'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientDetails, clearErrors } from '../../actions/patientActions'

const PatientDetails = ({ match }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, patient } = useSelector(state => state.patientDetails)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getPatientDetails(match.params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, match.params.id])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={patient.name} />
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 mt-5">
                            <h3>{patient.name}</h3>
                            <p>patient # {patient._id}</p>
                            <hr />
                            <p>{patient.name}</p>
                            <hr />
                            <h4 className="mt-2">Age:</h4>
                            <p>{patient.age}</p>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default PatientDetails
