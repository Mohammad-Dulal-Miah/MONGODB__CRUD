import React, { useEffect, useState } from 'react'
import './StudentInformation.css'
import NavBar from '../NavBar/NavBar'
import Student from '../Student/Student'

const StudentInformation = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/students/student/information')
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }, [])

  return (
    <div>
        <NavBar/>
      <div style={{ textAlign: 'center' }}>
        <h3>Welcome Student Information section</h3>
        <h4>Total Students Number: {students.length}</h4>
        
        <div class="student-information">
            {
                students.map(student=> <Student student={student} condition={false} key={student._id}>
                   
                </Student>)
            }
        </div>
      </div>
    </div>
  )
}

export default StudentInformation
