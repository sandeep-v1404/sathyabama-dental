import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Input, Stack, useColorModeValue
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, loadUser, updateProfile } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import MetaData from '../layout/MetaData'
import PropTypes from 'prop-types';

export default function UpdateProfile({ history }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        if (user) {
            setUsername(user.username);
            setEmail(user.email);
            setDepartment(user.department);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')
            dispatch(loadUser());

            history.push('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated, user])

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateProfile({ username, email }))
    }

    return (
        <>
            <MetaData title={'Update Profile'} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Update my Profile</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack as={'form'} spacing={4} onSubmit={submitHandler}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Department</FormLabel>
                                <Input type="text"
                                    value={department}
                                    readOnly />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    type={"submit"}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    disabled={loading ? true : false} >
                                    Update
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

UpdateProfile.propTypes = {
    history: PropTypes.any,
};