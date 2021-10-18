import axios from 'axios';

import {
    PATIENT_REQUEST,
    PATIENT_SUCCESS,
    PATIENT_FAIL,
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

import { handleHTTPerrors } from "../utils/handleHTTPerrors"
import { getConfig } from "../utils/getConfig"

export const getPatients = (search) => async (dispatch) => {
    try {

        dispatch({ type: PATIENT_REQUEST })
        const { data } = await axios.get(`/api/patients/${search}`, getConfig());

        dispatch({
            type: PATIENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error);
        const err = handleHTTPerrors(error)
        dispatch({
            type: PATIENT_FAIL,
            payload: err
        })
    }
}

export const newPatient = (patientData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PATIENT_REQUEST })

        const { data } = await axios.post(`/api/patients`, patientData, getConfig());
        dispatch({
            type: NEW_PATIENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: NEW_PATIENT_FAIL,
            payload: err
        })
    }
}

// Delete patient (Admin)
export const deletePatient = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_PATIENT_REQUEST })

        const { data } = await axios.delete(`/api/patients/${id}`, getConfig())

        dispatch({
            type: DELETE_PATIENT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: DELETE_PATIENT_FAIL,
            payload: err
        })
    }
}

// Update Patient (ADMIN)
export const updatePatient = (id, patientData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PATIENT_REQUEST })

        const { data } = await axios.put(`/api/patients/${id}`, patientData, getConfig())

        dispatch({
            type: UPDATE_PATIENT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        console.log(error);
        const err = handleHTTPerrors(error)
        dispatch({
            type: UPDATE_PATIENT_FAIL,
            payload: err
        })
    }
}

export const getPatientDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PATIENT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/patients/admin/${id}`, getConfig())

        dispatch({
            type: PATIENT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: PATIENT_DETAILS_FAIL,
            payload: err
        })
    }
}

export const getAdminPatients = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_PATIENTS_REQUEST })

        const { data } = await axios.get(`/api/patients`, getConfig())
        dispatch({
            type: ADMIN_PATIENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: ADMIN_PATIENTS_FAIL,
            payload: err
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}