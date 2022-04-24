import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

import Button from '../components/Button/Button';
import studentImg from '../images/student.png'
import '../css/viewSingleStudent.css';

const ViewSingleStudent = () => {
    const { studentId } = useParams();
    console.log(studentId)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const onDeleteClick = () => {
        var result = window.confirm("Are you sure you want to delete the student?")
        if (result) {
            // dispatch(studentDeleted({id: studentId}));
            navigate('/students');
        }
    }
    
    const student = useSelector(state =>
        state.students.find(student => student.id === studentId)    
    )
    console.log(student)
    if (!student) {
        return (
            <section>
                <h2>Student not found!</h2>
            </section>
        )
    }

    return (
        <div className="student-card">
            <div className="student-card-top">
                <div className="student-image">
                    <img src={studentImg} alt="student-img" height="300px" />
                </div>
                <div className="student-info">
                    ID: {student.id} <br />
                    Name: {student.name} <br />
                    Grade: {student.grade}
                </div>
            </div>
            <div className="student-card-bottom">
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                </table> 
            </div>
            <div className="student-card-buttons">
                <Button buttonName="Print Bill" />
                <Link to={`/edit/${student.id}`}>
                    <Button buttonName="Edit" />
                </Link>
                <Button buttonName="Delete" />
            </div>
        </div>
    )
}

export default ViewSingleStudent