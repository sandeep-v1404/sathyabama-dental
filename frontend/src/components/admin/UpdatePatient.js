import {
    Box, Button, Flex, Stack, useColorModeValue, Heading, useToast
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl, NumberInputControl, SelectControl, TextareaControl
} from "formik-chakra-ui"
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { clearErrors, getPatientDetails, updatePatient } from '../../actions/patientActions'
import { UPDATE_PATIENT_RESET } from '../../constants/patientConstants'
import MetaData from '../layout/MetaData'
UpdatePatient.propTypes = {
    match: PropTypes.any,
};
export default function UpdatePatient({ match }) {
    const toast = useToast()
    const history = useHistory()
    const dispatch = useDispatch();

    const [loadedValues, setLoadedValues] = useState(null)
    const { error, patient } = useSelector(state => state.patientDetails)
    const patientSelector = useSelector(state => state.patient);

    const patientId = match.params.id;


    useEffect(() => {
        if (patient && patient.id !== patientId) {
            dispatch(getPatientDetails(patientId));
        } else {
            setLoadedValues({
                outPatientId: patient.outPatientId,
                name: patient.name,
                age: patient.age,
                sex: patient.sex,
                occupation: patient.occupation,
                contactNumber: patient.contactNumber,
                residentialAddress: patient.residentialAddress
            })
        }
        if (patientSelector.error || error) {
            toast({
                title: patientSelector.error || error,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            dispatch(clearErrors())
        }
        if (patientSelector.updateError) {
            toast({
                title: patientSelector.updateError,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            dispatch(clearErrors())
        }
        if (patientSelector.isUpdated) {
            history.replace("/admin/patients")
            window.location.reload();
            toast({
                title: 'Patient updated successfully',
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            dispatch({ type: UPDATE_PATIENT_RESET })
        }
    }, [dispatch, alert, error, patientSelector.isUpdated, history, patientSelector.updateError, patientSelector.error, patient, patientId])

    const submitHandler = (patientData) => {
        dispatch(updatePatient(patient.id, patientData));
    }
    return (
        <>
            {
                loadedValues &&
                <>
                    <MetaData title={'Update Patient'} />
                    <Flex
                        minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack spacing={8} mx={'auto'} w={[400, 500, 800]} py={12} px={6}>
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
                                        initialValues={loadedValues || {
                                            outPatientId: '',
                                            name: '',
                                            age: '',
                                            sex: '',
                                            occupation: '',
                                            contactNumber: '',
                                            residentialAddress: '',
                                        }}
                                        onSubmit={(values) => {
                                            submitHandler(values);
                                        }}
                                    >
                                        {() => (
                                            <Form>
                                                <InputControl mt={3} isReadOnly name="outPatientId" label="OutPatient Id" />
                                                <InputControl mt={3} name="name" label="Name" />
                                                <NumberInputControl mt={3} name="age" label="Age" />
                                                <SelectControl
                                                    name="sex" mt={3} label="Sex"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Others">Others</option>
                                                </SelectControl>
                                                <InputControl mt={3} name="occupation" label="Occupation" />
                                                <NumberInputControl mt={3} name="contactNumber" label="Contact Number" />
                                                <TextareaControl mt={3} name="residentialAddress" label="Residential Address" />
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
                                                        Update Patient
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
        </>
    );
}