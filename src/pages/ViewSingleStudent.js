import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import Button from '../components/Button/Button';
import studentImg from '../images/student.png'
import '../css/viewSingleStudent.css';

const ViewSingleStudent = () => {
    const { studentId } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const onDeleteClick = () => {
        var result = window.confirm("Are you sure you want to delete the student?")
        console.log('h')
        if (result) {
            // dispatch(studentDeleted({id: studentId}));
            navigate('/student-list');
        }
    }

    const exportPDF = () => {
        let doc = new jsPDF('p', 'pt', 'a5');
        doc.html(document.getElementById('student-bill'), {
            callback: function(pdf) {
                // let pageCount = doc.internal.getNumberOfPages();
                // pdf.deletePage(pageCount);
                pdf.save("bill.pdf");
            },
            x: 10,
            y: 10
        })
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
                    Grade: {student.grade} <br />
                    Section: {student.section} <br />
                </div>
            </div>
            <div className="student-card-bottom">
                <table>
                    <tr>
                        <th>Parents</th>
                        <th>Name</th>
                        <th>Contact No.</th>
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
            <div id="student-bill" className="student-card-bottom">
                <table>
                    <tr>
                        <th>Tuition Fees</th>
                        <th>Admission Fees</th>
                        <th>Late Fee</th>
                    </tr>
                    <tr>
                        <td>{student.tuition_fee}</td>
                        <td>{student.admission_fee}</td>
                        <td>0</td>
                    </tr>
                </table> 
            </div>

            {/* buttons */}
            <div className="student-card-buttons">
                <button onClick={() => exportPDF()} target="_blank">Print Bill</button>
                <Link to={`/edit/${student.id}`}>
                    <Button buttonName="Edit" />
                </Link>
                <button onClick={onDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default ViewSingleStudent