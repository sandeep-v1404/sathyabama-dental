import { CheckIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex, List, ListIcon, ListItem, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

import { useSelector, } from 'react-redux';
import { useHistory } from "react-router-dom";
export default function Patient({ patient }) {
    const { user } = useSelector(state => state.auth);
    const history = useHistory()
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>

            <Box
                w={[300, 400, 600]}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {patient.name}
                    </Box>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        {patient.sex}
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            {patient.age}
                        </Text>
                    </Stack>
                </Stack>
                <Box align={'center'} bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        {
                            patient.patientDOneData && <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Tested by D1
                            </ListItem>
                        }
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Tested by D2
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Tested by D3
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Tested by D4
                        </ListItem>
                    </List>
                    {
                        user.department !== "Administrator" &&
                        <Button
                            disabled={user.role === "Unauthorized"}
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            onClick={() => { history.push(`/${user.department}/${patient.id}`) }}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Fill {user.department}&lsquo;s data
                        </Button>
                    }

                </Box>
            </Box>
        </Flex>
    );
}

Patient.propTypes = {
    patient: PropTypes.any,
};