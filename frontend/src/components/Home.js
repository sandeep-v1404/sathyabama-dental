import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import 'rc-slider/assets/index.css';
import Patient from './patient/Patient'
import Loader from './layout/Loader'
import MetaData from "./layout/MetaData"

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getPatients } from '../actions/patientActions'

const Home = ({ match }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, patients, error, patientsCount, resPerPage, filteredPatientsCount } = useSelector(state => state.patients)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getPatients(keyword, currentPage));


    }, [dispatch, alert, error, keyword, currentPage])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    let count = patientsCount;
    if (keyword) {
        count = filteredPatientsCount
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Sathyabama Dental - Home'} />

                    <section id="patients" className="container mt-5">
                        {patients.map(patient => (
                            <div className="row">
                                <Patient key={patient._id} patient={patient} col={12} />
                            </div>
                        ))}
                    </section>

                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={patientsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </Fragment>
            )}

        </Fragment>
    )
}

export default Home
