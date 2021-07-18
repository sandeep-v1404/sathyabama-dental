import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import { patientsReducer, newPatientReducer, patientReducer, patientDetailsReducer } from './reducers/patientReducers'
import { authReducer, userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'
import { departmentReducer } from './reducers/departmentReducers'

const reducer = combineReducers({
    patients: patientsReducer,
    patientDetails: patientDetailsReducer,
    newPatient: newPatientReducer,
    patient: patientReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    department: departmentReducer,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;