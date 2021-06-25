import {
    Button, Heading,
} from '@chakra-ui/react'
import React, { Fragment } from 'react'

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
                                <label>History of presenting illness</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Medical History</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Surgical History</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Dental History</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Personal History</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-row form-group">
                                <label className="col">Diet</label>
                                <input
                                    type="text"
                                    className="col form-control"
                                />
                            </div>
                            <div className="form-row form-group">
                                <label className="col">Personal Habits</label>
                                <input
                                    type="text"
                                    className="col form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Family History</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Marital History</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <hr />
                            <label className="font-weight-bolder p-0 m-0">General Examination</label>
                            <hr />
                            <div className="form-row align-items-center form-group">
                                <label className="col">Stature</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Appearance</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Built</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Nourishment</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Structural Alterations, Deformities</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Hair</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Skin</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Pallor</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Icterus</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Pedal Edema</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Cyanosis</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <hr />
                            <label className="font-weight-bolder p-0 m-0">Vital Signs</label>
                            <hr />
                            <div className="form-row align-items-center form-group">
                                <label className="col">B.P.</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Respiratory rate</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Pulse rate</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Temperature</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <hr />
                            <label className="font-weight-bolder p-0 m-0">Systematic Examination</label>
                            <hr />
                            <div className="form-group">
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">CVS</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">RS</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">GIT</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">CND</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Urogenital System</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <hr />
                            <label className="font-weight-bolder p-0 m-0">Local Examination</label>
                            <hr />
                            <div className="form-group text-center">
                                <label className="font-italic">Extra Oral Examination</label>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Facial symmetry</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Ear, Nose, Eye</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">TMJ</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Lips</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Maxillary sinus tenderness</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Lymph Nodes</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label className="font-italic">Intra Oral Examination</label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Hard tissue Examination</label>
                            </div>
                            <hr />
                            <div className="form-row align-items-center form-group">
                                <label className="col">Opening of the mouth</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Interincisal distance</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Jaw Deviation</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label className="col-12 font-italic">Teeth</label>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Number</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Size</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Shape</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Colour</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Missing Tooth</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Restored Tooth</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Stains </label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Caries </label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Attrition</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Abrasion</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Erosion</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Mobility</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Root stumps</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col"> Fracture</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col"> Retained deciduous</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col"> Partially erupted</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col"> Developmental Anomalies</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Soft tissue Examination</label>
                            </div>
                            <hr />
                            <div className="form-group text-center">
                                <label className="col-12 font-italic">Gingiva</label>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Colour</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Contour</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col"> Consistency</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>

                            <div className="form-row align-items-center form-group">
                                <label className="col">Calculus </label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Gingival recession</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Periodontal Pocket</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic">Alveolar Mucosa</label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic">Buccal Mucosa</label>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Colour</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Consistency</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Opening of Stenson’s duct</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Labial Mucosa </label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Palate</label>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Hard Palate </label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Soft Palate </label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Tongue</label>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Size</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Movement</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Attachment</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Dorsal Surface</label>
                                <select name="" id="" className="col form-control">
                                    <option value="Circumvallate papillae">Circumvallate papillae</option>
                                    <option value="Filliform papillae">Filliform papillae</option>
                                    <option value="Fungiform papillae">Fungiform papillae</option>
                                </select>
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Ventral Surface</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col">Edge</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row align-items-center form-group">
                                <label className="col"> Lateral Surface</label>
                                <input
                                    type="text"
                                    className="form-control col"
                                />
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Tonsils </label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Floor of the mouth </label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Pillars of the fauces</label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Examination of the lesion</label>
                            </div>
                            <hr />
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Inspection</label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic"> Palpation</label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <div className="form-row form-group text-center">
                                <label className="col-12 font-italic">Summary</label>
                                <textarea className="col-12 form-control" cols="30"></textarea>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Provisional Diagonosis</label>
                            </div>
                            <hr />
                            <textarea className="col-12 form-control" cols="30"></textarea>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Investigations</label>
                            </div>
                            <hr />
                            <textarea className="col-12 form-control" cols="30"></textarea>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Final Diagonosis</label>
                            </div>
                            <hr />
                            <textarea className="col-12 form-control" cols="30"></textarea>
                            <hr />
                            <div className="form-group">
                                <label className="p-0 m-0 font-weight-bolder">Treatment Plan</label>
                            </div>
                            <hr />
                            <textarea className="col-12 form-control" cols="30"></textarea>
                            <hr />
                            <div className="form-row align-items-center form-group">
                                <label className="col-4 font-weight-bolder">Referal to Departments</label>
                                <div className="col" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Periodontia
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Oral 	&amp; Maxillo Facial Surgery
                                        </label>
                                    </div> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Conservative dentistry &amp; Endodontia
                                        </label>
                                    </div> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Prosthodontia
                                        </label>
                                    </div> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Pedodontia
                                        </label>
                                    </div> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Orthodontia
                                        </label>
                                    </div> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Public Health dentistry
                                        </label>
                                    </div> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Department of Oral &amp; Maxillo Facial Pathology
                                        </label>
                                    </div>
                                </div>
                            </div>
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
