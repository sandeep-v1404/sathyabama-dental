import {
    Button, Container,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import 'rc-slider/assets/index.css';
import React, { Fragment, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from '../actions/patientActions';
import Search from "../components/layout/Search";
import Loader from './layout/Loader';
import MetaData from "./layout/MetaData";
import Patient from './patient/Patient';

function MainPage() {
    return (
        <Container maxW={'5xl'} minH={"100vh"}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Meeting scheduling{' '}
                    <Text as={'span'} color={'orange.400'}>
                        made easy
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Never miss a meeting. Never be late for one too. Keep track of your
                    meetings and receive smart reminders in appropriate times. Read your
                    smart “Daily Agenda” every morning.
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

const Home = ({ match, history, location }) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, patients, error } = useSelector(state => state.patients)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            console.error(error)
            return;
        }
        if (keyword) {
            dispatch(getPatients(keyword))
        }

    }, [dispatch, alert, error, keyword])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Sathyabama Dental - Home'} />

                    {!isAuthenticated ? <MainPage /> :
                        <>
                            {keyword
                                ?
                                patients.map(patient => (
                                    <Patient key={patient.id} patient={patient} col={12} />
                                ))
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

export default Home