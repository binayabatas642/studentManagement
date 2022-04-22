import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import man from '../images/man.png';
import '../css/studentList.css';
import Button from '../components/Button/Button'

const StudentList = () => {
  const students = useSelector(state => state.students)

  const renderedStudents = students.map(student => (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-img">
          <img src={man} alt="student-photo" height="150px" />
        </div>
        <div className="modal-info">
          <p>Name: {student.name}</p>
          <p>ID: {student.id}</p>
          <p>Grade: {student.grade}</p>
        </div>
        <div className="modal-button">
          <Link to={'/add-students'}>
            <Button buttonName="View Student Profile" />
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="student-list">
      {renderedStudents}
    </div>
  )
}

export default StudentList