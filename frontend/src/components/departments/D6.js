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

const D6 = ({ history, match }) => {
    const toast = useToast();
    const { user } = useSelector(state => state.auth);

    const initialValues = {
        chiefComplaint: '',
        preNatalHistory: '',
        postNatalHistory: '',
        habits: '',
        injuries: '',
        medicalHistory: '',
        dentalHistory: '',
        familialMalocclusionHistory: '',
        generalHistory: '',
        brushingHabits: '',
        pubertalStatus: '',
        anyOtherInformation: '',
        physicalStatus: '',
        clinicalExamination: '',
        extraOralExamination: '',
        functionalExamination: '',
        amountOfIncisorExposure: '',
        tMJExamination: '',
        softTissues: '',
        tongue: '',
        oralMucosa: '',
        hardTissues: '',
        maxillaryArch: '',
        mandibularArch: '',
        relationOfMandibularToMaxillaryArch: '',
        anteroPosteriorRelationship: '',
        verticalRelationship: '',
        transverseRelationship: '',
        intraOralRadiographs: '',
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


    }, [dispatch, history, success])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
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

                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="preNatalHistory" label="Pre-natal History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="postNatalHistory" label="Post-natal History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="habits" label="Habits" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="injuries" label="Injuries" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="medicalHistory" label="Medical History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="dentalHistory" label="Dental History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="familialMalocclusionHistory" label="Familial Malocclusion History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="generalHistory" label="General History" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="brushingHabits" label="Brushing Habits" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="pubertalStatus" label="Pubertal Status" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="anyOtherInformation" label="Any Other Information" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="physicalStatus" label="Physical Status" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="clinicalExamination" label="Clinical Examination " />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="extraOralExamination" label="Extra Oral Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="functionalExamination" label="Functional Examination " />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="amountOfIncisorExposure" label="Amount of Incisor Exposure" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="tMJExamination" label="T M J Examination" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="softTissues" label="Soft Tissues" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="tongue" label="Tongue" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="oralMucosa" label="Oral Mucosa" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="hardTissues" label="Hard Tissues" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="maxillaryArch" label="Maxillary Arch" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="mandibularArch" label="Mandibular Arch" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="relationOfMandibularToMaxillaryArch" label="Relation of Mandibular to Maxillary Arch" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="anteroPosteriorRelationship" label="Antero-posterior Relationship" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="verticalRelationship" label="Vertical Relationship" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="transverseRelationship" label="Transverse Relationship" />
                                            <TextareaControl mt={3} isReadOnly={user.department !== 'D6'} name="intraOralRadiographs" label="Intra Oral Radiographs" />

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