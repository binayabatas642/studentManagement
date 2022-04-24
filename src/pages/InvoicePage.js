import '../css/invoiceTable.css'

import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import save from '../images/save.png';

const InvoicePage = () => {
    const { handleSubmit, register } = useForm();

    const students = useSelector(state => state.students);
    console.log(students)

    const inputRef = useRef();

    useEffect(() => {
        document.getElementById("late_fee").focus();
        
    }, []);


    return (
        <div className="invoice-table">
            <div className="invoice-row">
                <div className="invoice-column">
                    <p>Student Name</p>
                </div>
                <div className="invoice-column">
                    <p>Grade</p>
                </div>
                <div className="invoice-column">
                    <p>Section</p>
                </div>
                <div className="invoice-column">
                    <p>Tuition Fee</p>
                </div>
                <div className="invoice-column">
                    <p>Transportation Fee</p>
                </div>
                <div className="invoice-column">
                    <p>Late Fee</p>
                </div>
            </div>
            <div className="invoice-body">
                {
                    students.map(student => (
                        <div className="invoice-row">
                            <div className="invoice-column">
                                <p>{student.name}</p>
                            </div>
                            <div className="invoice-column">
                                <p>{student.grade}</p>
                            </div>
                            <div className="invoice-column">
                                <p>A</p>
                            </div>
                            <div className="invoice-column">
                                <p>{student.tuition_fee}</p>
                            </div>
                            <div className="invoice-column">
                                <p>3000</p>
                            </div>
                            <div className="invoice-column">
                                <p>
                                    <input id="late_fee" type="text" ref={inputRef} name={`${student.name}_late_fee`} />
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>      
        </div>
    )
}

export default InvoicePage