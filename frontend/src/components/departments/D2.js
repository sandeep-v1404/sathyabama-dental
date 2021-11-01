import {
    Box, Button, Flex,
    Heading, Stack, useColorModeValue, useToast, Text, SimpleGrid
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import { InputControl } from "formik-chakra-ui"
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'
import Loader from "../layout/Loader";
import PropTypes from 'prop-types';

import { clearErrors, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'

const D2 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: "",
        historyOfPresentingIllness: "",
        pastMedicalHistory: "",
        diabetes: "",
        hypertension: "",
        allergy: "",
        asthma: "",
        anemia: "",
        epilepsy: "",
        cardiacComplication: "",
        bleedingDisorder: "",
        jaundice: "",
        pepticUlcer: "",
        gitProblem: "",
        other: "",
        pastSurgicalHistory: "",
        pastDentalHistory: "",
        personalHabits: "",
        generalPhysicalExamination: "",
        extraOral: "",
        hardTissue: "",
        softTissue: "",
        provisionalDiagnosis: "",
        differentialDiagnosis: "",
        investigations: "",
        finalDiagnosis: "",
        treatmentPlan: "",
        treatmentDone: "",
        medicationPrescribed: "",
        summary: "",
        grade: "",
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
        if (patient && patient.patientDTwoData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDTwoData.id || null,
                chiefComplaint: patient.patientDTwoData.chiefComplaint,
                historyOfPresentingIllness: patient.patientDTwoData.historyOfPresentingIllness,
                pastMedicalHistory: patient.patientDTwoData.pastMedicalHistory,
                diabetes: patient.patientDTwoData.diabetes,
                hypertension: patient.patientDTwoData.hypertension,
                allergy: patient.patientDTwoData.allergy,
                asthma: patient.patientDTwoData.asthma,
                anemia: patient.patientDTwoData.anemia,
                epilepsy: patient.patientDTwoData.epilepsy,
                cardiacComplication: patient.patientDTwoData.cardiacComplication,
                bleedingDisorder: patient.patientDTwoData.bleedingDisorder,
                jaundice: patient.patientDTwoData.jaundice,
                pepticUlcer: patient.patientDTwoData.pepticUlcer,
                gitProblem: patient.patientDTwoData.gitProblem,
                other: patient.patientDTwoData.other,
                pastSurgicalHistory: patient.patientDTwoData.pastSurgicalHistory,
                pastDentalHistory: patient.patientDTwoData.pastDentalHistory,
                personalHabits: patient.patientDTwoData.personalHabits,
                generalPhysicalExamination: patient.patientDTwoData.generalPhysicalExamination,
                extraOral: patient.patientDTwoData.extraOral,
                hardTissue: patient.patientDTwoData.hardTissue,
                softTissue: patient.patientDTwoData.softTissue,
                provisionalDiagnosis: patient.patientDTwoData.provisionalDiagnosis,
                differentialDiagnosis: patient.patientDTwoData.differentialDiagnosis,
                investigations: patient.patientDTwoData.investigations,
                finalDiagnosis: patient.patientDTwoData.finalDiagnosis,
                treatmentPlan: patient.patientDTwoData.treatmentPlan,
                treatmentDone: patient.patientDTwoData.treatmentDone,
                medicationPrescribed: patient.patientDTwoData.medicationPrescribed,
                summary: patient.patientDTwoData.summary,
                grade: patient.patientDTwoData.grade,
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

                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="chiefComplant" label="Chief Complaint:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="historyOfPresentingIllness" label="History of Presenting Illness:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="pastMedicalHistory" label="Past Medical History: " />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="diabetes" label="Diabetes: " />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="hypertension" label="Hypertension:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="allergy" label="Allergy:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="asthma" label="Asthma:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="anemia" label="Anemia:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="epilepsy" label="Epilepsy:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="cardiacComplication" label="Cardiac Complication:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="bleedingDisorder" label="Bleeding Disorder:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="jaundice" label="Jaundice:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="pepticUlcer" label="Peptic Ulcer:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="gitProblem" label="Git Problem:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="other" label="Other:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="pastSurgicalHistory" label="Past Surgical History:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="pastDentalHistory" label="Past Dental History:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="personalHabits" label="Personal Habits:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="generalPhysicalExamination" label="General Physical Examination:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="extraOral" label="Extra Oral:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="hardTissue" label="Hard Tissue:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="softTissue" label="Soft Tissue:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="provisionalDiagnosis" label="Provisional Diagnosis:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="differentialDiagnosis" label="Differential Diagnosis:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="investigations" label="Investigations:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="finalDiagnosis" label="Final Diagnosis:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="treatmentPlan" label="Treatment Plan:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="treatmentDone" label="Treatment Done:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="medicationPrescribed" label="Medication Prescribed:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="summary" label="Summary:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D2'} name="grade" label="Grade:" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D2'}
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

export default D2

D2.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};