import axios from 'axios';

import {
    ALL_PATIENTS_REQUEST,
    ALL_PATIENTS_SUCCESS,
    ALL_PATIENTS_FAIL,
    ADMIN_PATIENTS_REQUEST,
    ADMIN_PATIENTS_SUCCESS,
    ADMIN_PATIENTS_FAIL,
    NEW_PATIENT_REQUEST,
    NEW_PATIENT_SUCCESS,
    NEW_PATIENT_FAIL,
    DELETE_PATIENT_REQUEST,
    DELETE_PATIENT_SUCCESS,
    DELETE_PATIENT_FAIL,
    UPDATE_PATIENT_REQUEST,
    UPDATE_PATIENT_SUCCESS,
    UPDATE_PATIENT_FAIL,
    PATIENT_DETAILS_REQUEST,
    PATIENT_DETAILS_SUCCESS,
    PATIENT_DETAILS_FAIL,
    CLEAR_ERRORS

} from '../constants/patientConstants'

export const getPatients = (keyword = '', currentPage = 1) => async (dispatch) => {
    try {

        dispatch({ type: ALL_PATIENTS_REQUEST })

        let link = `/api/sdh/patients?keyword=${keyword}&page=${currentPage}`

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PATIENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PATIENTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newPatient = (patientData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PATIENT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/sdh/admin/patient/new`, patientData, config)

        dispatch({
            type: NEW_PATIENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PATIENT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete patient (Admin)
export const deletePatient = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_PATIENT_REQUEST })

        const { data } = await axios.delete(`/api/sdh/admin/patient/${id}`)

        dispatch({
            type: DELETE_PATIENT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PATIENT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Patient (ADMIN)
export const updatePatient = (id, patientData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PATIENT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/sdh/admin/patient/${id}`, patientData, config)

        dispatch({
            type: UPDATE_PATIENT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PATIENT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getPatientDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PATIENT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/sdh/patient/${id}`)

        dispatch({
            type: PATIENT_DETAILS_SUCCESS,
            payload: data.patient
        })

    } catch (error) {
        dispatch({
            type: PATIENT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}



export const getAdminPatients = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_PATIENTS_REQUEST })

        const { data } = await axios.get(`/api/sdh/admin/patients`)

        dispatch({
            type: ADMIN_PATIENTS_SUCCESS,
            payload: data.patients
        })

    } catch (error) {

        dispatch({
            type: ADMIN_PATIENTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}