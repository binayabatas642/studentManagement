import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'

import LoginForm from './pages/LoginForm';
import AddStudentForm from './pages/AddStudentForm';
import UserRegistrationForm from './pages/UserRegistrationForm';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#F7F7FA', minHeight: '100vh'}}>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<LoginForm />}
          />
          <Route
            path="/add-students"
            exact
            element={<AddStudentForm />}
          />
          <Route
            path="/user-registration"
            exact
            element={<UserRegistrationForm />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App