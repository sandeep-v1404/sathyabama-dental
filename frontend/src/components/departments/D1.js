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
import Loader from "../layout/Loader"
import MetaData from '../layout/MetaData';

const D1 = ({ history, match }) => {
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
        referalToDepartments: "",
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
        if (patient && patient.patientDOneData !== null && patient.id.toString() === patientId.toString()) {
            setLoadedValues({
                id: patient.patientDOneData.id,
                chiefComplaint: patient.patientDOneData.chiefComplaint,
                historyOfPresentingIllness: patient.patientDOneData.historyOfPresentingIllness,
                medicalHistory: patient.patientDOneData.medicalHistory,
                surgicalHistory: patient.patientDOneData.surgicalHistory,
                dentalHistory: patient.patientDOneData.dentalHistory,
                personalHistory: patient.patientDOneData.personalHistory,
                diet: patient.patientDOneData.diet,
                personalHabits: patient.patientDOneData.personalHabits,
                familyHistory: patient.patientDOneData.familyHistory,
                maritalHistory: patient.patientDOneData.maritalHistory,
                stature: patient.patientDOneData.stature,
                appearance: patient.patientDOneData.appearance,
                built: patient.patientDOneData.built,
                nourishment: patient.patientDOneData.nourishment,
                structuralAlterationsDeformities: patient.patientDOneData.structuralAlterationsDeformities,
                hair: patient.patientDOneData.hair,
                skin: patient.patientDOneData.skin,
                pallor: patient.patientDOneData.pallor,
                icterus: patient.patientDOneData.icterus,
                pedalEdema: patient.patientDOneData.pedalEdema,
                cyanosis: patient.patientDOneData.cyanosis,
                bP: patient.patientDOneData.bP,
                respiratoryRate: patient.patientDOneData.respiratoryRate,
                pulseRate: patient.patientDOneData.pulseRate,
                temperature: patient.patientDOneData.temperature,
                cvs: patient.patientDOneData.cvs,
                rs: patient.patientDOneData.rs,
                git: patient.patientDOneData.git,
                cnd: patient.patientDOneData.cnd,
                urogenitalSystem: patient.patientDOneData.urogenitalSystem,
                facialSymmetry: patient.patientDOneData.facialSymmetry,
                earNoseEye: patient.patientDOneData.earNoseEye,
                tmj: patient.patientDOneData.tmj,
                lips: patient.patientDOneData.lips,
                maxillarySinusTenderness: patient.patientDOneData.maxillarySinusTenderness,
                lymphNodes: patient.patientDOneData.lymphNodes,
                intraOralExamination: patient.patientDOneData.intraOralExamination,
                openingOfTheMouth: patient.patientDOneData.openingOfTheMouth,
                interincisalDistance: patient.patientDOneData.interincisalDistance,
                jawDeviation: patient.patientDOneData.jawDeviation,
                teethNumber: patient.patientDOneData.teethNumber,
                teethSize: patient.patientDOneData.teethSize,
                teethShape: patient.patientDOneData.teethShape,
                teethColour: patient.patientDOneData.teethColour,
                teethMissingTooth: patient.patientDOneData.teethMissingTooth,
                teethRestoredTooth: patient.patientDOneData.teethRestoredTooth,
                teethStains: patient.patientDOneData.teethStains,
                teethCaries: patient.patientDOneData.teethCaries,
                teethAttrition: patient.patientDOneData.teethAttrition,
                teethAbrasion: patient.patientDOneData.teethAbrasion,
                teethErosion: patient.patientDOneData.teethErosion,
                teethMobility: patient.patientDOneData.teethMobility,
                teethRootStumps: patient.patientDOneData.teethRootStumps,
                teethFracture: patient.patientDOneData.teethFracture,
                teethRetainedDeciduous: patient.patientDOneData.teethRetainedDeciduous,
                teethPartiallyErupted: patient.patientDOneData.teethPartiallyErupted,
                teethDevelopmentalAnomalies: patient.patientDOneData.teethDevelopmentalAnomalies,
                gingivaColour: patient.patientDOneData.gingivaColour,
                gingivaContour: patient.patientDOneData.gingivaContour,
                gingivaConsistency: patient.patientDOneData.gingivaConsistency,
                gingivaCalculus: patient.patientDOneData.gingivaCalculus,
                gingivalRecession: patient.patientDOneData.gingivalRecession,
                gingivaPeriodontalPocket: patient.patientDOneData.gingivaPeriodontalPocket,
                alveolarMucosa: patient.patientDOneData.alveolarMucosa,
                buccalMucosaColour: patient.patientDOneData.buccalMucosaColour,
                buccalMucosaConsistency: patient.patientDOneData.buccalMucosaConsistency,
                buccalMucosaOpeningOfStensonSDuct: patient.patientDOneData.buccalMucosaOpeningOfStensonSDuct,
                labialMucosa: patient.patientDOneData.labialMucosa,
                palateHardPalate: patient.patientDOneData.palateHardPalate,
                palateSoftPalate: patient.patientDOneData.palateSoftPalate,
                tongueSize: patient.patientDOneData.tongueSize,
                tongueMovement: patient.patientDOneData.tongueMovement,
                tongueAttachment: patient.patientDOneData.tongueAttachment,
                tongueDorsalSurface: patient.patientDOneData.tongueDorsalSurface,
                tongueVentralSurface: patient.patientDOneData.tongueVentralSurface,
                tongueEdge: patient.patientDOneData.tongueEdge,
                tongueLateralSurface: patient.patientDOneData.tongueLateralSurface,
                tonsils: patient.patientDOneData.tonsils,
                floorOfTheMouth: patient.patientDOneData.floorOfTheMouth,
                pillarsOfTheFauces: patient.patientDOneData.pillarsOfTheFauces,
                inspection: patient.patientDOneData.inspection,
                palpation: patient.patientDOneData.palpation,
                summary: patient.patientDOneData.summary,
                provisionalDiagonosis: patient.patientDOneData.provisionalDiagonosis,
                investigations: patient.patientDOneData.investigations,
                finalDiagonosis: patient.patientDOneData.finalDiagonosis,
                treatmentPlan: patient.patientDOneData.treatmentPlan,
                referalToDepartments: patient.patientDOneData.referalToDepartments,
            });
        }
        else {
            history.push('/')
        }


    }, [dispatch, history, success])

    const submitHandler = (patientData) => {
        dispatch(updatePatientDataInDepartment(user.department, patientId, patientData));
    }

    return (
        <Fragment>
            <MetaData title={`Update D1 data`} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {
                    patient && <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 800]} py={[6, 12]} px={[1, 6]}>
                        <Stack align={'center'}>
                            <Heading fontSize={['2xl', '3xl', '4xl']}>Update D1 Data</Heading>
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
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="chiefComplaint" label="Chief Complaint" />
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="historyOfPresentingIllness" label="History of presenting illness" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="medicalHistory" label="Medical History" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="surgicalHistory" label="Surgical History" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="dentalHistory" label="Dental History" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="personalHistory" label="Personal History" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="diet" label="Diet" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="personalHabits" label="Personal Habits" />
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="familyHistory" label="Family History" />
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="maritalHistory" label="Marital History" />
                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>General Examination</FormLabel>
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="stature" label="Stature" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="appearance" label="Appearance" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="built" label="Built" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="nourishment" label="Nourishment" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="structuralAlterationsDeformities" label="Structural Alterations, Deformities" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="hair" label="Hair" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="skin" label="Skin" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="pallor" label="Pallor" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="icterus" label="Icterus" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="pedalEdema" label="Pedal Edema" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="cyanosis" label="Cyanosis" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Vital Signs</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="bP" label="B.P." />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="respiratoryRate" label="Respiratory rate" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="pulseRate" label="Pulse rate" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="temperature" label="Temperature" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Systematic Examination </FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="cvs" label="CVS" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="rs" label="RS" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="git" label="GIT" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="cnd" label="CND" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="urogenitalSystem" label="Urogenital System" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Local Examination </FormLabel>

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Extra Oral Examination </FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="facialSymmetry" label="Facial symmetry" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="earNoseEye" label="Ear, Nose, Eye" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tmj" label="TMJ" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="lips" label="Lips" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="maxillarySinusTenderness" label="Maxillary sinus tenderness" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="lymphNodes" label="Lymph Nodes" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Intra  Oral Examination </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="intraOralExamination" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Hard tissue Examination</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="openingOfTheMouth" label="Opening of the mouth" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="interincisalDistance" label="Interincisal distance" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="jawDeviation" label="Jaw Deviation" />
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Teeth</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethNumber" label="Number" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethSize" label="Size" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethShape" label="Shape" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethColour" label="Colour" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethMissingTooth" label="Missing Tooth" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethRestoredTooth" label="Restored Tooth" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethStains" label="Stains" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethCaries" label="Caries" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethAttrition" label="Attrition" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethAbrasion" label="Abrasion" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethErosion" label="Erosion" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethMobility" label="Mobility" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethRootStumps" label="Root stumps" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethFracture" label="Fracture" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethRetainedDeciduous" label="Retained deciduous" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethPartiallyErupted" label="Partially erupted" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="teethDevelopmentalAnomalies" label="Developmental Anomalies" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>  Soft tissue Examination</FormLabel>
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Gingiva</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="gingivaColour" label="Colour" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="gingivaContour" label="Contour" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="gingivaConsistency" label="Consistency" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="gingivaCalculus" label="Calculus" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="gingivalRecession" label="Gingival recession" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="gingivaPeriodontalPocket" label="Periodontal Pocket" />
                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Alveolar Mucosa</FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="alveolarMucosa" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Buccal Mucosa</FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="buccalMucosaColour" label="Colour" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="buccalMucosaConsistency" label="Consistency" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="buccalMucosaOpeningOfStensonSDuct" label="Opening of Stenson’s duct" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Labial Mucosa</FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="labialMucosa" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Palate </FormLabel>

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="palateHardPalate" label="Hard Palate" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="palateSoftPalate" label="Soft Palate" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Tongue </FormLabel>


                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueSize" label="Size" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueMovement" label="Movement" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueAttachment" label="Attachment" />

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueDorsalSurface" label="Dorsal Surface" />

                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueVentralSurface" label="Ventral Surface" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueEdge" label="Edge" />
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="tongueLateralSurface" label="Lateral Surface" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Tonsils </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="tonsils" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Floor of the mouth </FormLabel>
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="floorOfTheMouth" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Pillars of the fauces </FormLabel>
                                            <InputControl isReadOnly={user.department !== 'D1'} mt={3} name="pillarsOfTheFauces" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Examination of the lesion</FormLabel>

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Inspection  </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="inspection" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Palpation  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="palpation" />

                                            <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Summary  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="summary" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Provisional Diagonosis  </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="provisionalDiagonosis" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Investigations  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="investigations" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Final Diagonosis  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="finalDiagonosis" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Treatment Plan  </FormLabel>
                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="treatmentPlan" />

                                            <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Referal to Departments  </FormLabel>

                                            <TextareaControl isReadOnly={user.department !== 'D1'} mt={3} name="referalToDepartments" />

                                            <CheckboxSingleControl name="referToD1">
                                                D1
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD2">
                                                D2
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD3">
                                                D3
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD4">
                                                D4
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD5">
                                                D5
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD6">
                                                D6
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD7">
                                                D7
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD8">
                                                D8
                                            </CheckboxSingleControl>
                                            <CheckboxSingleControl name="referToD9">
                                                D9
                                            </CheckboxSingleControl>

                                            <Stack spacing={10} mt={3}>
                                                <Button
                                                    hidden={user.department !== 'D1'}
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

export default D1

D1.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};