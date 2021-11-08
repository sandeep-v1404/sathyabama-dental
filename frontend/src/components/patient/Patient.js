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
                w={['lg', 400, 600]}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={[3, 6]}
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
                <Box align={'center'} px={[1, 6]} py={10}>
                    <List spacing={3} >
                        {
                            patient.patientDZeroData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D0/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Tested by OMRD
                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD1 === true && patient.patientDOneData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D1/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Periodontia
                            </ListItem>
                        }

                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD2 === true && patient.patientDTwoData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D2/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Oral & Maxillo Facial Surgery
                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD3 === true && patient.patientDThreeData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D3/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Conservative dentistry & Endodontia

                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD4 === true && patient.patientDFourData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D4/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Prosthodontia
                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD5 === true && patient.patientDFiveData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D5/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Pedodontia
                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD6 === true && patient.patientDSixData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D6/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Orthodontia
                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD7 === true && patient.patientDSevenData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D7/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Public Health dentistry
                            </ListItem>
                        }
                        {
                            patient.patientDZeroData && patient.patientDZeroData.referToD8 === true && patient.patientDEightData && <ListItem _hover={{ color: 'blue.300', cursor: 'pointer' }} onClick={() => history.push(`/D8/${patient.id}`)}>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Department of Oral & Maxillo Facial Pathology
                            </ListItem>
                        }
                    </List>
                    {
                        user.department === "D0" &&
                        <Button
                            fontSize={["xs", 'lg']}
                            whiteSpace={"normal"}
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
                        user.department === "D1" && patient.patientDZeroData && patient.patientDZeroData.referToD1 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
                            whiteSpace={"normal"}
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
                        user.department === "D2" && patient.patientDZeroData && patient.patientDZeroData.referToD2 === true &&
                        <Button
                            fontSize={["xs", 'lg']}

                            whiteSpace={"normal"}
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
                        user.department === "D3" && patient.patientDZeroData && patient.patientDZeroData.referToD3 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
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
                            Department of Conservative dentistry & Endodontia
                        </Button>
                    }
                    {
                        user.department === "D4" && patient.patientDZeroData && patient.patientDZeroData.referToD4 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
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
                            Department of Prosthodontia

                        </Button>
                    }
                    {
                        user.department === "D5" && patient.patientDZeroData && patient.patientDZeroData.referToD5 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
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
                            Department of Pedodontia

                        </Button>
                    }
                    {
                        user.department === "D6" && patient.patientDZeroData && patient.patientDZeroData.referToD6 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
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
                            Department of Orthodontia

                        </Button>
                    }
                    {
                        user.department === "D7" && patient.patientDZeroData && patient.patientDZeroData.referToD7 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
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
                            Department of Public Health dentistry
                        </Button>
                    }
                    {
                        user.department === "D8" && patient.patientDZeroData && patient.patientDZeroData.referToD8 === true &&
                        <Button
                            fontSize={["xs", 'lg']}
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
                            Department of Oral & Maxillo Facial Pathology
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