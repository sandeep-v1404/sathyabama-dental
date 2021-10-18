import { Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const GenericNotFound = () => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} w={[400, 500, 600]} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Page Not Found</Heading>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default GenericNotFound
