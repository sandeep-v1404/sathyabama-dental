import {
    Box,
    Button,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    LinkBox, LinkOverlay, Image, HStack, Icon
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachLink } from "react-router-dom";

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <Button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </Button>
    );
};

export default function SmallCentered() {
    const year = new Date().getFullYear();
    return (
        <Box
            bg={useColorModeValue('gray', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={2}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <HStack spacing={8} alignItems={'center'}>
                    <LinkBox>
                        <LinkOverlay as={ReachLink} to="/">
                            <Image boxSize="300px" height="50px"
                                objectFit="contain" src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" />
                        </LinkOverlay>
                    </LinkBox>
                </HStack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© {year} Sathyabama Dental. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Facebook'} href={'https://www.facebook.com/SathyabamaOfficial/'}>
                            <Icon as={FaFacebook} w={6} h={6} />
                        </SocialButton>
                        <SocialButton label={'Twitter'} href={'https://twitter.com/sathyabamaSIST'}>
                            <Icon as={FaTwitter} w={6} h={6} />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCkBMqT83pxjwPhh8mUpZ0hQ'}>
                            <Icon as={FaYoutube} w={6} h={6} />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'https://www.instagram.com/sathyabama.official/'}>
                            <Icon as={FaInstagram} w={6} h={6} />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box >
    );
}
SocialButton.propTypes = {
    children: PropTypes.any,
    label: PropTypes.any,
    href: PropTypes.any,
};