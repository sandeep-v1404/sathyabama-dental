/* eslint-disable no-unused-vars */
import axios from 'axios';

import {
    UPDATE_DEPT_DATA_REQUEST,
    UPDATE_DEPT_DATA_SUCCESS,
    UPDATE_DEPT_DATA_FAIL,
    DELETE_DEPT_DATA_FAIL,
    DELETE_DEPT_DATA_SUCCESS,
    DELETE_DEPT_DATA_REQUEST,
    CLEAR_ERRORS
} from '../constants/departmentConstants';

import { getConfig } from "../utils/getConfig"
import { handleHTTPerrors } from "../utils/handleHTTPerrors"

export const updatePatientDataInDepartment = (department, patientId, patientData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_DEPT_DATA_REQUEST })
        const { data } = await axios.post(`/api/${department}/${patientId.toString()}`, patientData, getConfig());

        dispatch({
            type: UPDATE_DEPT_DATA_SUCCESS,
            payload: data
        });

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: UPDATE_DEPT_DATA_FAIL,
            payload: err
        })
    }
}

export const deletePatientDataInDepartment = (department, patientId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_DEPT_DATA_REQUEST })
        await axios.delete(`/api/${department}/${patientId.toString()}`, getConfig());
        dispatch({
            type: DELETE_DEPT_DATA_SUCCESS,
        });

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: DELETE_DEPT_DATA_FAIL,
            payload: err
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}