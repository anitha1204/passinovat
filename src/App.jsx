import React from 'react'
import Navbar from './components/Navbar'
import {  Route, Routes } from "react-router-dom";
import Home from './components/Home';
import BlogPage from './components/BlogPage';



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/blog" element={<BlogPage/>} />
           
      </Routes>
     
    </>
  )
}

export default App
