import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { patientsReducer, newPatientReducer, patientReducer, patientDetailsReducer } from './reducers/patientReducers'
import { authReducer, userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'

const reducer = combineReducers({
    patients: patientsReducer,
    patientDetails: patientDetailsReducer,
    newPatient: newPatientReducer,
    patient: patientReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;