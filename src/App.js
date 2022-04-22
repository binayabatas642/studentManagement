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
import StudentList from './pages/StudentList';
import ViewSingleStudent from './pages/ViewSingleStudent';

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
            path="/student-registration"
            exact
            element={<AddStudentForm />}
          />
          <Route
            path="/user-registration"
            exact
            element={<UserRegistrationForm />}
          />
          <Route
            path="/student-list"
            exact
            element={<StudentList />}
          />
          <Route
            path="/view-student-info"
            exact
            element={<ViewSingleStudent />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App