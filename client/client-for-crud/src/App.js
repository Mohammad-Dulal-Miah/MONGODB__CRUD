import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import NewStudent from './components/NewStudent/NewStudent'
import StudentInformation from './components/StudentInformation/StudentInformation'
import Admin from './components/Admin/Admin'
import Update from './components/Update/Update'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/newStudent" element={<NewStudent />} />
        <Route path="/studentInformation" element={<StudentInformation />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </div>
  )
}

export default App
