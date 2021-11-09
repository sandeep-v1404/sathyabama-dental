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
import handleKeyDown from '../../utils/handleKeyDown'

const D5 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        historyOfPresentingIllness: '',
        pastMedicalHistory: '',
        pastDentalHistory: '',
        personalHistory: 'Diet:  Veg / Non Veg\nFeeding habits: Bottle Fed / Breast Fed',
        oralHygieneHabits: 'Frequency of brushing :\nBrush / Finger / Neem Stick/Others  :\nType Of Dentifrice:',
        oralHabits: 'Frequency :\nDuration :\n',
        numberOfSugarExposures: '',
        cariogenicNonCariogenicDiet: '',
        generalExamination: 'Height :\nWeight :',
        extraOralExamination: 'Profile :\nFace:\nTMJ\nLymph Nodes: ',
        intraOralExamination: 'Soft Tissue Examination:\n\nHard Tissue Examination:\n\nNo Of Teeth Present:',
        teethPresent: 'Decayed Teeth:\nMissing Teeth:\nFilled Teeth:\nDMFT / deft Score:',
        occlusalAnalysis: 'Spacing:  Primate/ Interdental/ Diastema/ Generalized\nOverjet(mm): Overbite (mm):\nCrossbite:\nMidline : Normal / Deviated\nCanine Relationship:\nMolar Relationship:\nPrimary: Flush Terminal / Mesial Step / Distal Step\nPermanent: Class I / II / III',
        provisionalDiagnosis: '',
        investigations: '',
        radiographicInterpretation: '',
        diagnosis: '',
        treatmentPlan: '',
        treatmentDone: '',
        reviewRecall: '',
        chiefComplaint2: '',
        historyOfPresentingIllness2: '',
        parentalHistory: "Were you / your spouse's teeth grey, yellow or brownish in colour?\nAny other problem with your / your spouse's teeth?\nAre you / your spouse frightened of dental treatment ?",
        prenatalHistory: "Mother's condition during pregnancy:\nWere you on any drug therapy?\nIf yes, what drug & for how long ?\nAre you / your spouse RH negative ?",
        natalHistory: 'Delivery:Full Term / Premature\nType: Normal / Forceps / Caesarean',
        pastMedicalHistory2: '',
        pastDentalHistory2: '',
        pastNatalHistory: 'Feeding : Breast / Bottle / Combination \n\nDuration & Frequency : \n\nType of nipple used for bottle-feeding : \n\nMilestones of development:          Normal  /   Delayed \n\nChildhood Diseases: \n\nWas your child Immunized : \n\nHabits: \n\nDoes he/ she have frequent minor accidents or injuries? Yes / No \n\nDoes he/ she have any mental physical \n\ndisability or any other disease? Yes / No \n\nIs he/ she allergic to any food or Drugs? Specify : \n\nDoes he/ she have difficulty in making friends? Yes / No \n\nDoes he/ she fail to get along with other Children? Yes / No \n\nDoes he/ she play Indoor or Outdoors \n\nDoes he/ she have sibling? \n\nIf yes, what is their age? \n\nDoes he/ she have difficulty in keeping up with School work :  Yes / No \n\nHas he/ she visited a dentist before : Yes / No \n\nDoes he/ she fear the dentist? If yes, why?',
        numberOfSugarExposures2: '',
        cariogenicNonCariogenicDiet2: '',
        generalExamination2: 'Build: \nGait: \nHeight:  \nPosture: \nWeight: \nBody type: \nShape of head:',
        extraOralExamination2: 'Facial Form  \nFacial Profile \nFacial Symmetry: \nFacial Divergence: \nLip posture & Tonicity:  \nTMJ Examination \nLymph node Examination',
        intraOralExamination2: 'Skin  / lips  \nMucosa(LabiaI/Buccal)  \nPalate \nFloor of mouth  \nTongue  \nGlands  \nGingiva  \nTonsils \nFrenal Attachment',
        teethPresent2: '',
        clinicalFindings: '',
        molarRelationship: 'Primary \nPermanent   \nPrimate space  \nEruption Sequence',
        canineRelationship: '',
        incisorRelationship: 'Overjet  \nOverbite \nOpenbite  \nCross bite',
        midline: ' Normal / deviated',
        archLength: 'Maxilla : Adequate / Inadequate \nMandible : Adequate / Inadequate \nAnalysis recommended : Yes / No',
        radiographicInvestigations: '',
        diagnosis2: '',
        treatmentPlan2: '',
        modeOfManagement: 'Chair-side / Inhalation Sedation / General Anaesthesia',
        studyModelsAnalysis: '',
        xRays: '',
        cephalogram: '',
        photographs: '',
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
        if (patient && patient.patientDFiveData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDFiveData.id || null,
                chiefComplaint: patient.patientDFiveData.chiefComplaint,
                historyOfPresentingIllness: patient.patientDFiveData.historyOfPresentingIllness,
                pastMedicalHistory: patient.patientDFiveData.pastMedicalHistory,
                pastDentalHistory: patient.patientDFiveData.pastDentalHistory,
                personalHistory: patient.patientDFiveData.personalHistory,
                oralHygieneHabits: patient.patientDFiveData.oralHygieneHabits,
                oralHabits: patient.patientDFiveData.oralHabits,
                numberOfSugarExposures: patient.patientDFiveData.numberOfSugarExposures,
                cariogenicNonCariogenicDiet: patient.patientDFiveData.cariogenicNonCariogenicDiet,
                generalExamination: patient.patientDFiveData.generalExamination,
                extraOralExamination: patient.patientDFiveData.extraOralExamination,
                intraOralExamination: patient.patientDFiveData.intraOralExamination,
                teethPresent: patient.patientDFiveData.teethPresent,
                occlusalAnalysis: patient.patientDFiveData.occlusalAnalysis,
                provisionalDiagnosis: patient.patientDFiveData.provisionalDiagnosis,
                investigations: patient.patientDFiveData.investigations,
                radiographicInterpretation: patient.patientDFiveData.radiographicInterpretation,
                diagnosis: patient.patientDFiveData.diagnosis,
                treatmentPlan: patient.patientDFiveData.treatmentPlan,
                treatmentDone: patient.patientDFiveData.treatmentDone,
                reviewRecall: patient.patientDFiveData.reviewRecall,
                chiefComplaint2: patient.patientDFiveData.chiefComplaint2,
                historyOfPresentingIllness2: patient.patientDFiveData.historyOfPresentingIllness2,
                parentalHistory: patient.patientDFiveData.parentalHistory,
                prenatalHistory: patient.patientDFiveData.prenatalHistory,
                natalHistory: patient.patientDFiveData.natalHistory,
                pastMedicalHistory2: patient.patientDFiveData.pastMedicalHistory2,
                pastDentalHistory2: patient.patientDFiveData.pastDentalHistory2,
                pastNatalHistory: patient.patientDFiveData.pastNatalHistory,
                numberOfSugarExposures2: patient.patientDFiveData.numberOfSugarExposures2,
                cariogenicNonCariogenicDiet2: patient.patientDFiveData.cariogenicNonCariogenicDiet2,
                generalExamination2: patient.patientDFiveData.generalExamination2,
                extraOralExamination2: patient.patientDFiveData.extraOralExamination2,
                intraOralExamination2: patient.patientDFiveData.intraOralExamination2,
                teethPresent2: patient.patientDFiveData.teethPresent2,
                clinicalFindings: patient.patientDFiveData.clinicalFindings,
                molarRelationship: patient.patientDFiveData.molarRelationship,
                canineRelationship: patient.patientDFiveData.canineRelationship,
                incisorRelationship: patient.patientDFiveData.incisorRelationship,
                midline: patient.patientDFiveData.midline,
                archLength: patient.patientDFiveData.archLength,
                radiographicInvestigations: patient.patientDFiveData.radiographicInvestigations,
                diagnosis2: patient.patientDFiveData.diagnosis2,
                treatmentPlan2: patient.patientDFiveData.treatmentPlan2,
                modeOfManagement: patient.patientDFiveData.modeOfManagement,
                studyModelsAnalysis: patient.patientDFiveData.studyModelsAnalysis,
                xRays: patient.patientDFiveData.xRays,
                cephalogram: patient.patientDFiveData.cephalogram,
                photographs: patient.patientDFiveData.photographs,
            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD5 === false) {
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

            <MetaData title={`Department of Pedodontia`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 900]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Department of Pedodontia</Heading>
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
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Under Graduate Case Sheet </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="historyOfPresentingIllness" label="History Of Presenting Illness" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="pastMedicalHistory" label="Past Medical History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="pastDentalHistory" label="Past Dental History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="personalHistory" label="Personal History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="oralHygieneHabits" label="Oral Hygiene Habits" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="oralHabits" label="Oral Habits" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="numberOfSugarExposures" label="Number of Sugar Exposures" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="cariogenicNonCariogenicDiet" label="Cariogenic / Non-Cariogenic diet" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="generalExamination" label="General Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="extraOralExamination" label="Extra Oral Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="intraOralExamination" label="Intra Oral Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="teethPresent" label="Teeth Present" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="occlusalAnalysis" label="Occlusal Analysis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="provisionalDiagnosis" label="Provisional Diagnosis " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="investigations" label="Investigations " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="radiographicInterpretation" label="Radiographic Interpretation " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="diagnosis" label="Diagnosis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="treatmentPlan" label="Treatment Plan" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="treatmentDone" label="Treatment done" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="reviewRecall" label="Review & Recall" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Post Graduate Case Sheet </FormLabel>
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="chiefComplaint2" label="Chief Complaint" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="historyOfPresentingIllness2" label="History of Presenting illness:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="parentalHistory" label="Parental History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="prenatalHistory" label="Prenatal History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="natalHistory" label="Natal History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="pastMedicalHistory2" label="Past Medical History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="pastDentalHistory2" label="Past Dental history" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="pastNatalHistory" label="Post Natal history" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="numberOfSugarExposures2" label="Number of Sugar Exposures" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="cariogenicNonCariogenicDiet2" label="Cariogenic / Non-Cariogenic diet" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Clinical Examination </FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="generalExamination2" label="General Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="extraOralExamination2" label="Extra Oral Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="intraOralExamination2" label="Intra Oral Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="teethPresent2" label="Teeth present" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="clinicalFindings" label="Clinical Findings" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="molarRelationship" label="Molar Relationship" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="canineRelationship" label="Canine relationship" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="incisorRelationship" label="Incisor relationship" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="midline" label="Midline" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="archLength" label="Arch length" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="radiographicInvestigations" label="Radiographic  investigations:" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="diagnosis2" label="Diagnosis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="treatmentPlan2" label="Treatment plan" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="modeOfManagement" label="Mode of Management" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Complete Records</FormLabel>

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="studyModelsAnalysis" label="Study models & Analysis" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="xRays" label="X-rays" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="cephalogram" label="Cephalogram" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D5'} name="photographs" label="Photographs" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D5'}
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
                                                    user.department === 'D5' && patient && patient.patientDFiveData &&
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

export default D5

D5.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};