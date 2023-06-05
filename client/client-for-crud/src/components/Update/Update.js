import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const Update = () => {
  const { id } = useParams()
  const [singleStudent, setSingleStudent] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/students/student/information/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleStudent(data))
  }, [id])

  const addUpdateUser = (e) => {
    e.preventDefault();
    //console.log(user);

    fetch(`http://localhost:5000/user/update/${singleStudent._id}`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount>0){
            alert('Update successfully');
        }
      });
   
  }

  const handleInputBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newUser = { ...user }
    newUser[field] = value
    setUser(newUser)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />
      <h2>The user id is {id}</h2>
      <h3>Update section</h3>
      <form onSubmit={addUpdateUser}>
        <input
          type="text"
          name="name"
          onChange={handleInputBlur}
          placeholder="Enter Student Name"
          defaultValue={singleStudent.name}
          required
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          onChange={handleInputBlur}
          defaultValue={singleStudent.email}
          required
        />
        <br />
        <br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  )
}

export default Update
