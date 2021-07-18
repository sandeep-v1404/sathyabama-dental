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

import { clearErrors, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'

const D3 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: "",
        pastDentalHistory: "",
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
        }
        if (patient && patient.patientDTwoData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDTwoData.id || null,
                chiefComplaint: patient.patientDTwoData.chiefComplaint,
                medicalHistorydiabetes: patient.patientDTwoData.medicalHistorydiabetes,
                medicalHistoryhypertension: patient.patientDTwoData.medicalHistoryhypertension,
                medicalHistorycardiacDisorder: patient.patientDTwoData.medicalHistorycardiacDisorder,
                medicalHistoryrheumaticFever: patient.patientDTwoData.medicalHistoryrheumaticFever,
                medicalHistoryepilepsy: patient.patientDTwoData.medicalHistoryepilepsy,
                medicalHistorybleedingDisorders: patient.patientDTwoData.medicalHistorybleedingDisorders,
                medicalHistoryjaundice: patient.patientDTwoData.medicalHistoryjaundice,
                medicalHistoryhepatitis: patient.patientDTwoData.medicalHistoryhepatitis,
                medicalHistoryasthma: patient.patientDTwoData.medicalHistoryasthma,
                medicalHistorytyphoid: patient.patientDTwoData.medicalHistorytyphoid,
                medicalHistorydrugAllergy: patient.patientDTwoData.medicalHistorydrugAllergy,
                medicalHistoryallergicToLAInjections: patient.patientDTwoData.medicalHistoryallergicToLAInjections,
                medicalHistoryanaemia: patient.patientDTwoData.medicalHistoryanaemia,
                medicalHistorypregnancy: patient.patientDTwoData.medicalHistorypregnancy,
                medicalHistorymenstrualCycle: patient.patientDTwoData.medicalHistorymenstrualCycle,
                medicalHistoryothers: patient.patientDTwoData.medicalHistoryothers,
                familyHistorydiabetes: patient.patientDTwoData.familyHistorydiabetes,
                familyHistorybloodDyscrasias: patient.patientDTwoData.familyHistorybloodDyscrasias,
                familyHistoryhypertension: patient.patientDTwoData.familyHistoryhypertension,
                familyHistoryconsanguineousMarriage: patient.patientDTwoData.familyHistoryconsanguineousMarriage,
                familyHistoryothers: patient.patientDTwoData.familyHistoryothers,
                clinicalFindings: patient.patientDTwoData.clinicalFindings,
                diagnosis: patient.patientDTwoData.diagnosis,
                prognosis: patient.patientDTwoData.prognosis,
                investigations: patient.patientDTwoData.investigations,
                radiographs: patient.patientDTwoData.radiographs,
                treatmentPlan: patient.patientDTwoData.treatmentPlan,
                treatmentDone: patient.patientDTwoData.treatmentDone,
            });
        }
        if (!patient) {
            history.push("/");
        }


    }, [dispatch, history, success])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }

    return (
        <Fragment>

            <MetaData title={`Update D3 data`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 800]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Update D3 Data</Heading>
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

                                            <InputControl mt={3} isReadOnly={user.department !== 'D3'} name="chiefComplaint" label="Chief Complaint" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}> Medical History</FormLabel>

                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorydiabetes">Diabetes</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryhypertension">Hypertension</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorycardiacDisorder">Cardiac Disorder</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryrheumaticFever">Rheumatic Fever</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryepilepsy">Epilepsy</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorybleedingDisorders">

                                                Bleeding Disorders
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryjaundice">Jaundice</CheckboxSingleControl>

                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryhepatitis">Hepatitis</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryasthma">Asthma</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorytyphoid">Typhoid</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorydrugAllergy">
                                                Drug Allergy
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryallergicToLAInjections">
                                                Allergic to L.A Injections
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryanaemia">
                                                Anaemia
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorypregnancy">
                                                Pregnancy
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistorymenstrualCycle">
                                                Menstrual Cycle
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="medicalHistoryothers">
                                                Others
                                            </CheckboxSingleControl>

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Family History </FormLabel>

                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="familyHistorydiabetes">Diabetes</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="familyHistorybloodDyscrasias">Blood Dyscrasias</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="familyHistoryhypertension">Hypertension</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="familyHistoryconsanguineousMarriage">Consanguineous Marriage</CheckboxSingleControl>
                                            <CheckboxSingleControl mt={3} isDisabled={user.department !== 'D3'} name="familyHistoryothers">Others</CheckboxSingleControl>

                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="clinicalFindings" label="Clinical Findings" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="diagnosis" label="Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="prognosis" label="Prognosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="investigations" label="Investigations" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="radiographs" label="Radiographs" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="treatmentPlan" label="Treatment Plan" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="treatmentDone" label="Treatment Done" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D3'}
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

export default D3

D3.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};