import {
    Box, Button, Flex,
    Heading, Stack, useColorModeValue, useToast, Text, SimpleGrid,
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import { InputControl, TextareaControl } from "formik-chakra-ui"
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'
import Loader from "../layout/Loader";
import PropTypes from 'prop-types';

import { clearErrors, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'

const D4 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        medicalHistory: '',
        dentalHistory: '',
        extraoralExamination: '',
        tmj: '',
        intraoralExamination: '',
        teethFilled: '',
        teethMissing: '',
        rootTreated: '',
        occlusion: '',
        miscellaneous: '',
        radiographicInterpretation: '',
        diagnosis: '',
        treatmentPlan: '',
    };

    const [loadedValues, setLoadedValues] = useState(null);

    const dispatch = useDispatch();

    const { patient } = useSelector(state => state.patient);
    const { loading, success, error } = useSelector(state => state.department);

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
        if (patient && patient.patientDFourData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDFourData.id || null,
                chiefComplaint: patient.patientDFourData.chiefComplaint,
                medicalHistory: patient.patientDFourData.medicalHistory,
                dentalHistory: patient.patientDFourData.dentalHistory,
                extraoralExamination: patient.patientDFourData.extraoralExamination,
                tmj: patient.patientDFourData.tmj,
                intraoralExamination: patient.patientDFourData.intraoralExamination,
                teethFilled: patient.patientDFourData.teethFilled,
                teethMissing: patient.patientDFourData.teethMissing,
                rootTreated: patient.patientDFourData.rootTreated,
                occlusion: patient.patientDFourData.occlusion,
                miscellaneous: patient.patientDFourData.miscellaneous,
                radiographicInterpretation: patient.patientDFourData.radiographicInterpretation,
                diagnosis: patient.patientDFourData.diagnosis,
                treatmentPlan: patient.patientDFourData.treatmentPlan,
            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD4 === false) {
            toast({
                title: "Not Authorized",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            history.push("/");
            dispatch(clearErrors());
        }


    }, [dispatch, history, success])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }

    return (
        <Fragment>

            <MetaData title={`Department of Oral & Maxillo Facial Surgery`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 900]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Department of Oral & Maxillo Facial Surgery</Heading>
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
                                Residential Address
                                <Text fontSize="md" fontWeight="bold"> {patient.residentialAddress}</Text>
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
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="medicalHistory" label="Medical History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="dentalHistory" label="Dental History " />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="extraoralExamination" label="Extraoral Examination:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="tmj" label="Tmj" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="intraoralExamination" label="Intraoral  Examination:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="teethFilled" label="Teeth Filled" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="teethMissing" label="Teeth Missing " />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="rootTreated" label="Root Treated" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="occlusion" label="Occlusion" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="miscellaneous" label="Miscellaneous" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="radiographicInterpretation" label="Radiographic Interpretation " />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="diagnosis" label="Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D4'} name="treatmentPlan" label="Treatment Plan" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D4'}
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

export default D4

D4.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};