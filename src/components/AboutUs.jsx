// MainContent.js
import React from 'react';
import img from '../assets/Rectangle 4.png'
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[150px] mx-4 md:mx-9 ">

        <div className="p-2 rounded-lg flex items-center justify-center">
          <img
            src={img}
            alt="Slideshow"
            style={{ width: "562.8px", height: "317px" }}
            className="rounded-xl object-cover"
          />
        </div>

        <div className=" p-5 flex flex-col justify-center rounded-lg text-secondary font-semibold">
          <h3 className="text-2xl md:text-3xl text-center md:text-left">
            "Where your potential skills are converted through internship trainings to embark on a challenging career"
          </h3>
          <p className="text-lg mb-6 mt-12 mx-2 text-center md:text-left ">
          We at PASSINNOVATE solutions offer a vide range of IT Services and products including internship training by seasoned technology professionals in various sectors like Banking, Insurance, Healthcare, Retail, Education and Travel & Leisure leveraging potential skills to secure a challenging career
          </p>
          

        </div>
      </div>
      <Footer/>
    </>
  );
}
