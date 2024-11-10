import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import {  Route, Routes } from "react-router-dom";
import Products from './components/Products';
import TechnologyStack from './components/TechnologyStack';
import InternshipsProjects from './components/InternshipsProject';
import LoginPage from './components/LoginPage';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/technologystack" element={<TechnologyStack/>} />
            <Route path="/internshipsprojects" element={<InternshipsProjects/>} />
            <Route path="/loginpage" element={<LoginPage/>} />
      </Routes>
     
    </>
  )
}

export default App
