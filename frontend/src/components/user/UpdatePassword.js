import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Input, Stack, useColorModeValue, useToast
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, updatePassword } from '../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'
import MetaData from '../layout/MetaData'
import PropTypes from 'prop-types';

export default function UpdatePassword({ history }) {

    const toast = useToast()
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user)

    useEffect(() => {

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
                title: 'Password updated successfully',
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            history.push('/me')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updatePassword({ oldPassword, password }))
    }

    return (
        <>
            <MetaData title={'Change Password'} />

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} w={[400, 500, 700]} mx={'auto'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={['2xl', '3xl', '4xl']}>Update my Password</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack as={'form'} spacing={4} onSubmit={submitHandler}>
                            <FormControl id="email">
                                <FormLabel>Old Password</FormLabel>
                                <Input
                                    type="password"
                                    name="oldPassword"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    type={"submit"}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
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

UpdatePassword.propTypes = {
    history: PropTypes.any,
};