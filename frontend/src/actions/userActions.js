import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'

import cookie from 'react-cookies';
import { handleHTTPerrors } from "../utils/handleHTTPerrors"
import { getConfig } from "../utils/getConfig"

// Login
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST })

        const { data } = await axios.post('/auth/signin', { email, password }, getConfig());
        const expires = new Date(Date.now() + (1000 * 60 * 60 * 2));
        cookie.save('token', data.accessToken, { path: '/', expires });

        dispatch(loadUser())

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: err
        })
    }
}

// Register user
export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })

        const { data } = await axios.post('/auth/signup', userData, getConfig())

        const expires = new Date(Date.now() + (1000 * 60 * 60 * 2));
        cookie.save('token', data.accessToken, { path: '/', expires });

        dispatch(loadUser())

    } catch (error) {
        const err = handleHTTPerrors(error)

        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err
        })
    }
}

// Load user
export const loadUser = () => async (dispatch) => {

    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const { data } = await axios.get('/auth/me', getConfig())
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })

    } catch (error) {
        const err = handleHTTPerrors(error)

        dispatch({
            type: LOAD_USER_FAIL,
            payload: err
        })
    }
}

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PROFILE_REQUEST })

        const { data } = await axios.put('/auth/user/update', userData, getConfig())

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: err
        })
    }
}

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PASSWORD_REQUEST })

        const { data } = await axios.put('/auth/updatePassword', passwords, getConfig());
        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        const err = handleHTTPerrors(error)
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: err
        })
    }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {
        cookie.remove('token')
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.message
        })
    }
}

// Get all users
export const allUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST })

        const { data } = await axios.get('/auth/users', getConfig())

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.message
        })
    }
}

// Update user - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_USER_REQUEST })

        const { data } = await axios.put(`/auth/users/${id}`, userData, getConfig())

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get user details - ADMIN
export const getUserDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: USER_DETAILS_REQUEST })

        const { data } = await axios.get(`/auth/users/${id}`, getConfig())

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete user - ADMIN
export const deleteUser = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_USER_REQUEST })

        const { data } = await axios.delete(`/auth/users/${id}`, getConfig())

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
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