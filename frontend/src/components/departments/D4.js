import {
    Box, Button, Flex, Heading, Stack, useColorModeValue, useToast, Text, SimpleGrid
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl,
} from "formik-chakra-ui"
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'
import Loader from "../layout/Loader";
import PropTypes from 'prop-types';

import { clearErrors, updatePatientDataInDepartment } from '../../actions/departmentActions'
import { UPDATE_DEPT_DATA_RESET } from '../../constants/departmentConstants'

const D4 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: "",
        medicalHistory: "",
        ifYesDetailsOfTheMedication: "",
        allergiesIfAny: "",
        dentalHistory: "",
        extra0RalExamination: "",
        tmj: "",
        intraoralExamination: "",
        teethFilled: "",
        teethMissing: "",
        rootTreated: "",
        occlusion: "",
        occlusionCanine: "",
        occlusionMolar: "",
        occlusionOthers: "",
        miscellaneous: "",
        radiographicInterpretation: "",
        diagnosis: "",
        treatmentPlanRemovablePartialDenture: "",
        treatmentPlanCompleteDenture: "",
        treatmentPlanFixedPartialDenture: "",
        treatmentPlanImplant: "",
        treatmentPlanOthers: "",
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
        if (patient && patient.patientDFourData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDFourData.id || null,
                chiefComplaint: patient.patientDFourData.chiefComplaint,
                medicalHistory: patient.patientDFourData.medicalHistory,
                ifYesDetailsOfTheMedication: patient.patientDFourData.ifYesDetailsOfTheMedication,
                allergiesIfAny: patient.patientDFourData.allergiesIfAny,
                dentalHistory: patient.patientDFourData.dentalHistory,
                extraORalExamination: patient.patientDFourData.extraORalExamination,
                tmj: patient.patientDFourData.tmj,
                intraoralExamination: patient.patientDFourData.intraoralExamination,
                teethFilled: patient.patientDFourData.teethFilled,
                teethMissing: patient.patientDFourData.teethMissing,
                rootTreated: patient.patientDFourData.rootTreated,
                occlusion: patient.patientDFourData.occlusion,
                occlusionCanine: patient.patientDFourData.occlusionCanine,
                occlusionMolar: patient.patientDFourData.occlusionMolar,
                occlusionOthers: patient.patientDFourData.occlusionOthers,
                miscellaneous: patient.patientDFourData.miscellaneous,
                radiographicInterpretation: patient.patientDFourData.radiographicInterpretation,
                diagnosis: patient.patientDFourData.diagnosis,
                treatmentPlanRemovablePartialDenture: patient.patientDFourData.treatmentPlanRemovablePartialDenture,
                treatmentPlanCompleteDenture: patient.patientDFourData.treatmentPlanCompleteDenture,
                treatmentPlanFixedPartialDenture: patient.patientDFourData.treatmentPlanFixedPartialDenture,
                treatmentPlanImplant: patient.patientDFourData.treatmentPlanImplant,
                treatmentPlanOthers: patient.patientDFourData.treatmentPlanOthers
            });
        }
        if (!patient) {
            history.push("/");
        }
    }, [dispatch, history, success])

    const submitHandler = (patientData) => {
        console.log(patientData);
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }

    return (
        <Fragment>

            <MetaData title={`Update D4 data`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient &&
                    <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 800]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}> Department of Conservative dentistry & Endodontia </Heading>
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
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="chiefComplaint" label="Chief  Complainy  :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="medicalHistory" label="MEDICAL HISTORY : " />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="ifYesDetailsOfTheMedication" label="If Yes, details of the medication :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="allergiesIfAny" label="Allergies if any :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="dentalHistory" label="DENTAL HISTORY :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="extra0RalExamination" label="EXTRA0RAL EXAMINATION:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="tmj" label="TMJ :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="intraoralExamination" label="INTRAORAL EXAMINATION:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="teethFilled" label="TEETH FILLED:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="teethMissing" label="TEETH  MISSING :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="rootTreated" label="ROOT TREATED:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="occlusion" label="OCCLUSION:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="occlusionCanine" label="OCCLUSION CANINE:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="occlusionMolar" label="OCCLUSION MOLAR:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="occlusionOthers" label="OCCLUSION OTHERS:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="miscellaneous" label="MISCELLANEOUS:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="radiographicInterpretation" label=" RADIOGRAPHIC INTERPRETATION :" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="diagnosis" label="DIAGNOSIS:" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="treatmentPlanRemovablePartialDenture" label="TREATMENT PLAN REMOVABLE PARTIAL DENTURE" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="treatmentPlanCompleteDenture" label="TREATMENT PLAN COMPLETE DENTURE" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="treatmentPlanFixedPartialDenture" label="TREATMENT PLAN FIXED PARTIAL DENTURE" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="treatmentPlanImplant" label="TREATMENT PLAN IMPLANT" />
                                            <InputControl mt={3} isReadOnly={user.department !== 'D4'} name="treatmentPlanOthers" label="TREATMENT PLAN ​OTHER" />
                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D4'}
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

export default D4

D4.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};