import React from 'react'
import { Link } from 'react-router-dom'

const Patient = ({ patient, col }) => {
    return (
        <div className={`col-${col} my-3 card`}>
            <div className="row p-3 rounded">
                <div className="col-3">
                    <h5 className="card-title">
                        <Link to={`/patient/${patient._id}`}>Name: {patient.name}</Link>
                    </h5>
                </div>
                <div className="col-3">
                    Age: {patient.age}
                </div>
                <div className="col-3">
                    Sex: {patient.sex}
                </div>
                <Link to={`/patient/${patient._id}`} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
        </div>
    )
}

export default Patient
