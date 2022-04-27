import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import man from '../images/man.png';
import '../css/studentList.css';
import Button from '../components/Button/Button'

const StudentList = () => {
  const students = useSelector(state => state.students)

  const [searchInput, setSearchInput] = useState("")
  // const [filteredStudentsByGrade, setFilteredResultsByGrade] = useState([]);
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    
    const s = students.filter((student) => {
        return Object.values(student).join('').toLowerCase().includes(searchInput.toLowerCase())
      })

      console.log(s)
    }

  const filterStudentsByGrade = () => (
    students.filter(student => student.grade === "UKG")
  )

  // const filterStudentsBySection = () => (
  //   students.filter(student => (student.)
  // )

  // console.log(filterStudentsByGrade())
  

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
           onChange = {(e) => searchItems(e.target.value)}
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