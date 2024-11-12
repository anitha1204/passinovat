import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import {  Route, Routes } from "react-router-dom";
import Products from './components/Products';
import TechnologyStack from './components/TechnologyStack';
import InternshipsProjects from './components/InternshipsProject';
import LoginPage from './components/LoginPage';
import RegistrationForm from './components/RegistrationForm';
import StudentForm from './components/StudentForm';
import CompanyForm from './components/CompanyForm';
// import CompanyRegister from './components/CompanyRegister';
import InterestsSelection from './components/InterestsSelection';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
             <Route path="/" element={<LoginPage/>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/technologystack" element={<TechnologyStack/>} />
            <Route path="/internshipsprojects" element={<InternshipsProjects/>} />
            <Route path="/studentform" element={<StudentForm/>} />
            <Route path="/registrationform" element={<RegistrationForm/>} />
            <Route path="/companyform" element={<CompanyForm/>} />
            {/* <Route path="/companyregister" element={< CompanyRegister/>} /> */}
            <Route path="/interestsselection" element={<InterestsSelection/>} />
      </Routes>
     
    </>
  )
}

export default App
