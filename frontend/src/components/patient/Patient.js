import { CheckIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex, List, ListIcon, ListItem, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
export default function Patient({ patient }) {
    const { user } = useSelector(state => state.auth);
    const history = useHistory()
    const bgColor = useColorModeValue('green.50', 'green.900')
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >

            <Box
                w={[300, 400, 600]}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
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
                        bg={bgColor}
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
                <Box align={'center'} px={6} py={10}>
                    <List spacing={3}>
                        {
                            patient.patientDOneData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D1/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Tested by OMRD
                            </ListItem>
                        }
                        {
                            patient.patientDOneData && patient.patientDOneData.referToD2 === true && patient.patientDTwoData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D2/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Periodontia
                            </ListItem>
                        }

                        {
                            patient.patientDThreeData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D2/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Oral & Maxillo Facial Surgery
                            </ListItem>
                        }
                        {
                            patient.patientDFourData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D3/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Conservative dentistry & Endodontia

                            </ListItem>
                        }
                        {
                            patient.patientDFiveData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D4/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Conservative dentistry & Endodontia
                            </ListItem>
                        }
                    </List>
                    {
                        user.department === "D1" &&
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
                            OMRD Department Analysis
                        </Button>
                    }
                    {
                        user.department === "D2" && patient.patientDOneData && patient.patientDOneData.referToD2 === true &&
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
                            Department of Periodontia Analysis
                        </Button>
                    }
                    {
                        user.department === "D3" && patient.patientDOneData && patient.patientDOneData.referToD3 === true &&
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
                            Department of Oral & Maxillo Facial Surgery Analysis
                        </Button>
                    }
                    {
                        user.department === "D4" && patient.patientDOneData && patient.patientDOneData.referToD4 === true &&
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
                            }}>\
                            Department of Conservative dentistry & Endodontia
                        </Button>
                    }
                    {
                        user.department === "D5" && patient.patientDOneData && patient.patientDOneData.referToD5 === true &&
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
                            OMRD Department Analysis
                        </Button>
                    }
                </Box>
            </Box>
        </Flex >
    );
}

Patient.propTypes = {
    patient: PropTypes.any,
};