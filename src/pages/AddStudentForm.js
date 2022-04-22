import '../css/addStudentForm.css'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import { studentAdded } from '../redux/studentsSlice';

const AddStudentForm = () => {
    const { handleSubmit, register } = useForm();

    const dispatch = useDispatch();

    const [parents, setParents] = useState("fathers_name")
    var [rows, setRows] = useState(['1']);
    
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
        
    // const handleClick = () => {
    //     var table = document.getElementById("table-parents")
    //     var row = table.insertRow(-1)
        
    
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     var cell3 = row.insertCell(2);

    //     cell1.innerHTML = '<select {...register("parents_relationship", {required: true})} style="margin:0px;background:none;width:100%;border-radius:0px;box-shadow:none;"><option value="Father">Father</option><option value="Mother">Mother</option></select>'
    //     cell2.innerHTML = '<input style="border:none; width:100%; outline:none; fontSize:16px;" type="text" {...register("parents_name")} required />'
    // }

    const handleClick = (int) => {
        setRows([...rows, int])
        console.log(rows)
    }

    // useEffect(() => {
    //     setParents("fathers_name")
    //     console.log(parents)
    // },[])

    const handleChange = (e) => {
        console.log(e.target.value)
        switch (e.target.value) {
            case "Mother":
                setParents("fathers_name")
                break;
            case "Father":
                setParents("mothers_name")
                break;
            default:
                break;
        }

        console.log(parents);
    }

    const tableContent = rows.map(row => (

            <tr>
                <td>
                    <select 
                        {...register("parents_relationship", {required: true})} 
                        style={{margin: '0px', background:'none', width: '100%', borderRadius: '0px', boxShadow: 'none'}}
                        onChange={handleChange}
                    >
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                    </select>
                </td>
                <td>
                    <input 
                        style={{border: 'none', width: '100%', outline: 'none', fontSize: '16px'}} 
                        type="text"
                        {...register(parents)}
                        required
                    />
                </td>
                <td>
                    <input 
                        style={{border: 'none', width: '100%', outline: 'none', fontSize: '16px'}} 
                        type="number"
                        {...register("contact_number")}
                        required
                    />
                </td>
            </tr>
        ))

    return (
        <div>
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

                    {/* <div>
                        Add gender select field
                    </div> */}

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
                        {tableContent}
                    </table>
                    <div onClick={() => handleClick("1")}>+ Add Parents</div>
                </div>

                <div>
                    <Button type="submit" buttonName="Submit" />
                    <Button buttonName="Import CSV" />
                </div>
            </form>
        </div>
    )
}

export default AddStudentForm