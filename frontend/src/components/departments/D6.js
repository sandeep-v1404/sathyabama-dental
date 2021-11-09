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
import handleKeyDown from '../../utils/handleKeyDown'

const D6 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        preNatalHistory: 'Informer \nCondition of Mother during Pregnancy \nDelivery \nType',
        postNatalHistory: 'Feeding:\nDuration and Frequency of bottle:\nMilestones of Development:\nNORMAL \nSitting : 6months \nCrawling : 9months \nStanding : 12months \nWalking : 15months \nRunning : 18months \nPhonation : 20months',
        habits: '',
        injuries: '',
        medicalHistory: 'Childhood diseases \nHistory of Tonsillectomy and Adenoidectomy:',
        dentalHistory: '',
        familialMalocclusionHistory: 'Parents:\nSiblings:',
        generalHistory: "Reasons for taking Orthodontic Treatment  \nEsthetics/Function/Speech/Hygiene  \nPatient's Concern for Orthodontic  Treatment  \nAttitude of patient towards treatment",
        brushingHabits: '',
        pubertalStatus: '',
        anyOtherInformation: '',
        physicalStatus: 'Build:\nHeight:',
        clinicalExamination: '',
        extraOralExamination: 'Shape of head :\nFacial Form  :\nFacial Profile  :\nFacial divergence :\nNasolabial angle :\nSymmetry :\nFacial proportions :\nClinical FMA :\nLip Length :\nAt the Philtrum :\nAt Corner of Mouth :\nInterlabial Gap :\nLip Posture And Tonicity :\nMento Labial Sulcus :\nV.T.O :\nNaso Labial Angle :\nSmile Arc',
        functionalExamination: 'Respiration :\nMastication :\nPostural rest position  :\nPerioral muscle activity :\nHyperactive  mentalis/hypotonic upperlip  :\nDeglutition Speech :\nRest',
        amountOfIncisorExposure: 'At Rest :.....................mm\nDuring Speech :....................mm\nDuring Smile :.....................mm ',
        tMJExamination: 'Jaw Function / TMJ complaint now	       No		Yes \nIf yes specify___________________\nHistory of pain 			       No		Yes    	- duration\nHistory of sounds			       No		Yes    	- duration\nTM Joint tenderness to palpation	       No		Yes	Rt				Lt\nMuscle tenderness to palpation	       No		Yes	- if yes, where\nRange of Motion: Max opening  ________m.m	Protusion  ___________m.m\n	        	    Rt Excursion  ________m.m	Left Excursion________m.m',
        softTissues: 'Oral Hygiene Status :\nGingiva	: Normal/Oedematous/Fibrous\nBrushing Habits : Good/Satisfactory/Poor\nPosition of Mucogingival Junction :\nFrenal Attachment : \nUpper :\nLower :',
        tongue: 'Size:\nShape:\nMovements:\nPosture:',
        oralMucosa: '',
        hardTissues: 'Number of teeth present :\nNumber of unerupted teeth:\nSupernumerary/missing teeth:\nSize, form of teeth:\nTexture:\nCaries:\nEndodontically treated:\nOcclusal wear facets:',
        maxillaryArch: 'Shape : average/ ‘v’ shaped / ‘u’ shaped / square\nArch symmetry : symmetrical / asymmetrical\nArch alignment :\nPalatal contour :',
        mandibularArch: 'Shape :	average/ ‘v’ shaped / ‘u’ shaped / square\nArch symmetry :	symmetrical / asymmetrical\nArch alignment :\nCurve of spee :',
        relationOfMandibularToMaxillaryArch: 'MIDLINE:\nUpper:\nLower:\nFunctional:\nMaximum opening (incisal edges):\nFreeway space:\nCurve of spee:',
        anteroPosteriorRelationship: 'Molar relation :\nCanine Relation: \nIncisor Relation: Overjet________m.m',
        verticalRelationship: 'Overbite_______m.m/________%',
        transverseRelationship: 'Crossbite / Scissor bite etc.,',
        intraOralRadiographs: 'Intra Oral Radiographs:\n    1. Teeth Present: \n    2. Teeth Absent:  \n    3. Root Resorption				Root Formation				\n    4. Eruption Levels				Lamina dura and height of interdental crest\n    5. Supernumerary teeth			Third Molar\n    6. Pathological Conditions			Any other special Investigations:a',
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
        if (patient && patient.patientDSixData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDSixData.id || null,
                chiefComplaint: patient.patientDSixData.chiefComplaint,
                preNatalHistory: patient.patientDSixData.preNatalHistory,
                postNatalHistory: patient.patientDSixData.postNatalHistory,
                habits: patient.patientDSixData.habits,
                injuries: patient.patientDSixData.injuries,
                medicalHistory: patient.patientDSixData.medicalHistory,
                dentalHistory: patient.patientDSixData.dentalHistory,
                familialMalocclusionHistory: patient.patientDSixData.familialMalocclusionHistory,
                generalHistory: patient.patientDSixData.generalHistory,
                brushingHabits: patient.patientDSixData.brushingHabits,
                pubertalStatus: patient.patientDSixData.pubertalStatus,
                anyOtherInformation: patient.patientDSixData.anyOtherInformation,
                physicalStatus: patient.patientDSixData.physicalStatus,
                clinicalExamination: patient.patientDSixData.clinicalExamination,
                extraOralExamination: patient.patientDSixData.extraOralExamination,
                functionalExamination: patient.patientDSixData.functionalExamination,
                amountOfIncisorExposure: patient.patientDSixData.amountOfIncisorExposure,
                tMJExamination: patient.patientDSixData.tMJExamination,
                softTissues: patient.patientDSixData.softTissues,
                tongue: patient.patientDSixData.tongue,
                oralMucosa: patient.patientDSixData.oralMucosa,
                hardTissues: patient.patientDSixData.hardTissues,
                maxillaryArch: patient.patientDSixData.maxillaryArch,
                mandibularArch: patient.patientDSixData.mandibularArch,
                relationOfMandibularToMaxillaryArch: patient.patientDSixData.relationOfMandibularToMaxillaryArch,
                anteroPosteriorRelationship: patient.patientDSixData.anteroPosteriorRelationship,
                verticalRelationship: patient.patientDSixData.verticalRelationship,
                transverseRelationship: patient.patientDSixData.transverseRelationship,
                intraOralRadiographs: patient.patientDSixData.intraOralRadiographs,
            });
        }
        if (!patient) {
            history.push("/");
        }
        if (patient && patient.patientDOneData && patient.patientDOneData.referToD6 === false) {
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

            <MetaData title={`Department of Orthodontia`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 900]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Department of Orthodontia</Heading>
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

                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="preNatalHistory" label="Pre-natal History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="postNatalHistory" label="Post-natal History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="habits" label="Habits" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="injuries" label="Injuries" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="medicalHistory" label="Medical History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="dentalHistory" label="Dental History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="familialMalocclusionHistory" label="Familial Malocclusion History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="generalHistory" label="General History" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="brushingHabits" label="Brushing Habits" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="pubertalStatus" label="Pubertal Status" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="anyOtherInformation" label="Any Other Information" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="physicalStatus" label="Physical Status" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="clinicalExamination" label="Clinical Examination " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="extraOralExamination" label="Extra Oral Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="functionalExamination" label="Functional Examination " />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="amountOfIncisorExposure" label="Amount of Incisor Exposure" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="tMJExamination" label="T M J Examination" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="softTissues" label="Soft Tissues" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="tongue" label="Tongue" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="oralMucosa" label="Oral Mucosa" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="hardTissues" label="Hard Tissues" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="maxillaryArch" label="Maxillary Arch" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="mandibularArch" label="Mandibular Arch" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="relationOfMandibularToMaxillaryArch" label="Relation of Mandibular to Maxillary Arch" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="anteroPosteriorRelationship" label="Antero-posterior Relationship" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="verticalRelationship" label="Vertical Relationship" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="transverseRelationship" label="Transverse Relationship" />
                                            <TextareaControl onClick={handleKeyDown} mt={3} isReadOnly={user.department !== 'D6'} name="intraOralRadiographs" label="Intra Oral Radiographs" />

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D6'}
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
                                                    user.department === 'D6' && patient && patient.patientDSixData &&
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

export default D6

D6.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};