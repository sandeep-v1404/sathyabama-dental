import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable, MDBTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminPatients, deletePatient, clearErrors } from '../../actions/patientActions'
import { DELETE_PATIENT_RESET } from '../../constants/patientConstants'
import { useColorMode } from "@chakra-ui/react"
import { HStack, Center, Box } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"

const PatientsList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { colorMode, } = useColorMode()
    const { loading, error, patients } = useSelector(state => state.patients);
    const { error: deleteError, isDeleted } = useSelector(state => state.patient)

    useEffect(() => {
        dispatch(getAdminPatients());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Patient deleted successfully');
            history.replace('/admin/patients');
            window.location.reload();
            dispatch({ type: DELETE_PATIENT_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setPatients = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Age',
                    field: 'age',
                    sort: 'asc'
                },
                {
                    label: 'Sex',
                    field: 'sex',
                    sort: 'asc'
                },
                {
                    label: 'Contact No.',
                    field: 'contact',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        patients.forEach(patient => {
            data.rows.push({
                id: patient.outPatientId,
                name: patient.name,
                age: patient.age,
                sex: patient.sex,
                contact: patient.contactNumber,
                actions:
                    <HStack>
                        <Center w="40px" h="40px" bg="blue.300" color="white">
                            <Link to={`/admin/patient/${patient.id}`} >
                                <EditIcon />
                            </Link>
                        </Center>
                        <Center w="40px" h="40px" bg="red.300" color="white" _hover={{ cursor: "pointer" }} onClick={() => deleteProductHandler(patient.id)}>
                            <Box as="span" fontWeight="bold" fontSize="lg" >
                                <DeleteIcon />
                            </Box>
                        </Center>
                    </HStack>
            })
        })

        return data;
    }

    const deleteProductHandler = (id) => {
        dispatch(deletePatient(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Patients'} />
            <div className="container">

                <div className="row">

                    <div className="col-12">
                        <Fragment>
                            <h1 className="my-5">All Patients</h1>

                            {loading ? <Loader /> : (
                                <MDBTable responsive>
                                    <MDBDataTable
                                        theadTextWhite={colorMode === "dark"}
                                        tbodyTextWhite={colorMode === "dark"}
                                        data={setPatients()}
                                        className="px-3"
                                        bordered
                                        striped
                                        sorting="true"
                                    />
                                </MDBTable>
                            )}
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PatientsList
