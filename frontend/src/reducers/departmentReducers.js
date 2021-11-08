import {
    UPDATE_DEPT_DATA_REQUEST,
    UPDATE_DEPT_DATA_SUCCESS,
    UPDATE_DEPT_DATA_FAIL,
    UPDATE_DEPT_DATA_RESET,
    DELETE_DEPT_DATA_FAIL,
    DELETE_DEPT_DATA_SUCCESS,
    DELETE_DEPT_DATA_REQUEST,
    DELETE_DEPT_DATA_RESET,
    CLEAR_ERRORS
} from '../constants/departmentConstants';

export const departmentReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_DEPT_DATA_REQUEST:
            return {
                loading: true,
                success: false
            }
        case DELETE_DEPT_DATA_REQUEST:
            return {
                loading: true,
                deleted: false
            }

        case UPDATE_DEPT_DATA_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case DELETE_DEPT_DATA_SUCCESS:
            return {
                loading: false,
                deleted: true,
            }
        case UPDATE_DEPT_DATA_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_DEPT_DATA_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_DEPT_DATA_RESET:
            return {
                loading: false,
                success: false
            }
        case DELETE_DEPT_DATA_RESET:
            return {
                loading: false,
                deleted: false
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
