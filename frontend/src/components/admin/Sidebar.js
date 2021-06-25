import { HamburgerIcon } from "@chakra-ui/icons"
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader,
    DrawerOverlay, LinkBox, LinkOverlay, MenuItem
} from "@chakra-ui/react"
import React from 'react'
import { Link as ReachLink } from "react-router-dom"
import PropTypes from 'prop-types';

function Sidebar({ btnRef, isOpen, onClose, onOpen }) {

    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Administrator</DrawerHeader>
                    <DrawerBody>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            Patients
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <LinkBox as={MenuItem} height="30px">
                                        <LinkOverlay as={ReachLink} to="/admin/patients" _hover={{
                                            textDecoration: 'none',
                                            color: "black"
                                        }}>
                                            All Patients
                                        </LinkOverlay>
                                    </LinkBox>
                                    <LinkBox as={MenuItem} height="30px">
                                        <LinkOverlay as={ReachLink} to="/admin/patient" _hover={{
                                            textDecoration: 'none',
                                            color: "black"
                                        }}>
                                            Create
                                        </LinkOverlay>
                                    </LinkBox>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            Users
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <LinkBox as={MenuItem} height="30px">
                                        <LinkOverlay as={ReachLink} to="/admin/users" _hover={{
                                            textDecoration: 'none',
                                            color: "black"
                                        }}>
                                            All Users
                                        </LinkOverlay>
                                    </LinkBox>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Sidebar

Sidebar.propTypes = {
    btnRef: PropTypes.any,
    isOpen: PropTypes.any,
    onClose: PropTypes.any,
    onOpen: PropTypes.any
};