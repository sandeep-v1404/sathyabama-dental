import {
    Box, Button, Flex, FormLabel,
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
const D7 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaints: '',
        historyOfPresentIllness: '',
        dentalHistory: '',
        medicalHistory: '',
        familyHistory: '',
        personalHistory: 'a) Oral Hygiene Practices:\n\nb) Para functional Habits:\n\nc) Tobacco/Alcohol related Habits:\n\nd) Dietary Habits:\n        Source of Drinking Water:\n        Type of Diet:\n',
        generalExamination: 'a) Vital Signs:\n\n    Blood pressure:\n    Pulse:     \n    Respiratory rate:\n\nb) Posture\n\nc) Galt:\n\nd) (Clubbing,Cyanosis,Icterus,Pallor):',
        extraOral: 'Facial Profile:\nFacial Symmetry:\nTMJ:\n   Inspection:\n   Palpation:\nLymph nodes:\nLips:\nSkin:',
        glnglvalFindings: 'Color:\nContour:\nConsistency:\nSurface Texture:\nPosition:\nBleeding on probing:\n',
        periodontalFindings: 'Pockets:\nMobility:\n',
        mucosalFindings: 'Labial:\nBuccal:\nVestibular:\nPalate:\nTongue:\nFloor of Mouth:\nFrenal Attachements:\n',
        hardTissuesExamination: 'Type of Dentition:\n\nNo. of teeth present:\n\nTeeth Numbering System:\n\nTeeth missing and reason:\n\nDental Deposits:\n   Stains:\n   Calculus:\n\nOther Positive Findings:\n',
        provisionalDiaganosis: '',
        investigation: '',
        finalDiagnosis: '',
        emergencyCare: '',
        primaryLevelOfPrevention: '',
        secondaryLevelOfPrevention: '',
        tertiaryLevelOfPrevention: '',
        recallAndMaintenance: '',
        comprehensiveTreatmentDone: 'A) Emergency   Phase:\n\nB) Primary Phase:\n\nC) Secondary Phase:\n\nD) Tertiary Phase:',
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
        if (patient && patient.patientDSevenData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDSevenData.id || null,
                chiefComplaints: patient.patientDSevenData.chiefComplaints,
                historyOfPresentIllness: patient.patientDSevenData.historyOfPresentIllness,
                dentalHistory: patient.patientDSevenData.dentalHistory,
                medicalHistory: patient.patientDSevenData.medicalHistory,
                familyHistory: patient.patientDSevenData.familyHistory,
                personalHistory: patient.patientDSevenData.personalHistory,
                generalExamination: patient.patientDSevenData.generalExamination,
                extraOral: patient.patientDSevenData.extraOral,
                glnglvalFindings: patient.patientDSevenData.glnglvalFindings,
                periodontalFindings: patient.patientDSevenData.periodontalFindings,
                mucosalFindings: patient.patientDSevenData.mucosalFindings,
                hardTissuesExamination: patient.patientDSevenData.hardTissuesExamination,
                provisionalDiaganosis: patient.patientDSevenData.provisionalDiaganosis,
                investigation: patient.patientDSevenData.investigation,
                finalDiagnosis: patient.patientDSevenData.finalDiagnosis,
                emergencyCare: patient.patientDSevenData.emergencyCare,
                primaryLevelOfPrevention: patient.patientDSevenData.primaryLevelOfPrevention,
                secondaryLevelOfPrevention: patient.patientDSevenData.secondaryLevelOfPrevention,
                tertiaryLevelOfPrevention: patient.patientDSevenData.tertiaryLevelOfPrevention,
                recallAndMaintenance: patient.patientDSevenData.recallAndMaintenance,
                comprehensiveTreatmentDone: patient.patientDSevenData.comprehensiveTreatmentDone,
            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD7 === false) {
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

            <MetaData title={`Department of Public Health dentistry`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 900]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Department of Public Health dentistry</Heading>
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
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>History  </FormLabel>
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="chiefComplaints" label="Chief Complaints" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="historyOfPresentIllness" label="History of Present illness" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="dentalHistory" label="Dental History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="medicalHistory" label="Medical History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="familyHistory" label="Family History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="personalHistory" label="Personal History" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}> Clinical Examination  </FormLabel>
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="generalExamination" label="1) General Examination" />
                                            <FormLabel borderRadius={"10"} bg={"blue.100"} m={5} textAlign={"center"}>2) Local Examination  </FormLabel>
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>A) Extra Oral  </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="extraOral" label="" />
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>B) Intra Oral  </FormLabel>
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>A) Soft Tissues Examination   </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="glnglvalFindings" label="Gingival Findings  " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="periodontalFindings" label="Periodontal Findings  " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="mucosalFindings" label="Mucosal Findings" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>B) Hard Tissues Examination </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="hardTissuesExamination" label="" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Diaganosis  </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="provisionalDiaganosis" label="Provisional Diaganosis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="investigation" label="Investigation" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="finalDiagnosis" label="Final Diagnosis" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Comprehensive Treatment Plan</FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="emergencyCare" label="Emergency Care" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="primaryLevelOfPrevention" label="Primary Level of Prevention" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="secondaryLevelOfPrevention" label="Secondary Level of Prevention" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="tertiaryLevelOfPrevention" label="Tertiary Level of Prevention" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="recallAndMaintenance" label="Recall and Maintenance" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Comprehensive Treatment Done</FormLabel>
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D7'} name="comprehensiveTreatmentDone" label="" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D7'}
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
                                                    user.department === 'D7' && patient && patient.patientDSevenData &&
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

export default D7

D7.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};