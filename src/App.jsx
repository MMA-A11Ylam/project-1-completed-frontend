import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import MyAppoinments from './pages/MyAppoinments'

import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Myprofile from './pages/MyProfile'

const App = () => {
  return (
    <div className='mx-3 sm:mx-[8%]'> 
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Doctors/:speciality' element={<Doctors/>}/>
        <Route path='/my-appointments' element={<MyAppoinments/>}/>
        <Route path='/my-profile' element={<Myprofile/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
