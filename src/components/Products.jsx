// MainContent.js
import React from 'react';
import img from '../assets/25644130_7076235 1.png'
import Footer from '../components/Footer';

export default function Products() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[840px_500px] gap-5 mt-[150px] mx-4 md:mx-9 ">

        <div className="p-2 rounded-lg flex items-center justify-center ">
          <img
            src={img}
            alt="Slideshow"
            style={{ width: "770.35px", height: "317px" }}
            className="rounded-[50px] object-cover"
          />
        </div>

        <div className=" p-5 flex flex-col justify-center rounded-lg text-secondary font-semibold">
          <h3 className="text-2xl md:text-4xl  text-center md:text-left ">
            Products
          </h3>
          <p className="text-lg mb-6 mt-12 mx-2 text-center md:text-left">
            ERP Solutions for a manufacturing industry, with <br /> plug 
            ins of HR & Payroll Module, Financial <br /> Accounting Module. 
            Web applications for Education <br /> and training and Holiday 
            accommodation bookings
          </p>

        </div>
      </div>
      <Footer/>
    </>
  );
}
