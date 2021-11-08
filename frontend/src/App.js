import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./App.css"

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'

// Admin Imports
import PatientList from './components/admin/PatientList'
import NewPatient from './components/admin/NewPatient'
import UpdatePatient from './components/admin/UpdatePatient'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'

import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import D0 from './components/departments/D0'
import D1 from './components/departments/D1'
import D2 from './components/departments/D2'
import D3 from './components/departments/D3'
import D4 from './components/departments/D4'
import D5 from './components/departments/D5'
import D6 from './components/departments/D6'
import D7 from './components/departments/D7'
import D8 from './components/departments/D8'

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/D0/:patientId" component={D0} exact />
        <Route path="/D1/:patientId" component={D1} exact />
        <Route path="/D2/:patientId" component={D2} exact />
        <Route path="/D3/:patientId" component={D3} exact />
        <Route path="/D4/:patientId" component={D4} exact />
        <Route path="/D5/:patientId" component={D5} exact />
        <Route path="/D6/:patientId" component={D6} exact />
        <Route path="/D7/:patientId" component={D7} exact />
        <Route path="/D8/:patientId" component={D8} exact />

        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

      </div>

      <ProtectedRoute path="/admin/patients" isAdmin={true} component={PatientList} exact />
      <ProtectedRoute path="/admin/patient" isAdmin={true} component={NewPatient} exact />
      <ProtectedRoute path="/admin/patient/:id" isAdmin={true} component={UpdatePatient} exact />
      <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
      <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
      {!loading && (!isAuthenticated || user.department !== 'Administrator') && (
        <Footer />
      )}
    </Router>
  );
}

export default App;
