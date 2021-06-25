import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { newPatient, clearErrors } from '../../actions/patientActions'
import { NEW_PATIENT_RESET } from '../../constants/patientConstants'
import {
    Box, Button, Flex, Stack, useColorModeValue, Heading, useToast
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl, NumberInputControl, SelectControl, TextareaControl
} from "formik-chakra-ui"
const NewPatient = ({ history }) => {
    const toast = useToast()
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.newPatient);

    useEffect(() => {

        if (error) {
            toast({
                title: error,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/patients');
            toast({
                title: 'Patient created successfully',
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            dispatch({ type: NEW_PATIENT_RESET })
        }

    }, [dispatch, error, success, history])

    const submitHandler = (userData) => {
        console.log(userData);
        dispatch(newPatient(userData));
    }

    return (
        <>
            <MetaData title={'New Patient'} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} w={[400, 500, 800]} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={['2xl', '3xl', '4xl']}>Create New Patient</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Formik
                                initialValues={{
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
                                        <InputControl mt={3} name="outPatientId" placeholder="YYYY___" label="OutPatient Id" />
                                        <InputControl mt={3} placeholder="John Abraham" name="name" label="Name" />
                                        <NumberInputControl mt={3} name="age" label="Age" />
                                        <SelectControl mt={3}
                                            name="sex" label="Sex" selectProps={{ placeholder: "Select option" }}
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
                                                Create Patient
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
    )
}

export default NewPatient

NewPatient.propTypes = {
    history: PropTypes.any,
};