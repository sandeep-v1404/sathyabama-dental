import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Input, Stack, useColorModeValue, useToast
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, loadUser, updateProfile } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import MetaData from '../layout/MetaData'
import PropTypes from 'prop-types';

export default function UpdateProfile({ history }) {

    const toast = useToast()
    const [username, setUsername] = useState('')

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        if (user) {
            setUsername(user.username);
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
            dispatch(loadUser());

            history.push('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, error, history, isUpdated, user])

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateProfile({ username }))
    }

    return (
        <>
            <MetaData title={'Update Profile'} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} w={[400, 500, 700]} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={['2xl', '3xl', '4xl']}>Update my Profile</Heading>
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