import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'

const Student = (props) => {
  const { _id, name, email } = props.student
  

  return (
    <div class="student">
      <p>
        Name:<b>{name}</b>
      </p>
      <p>
        Email: <b>{email}</b>
      </p>
      {
        props.condition ? <button onClick={()=> props.deleteStudent(_id)}>Delete</button> : <p>Thank You</p>
      }
      <br />
      <br />
      {
        props.condition ? <Link to={`/update/${_id}`}><button>Update</button></Link>:<p></p>
      }
    </div>
  )
}

export default Student
