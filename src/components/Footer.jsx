// Footer.js
import React from 'react';
import logoImg from "../assets/Asset 1 1.png";

export default function Footer() {
  return (
    <footer className="bg-color mt-[150px] py-16 " >
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-[400px_400px_100px_300px] gap-8 text-center md:text-left text-lg">
        {/* Column 1 */}
        <div>
         
          <ul className="space-y-1 text-gray-600 ">
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
            <li>Search Engine Marketing</li>
            <li>Search Engine Optimization</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
         
          <ul className="space-y-1 text-gray-600">
            <li>Web Design & Development</li>
            <li>Mobile App</li>
            <li>Digital Marketing</li>
            <li>Branding & Graphical Designs</li>
          </ul>
        </div>
        
         {/* Column 3 */}
         <div className="flex flex-col items-center md:items-start">
          <img src={logoImg} alt="Logo" className=" mb-4"  style={{ width: "136px", height: "69.62px" }} />
        
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center md:items-start text-gray-600">
          <p className="">D Block, Door No 1, Old No 5,</p>
          <p>6th West Cross St, Annanagar East,</p>
          <p>Chennai, Tamil Nadu 600012</p> 
          <p className="mt-6">info@passinnovate.com</p>
        </div>
      </div>
    </footer>
  );
}
