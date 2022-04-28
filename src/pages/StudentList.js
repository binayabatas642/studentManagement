import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import man from '../images/man.png';
import '../css/studentList.css';
import Button from '../components/Button/Button'

const StudentList = () => {
  const [students, setStudents] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [key, setKey] = useState(false)

  const data = useSelector(state => state.students)

  useEffect(() => {
    setStudents(data)
    setKey(true)
  }, [])

  // useEffect(() => {
  //   if (key) {
  //   }
    
  // }, [searchInput])
  
  const searchStudents = (searchValue) => {
    setSearchInput(searchValue)
    console.log(searchInput)
    
    setStudents(data.filter((student) => {
      return Object.values(student).join('').toLowerCase().includes(searchInput.toLowerCase())
    }))
  
    console.log(students)
    
  }

  const filterStudentsByGrade = () => {
    setStudents(students.filter(student => student.grade === "UKG"))
    console.log(students)
  }

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
            <Link to={`/view-student-info/${student.id}`}>
              <Button buttonName="View Student Profile" />
            </Link>
          </div>
        </div>
      </div>
  ))

  return (
    <>
      <div className="top-section">
        <div className="search-box">
          <input
           className="search-box"
           icon="search"
           type="text"
           placeholder='Search...' 
           onChange = {(e) => searchStudents(e.target.value)}
           onKeyUp = {(e) => searchStudents(e.target.value)}
          />
        </div>
      </div>
      <div className="student-list">
        {renderedStudents}
      </div>
    </>
  )
}

export default StudentList