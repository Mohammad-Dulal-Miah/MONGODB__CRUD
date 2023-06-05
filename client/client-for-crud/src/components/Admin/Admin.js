import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Student from '../Student/Student'

const Admin = () => {
  const [students, setStudents] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:5000/students/student/information')
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }, [])

  const deleteStudent = (id) => {
    fetch(`http://localhost:5000/students/student/information/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type":"application/json"}
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Student information delete successfully....')
          const newStudents = students.filter((stu) => stu._id !== id)
          setStudents(newStudents)
        }
      })
  }

  return (
    <div>
      <div>
        <NavBar />
        <div style={{ textAlign: 'center' }}>
          <h3>Welcome Student Information section</h3>
          <h4>Total Students Number: {students.length}</h4>

          <div class="student-information">
            {students.map((student) => (
              <Student
                student={student}
                condition={true}
                deleteStudent={deleteStudent}
                key={student._id}
              ></Student>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
