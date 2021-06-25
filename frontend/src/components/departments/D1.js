/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    Box, Button, Flex, FormLabel, Heading, Stack, useColorModeValue, useToast
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl,
    SelectControl,
    TextareaControl
} from "formik-chakra-ui"
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'

const D1 = ({ match }) => {
    const toast = useToast()
    const [loadedValues, setLoadedValues] = useState(null);

    const dispatch = useDispatch();

    const { patient, error, isUpdated } = useSelector(state => state.patient);

    const patientId = match.params.patientId;

    // useEffect(() => {
    //     if (patient && patient.id !== patientId) {
    //         // dispatch(getUserDetails(userId))
    //     } else {
    //         setLoadedValues({
    //             cheifComplaint: patient.cheifComplaint,
    //             historyOfPresentingIllness: patient.historyOfPresentingIllness,
    //             medicalHistory: patient.medicalHistory,
    //             surgicalHistory: patient.surgicalHistory,
    //             dentalHistory: patient.dentalHistory,
    //             personalHistory: patient.personalHistory,
    //             diet: patient.diet,
    //             personalHabits: patient.personalHabits,
    //             familyHistory: patient.familyHistory,
    //             maritalHistory: patient.maritalHistory,
    //             stature: patient.stature,
    //             appearance: patient.appearance,
    //             built: patient.built,
    //             nourishment: patient.nourishment,
    //             structuralAlterationsDeformities: patient.structuralAlterationsDeformities,
    //             hair: patient.hair,
    //             skin: patient.skin,
    //             pallor: patient.pallor,
    //             icterus: patient.icterus,
    //             pedalEdema: patient.pedalEdema,
    //             cyanosis: patient.cyanosis,
    //             bP: patient.bP,
    //             respiratoryRate: patient.respiratoryRate,
    //             pulseRate: patient.pulseRate,
    //             temperature: patient.temperature,
    //             cvs: patient.cvs,
    //             rs: patient.rs,
    //             git: patient.git,
    //             cnd: patient.cnd,
    //             urogenitalSystem: patient.urogenitalSystem,
    //             facialSymmetry: patient.facialSymmetry,
    //             earNoseEye: patient.earNoseEye,
    //             tmj: patient.tmj,
    //             lips: patient.lips,
    //             maxillarySinusTenderness: patient.maxillarySinusTenderness,
    //             lymphNodes: patient.lymphNodes,
    //             intraOralExamination: patient.intraOralExamination,
    //             openingOfTheMouth: patient.openingOfTheMouth,
    //             interincisalDistance: patient.interincisalDistance,
    //             jawDeviation: patient.jawDeviation,
    //             teethNumber: patient.teethNumber,
    //             teethSize: patient.teethSize,
    //             teethShape: patient.teethShape,
    //             teethColour: patient.teethColour,
    //             teethMissingTooth: patient.teethMissingTooth,
    //             teethRestoredTooth: patient.teethRestoredTooth,
    //             teethStains: patient.teethStains,
    //             teethCaries: patient.teethCaries,
    //             teethAttrition: patient.teethAttrition,
    //             teethAbrasion: patient.teethAbrasion,
    //             teethErosion: patient.teethErosion,
    //             teethMobility: patient.teethMobility,
    //             teethRootStumps: patient.teethRootStumps,
    //             teethFracture: patient.teethFracture,
    //             teethRetainedDeciduous: patient.teethRetainedDeciduous,
    //             teethPartiallyErupted: patient.teethPartiallyErupted,
    //             teethDevelopmentalAnomalies: patient.teethDevelopmentalAnomalies,
    //             gingivaColour: patient.gingivaColour,
    //             gingivaContour: patient.gingivaContour,
    //             gingivaConsistency: patient.gingivaConsistency,
    //             gingivaCalculus: patient.gingivaCalculus,
    //             gingivalRecession: patient.gingivalRecession,
    //             gingivaPeriodontalPocket: patient.gingivaPeriodontalPocket,
    //             alveolarMucosa: patient.alveolarMucosa,
    //             buccalMucosaColour: patient.buccalMucosaColour,
    //             buccalMucosaConsistency: patient.buccalMucosaConsistency,
    //             buccalMucosaOpeningOfStensonSDuct: patient.buccalMucosaOpeningOfStensonSDuct,
    //             labialMucosa: patient.labialMucosa,
    //             palateHardPalate: patient.palateHardPalate,
    //             palateSoftPalate: patient.palateSoftPalate,
    //             tongueSize: patient.tongueSize,
    //             tongueMovement: patient.tongueMovement,
    //             tongueAttachment: patient.tongueAttachment,
    //             tongueDorsalSurface: patient.tongueDorsalSurface,
    //             tongueVentralSurface: patient.tongueVentralSurface,
    //             tongueEdge: patient.tongueEdge,
    //             tongueLateralSurface: patient.tongueLateralSurface,
    //             tonsils: patient.tonsils,
    //             floorOfTheMouth: patient.floorOfTheMouth,
    //             pillarsOfTheFauces: patient.pillarsOfTheFauces,
    //             inspection: patient.inspection,
    //             palpation: patient.palpation,
    //             summary: patient.summary,
    //             provisionalDiagonosis: patient.provisionalDiagonosis,
    //             investigations: patient.investigations,
    //             finalDiagonosis: patient.finalDiagonosis,
    //             treatmentPlan: patient.treatmentPlan,
    //             referalToDepartments: patient.referalToDepartments,
    //         })
    //     }

    //     if (error) {
    //         toast({
    //             title: error,
    //             status: "error",
    //             duration: 5000,
    //             isClosable: true,
    //         })
    //         // dispatch(clearErrors());
    //     }

    //     if (isUpdated) {
    //         toast({
    //             title: 'User updated successfully',
    //             status: "success",
    //             duration: 5000,
    //             isClosable: true,
    //         })

    //         // history.push('/admin/users')

    //         // dispatch({
    //         //     type: UPDATE_USER_RESET
    //         // })
    //     }

    // }, [dispatch, error, history, isUpdated])

    const submitHandler = (userData) => {
        // dispatch(updateUser(user.id, userData))
    }

    return (
        <Fragment>
            {
                !loadedValues && <>
                    <MetaData title={`Update User`} />
                    <Flex
                        minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack spacing={[4, 8]} mx={'auto'} w={[400, 500, 800]} py={[6, 12]} px={[1, 6]}>
                            <Stack align={'center'}>
                                <Heading fontSize={['2xl', '3xl', '4xl']}>Update Patient</Heading>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <Formik
                                        initialValues={{
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
                                        }}
                                        onSubmit={(values) => {
                                            console.log(values);
                                            // submitHandler(values);
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <InputControl mt={3} name="chiefComplaint" label="Chief Complaint" />
                                                <TextareaControl mt={3} name="historyOfPresentingIllness" label="History of presenting illness" />
                                                <InputControl mt={3} name="medicalHistory" label="Medical History" />
                                                <InputControl mt={3} name="surgicalHistory" label="Surgical History" />
                                                <InputControl mt={3} name="dentalHistory" label="Dental History" />
                                                <InputControl mt={3} name="personalHistory" label="Personal History" />
                                                <InputControl mt={3} name="diet" label="Diet" />
                                                <InputControl mt={3} name="personalHabits" label="Personal Habits" />
                                                <TextareaControl mt={3} name="familyHistory" label="Family History" />
                                                <TextareaControl mt={3} name="maritalHistory" label="Marital History" />
                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>General Examination</FormLabel>
                                                <InputControl mt={3} name="stature" label="Stature" />
                                                <InputControl mt={3} name="appearance" label="Appearance" />
                                                <InputControl mt={3} name="built" label="Built" />
                                                <InputControl mt={3} name="nourishment" label="Nourishment" />
                                                <InputControl mt={3} name="structuralAlterationsDeformities" label="Structural Alterations, Deformities" />
                                                <InputControl mt={3} name="hair" label="Hair" />
                                                <InputControl mt={3} name="skin" label="Skin" />
                                                <InputControl mt={3} name="pallor" label="Pallor" />
                                                <InputControl mt={3} name="icterus" label="Icterus" />
                                                <InputControl mt={3} name="pedalEdema" label="Pedal Edema" />
                                                <InputControl mt={3} name="cyanosis" label="Cyanosis" />

                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Vital Signs</FormLabel>

                                                <InputControl mt={3} name="bP" label="B.P." />
                                                <InputControl mt={3} name="respiratoryRate" label="Respiratory rate" />
                                                <InputControl mt={3} name="pulseRate" label="Pulse rate" />
                                                <InputControl mt={3} name="temperature" label="Temperature" />

                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Systematic Examination </FormLabel>

                                                <InputControl mt={3} name="cvs" label="CVS" />
                                                <InputControl mt={3} name="rs" label="RS" />
                                                <InputControl mt={3} name="git" label="GIT" />
                                                <InputControl mt={3} name="cnd" label="CND" />
                                                <InputControl mt={3} name="urogenitalSystem" label="Urogenital System" />

                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Local Examination </FormLabel>

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Extra Oral Examination </FormLabel>

                                                <InputControl mt={3} name="facialSymmetry" label="Facial symmetry" />
                                                <InputControl mt={3} name="earNoseEye" label="Ear, Nose, Eye" />
                                                <InputControl mt={3} name="tmj" label="TMJ" />
                                                <InputControl mt={3} name="lips" label="Lips" />
                                                <InputControl mt={3} name="maxillarySinusTenderness" label="Maxillary sinus tenderness" />
                                                <InputControl mt={3} name="lymphNodes" label="Lymph Nodes" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Intra  Oral Examination </FormLabel>

                                                <TextareaControl mt={3} name="intraOralExamination" />

                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Hard tissue Examination</FormLabel>

                                                <InputControl mt={3} name="openingOfTheMouth" label="Opening of the mouth" />
                                                <InputControl mt={3} name="interincisalDistance" label="Interincisal distance" />
                                                <InputControl mt={3} name="jawDeviation" label="Jaw Deviation" />
                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}> Teeth</FormLabel>

                                                <InputControl mt={3} name="teethNumber" label="Number" />
                                                <InputControl mt={3} name="teethSize" label="Size" />
                                                <InputControl mt={3} name="teethShape" label="Shape" />
                                                <InputControl mt={3} name="teethColour" label="Colour" />
                                                <InputControl mt={3} name="teethMissingTooth" label="Missing Tooth" />
                                                <InputControl mt={3} name="teethRestoredTooth" label="Restored Tooth" />
                                                <InputControl mt={3} name="teethStains" label="Stains" />
                                                <InputControl mt={3} name="teethCaries" label="Caries" />
                                                <InputControl mt={3} name="teethAttrition" label="Attrition" />
                                                <InputControl mt={3} name="teethAbrasion" label="Abrasion" />
                                                <InputControl mt={3} name="teethErosion" label="Erosion" />
                                                <InputControl mt={3} name="teethMobility" label="Mobility" />
                                                <InputControl mt={3} name="teethRootStumps" label="Root stumps" />
                                                <InputControl mt={3} name="teethFracture" label="Fracture" />
                                                <InputControl mt={3} name="teethRetainedDeciduous" label="Retained deciduous" />
                                                <InputControl mt={3} name="teethPartiallyErupted" label="Partially erupted" />
                                                <InputControl mt={3} name="teethDevelopmentalAnomalies" label="Developmental Anomalies" />

                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>  Soft tissue Examination</FormLabel>
                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Gingiva</FormLabel>

                                                <InputControl mt={3} name="gingivaColour" label="Colour" />
                                                <InputControl mt={3} name="gingivaContour" label="Contour" />
                                                <InputControl mt={3} name="gingivaConsistency" label="Consistency" />
                                                <InputControl mt={3} name="gingivaCalculus" label="Calculus" />
                                                <InputControl mt={3} name="gingivalRecession" label="Gingival recession" />
                                                <InputControl mt={3} name="gingivaPeriodontalPocket" label="Periodontal Pocket" />
                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Alveolar Mucosa</FormLabel>

                                                <TextareaControl mt={3} name="alveolarMucosa" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Buccal Mucosa</FormLabel>

                                                <InputControl mt={3} name="buccalMucosaColour" label="Colour" />
                                                <InputControl mt={3} name="buccalMucosaConsistency" label="Consistency" />
                                                <InputControl mt={3} name="buccalMucosaOpeningOfStensonSDuct" label="Opening of Stenson’s duct" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Labial Mucosa</FormLabel>

                                                <TextareaControl mt={3} name="labialMucosa" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Palate </FormLabel>

                                                <InputControl mt={3} name="palateHardPalate" label="Hard Palate" />
                                                <InputControl mt={3} name="palateSoftPalate" label="Soft Palate" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Tongue </FormLabel>


                                                <InputControl mt={3} name="tongueSize" label="Size" />
                                                <InputControl mt={3} name="tongueMovement" label="Movement" />
                                                <InputControl mt={3} name="tongueAttachment" label="Attachment" />

                                                <InputControl mt={3} name="tongueDorsalSurface" label="Dorsal Surface" />

                                                <InputControl mt={3} name="tongueVentralSurface" label="Ventral Surface" />
                                                <InputControl mt={3} name="tongueEdge" label="Edge" />
                                                <InputControl mt={3} name="tongueLateralSurface" label="Lateral Surface" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Tonsils </FormLabel>
                                                <TextareaControl mt={3} name="tonsils" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Floor of the mouth </FormLabel>
                                                <InputControl mt={3} name="floorOfTheMouth" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Floor of the mouth </FormLabel>
                                                <InputControl mt={3} name="pillarsOfTheFauces" label="Pillars of the fauces" />

                                                <FormLabel borderRadius={"10"} bg={"blue.300"} m={5} textAlign={"center"}>Examination of the lesion</FormLabel>

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Inspection  </FormLabel>

                                                <TextareaControl mt={3} name="inspection" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Palpation  </FormLabel>
                                                <TextareaControl mt={3} name="palpation" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Summary  </FormLabel>
                                                <TextareaControl mt={3} name="summary" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Provisional Diagonosis  </FormLabel>

                                                <TextareaControl mt={3} name="provisionalDiagonosis" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Investigations  </FormLabel>
                                                <TextareaControl mt={3} name="investigations" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Final Diagonosis  </FormLabel>
                                                <TextareaControl mt={3} name="finalDiagonosis" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Treatment Plan  </FormLabel>
                                                <TextareaControl mt={3} name="treatmentPlan" />

                                                <FormLabel borderRadius={"10"} bg={"blue.200"} m={5} textAlign={"center"}>Referal to Departments  </FormLabel>

                                                <TextareaControl mt={3} name="referalToDepartments" />

                                                <Stack spacing={10} mt={3}>
                                                    <Button
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
                    </Flex>
                </>
            }
        </Fragment >
    )
}

export default D1