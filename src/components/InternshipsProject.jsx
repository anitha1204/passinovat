import React from 'react';
import mainimg from '../assets/Rectangle 6.png'
import Footer from '../components/Footer';

const InternshipsProjects = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl md:text-4xl  mb-4 text-secondary font-semibold">Internships & Projects</h2>
      
      {/* Image container with rounded corners */}
      <div className="rounded-2xl overflow-hidden mb-8 mt-8">
        <img 
          src={mainimg} 
          alt="Students collaborating" 
          className=""
          style={{ width: "770px", height: "348px" }}
        />
      </div>

      {/* Main content section */}
      <div className="space-y-6 font-semibold">
        <h3 className="text-2xl text-orange-500">Why Pursue an IT Internship?</h3>
        <p className=" text-secondary text-lg">
          Internships are a fantastic way to bridge the gap between academic knowledge and real-world experience, especially in the dynamic field of IT.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className=" text-orange-500 text-xl">Hands-On Experience</h4>
            <p className=" text-secondary text-lg">
              While degrees in engineering or computer science or related fields hold value, practical experience is equally crucial. Internships allow you to apply what you've learned in the classroom to actual projects and scenarios.
            </p>
          </div>

          <div>
            <h4 className=" text-orange-500 text-xl">CV Enhancement</h4>
            <p className=" text-secondary text-lg">
              Internships bulk up your CV (resume) and demonstrate to potential employers that you're not only stuffed theory but also worked on practical tasks.
            </p>
          </div>

          <div>
            <h4 className=" text-orange-500 text-xl">Industry Insights</h4>
            <p className=" text-secondary text-lg">
              You'll gain a better understanding of how the industry operates its challenges, and the day-to-day tasks faced by IT professionals.
            </p>
          </div>

          <div>
            <h4 className=" text-orange-500 text-xl">Structured Program</h4>
            <p className=" text-secondary text-lg">
              Define clear goals, responsibilities, and learning outcomes for interns.
            </p>
          </div>

          <div>
            <h4 className=" text-orange-500 text-xl">Skill Development</h4>
            <p className=" text-secondary text-lg">
              Showcase both technical skills (programming languages, tools) and soft skills(communication, teamwork).Provide meaningful tasks that allow interns to learn and contribute.
            </p>
          </div>

          <div>
            <h4 className=" text-orange-500 text-xl">Mentorship</h4>
            <p className=" text-secondary text-lg">
              Assign mentors to guide interns throughout their internship.
            </p>
          </div>

          <div>
            <h4 className=" text-secondary text-orange-500 text-xl">Feedback and Evaluation</h4>
            <p className=" text-secondary text-lg">
              Regularly assess intern progress and provide constructive feedback.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default InternshipsProjects;