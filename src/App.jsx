import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Ideas from './pages/Ideas'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Navigationbar from './components/Navigationbar'

function Layout({children}){
  return(
    <div>
      <Navigationbar/>
      {children}
    </div>
  )
}

function App() {

  return (
    <section>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>}></Route>
          <Route path='/about' element={<Layout><About/></Layout>}></Route>
          <Route path='/services' element={<Layout><Services/></Layout>}></Route>
          <Route path='/ideas' element={<Layout><Ideas/></Layout>}></Route>
          <Route path='/career' element={<Layout><Careers/></Layout>}></Route>
          <Route path='/contact' element={<Layout><Contact/></Layout>}></Route>
        </Routes>
      </Router>
    </section>
  )
}

export default App
