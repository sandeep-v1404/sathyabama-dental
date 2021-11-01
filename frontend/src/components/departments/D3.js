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

const D3 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        historyOfPresentingIllness: '',
        pastDentalHistory: '',
        pastMedicalHistory: '',
        allergiesIfAny: '',
        extraOralExamination: '',
        intraOralExamination: '',
        periodontalStatus: '',
        provisionalDiagnosis: '',
        differentialDiagnosis: '',
        diagnosticTests: '',
        radiographicInterpretation: '',
        otherInvestigations: '',
        diagnosis: '',
        treatmentAdvised: '',
        patientMotivation: '',
        treatmentNotes: '',
        toothNumber: '',
        accessCavityPreparationAndPulpExtirpation: '',
        bioMechanicalPreparation: '',
        obturation: '',
        postOperativeRadiograph: '',
        existingRestorationsAndStatus: '',
        radiographicPulpExposure: '',
        laminaDura: '',
        periapicalRadiolucency: '',
        periodontalStatus2: '',
        natureOfRootCanalInInvolvedTooth: '',
        previousEndodonticTreatment: '',
        fractureOfTeeth: '',
        anyOtherAbnormalities: '',
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
        if (patient && patient.patientDThreeData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDTwoData.id || null,
                chiefComplaint: patient.patientDThreeData.chiefComplaint,
                historyOfPresentingIllness: patient.patientDThreeData.historyOfPresentingIllness,
                pastDentalHistory: patient.patientDThreeData.pastDentalHistory,
                pastMedicalHistory: patient.patientDThreeData.pastMedicalHistory,
                allergiesIfAny: patient.patientDThreeData.allergiesIfAny,
                extraOralExamination: patient.patientDThreeData.extraOralExamination,
                intraOralExamination: patient.patientDThreeData.intraOralExamination,
                periodontalStatus: patient.patientDThreeData.periodontalStatus,
                provisionalDiagnosis: patient.patientDThreeData.provisionalDiagnosis,
                differentialDiagnosis: patient.patientDThreeData.differentialDiagnosis,
                diagnosticTests: patient.patientDThreeData.diagnosticTests,
                radiographicInterpretation: patient.patientDThreeData.radiographicInterpretation,
                otherInvestigations: patient.patientDThreeData.otherInvestigations,
                diagnosis: patient.patientDThreeData.diagnosis,
                treatmentAdvised: patient.patientDThreeData.treatmentAdvised,
                patientMotivation: patient.patientDThreeData.patientMotivation,
                treatmentNotes: patient.patientDThreeData.treatmentNotes,
                toothNumber: patient.patientDThreeData.toothNumber,
                accessCavityPreparationAndPulpExtirpation: patient.patientDThreeData.accessCavityPreparationAndPulpExtirpation,
                bioMechanicalPreparation: patient.patientDThreeData.bioMechanicalPreparation,
                obturation: patient.patientDThreeData.obturation,
                postOperativeRadiograph: patient.patientDThreeData.postOperativeRadiograph,
                existingRestorationsAndStatus: patient.patientDThreeData.existingRestorationsAndStatus,
                radiographicPulpExposure: patient.patientDThreeData.radiographicPulpExposure,
                laminaDura: patient.patientDThreeData.laminaDura,
                periapicalRadiolucency: patient.patientDThreeData.periapicalRadiolucency,
                periodontalStatus2: patient.patientDThreeData.periodontalStatus,
                natureOfRootCanalInInvolvedTooth: patient.patientDThreeData.natureOfRootCanalInInvolvedTooth,
                previousEndodonticTreatment: patient.patientDThreeData.previousEndodonticTreatment,
                fractureOfTeeth: patient.patientDThreeData.fractureOfTeeth,
                anyOtherAbnormalities: patient.patientDThreeData.anyOtherAbnormalities,

            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD3 === false) {
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

                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="historyOfPresentingIllness" label="History of Presenting Illness" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="pastDentalHistory" label="Past Dental History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="pastMedicalHistory" label="Past Medical History:  " />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="allergiesIfAny" label="Allergies If Any:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="extraOralExamination" label="Extra Oral Examination:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="intraOralExamination" label="Intra Oral Examination:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="periodontalStatus" label="Periodontal  Status" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="provisionalDiagnosis" label="Provisional  Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="differentialDiagnosis" label="Differential  Diagnosis:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="diagnosticTests" label="Diagnostic  Tests" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="radiographicInterpretation" label="Radiographic  Interpretation :" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="otherInvestigations" label="Other Investigations" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="diagnosis" label="Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="treatmentAdvised" label="Treatment  Advised" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="patientMotivation" label="Patient Motivation" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="treatmentNotes" label="Treatment Notes" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="toothNumber" label="Tooth Number" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="accessCavityPreparationAndPulpExtirpation" label="Access Cavity Preparation and Pulp Extirpation:" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="bioMechanicalPreparation" label="Bio- Mechanical Preparation" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="obturation" label="Obturation" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="postOperativeRadiograph" label="Post Operative Radiograph" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="existingRestorationsAndStatus" label="Existing  Restorations and Status" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="radiographicPulpExposure" label="Radiographic  Pulp Exposure" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="laminaDura" label="Lamina Dura" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="periapicalRadiolucency" label="Periapical  Radiolucency" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="periodontalStatus" label="Periodontal  Status" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="natureOfRootCanalInInvolvedTooth" label="Nature  of Root Canal in Involved  Tooth" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="previousEndodonticTreatment" label="Previous Endodontic  Treatment" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="fractureOfTeeth" label="Fracture of Teeth" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D3'} name="anyOtherAbnormalities" label="Any Other Abnormalities" />


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