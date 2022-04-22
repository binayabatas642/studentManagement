import React from 'react';
import Button from '../components/Button/Button';
import student from '../images/student.png'

import '../css/viewSingleStudent.css';

const ViewSingleStudent = () => {
  return (
    <div className="student-card">
        <div className="student-card-top">
            <div className="student-image">
                <img src={student} alt="student-img" height="300px" />
            </div>
            <div className="student-info">
                ID:
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
            <Button buttonName="Edit" />
        </div>
    </div>
  )
}

export default ViewSingleStudent