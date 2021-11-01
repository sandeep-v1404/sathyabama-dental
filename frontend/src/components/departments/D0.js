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
        chiefComplaint: "",
        historyOfPresentingIllness: "",
        medicalHistory: "",
        surgicalHistory: "",
        dentalHistory: "",
        personalHistory: "",
        diet: "",
        personalHabits: "",
        familyHistory: "",
        maritalHistory: "",
        stature: "",
        appearance: "",
        built: "",
        nourishment: "",
        structuralAlterationsDeformities: "",
        hair: "",
        skin: "",
        pallor: "",
        icterus: "",
        pedalEdema: "",
        cyanosis: "",
        bP: "",
        respiratoryRate: "",
        pulseRate: "",
        temperature: "",
        cvs: "",
        rs: "",
        git: "",
        cnd: "",
        urogenitalSystem: "",
        facialSymmetry: "",
        earNoseEye: "",
        tmj: "",
        lips: "",
        maxillarySinusTenderness: "",
        lymphNodes: "",
        intraOralExamination: "",
        openingOfTheMouth: "",
        interincisalDistance: "",
        jawDeviation: "",
        teethNumber: "",
        teethSize: "",
        teethShape: "",
        teethColour: "",
        teethMissingTooth: "",
        teethRestoredTooth: "",
        teethStains: "",
        teethCaries: "",
        teethAttrition: "",
        teethAbrasion: "",
        teethErosion: "",
        teethMobility: "",
        teethRootStumps: "",
        teethFracture: "",
        teethRetainedDeciduous: "",
        teethPartiallyErupted: "",
        teethDevelopmentalAnomalies: "",
        gingivaColour: "",
        gingivaContour: "",
        gingivaConsistency: "",
        gingivaCalculus: "",
        gingivalRecession: "",
        gingivaPeriodontalPocket: "",
        alveolarMucosa: "",
        buccalMucosaColour: "",
        buccalMucosaConsistency: "",
        buccalMucosaOpeningOfStensonSDuct: "",
        labialMucosa: "",
        palateHardPalate: "",
        palateSoftPalate: "",
        tongueSize: "",
        tongueMovement: "",
        tongueAttachment: "",
        tongueDorsalSurface: "",
        tongueVentralSurface: "",
        tongueEdge: "",
        tongueLateralSurface: "",
        tonsils: "",
        floorOfTheMouth: "",
        pillarsOfTheFauces: "",
        inspection: "",
        palpation: "",
        summary: "",
        provisionalDiagonosis: "",
        investigations: "",
        finalDiagonosis: "",
        treatmentPlan: "",
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
                diet: patient.patientDZeroData.diet,
                personalHabits: patient.patientDZeroData.personalHabits,
                familyHistory: patient.patientDZeroData.familyHistory,
                maritalHistory: patient.patientDZeroData.maritalHistory,
                stature: patient.patientDZeroData.stature,
                appearance: patient.patientDZeroData.appearance,
                built: patient.patientDZeroData.built,
                nourishment: patient.patientDZeroData.nourishment,
                structuralAlterationsDeformities: patient.patientDZeroData.structuralAlterationsDeformities,
                hair: patient.patientDZeroData.hair,
                skin: patient.patientDZeroData.skin,
                pallor: patient.patientDZeroData.pallor,
                icterus: patient.patientDZeroData.icterus,
                pedalEdema: patient.patientDZeroData.pedalEdema,
                cyanosis: patient.patientDZeroData.cyanosis,
                bP: patient.patientDZeroData.bP,
                respiratoryRate: patient.patientDZeroData.respiratoryRate,
                pulseRate: patient.patientDZeroData.pulseRate,
                temperature: patient.patientDZeroData.temperature,
                cvs: patient.patientDZeroData.cvs,
                rs: patient.patientDZeroData.rs,
                git: patient.patientDZeroData.git,
                cnd: patient.patientDZeroData.cnd,
                urogenitalSystem: patient.patientDZeroData.urogenitalSystem,
                facialSymmetry: patient.patientDZeroData.facialSymmetry,
                earNoseEye: patient.patientDZeroData.earNoseEye,
                tmj: patient.patientDZeroData.tmj,
                lips: patient.patientDZeroData.lips,
                maxillarySinusTenderness: patient.patientDZeroData.maxillarySinusTenderness,
                lymphNodes: patient.patientDZeroData.lymphNodes,
                intraOralExamination: patient.patientDZeroData.intraOralExamination,
                openingOfTheMouth: patient.patientDZeroData.openingOfTheMouth,
                interincisalDistance: patient.patientDZeroData.interincisalDistance,
                jawDeviation: patient.patientDZeroData.jawDeviation,
                teethNumber: patient.patientDZeroData.teethNumber,
                teethSize: patient.patientDZeroData.teethSize,
                teethShape: patient.patientDZeroData.teethShape,
                teethColour: patient.patientDZeroData.teethColour,
                teethMissingTooth: patient.patientDZeroData.teethMissingTooth,
                teethRestoredTooth: patient.patientDZeroData.teethRestoredTooth,
                teethStains: patient.patientDZeroData.teethStains,
                teethCaries: patient.patientDZeroData.teethCaries,
                teethAttrition: patient.patientDZeroData.teethAttrition,
                teethAbrasion: patient.patientDZeroData.teethAbrasion,
                teethErosion: patient.patientDZeroData.teethErosion,
                teethMobility: patient.patientDZeroData.teethMobility,
                teethRootStumps: patient.patientDZeroData.teethRootStumps,
                teethFracture: patient.patientDZeroData.teethFracture,
                teethRetainedDeciduous: patient.patientDZeroData.teethRetainedDeciduous,
                teethPartiallyErupted: patient.patientDZeroData.teethPartiallyErupted,
                teethDevelopmentalAnomalies: patient.patientDZeroData.teethDevelopmentalAnomalies,
                gingivaColour: patient.patientDZeroData.gingivaColour,
                gingivaContour: patient.patientDZeroData.gingivaContour,
                gingivaConsistency: patient.patientDZeroData.gingivaConsistency,
                gingivaCalculus: patient.patientDZeroData.gingivaCalculus,
                gingivalRecession: patient.patientDZeroData.gingivalRecession,
                gingivaPeriodontalPocket: patient.patientDZeroData.gingivaPeriodontalPocket,
                alveolarMucosa: patient.patientDZeroData.alveolarMucosa,
                buccalMucosaColour: patient.patientDZeroData.buccalMucosaColour,
                buccalMucosaConsistency: patient.patientDZeroData.buccalMucosaConsistency,
                buccalMucosaOpeningOfStensonSDuct: patient.patientDZeroData.buccalMucosaOpeningOfStensonSDuct,
                labialMucosa: patient.patientDZeroData.labialMucosa,
                palateHardPalate: patient.patientDZeroData.palateHardPalate,
                palateSoftPalate: patient.patientDZeroData.palateSoftPalate,
                tongueSize: patient.patientDZeroData.tongueSize,
                tongueMovement: patient.patientDZeroData.tongueMovement,
                tongueAttachment: patient.patientDZeroData.tongueAttachment,
                tongueDorsalSurface: patient.patientDZeroData.tongueDorsalSurface,
                tongueVentralSurface: patient.patientDZeroData.tongueVentralSurface,
                tongueEdge: patient.patientDZeroData.tongueEdge,
                tongueLateralSurface: patient.patientDZeroData.tongueLateralSurface,
                tonsils: patient.patientDZeroData.tonsils,
                floorOfTheMouth: patient.patientDZeroData.floorOfTheMouth,
                pillarsOfTheFauces: patient.patientDZeroData.pillarsOfTheFauces,
                inspection: patient.patientDZeroData.inspection,
                palpation: patient.patientDZeroData.palpation,
                summary: patient.patientDZeroData.summary,
                provisionalDiagonosis: patient.patientDZeroData.provisionalDiagonosis,
                investigations: patient.patientDZeroData.investigations,
                finalDiagonosis: patient.patientDZeroData.finalDiagonosis,
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
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="historyOfPresentingIllness" label="History of presenting illness" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="medicalHistory" label="Medical History" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="surgicalHistory" label="Surgical History" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="dentalHistory" label="Dental History" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="personalHistory" label="Personal History" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="diet" label="Diet" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="personalHabits" label="Personal Habits" />
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="familyHistory" label="Family History" />
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="maritalHistory" label="Marital History" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>General Examination</FormLabel>
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="stature" label="Stature" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="appearance" label="Appearance" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="built" label="Built" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="nourishment" label="Nourishment" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="structuralAlterationsDeformities" label="Structural Alterations, Deformities" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="hair" label="Hair" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="skin" label="Skin" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="pallor" label="Pallor" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="icterus" label="Icterus" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="pedalEdema" label="Pedal Edema" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="cyanosis" label="Cyanosis" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Vital Signs</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="bP" label="B.P." />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="respiratoryRate" label="Respiratory rate" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="pulseRate" label="Pulse rate" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="temperature" label="Temperature" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Systematic Examination </FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="cvs" label="CVS" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="rs" label="RS" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="git" label="GIT" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="cnd" label="CND" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="urogenitalSystem" label="Urogenital System" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Local Examination </FormLabel>

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Extra Oral Examination </FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="facialSymmetry" label="Facial symmetry" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="earNoseEye" label="Ear, Nose, Eye" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tmj" label="TMJ" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="lips" label="Lips" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="maxillarySinusTenderness" label="Maxillary sinus tenderness" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="lymphNodes" label="Lymph Nodes" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Intra  Oral Examination </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="intraOralExamination" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Hard tissue Examination</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="openingOfTheMouth" label="Opening of the mouth" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="interincisalDistance" label="Interincisal distance" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="jawDeviation" label="Jaw Deviation" />
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Teeth</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethNumber" label="Number" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethSize" label="Size" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethShape" label="Shape" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethColour" label="Colour" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethMissingTooth" label="Missing Tooth" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethRestoredTooth" label="Restored Tooth" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethStains" label="Stains" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethCaries" label="Caries" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethAttrition" label="Attrition" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethAbrasion" label="Abrasion" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethErosion" label="Erosion" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethMobility" label="Mobility" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethRootStumps" label="Root stumps" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethFracture" label="Fracture" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethRetainedDeciduous" label="Retained deciduous" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethPartiallyErupted" label="Partially erupted" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="teethDevelopmentalAnomalies" label="Developmental Anomalies" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>  Soft tissue Examination</FormLabel>
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Gingiva</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="gingivaColour" label="Colour" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="gingivaContour" label="Contour" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="gingivaConsistency" label="Consistency" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="gingivaCalculus" label="Calculus" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="gingivalRecession" label="Gingival recession" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="gingivaPeriodontalPocket" label="Periodontal Pocket" />
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Alveolar Mucosa</FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="alveolarMucosa" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Buccal Mucosa</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="buccalMucosaColour" label="Colour" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="buccalMucosaConsistency" label="Consistency" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="buccalMucosaOpeningOfStensonSDuct" label="Opening of Stenson’s duct" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Labial Mucosa</FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="labialMucosa" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Palate </FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="palateHardPalate" label="Hard Palate" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="palateSoftPalate" label="Soft Palate" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Tongue </FormLabel>


                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueSize" label="Size" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueMovement" label="Movement" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueAttachment" label="Attachment" />

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueDorsalSurface" label="Dorsal Surface" />

                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueVentralSurface" label="Ventral Surface" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueEdge" label="Edge" />
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="tongueLateralSurface" label="Lateral Surface" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Tonsils </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="tonsils" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Floor of the mouth </FormLabel>
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="floorOfTheMouth" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Pillars of the fauces </FormLabel>
                                            <InputControl isReadOnly={user.department !== 'D0'} mt={3} name="pillarsOfTheFauces" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Examination of the lesion</FormLabel>

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Inspection  </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="inspection" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Palpation  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="palpation" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Summary  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="summary" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Provisional Diagonosis  </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="provisionalDiagonosis" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Investigations  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="investigations" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Final Diagonosis  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="finalDiagonosis" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Treatment Plan  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D0'} mt={3} name="treatmentPlan" />

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