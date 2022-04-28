import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '1', name: 'Binaya Batas', grade: 'UKG', section: 'A', tuition_fee: 15000, admission_fee: 5000},
    {id: '2', name: 'John Doe', grade: 'LKG', section: 'A', tuition_fee: 12000, admission_fee: 5000},
    {id: '3', name: 'John Lenon', grade: 'LKG', section: 'B', tuition_fee: 12000, admission_fee: 5000},
    {id: '4', name: 'Freddy Mercury', grade: 'LKG', section: 'D', tuition_fee: 12000, admission_fee: 5000},
    {id: '5', name: 'Mike Shinoda', grade: 'LKG', section: 'C', tuition_fee: 12000, admission_fee: 5000},
]

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        studentAdded(state, action) {
            state.push(action.payload)
        },
        studentUpdated(state, action) {
            const {id, name, grade, tuitionFee, admissionFee} = action.payload;
            const existingStudent = state.find(student => student.id === id)
            if (existingStudent) {
                existingStudent.name = name;
                existingStudent.grade = grade;
                existingStudent.tuition_fee = tuitionFee;
                existingStudent.admission_fee = admissionFee;
            }
        },
        studentDeleted(state,action) {
            const { id } = action.payload;
            const existingStudent = state.find(student => student.id === id)
            if (existingStudent) {
                state = state.filter(student => student.id !== id)
                return state;
            }
        }
    }
})

export const { studentAdded, studentUpdated, studentDeleted } = studentsSlice.actions

export default studentsSlice.reducer