import {
    Avatar,
    Box, Button, Center, Heading, LinkOverlay, Stack, Text, useColorModeValue, Flex
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as ReachLink } from "react-router-dom";
import MetaData from '../layout/MetaData';
export default function Profile() {
    const { user } = useSelector(state => state.auth)

    return (
        <Flex justifyContent="center">
            <Center py={'16'}>
                <MetaData title={'Your Profile'} />
                <Box
                    w={[320, 500, 600]}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            "https://bit.ly/sage-adebayo"
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                        _after={{
                            content: '""',
                            w: 4,
                            h: 4,
                            bg: 'green.300',
                            border: '2px solid white',
                            rounded: 'full',
                            pos: 'absolute',
                            bottom: 0,
                            right: 3,
                        }}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {user.username}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>
                        {user.email}
                    </Text>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>
                        {user.department}
                    </Text>
                    <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}>
                            <LinkOverlay _hover={{
                                textDecoration: 'none',
                                color: "black"
                            }} as={ReachLink} to="/password/update" >  Change Password
                            </LinkOverlay>
                        </Button>
                        <Button
                            hidden={user.department === "Administrator"}
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}>

                            <LinkOverlay _hover={{
                                textDecoration: 'none',
                                color: "black"
                            }} as={ReachLink} to="/me/update" > Edit Profile
                            </LinkOverlay>
                        </Button>
                    </Stack>
                </Box>
            </Center>
        </Flex >
    )
}