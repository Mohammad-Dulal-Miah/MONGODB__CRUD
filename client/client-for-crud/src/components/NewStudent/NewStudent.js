import React from 'react'
import './NewStudent.css'
import NavBar from '../NavBar/NavBar'

const NewStudent = () => {
  const handleNewStudent = (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value

    const user = { name, email }

   fetch('http://localhost:5000/students/student/information',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
   })
   .then(res => res.json())
   .then(data => {
    if(data.acknowledged){
        alert('New Student create successfully....')
        event.target.reset();
    }
   })
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar/>
      <h1>Add New Student Information</h1>
      <form onSubmit={handleNewStudent}>
        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          required
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          required
        />
        <br />
        <br />
        <button type="submit">Add New Student</button>
      </form>
    </div>
  )
}

export default NewStudent
