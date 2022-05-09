import '../css/addStudentForm.css'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import { studentAdded } from '../redux/studentsSlice';

const EditStudentForm = () => {
    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    let selectName = '';

    let [rows, setRows] = useState(["Mother", "Father", "Grand_Father", "Grand_Mother","Brother","Sister"]);
    
    const onSubmit = (data) => {
        //e.preventDefault();
        console.log(data)
        
        if (data.firstName && data.lastName && data.currentGrade) {
            dispatch(
                studentAdded({
                    id: 1,
                    name: data.first_name + ' ' + data.last_name,
                    grade: data.current_grade,
                    tuition_fee: 5000,
                    admission_fee: 5000
                })
                )
            }
        }

    const handleClick = (int) => {
        setRows([...rows, int])
        console.log(rows)
    }

    useEffect(() => {
        selectName = watch(`relationship_row_0`)
        console.log(selectName)
    }, [])

    const handleSelect = (index) => {
        selectName = watch(`relationship_row_${index}`)
        console.log(selectName)
        console.log(index)
    }

    const tableContent = rows.map((row, index) => (
            <tr key={index}>
                <td>
                    <p style={{padding: '0px', margin: '2px'}}>{row}</p>
                </td>
                <td>
                    <input 
                        style={{border: 'none', width: '100%', outline: 'none', fontSize: '16px', margin: '0px', padding: '0px'}} 
                        type="text"
                        {...register(`${row}s_name`)}
                        required
                    />
                </td>
                <td>
                    <input 
                        style={{border: 'none', width: '100%', outline: 'none', fontSize: '16px', margin: '0px', padding: '0px'}} 
                        type="number"
                        {...register(`contact_number_${index}`)}
                        required
                    />
                </td>
            </tr>
        ))

    return (
        <div style={{padding: '20px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Student Info</h2>
                <div className="add-student-form">
                    <div>
                        <InputField label="First Name" type="text" inputName="first_name" register={register} required />
                    </div>

                    <div>
                        <InputField label="Last Name" type="text" inputName="last_name" register={register} required />
                    </div>

                    <div>
                        <InputField label="D.O.B." type="date" inputName="date_of_birth" register={register} required />
                    </div>

                    <div>
                        <label htmlFor='male'>
                            Male:
                            <input {...register("gender")} type="radio" value="male" id="male" />
                        </label>
                        <label htmlFor='female'>
                            Female:
                            <input {...register("gender")} type="radio" value="female" id="female" />
                        </label>
                    </div>

                    <div className="dropdown">
                        <label>Current Grade</label> <br />
                        <select {...register("current_grade", {required: true})}>
                            <option value="Nursery">Nursery</option>
                            <option value="UKG">UKG</option>
                            <option value="LKG">LKG</option>
                        </select>
                    </div>

                    <div>
                        <InputField label="Tuition Fee" type="number" inputName="tuition_fee" register={register} required min="0"/>
                    </div>

                    <div>
                        <InputField label="Admission Fee" type="number" inputName="admission_fee" register={register} required min="0" />
                    </div>

                    <div>
                        <InputField label="Start Date" type="date" inputName="start_date" register={register} required />
                    </div>

                </div>
                <br />
                

                <h2>Parents</h2>
                <div className="add-student-form">
                    <table id="table-parents">
                        <tr>
                            <th>Relationship</th>
                            <th>Parents Name</th>
                            <th>Contact number</th>
                        </tr>
                        <tbody>
                            {tableContent}

                        </tbody>
                    </table>
                    {/* <div onClick={() => handleClick("1")}>+ Add Parents</div> */}
                </div>

                <div>
                    <Button type="submit" buttonName="Submit" />
                    <Button buttonName="Import CSV" />
                </div>
            </form>
        </div>
    )
}

export default EditStudentForm