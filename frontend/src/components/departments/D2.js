import {
    Box, Button, Flex, FormLabel,
    Heading, Stack, useColorModeValue, useToast, Text, SimpleGrid
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import { InputControl, TextareaControl } from "formik-chakra-ui"
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'
import Loader from "../layout/Loader";
import PropTypes from 'prop-types';

import { clearErrors, deletePatientDataInDepartment, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { UPDATE_DEPT_DATA_RESET, DELETE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'
import handleKeyDown from '../../utils/handleKeyDown'

const D2 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: "",
        historyOfPresentingIllness: "",
        pastMedicalHistory: "Diabetes: \nHypertension:\nAllergy:\nAsthma:\nAnemia:\nEpilepsy:\nCardiac Complication:\nBleeding Disorder:\nJaundice:\nPeptic Ulcer:",
        pastSurgicalHistory: "",
        pastDentalHistory: "",
        personalHabits: "Smoking\nAlcohol\nPan Chewing",
        generalPhysicalExamination: "Built:\nGait: \nNourishment:\nBlood Pressure: \nPulse Rate: \nRespiratory Rate:\nPallor:\nIcterus: \nClubbing:\nCyanosis:\nPedel Odema:",
        extraOral: "Skin - \nFacial Symmetry - \nTmj \nMouth Opening - \nDeviation of Mandible - \nLymph Node - \nLip - \nCommisure -",
        hardTissue: "Number of Teethpresent - \nMissing Tooth - \nDental Caries - \nRoot Stumps - \nFractured Tooth - \nRetaineddeciduous \nMobility - \nCalculus - \nStains - \nHard Palate -",
        softTissue: "Gingiva:  \nA)  Buccal - \nB)  Lingual - \n\nMucosa: \nA)  Buccal- \nB)  Lingual - \n\nVestibule: \nA)  Buccal - \nB)  Lingual - \n\nTongue: \nA)  Dorsal - \nB)  Ventral - \n\nFloor of the Mouth:  \n\nSoft Palate:",
        provisionalDiagnosis: "",
        differentialDiagnosis: "",
        investigations: "X-Ray: \nBlood:",
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
        if (patient && patient.patientDTwoData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDTwoData.id || null,
                chiefComplaint: patient.patientDTwoData.chiefComplaint,
                historyOfPresentingIllness: patient.patientDTwoData.historyOfPresentingIllness,
                pastMedicalHistory: patient.patientDTwoData.pastMedicalHistory,
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


    }, [dispatch, history, success, deleted])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }
    const deleteHandler = () => {
        dispatch(deletePatientDataInDepartment(user.department, patientId));
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

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="chiefComplaint" label="Chief Complaint:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="historyOfPresentingIllness" label="History of Presenting Illness:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="pastMedicalHistory" label="Past Medical History: " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="pastSurgicalHistory" label="Past Surgical History:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="pastDentalHistory" label="Past Dental History:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="personalHabits" label="Personal Habits:" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}> Examination  </FormLabel>
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="generalPhysicalExamination" label="General Physical Examination:" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Local Examination  </FormLabel>
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="extraOral" label="Extra Oral:" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Intra Oral  </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="hardTissue" label="Hard Tissue:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="softTissue" label="Soft Tissue:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="provisionalDiagnosis" label="Provisional Diagnosis:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="differentialDiagnosis" label="Differential Diagnosis:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="investigations" label="Investigations:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="finalDiagnosis" label="Final Diagnosis:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="treatmentPlan" label="Treatment Plan:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="treatmentDone" label="Treatment Done:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="medicationPrescribed" label="Medication Prescribed:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="summary" label="Summary:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D2'} name="grade" label="Grade:" />

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
                                                {
                                                    user.department === 'D2' && patient && patient.patientDTwoData &&
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

export default D2

D2.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};