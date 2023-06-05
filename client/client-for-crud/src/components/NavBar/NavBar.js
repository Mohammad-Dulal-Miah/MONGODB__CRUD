import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ol style={{ display: 'flex', listStyle: 'none' }}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/newStudent">
          <li>New student</li>
        </Link>
        <Link to="/studentInformation">
          <li>Student Information</li>
        </Link>
        <Link to="/admin"><li>Admin</li></Link>
      </ol>
    </div>
  )
}

export default NavBar
