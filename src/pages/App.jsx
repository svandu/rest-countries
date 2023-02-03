import React from 'react'

//components
import ContainerNav from '../components/ContainerNav'
import MainContainer from '../components/MainContainer'
import IndividualCard from '../components/IndividualCard'

//styles
import '../assets/page-style/App.css'

//routing
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="root-container">
      <ContainerNav />
      <div className='main-container'>
        <Routes>
              <Route path='/' element={<MainContainer />}></Route>
              <Route path='/IndividualCard' element={<IndividualCard />}></Route>
              <Route path='/MainContainer' element={<MainContainer/>}></Route>
          </Routes>
      </div>
    </div>
  )
}

export default App;