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

import { clearErrors, deletePatientDataInDepartment, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { DELETE_DEPT_DATA_RESET, UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'
import handleKeyDown from "../../utils/handleKeyDown"

const D8 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        historyOfPresentIllness: '',
        habits: '',
        clinicalFeatures: '',
        aspiration: '',
        radiograph: '',
        surgicalDetails: '',
        typeOfBiopsy: 'Site:\nNature:\nProvisional Diagnosis:\nType:\nIncisional Biopsy Diagnosis:',
        macroscopicFeatures: 'No of Tissues:\nShape:\nSize:\nConsistency:\nColour:\nDiagram:',
        provisionalDiagnosis: '',
        incisionalBiopsyDiagnosis: '',
        macroscopicFeatures2: '',
        histopathology: '',
        diagnosis: '',
        furtherInvestigation: 'Immunohistochemistry / Immunofluorescence / Serological investigations / Cytogenetics / Culture / Special stains.',
        chiefComplaint2: '',
        historyOfPresentIllness2: '',
        habitsDuration: '',
        clinicalFeatures2: '',
        aspiration2: '',
        radiograph2: '',
        surgicalDetails2: '',
        typeOfBiopsy2: 'Incisional / excisional / Punch biopsy\nExfoliative cytology / FNAC / Brush biopsy',
        siteOfBiopsy: '',
        natureOfTissue: 'Hard / Soft / Firm / Bony Hard',
        provisionalDiagnosis2: '',
    };

    const [loadedValues, setLoadedValues] = useState(null);

    const dispatch = useDispatch();

    const { patient } = useSelector(state => state.patient);
    const { loading, success, error, deleted } = useSelector(state => state.department);

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
        if (patient && patient.patientDEightData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDEightData.id || null,
                chiefComplaint: patient.patientDEightData.chiefComplaint,
                historyOfPresentIllness: patient.patientDEightData.historyOfPresentIllness,
                habits: patient.patientDEightData.habits,
                clinicalFeatures: patient.patientDEightData.clinicalFeatures,
                aspiration: patient.patientDEightData.aspiration,
                radiograph: patient.patientDEightData.radiograph,
                surgicalDetails: patient.patientDEightData.surgicalDetails,
                typeOfBiopsy: patient.patientDEightData.typeOfBiopsy,
                macroscopicFeatures: patient.patientDEightData.macroscopicFeatures,
                provisionalDiagnosis: patient.patientDEightData.provisionalDiagnosis,
                incisionalBiopsyDiagnosis: patient.patientDEightData.incisionalBiopsyDiagnosis,
                macroscopicFeatures2: patient.patientDEightData.macroscopicFeatures2,
                histopathology: patient.patientDEightData.histopathology,
                diagnosis: patient.patientDEightData.diagnosis,
                furtherInvestigation: patient.patientDEightData.furtherInvestigation,
                chiefComplaint2: patient.patientDEightData.chiefComplaint2,
                historyOfPresentIllness2: patient.patientDEightData.historyOfPresentIllness2,
                habitsDuration: patient.patientDEightData.habitsDuration,
                clinicalFeatures2: patient.patientDEightData.clinicalFeatures2,
                aspiration2: patient.patientDEightData.aspiration2,
                radiograph2: patient.patientDEightData.radiograph2,
                surgicalDetails2: patient.patientDEightData.surgicalDetails2,
                typeOfBiopsy2: patient.patientDEightData.typeOfBiopsy2,
                siteOfBiopsy: patient.patientDEightData.siteOfBiopsy,
                natureOfTissue: patient.patientDEightData.natureOfTissue,
                provisionalDiagnosis2: patient.patientDEightData.provisionalDiagnosis2,
            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD8 === false) {
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

            <MetaData title={`Department of Oral & Maxillo Facial Pathology`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 900]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Department of Oral & Maxillo Facial Pathology</Heading>
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

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="historyOfPresentIllness" label="History of Present Illness" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="habits" label="Habits" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="clinicalFeatures" label="Clinical Features" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="aspiration" label="Aspiration" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="radiograph" label="Radiograph" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="surgicalDetails" label="Surgical Details" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="typeOfBiopsy" label="Type of Biopsy" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="macroscopicFeatures" label="Macroscopic Features" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="provisionalDiagnosis" label="Provisional Diagnosis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="incisionalBiopsyDiagnosis" label="Incisional Biopsy Diagnosis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="macroscopicFeatures2" label="Macroscopic Features" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="histopathology" label="Histopathology" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="diagnosis" label="Diagnosis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="furtherInvestigation" label="Further investigation" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="chiefComplaint2" label="Chief Complaint" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="historyOfPresentIllness2" label="History of Present Illness" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="habitsDuration" label="Habits & Duration" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="clinicalFeatures2" label="Clinical Features" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="aspiration2" label="Aspiration" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="radiograph2" label="Radiograph" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="surgicalDetails2" label="Surgical Details" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="typeOfBiopsy2" label="Type of biopsy" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="siteOfBiopsy" label="Site of Biopsy" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="natureOfTissue" label="Nature of Tissue:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D8'} name="provisionalDiagnosis2" label="Provisional Diagnosis:" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D8'}
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
                                                    user.department === 'D8' && patient && patient.patientDEightData &&
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

export default D8

D8.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};