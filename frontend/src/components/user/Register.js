import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Input, Link, Stack, useColorModeValue, Select
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link as ReachLink } from "react-router-dom"
import { clearErrors, register } from '../../actions/userActions'
import MetaData from '../layout/MetaData'

export default function Register({ history, location }) {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        department: '',
    })

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(user))

    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <MetaData title={'Register User'} />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Create a new account</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack as={'form'} spacing={4} onSubmit={submitHandler}>
                            <FormControl id="name">
                                <FormLabel>Username</FormLabel>
                                <Input
                                    name="username"
                                    type="text"
                                    value={user.username}
                                    onChange={onChange} />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    onChange={onChange} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    value={user.password}
                                    onChange={onChange} />
                            </FormControl>
                            <Select placeholder="Select option" value={user.department} name="department" onChange={onChange}>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4">D4</option>
                                <option value="D5">D5</option>
                                <option value="D6">D6</option>
                                <option value="D7">D7</option>
                                <option value="D8">D8</option>
                                <option value="D9">D9</option>
                            </Select>
                            <Stack spacing={10}>
                                <Button
                                    disabled={loading ? true : false}
                                    type={"submit"}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Register
                                </Button>
                            </Stack>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                justify={'space-between'}>
                                <Link as={ReachLink} to="/login" color={'blue.400'}>Have an Account ? Login</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}