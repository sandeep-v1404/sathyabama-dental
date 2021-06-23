import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getPatientDetails } from '../../actions/patientActions'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const PatientDetails = ({ match }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, patient } = useSelector(state => state.patientDetails)
    // const { user } = useSelector(state => state.auth)

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
                            <p>patient # {patient.outPatientId}</p>
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
