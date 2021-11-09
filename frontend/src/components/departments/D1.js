import {
    Box, Button, Flex, Heading, SimpleGrid, Stack, Text, useColorModeValue, useToast
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl,
    TextareaControl
} from "formik-chakra-ui"
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, deletePatientDataInDepartment, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { DELETE_DEPT_DATA_RESET, UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'
import Loader from "../layout/Loader"
import MetaData from '../layout/MetaData'


const D1 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: "",
        medicalHistory: "Diabetes/Hypertension/Cardiac Disorder/Rheumatic Fever/Epilepsy/ Bleeding Disorders\nJaundice/ Hepatitis / Asthma / Typhoid / Drug Allergy/Allergic to L.A Injections/Anaemia\nPregnancy / Menstrual Cycle/Others",
        familyHistory: 'Diabetes/Blood Dyscrasias/Hypertension/Consanguineous Marriage/Other',
        clinicalFindings: "",
        diagnosis: "",
        prognosis: "",
        investigations: "",
        radiographs: "",
        treatmentPlan: "",
        treatmentDone: "",
    };

    const [loadedValues, setLoadedValues] = useState(null);

    const dispatch = useDispatch();

    const { patient } = useSelector(state => state.patient);
    const { loading, success, deleted, error } = useSelector(state => state.department);

    const patientId = match.params.patientId;
    useEffect(() => {
        if (error) {
            toast({
                title: error,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            dispatch(clearErrors());
        }

        if (deleted) {
            toast({
                title: 'Patient Deleted successfully',
                status: "info",
                duration: 5000,
                isClosable: true,
            });
            history.push("/");
            dispatch({ type: DELETE_DEPT_DATA_RESET })
            dispatch({ type: PATIENT_RESET })
        }

        if (success) {
            toast({
                title: 'Patient Updated successfully',
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            history.push("/");
            dispatch({ type: UPDATE_DEPT_DATA_RESET })
            dispatch({ type: PATIENT_RESET })

        }
        if (patient && patient.patientDOneData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDOneData.id || null,
                chiefComplaint: patient.patientDOneData.chiefComplaint,
                medicalHistory: patient.patientDOneData.medicalHistory,
                familyHistory: patient.patientDOneData.familyHistory,
                clinicalFindings: patient.patientDOneData.clinicalFindings,
                diagnosis: patient.patientDOneData.diagnosis,
                prognosis: patient.patientDOneData.prognosis,
                investigations: patient.patientDOneData.investigations,
                radiographs: patient.patientDOneData.radiographs,
                treatmentPlan: patient.patientDOneData.treatmentPlan,
                treatmentDone: patient.patientDOneData.treatmentDone,
            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD2 === false) {
            toast({
                title: "Not Authorized",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            history.push("/");
            dispatch(clearErrors());
        }
    }, [dispatch, history, success, deleted])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }
    const deleteHandler = () => {
        dispatch(deletePatientDataInDepartment(user.department, patientId));
    }
    return (
        <Fragment>

            <MetaData title={`Department of Periodontia`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 800]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Department of Periodontia</Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <SimpleGrid minChildWidth="150px" spacing="30px" alignItems="center">
                                <Box>
                                    OP Id <Text fontSize="lg" fontWeight="bold">{patient.outPatientId}</Text>
                                </Box>
                                <Box>
                                    Name <Text fontSize="lg" fontWeight="bold">{patient.name}</Text>
                                </Box>
                                <Box>
                                    Age <Text fontSize="lg" fontWeight="bold"> {patient.age}</Text>
                                </Box>
                                <Box>
                                    Contact No. <Text fontSize="lg" fontWeight="bold">{patient.contactNumber}</Text>
                                </Box>
                                <Box>
                                    Occupation <Text fontSize="lg" fontWeight="bold">{patient.occupation}</Text>
                                </Box>

                            </SimpleGrid>
                            <Box mt={3} mb={3}>
                                Residential Address<Text fontSize="md" fontWeight="bold"> {patient.residentialAddress}</Text>
                            </Box>
                            <Stack spacing={4}>
                                <Formik
                                    enableReinitialize
                                    initialValues={loadedValues || initialValues}
                                    onSubmit={(values) => {
                                        submitHandler(values);
                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <InputControl hidden name="id" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="medicalHistory" label="Medical History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="familyHistory" label="Family History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="clinicalFindings" label="Clinical Findings" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="diagnosis" label="Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="prognosis" label="Prognosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="investigations" label="Investigations" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="radiographs" label="Radiographs" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="treatmentPlan" label="Treatment Plan" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D1'} name="treatmentDone" label="Treatment Done" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D1'}
                                                    type={"submit"}
                                                    boxShadow={
                                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                                    }
                                                    bg={'blue.400'}
                                                    color={'white'}
                                                    _hover={{
                                                        bg: 'blue.500',
                                                    }}>
                                                    Update
                                                </Button>
                                                {
                                                    user.department === 'D1' && patient && patient.patientDOneData &&
                                                    <Button
                                                        onClick={deleteHandler}
                                                        boxShadow={
                                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                                        }
                                                        bg={'red.400'}
                                                        color={'white'}
                                                        _hover={{
                                                            bg: 'red.500',
                                                        }}>
                                                        Delete Patient
                                                    </Button>
                                                }
                                            </Stack>
                                        </Form>
                                    )}
                                </Formik>
                            </Stack>
                        </Box>
                    </Stack>
                }
            </Flex>
            {loading && <Loader />}
        </Fragment >
    )
}

export default D1

D1.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};