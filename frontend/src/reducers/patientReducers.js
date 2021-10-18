import {
    PATIENT_REQUEST,
    PATIENT_SUCCESS,
    PATIENT_FAIL,
    ADMIN_PATIENTS_REQUEST,
    ADMIN_PATIENTS_SUCCESS,
    ADMIN_PATIENTS_FAIL,
    NEW_PATIENT_REQUEST,
    NEW_PATIENT_SUCCESS,
    NEW_PATIENT_RESET,
    NEW_PATIENT_FAIL,
    DELETE_PATIENT_REQUEST,
    DELETE_PATIENT_SUCCESS,
    DELETE_PATIENT_RESET,
    DELETE_PATIENT_FAIL,
    UPDATE_PATIENT_REQUEST,
    UPDATE_PATIENT_SUCCESS,
    UPDATE_PATIENT_RESET,
    UPDATE_PATIENT_FAIL,
    PATIENT_DETAILS_REQUEST,
    PATIENT_DETAILS_SUCCESS,
    PATIENT_DETAILS_FAIL,
    PATIENT_RESET,
    CLEAR_ERRORS

} from '../constants/patientConstants'

export const patientsReducer = (state = { patients: [] }, action) => {
    switch (action.type) {
        case ADMIN_PATIENTS_REQUEST:
            return {
                loading: true,
                patients: []
            }


        case ADMIN_PATIENTS_SUCCESS:
            return {
                loading: false,
                patients: action.payload
            }

        case ADMIN_PATIENTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newPatientReducer = (state = { patient: {} }, action) => {
    switch (action.type) {

        case NEW_PATIENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_PATIENT_SUCCESS:
            return {
                loading: false,
                success: true,
                patient: action.payload
            }


        case NEW_PATIENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_PATIENT_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const patientReducer = (state = {}, action) => {
    switch (action.type) {

        case PATIENT_REQUEST:
            return {
                loading: true,
                patient: {}
            }

        case PATIENT_SUCCESS:
            return {
                loading: false,
                patient: action.payload,
            }
        case DELETE_PATIENT_REQUEST:
        case UPDATE_PATIENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_PATIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PATIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case PATIENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case DELETE_PATIENT_FAIL:
        case UPDATE_PATIENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case DELETE_PATIENT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_PATIENT_RESET:
            return {
                ...state,
                isUpdated: false
            }
        case PATIENT_RESET:
            return {
                loading: false,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const patientDetailsReducer = (state = { patient: {} }, action) => {
    switch (action.type) {

        case PATIENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PATIENT_DETAILS_SUCCESS:
            return {
                loading: false,
                patient: action.payload
            }

        case PATIENT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}