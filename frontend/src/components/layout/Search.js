import {
    Avatar, Button, Center, Container,
    Flex, FormControl, Heading, Input, Stack, useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search({ history }) {
    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
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
                    Search By Patient Name
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
                            placeholder={'Enter Name Here'}
                            aria-label={'Patient Name'}
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