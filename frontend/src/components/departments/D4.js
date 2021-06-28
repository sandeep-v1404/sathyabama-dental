import { Button, Heading } from '@chakra-ui/react';
import React, { Fragment } from 'react';
const D2 = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <div className="container wrapper my-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-8">
                        <form className="p-3 shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                            <div className="form-group">
                                <Heading fontSize={'2xl'}>Patient Name (ID)</Heading>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name_field">Chief Complaint</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label className="font-weight-bolder">Medical History</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Diabetes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Hypertension
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Cardiac Disorder
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Rheumatic Fever
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Epilepsy
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Bleeding Disorders
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Jaundice
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Hepatitis
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Asthma
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Typhoid
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Drug Allergy
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Allergic to L.A Injections
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Anaemia
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Pregnancy
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Menstrual Cycle
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Others
                                    </label>
                                </div>

                            </div>

                            <div className="form-group">
                                <label className="font-weight-bolder">Family History</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Diabetes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Blood Dyscrasias
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Hypertension
                                    </label>
                                </div> <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Consanguineous Marriage
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Others
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder">Clinical Findings</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder">Diagnosis </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder"> Prognosis </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder"> Investigations </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder"> Radiographs </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder"> Treatment Plan </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bolder"> Treatment Done </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <hr />
                            <Button
                                w="100%"
                                type={"submit"}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                UPLOAD
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default D2
