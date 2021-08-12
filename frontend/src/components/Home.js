import {
    Button, Container, Flex, Stack,
    Text, useColorModeValue, Heading, Image
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from "../components/layout/Search";
import {
    PATIENT_FAIL
} from "../constants/patientConstants";
import Loader from './layout/Loader';
import MetaData from "./layout/MetaData";
import Patient from './patient/Patient';

function MainPage() {
    return (
        <Container maxW={'7xl'} minH={"100vh"}>
            <Stack
                textAlign={"center"}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'orange.400'}>
                        Sathyabama Dental College and Hospital
                    </Text>
                </Heading>
                <Image boxSize="auto" height={{ sm: 300, lg: "container.sm" }}
                    src="https://www.sathyabama.ac.in/sites/default/files/inline-images/dental_op_closeup.png.jpg" />
                <Text color={'gray.500'} fontSize="xl">
                    Sathyabama Dental College and Hospital, was established in 2009,by Founder Chancellor Colonel Dr. Jeppiaar MA.BL, Ph.D.,with the aim of  producing future dentists of our country with a humane nature and broad scientific knowledge required for dentists.The school of dentistry offers undergraduate course with a duration of five years and post graduate course in three disciplines namely Orthodontics and Dentofacial Orthopedics,Conservative Dentistry and Endodontics,Pediatric and Preventive Dentistry with a duration of three years.We aim at up-to-date dental education which could correspond to requirements & changes in the times,as recommended by Dental Council of India.In order to further develop, we will promote the activation, advancement & internationalization of our dental research as well as the improvement of dental education.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'orange.400'}
                        _hover={{ bg: 'orange.500' }}>
                        Get started
                    </Button>
                    <Button rounded={'full'} px={6}>
                        Learn more
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}

const Home = ({ history }) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { loading, patient } = useSelector(state => state.patient)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Sathyabama Dental - Home'} />

                    {!isAuthenticated ? <MainPage /> :
                        <>
                            {
                                patient ? <>
                                    <Flex
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
                                            <Stack
                                                spacing={'12px'}
                                            >
                                                <Button
                                                    colorScheme={'blue'}
                                                    w="100%"
                                                    onClick={() => dispatch({ type: PATIENT_FAIL })}
                                                >
                                                    Search for Other Patient
                                                </Button>
                                            </Stack>
                                        </Container>
                                    </Flex>
                                    <Patient key={patient.id} patient={patient} col={12} />
                                </>
                                    :
                                    <Search history={history} />
                            }
                        </>
                    }
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home;

Home.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any
};