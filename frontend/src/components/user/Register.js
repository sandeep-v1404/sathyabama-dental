import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, Input, Link, Stack, useColorModeValue, Select, InputGroup, InputRightElement, useToast
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as ReachLink } from "react-router-dom"
import { clearErrors, register } from '../../actions/userActions'
import MetaData from '../layout/MetaData'
import PropTypes from 'prop-types';

export default function Register({ history }) {
    const toast = useToast()
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        department: '',
    });
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
        if (error) {
            toast({
                title: error.split(" ")[0] === "Key" ? "Account Exists" : error,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            dispatch(clearErrors());
        }
        if (error === "Unauthorized") {
            history.push('/login')
        }
    }, [dispatch, isAuthenticated, error, history])

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
                <Stack spacing={8} mx={'auto'} w={[400, 500, 600]} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Create a new account</Heading>
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
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    onChange={onChange} required />
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Username</FormLabel>
                                <Input
                                    name="username"
                                    type="text"
                                    value={user.username}
                                    onChange={onChange} required />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Password</FormLabel>
                                <InputGroup size="md">
                                    <Input
                                        name="password"
                                        value={user.password}
                                        onChange={onChange}
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                        required
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl >
                                <FormLabel>Department</FormLabel>
                                <Select required placeholder="Select option" value={user.department} name="department" onChange={onChange}>
                                    <option value="D0">
                                        1. OMRD Department
                                    </option>
                                    <option value="D1">
                                        2. Department of Periodontia
                                    </option>
                                    <option value="D2">
                                        3. Department of Oral & Maxillo Facial Surgery
                                    </option>
                                    <option value="D3">
                                        4. Department of Conservative dentistry & Endodontia
                                    </option>
                                    <option value="D4">
                                        5. Department of Prosthodontia
                                    </option>
                                    <option value="D5">
                                        6. Department of Pedodontia
                                    </option>
                                    <option value="D6">
                                        7. Department of Orthodontia
                                    </option>
                                    <option value="D7">
                                        8. Department of Public Health dentistry
                                    </option>
                                    <option value="D8">
                                        9. Department of Oral & Maxillo Facial Pathology
                                    </option>
                                    <option value="Receptionist">Receptionist</option>
                                </Select>
                            </FormControl>
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
Register.propTypes = {
    history: PropTypes.any,
};