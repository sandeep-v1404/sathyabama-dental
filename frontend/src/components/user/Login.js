import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, useColorModeValue, useToast
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as ReachLink } from "react-router-dom"
import { clearErrors, login } from '../../actions/userActions'
import MetaData from '../layout/MetaData'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Login({ history, location }) {
    const toast = useToast()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const dispatch = useDispatch();

    const { isAuthenticated, error } = useSelector(state => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (isAuthenticated) {
            history.push(redirect)
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

    }, [dispatch, isAuthenticated, error, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <>
            <MetaData title={'Login'} />

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} w={[400, 500, 600]} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack as={'form'} spacing={4} onSubmit={submitHandler}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <InputGroup size="md">
                                    <Input
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                    />
                                    <InputRightElement onClick={handleClick} _hover={{ cursor: "pointer" }}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10}>
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
                                    Sign in
                                </Button>
                            </Stack>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                justify={'space-between'}>
                                <Link as={ReachLink} to="/register" color={'blue.400'}>New User? SignUp</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

Login.propTypes = {
    history: PropTypes.any,
    location: PropTypes.any,
};