import {
    Avatar, Button, Center, Container,
    Flex, FormControl, Heading, Input, Stack, useColorModeValue, useToast
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients, clearErrors } from "../../actions/patientActions"

export default function Search({ history }) {

    const toast = useToast()
    const { error } = useSelector(state => state.patient)

    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast({
                title: error,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            history.push("/");
            return;
        }
        if (keyword) {
            dispatch(clearErrors())
            dispatch(getPatients(keyword))
            return;
        }

    }, [dispatch, error])


    const searchHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            dispatch(getPatients(keyword))
        } else {
            history.push('/')
        }
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Container
                maxW={'lg'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}
                direction={'column'}>
                <Center h="100px" color="white">
                    <Avatar size="lg" />
                </Center>
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    textAlign={'center'}
                    mb={5}>
                    Search By Patient OP Id
                </Heading>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    as={'form'}
                    spacing={'12px'}
                    onSubmit={searchHandler}>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={'gray.800'}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            id={'email'}
                            type="text"
                            required
                            placeholder={'Enter Id Here'}
                            aria-label={'Patient Id'}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </FormControl>
                    <FormControl w={{ base: '100%', md: '40%' }}>
                        <Button
                            colorScheme={'blue'}
                            w="100%"
                            type={'submit'}>
                            Submit
                        </Button>
                    </FormControl>
                </Stack>
            </Container>
        </Flex>
    );
}

Search.propTypes = {
    history: PropTypes.any,
};