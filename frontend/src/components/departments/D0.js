import {
    Box, Button, Flex, FormLabel, Heading, SimpleGrid, Stack, Text, useColorModeValue, useToast
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    CheckboxSingleControl, InputControl,
    TextareaControl
} from "formik-chakra-ui"
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'
import { PATIENT_RESET } from '../../constants/patientConstants'
import Loader from "../layout/Loader"
import MetaData from '../layout/MetaData';

const D0 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        historyOfPresentingIllness: '',
        medicalHistory: '',
        surgicalHistory: '',
        dentalHistory: '',
        personalHistory: '',
        familyHistory: '',
        maritalHistory: '',
        generalExamination: '',
        vitalSigns: '',
        systemicExamination: '',
        extraOralExamination: '',
        intraOralExamination: '',
        hardTissueExamination: '',
        teeth: '',
        gingiva: '',
        alveolarMucosa: '',
        buccalMucosa: '',
        labialMucosa: '',
        palate: '',
        tongue: '',
        tonsils: '',
        floorOfTheMouth: '',
        pillarsOfTheFauces: '',
        examinationOfTheLesion: '',
        summary: '',
        provisionalDiagnosis: '',
        differentialDiagnosis: '',
        investigations: '',
        finalDiagnosis: '',
        treatmentPlan: '',
        referToD1: false,
        referToD2: false,
        referToD3: false,
        referToD4: false,
        referToD5: false,
        referToD6: false,
        referToD7: false,
        referToD8: false,
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
        if (patient && patient.patientDZeroData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDZeroData.id,
                chiefComplaint: patient.patientDZeroData.chiefComplaint,
                historyOfPresentingIllness: patient.patientDZeroData.historyOfPresentingIllness,
                medicalHistory: patient.patientDZeroData.medicalHistory,
                surgicalHistory: patient.patientDZeroData.surgicalHistory,
                dentalHistory: patient.patientDZeroData.dentalHistory,
                personalHistory: patient.patientDZeroData.personalHistory,
                familyHistory: patient.patientDZeroData.familyHistory,
                maritalHistory: patient.patientDZeroData.maritalHistory,
                generalExamination: patient.patientDZeroData.generalExamination,
                vitalSigns: patient.patientDZeroData.vitalSigns,
                systemicExamination: patient.patientDZeroData.systemicExamination,
                extraOralExamination: patient.patientDZeroData.extraOralExamination,
                intraOralExamination: patient.patientDZeroData.intraOralExamination,
                hardTissueExamination: patient.patientDZeroData.hardTissueExamination,
                teeth: patient.patientDZeroData.teeth,
                gingiva: patient.patientDZeroData.gingiva,
                alveolarMucosa: patient.patientDZeroData.alveolarMucosa,
                buccalMucosa: patient.patientDZeroData.buccalMucosa,
                labialMucosa: patient.patientDZeroData.labialMucosa,
                palate: patient.patientDZeroData.palate,
                tongue: patient.patientDZeroData.tongue,
                tonsils: patient.patientDZeroData.tonsils,
                floorOfTheMouth: patient.patientDZeroData.floorOfTheMouth,
                pillarsOfTheFauces: patient.patientDZeroData.pillarsOfTheFauces,
                examinationOfTheLesion: patient.patientDZeroData.examinationOfTheLesion,
                summary: patient.patientDZeroData.summary,
                provisionalDiagnosis: patient.patientDZeroData.provisionalDiagnosis,
                differentialDiagnosis: patient.patientDZeroData.differentialDiagnosis,
                investigations: patient.patientDZeroData.investigations,
                finalDiagnosis: patient.patientDZeroData.finalDiagnosis,
                treatmentPlan: patient.patientDZeroData.treatmentPlan,
                referToD1: patient.patientDZeroData.referToD1,
                referToD2: patient.patientDZeroData.referToD2,
                referToD3: patient.patientDZeroData.referToD3,
                referToD4: patient.patientDZeroData.referToD4,
                referToD5: patient.patientDZeroData.referToD5,
                referToD6: patient.patientDZeroData.referToD6,
                referToD7: patient.patientDZeroData.referToD7,
                referToD8: patient.patientDZeroData.referToD9,
            });
        }
        if (!patient) {
            history.push('/');
        }


    }, [dispatch, history, success])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }

    return (
        <Fragment>
            <MetaData title={`OMRD Department`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient && <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 800]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>OMRD Department</Heading>
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
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <InputControl hidden name="id" />

                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="historyOfPresentingIllness" label="History of Presenting Illness" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="medicalHistory" label="Medical History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="surgicalHistory" label="Surgical History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="dentalHistory" label="Dental History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="personalHistory" label="Personal History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="familyHistory" label="Family History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="maritalHistory" label="Marital History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="generalExamination" label="General Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="vitalSigns" label="Vital Signs" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="systemicExamination" label="Systemic Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="extraOralExamination" label="Extra Oral Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="intraOralExamination" label="Intra Oral Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="hardTissueExamination" label="Hard Tissue Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="teeth" label="Teeth" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="gingiva" label="Gingiva" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="alveolarMucosa" label="Alveolar Mucosa" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="buccalMucosa" label="Buccal Mucosa" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="labialMucosa" label="Labial Mucosa" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="palate" label="Palate" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="tongue" label="Tongue" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="tonsils" label="Tonsils" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="floorOfTheMouth" label="Floor of the Mouth" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="pillarsOfTheFauces" label="Pillars of the Fauces" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="examinationOfTheLesion" label="Examination of the Lesion" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="summary" label="Summary" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="provisionalDiagnosis" label="Provisional Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="differentialDiagnosis" label="Differential Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="investigations" label="Investigations" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="finalDiagnosis" label="Final Diagnosis" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D0'} name="treatmentPlan" label="Treatment Plan" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Referal to Departments  </FormLabel>

                                            <CheckboxSingleControl name="referToD1">
                                                1. Department of Periodontia
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD2">
                                                2. Department of Oral & Maxillo Facial Surgery
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD3">
                                                3. Department of Conservative dentistry & Endodontia
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD4">
                                                4. Department of Prosthodontia
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD5">
                                                5. Department of Pedodontia
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD6">
                                                6. Department of Orthodontia

                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD7">
                                                7. Department of Public Health dentistry
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD8">
                                                8. Department of Oral & Maxillo Facial Pathology

                                            </CheckboxSingleControl>
                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D0'}
                                                    disabled={isSubmitting}
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

export default D0

D0.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};