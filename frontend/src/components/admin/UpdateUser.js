import {
    Box, Button, Flex, Heading, Stack, useColorModeValue, useToast
} from '@chakra-ui/react'
import { Form, Formik } from "formik"
import {
    InputControl,
    SelectControl
} from "formik-chakra-ui"
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getUserDetails, updateUser } from '../../actions/userActions'
import { UPDATE_USER_RESET } from '../../constants/userConstants'
import MetaData from '../layout/MetaData'

const UpdateUser = ({ history, match }) => {
    const toast = useToast()
    const [loadedValues, setLoadedValues] = useState(null);

    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user);
    const { user } = useSelector(state => state.userDetails)

    const userId = match.params.id;

    useEffect(() => {
        if (user && user.id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setLoadedValues({
                username: user.username,
                email: user.email,
                role: user.role,
                department: user.department
            })
        }

        if (error) {
            toast({
                title: error,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            dispatch(clearErrors());
        }

        if (isUpdated) {
            toast({
                title: 'User updated successfully',
                status: "success",
                duration: 5000,
                isClosable: true,
            })

            history.push('/admin/users')

            dispatch({
                type: UPDATE_USER_RESET
            })
        }

    }, [dispatch, error, history, isUpdated, userId, user])

    const submitHandler = (userData) => {
        dispatch(updateUser(user.id, userData))
    }

    return (
        <Fragment>
            {
                loadedValues && <>
                    <MetaData title={`Update User`} />
                    <Flex
                        minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack spacing={8} mx={'auto'} w={[400, 500, 800]} py={12} px={6}>
                            <Stack align={'center'}>
                                <Heading fontSize={['2xl', '3xl', '4xl']}>Update User</Heading>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <Formik
                                        initialValues={loadedValues}
                                        onSubmit={(values) => {
                                            submitHandler(values);
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <InputControl mt={3} name="username" label="Username" />
                                                <InputControl mt={3} name="email" label="Email" />
                                                <SelectControl mt={3} isReadOnly={user.department === 'Administrator'}
                                                    name="role" label="Role"
                                                >
                                                    <option value="Authorized">Authorized</option>
                                                    <option value="Unauthorized">Unauthorized</option>
                                                </SelectControl>
                                                <SelectControl mt={3} isReadOnly={user.department === 'Administrator'}
                                                    name="department" label="Department"
                                                >
                                                    <option value="D1">D1</option>
                                                    <option value="D2">D2</option>
                                                    <option value="D3">D3</option>
                                                    <option value="D4">D4</option>
                                                    <option value="D5">D5</option>
                                                    <option value="D6">D6</option>
                                                    <option value="D7">D7</option>
                                                    <option value="D8">D8</option>
                                                    <option value="D9">D9</option>
                                                </SelectControl>
                                                <Stack spacing={10} mt={3}>
                                                    <Button
                                                        disabled={user.department === 'Administrator' || isSubmitting}
                                                        type={"submit"}
                                                        boxShadow={
                                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                                        }
                                                        bg={'blue.400'}
                                                        color={'white'}
                                                        _hover={{
                                                            bg: 'blue.500',
                                                        }}>
                                                        Update Profile
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

export default UpdateUser

UpdateUser.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any,
};