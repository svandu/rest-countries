import React, {useState, useEffect} from 'react'

//components
import ContainerNav from '../components/ContainerNav'
import MainContainer from '../components/MainContainer'
import IndividualCard from '../components/IndividualCard'

//styles
import '../assets/page-style/App.css'

//routing
import { Routes, Route } from "react-router-dom";

//theme
import {createContext} from "react";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="root-container" id={theme}>
          <div className="container-navbar">
            <ContainerNav />
          </div>
          <div className='main-container'>
            <Routes>
                <Route path='/' element={<MainContainer />}></Route>
                <Route path='/IndividualCard' element={<IndividualCard />}></Route>
                <Route path='/MainContainer' element={<MainContainer/>}></Route>
            </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;