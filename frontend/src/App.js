import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'
import PatientDetails from './components/patient/PatientDetails'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'

// Admin Imports
import Dashboard from './components/admin/Dashboard'
import PatientList from './components/admin/PatientList'
import NewPatient from './components/admin/NewPatient'
import UpdatePatient from './components/admin/UpdatePatient'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'

import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import D1 from './components/departments/D1'

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/patient/:id" component={PatientDetails} exact />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/d1" component={D1} />

          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

        </div>

        <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
        <ProtectedRoute path="/admin/patients" isAdmin={true} component={PatientList} exact />
        <ProtectedRoute path="/admin/patient" isAdmin={true} component={NewPatient} exact />
        <ProtectedRoute path="/admin/patient/:id" isAdmin={true} component={UpdatePatient} exact />
        <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
        <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
        {!loading && (!isAuthenticated || user.role !== 'Administrator') && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;
