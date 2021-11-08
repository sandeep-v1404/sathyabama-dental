import {
    Box, Button, Flex, FormLabel, Heading, Stack, useColorModeValue, useToast, Text, SimpleGrid
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl,
    TextareaControl,
    CheckboxSingleControl
} from "formik-chakra-ui"
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'
import Loader from "../layout/Loader";
import PropTypes from 'prop-types';

import { clearErrors, deletePatientDataInDepartment, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { DELETE_DEPT_DATA_RESET, UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'

const D1 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: "",
        medicalHistorydiabetes: false,
        medicalHistoryhypertension: false,
        medicalHistorycardiacDisorder: false,
        medicalHistoryrheumaticFever: false,
        medicalHistoryepilepsy: false,
        medicalHistorybleedingDisorders: false,
        medicalHistoryjaundice: false,
        medicalHistoryhepatitis: false,
        medicalHistoryasthma: false,
        medicalHistorytyphoid: false,
        medicalHistorydrugAllergy: false,
        medicalHistoryallergicToLAInjections: false,
        medicalHistoryanaemia: false,
        medicalHistorypregnancy: false,
        medicalHistorymenstrualCycle: false,
        medicalHistoryothers: false,
        familyHistorydiabetes: false,
        familyHistorybloodDyscrasias: false,
        familyHistoryhypertension: false,
        familyHistoryconsanguineousMarriage: false,
        familyHistoryothers: false,
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
                medicalHistorydiabetes: patient.patientDOneData.medicalHistorydiabetes,
                medicalHistoryhypertension: patient.patientDOneData.medicalHistoryhypertension,
                medicalHistorycardiacDisorder: patient.patientDOneData.medicalHistorycardiacDisorder,
                medicalHistoryrheumaticFever: patient.patientDOneData.medicalHistoryrheumaticFever,
                medicalHistoryepilepsy: patient.patientDOneData.medicalHistoryepilepsy,
                medicalHistorybleedingDisorders: patient.patientDOneData.medicalHistorybleedingDisorders,
                medicalHistoryjaundice: patient.patientDOneData.medicalHistoryjaundice,
                medicalHistoryhepatitis: patient.patientDOneData.medicalHistoryhepatitis,
                medicalHistoryasthma: patient.patientDOneData.medicalHistoryasthma,
                medicalHistorytyphoid: patient.patientDOneData.medicalHistorytyphoid,
                medicalHistorydrugAllergy: patient.patientDOneData.medicalHistorydrugAllergy,
                medicalHistoryallergicToLAInjections: patient.patientDOneData.medicalHistoryallergicToLAInjections,
                medicalHistoryanaemia: patient.patientDOneData.medicalHistoryanaemia,
                medicalHistorypregnancy: patient.patientDOneData.medicalHistorypregnancy,
                medicalHistorymenstrualCycle: patient.patientDOneData.medicalHistorymenstrualCycle,
                medicalHistoryothers: patient.patientDOneData.medicalHistoryothers,
                familyHistorydiabetes: patient.patientDOneData.familyHistorydiabetes,
                familyHistorybloodDyscrasias: patient.patientDOneData.familyHistorybloodDyscrasias,
                familyHistoryhypertension: patient.patientDOneData.familyHistoryhypertension,
                familyHistoryconsanguineousMarriage: patient.patientDOneData.familyHistoryconsanguineousMarriage,
                familyHistoryothers: patient.patientDOneData.familyHistoryothers,
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

                                            <InputControl mt={3} isReadOnly={user.department !== 'D1'} name="chiefComplaint" label="Chief Complaint" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}> Medical History</FormLabel>

                                            <CheckboxSingleControl style={{ touchAction: "none" }} mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorydiabetes">Diabetes</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryhypertension">Hypertension</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorycardiacDisorder">Cardiac Disorder</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryrheumaticFever">Rheumatic Fever</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryepilepsy">Epilepsy</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorybleedingDisorders">

                                                Bleeding Disorders
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryjaundice">Jaundice</CheckboxSingleControl>

                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryhepatitis">Hepatitis</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryasthma">Asthma</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorytyphoid">Typhoid</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorydrugAllergy">
                                                Drug Allergy
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryallergicToLAInjections">
                                                Allergic to L.A Injections
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryanaemia">
                                                Anaemia
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorypregnancy">
                                                Pregnancy
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistorymenstrualCycle">
                                                Menstrual Cycle
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="medicalHistoryothers">
                                                Others
                                            </CheckboxSingleControl>

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Family History </FormLabel>

                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="familyHistorydiabetes">Diabetes</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="familyHistorybloodDyscrasias">Blood Dyscrasias</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="familyHistoryhypertension">Hypertension</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="familyHistoryconsanguineousMarriage">Consanguineous Marriage</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D1'} name="familyHistoryothers">Others</CheckboxSingleControl>

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