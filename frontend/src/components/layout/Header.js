import {
    MoonIcon, SunIcon
} from '@chakra-ui/icons';
import {
    Avatar, Box, Button, Flex, HStack, IconButton, LinkBox, LinkOverlay, Menu, Image,
    MenuButton, MenuDivider, MenuItem, MenuList, useColorMode, useColorModeValue, useDisclosure, useToast
} from '@chakra-ui/react';
import React, { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReachLink, useHistory } from "react-router-dom";
import { logout } from '../../actions/userActions';
import Sidebar from "../admin/Sidebar";


export default function Header() {

    const toast = useToast()
    const history = useHistory();
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const dispatch = useDispatch();

    const { colorMode, toggleColorMode } = useColorMode()

    const { user, loading } = useSelector(state => state.auth);

    const logoutHandler = () => {
        dispatch(logout());
        toast({
            title: 'Logged out successfully.',
            status: "success",
            duration: 5000,
            isClosable: true,
        })
        history.push("/");
    }

    return (
        <>
            <Box bg={useColorModeValue('gray', 'gray.900')} px={5} py={3}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <LinkBox>
                            <LinkOverlay as={ReachLink} to="/">
                                <Image boxSize="300px"
                                    objectFit="contain" src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" />
                            </LinkOverlay>
                        </LinkBox>
                    </HStack>
                    <Flex alignItems={'center'} justifyContent="space-between">
                        <IconButton
                            aria-label="Call Segun"
                            mr={2}
                            onClick={toggleColorMode}
                            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        />
                        {user ? (
                            <Menu>
                                <MenuButton
                                    color={useColorModeValue('black', 'white')}
                                    _hover={{
                                        textDecoration: 'none',
                                    }}
                                    as={Button}
                                    mr={2}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}>
                                    <Flex alignItems="center">
                                        <Avatar
                                            size={'sm'}
                                            mr={2}
                                            src={
                                                "https://bit.ly/sage-adebayo"
                                            }
                                        />
                                        {user && user.username}
                                    </Flex>
                                </MenuButton>
                                {user && (user.department === 'Administrator' || user.department === "Receptionist") && (
                                    <Sidebar user={user} btnref={btnRef} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
                                )}
                                <MenuList>
                                    <LinkBox>
                                        <MenuItem>
                                            <LinkOverlay _hover={{
                                                textDecoration: 'none',
                                                color: "black"
                                            }} as={ReachLink} to="/me">
                                                Profile
                                            </LinkOverlay>
                                        </MenuItem>
                                    </LinkBox>
                                    <MenuDivider />
                                    <LinkBox>
                                        <MenuItem color={"red"}>
                                            <LinkOverlay _hover={{
                                                textDecoration: 'none',
                                                color: "black"
                                            }} as={ReachLink} to="/me" onClick={logoutHandler}>
                                                Logout
                                            </LinkOverlay>
                                        </MenuItem>
                                    </LinkBox>
                                </MenuList>
                            </Menu>
                        ) : !loading &&
                        <LinkBox>
                            <Button colorScheme="teal" variant="solid" >
                                <LinkOverlay as={ReachLink} to="/login" _hover={{
                                    textDecoration: 'none',
                                    color: "black"
                                }}>
                                    Login
                                </LinkOverlay>
                            </Button>
                        </LinkBox>
                        }
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}