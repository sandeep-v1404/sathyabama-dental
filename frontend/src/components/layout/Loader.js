import {
    Center, CircularProgress, Flex, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
const Loader = () => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Center h="100px" >
                <CircularProgress isIndeterminate color="green.300" />
            </Center>
        </Flex >
    )
}

export default Loader
