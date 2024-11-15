// import React from 'react';
// import { FcGoogle } from 'react-icons/fc';

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Main Login Container */}
//       <div className="max-w-4xl mx-auto w-full p-6 my-8">
//         <div className="bg-white rounded-3xl shadow-lg p-8">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Students Login Section */}
//             <div className="space-y-6">
//               <h2 className="text-xl font-semibold text-center">Students Login</h2>

//               <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50 transition-colors">
//                 <FcGoogle className="text-xl" />
//                 <span className="text-gray-600">Login with Google</span>
//               </button>

//               <form className="space-y-4">
//                 <div className="space-y-2">
//                   <label className="block text-sm text-gray-600">Email</label>
//                   <input
//                     type="email"
//                     placeholder="john@example.com"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm text-gray-600">Password</label>
//                   <input
//                     type="password"
//                     placeholder="Must be at least 6 characters"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   />
//                 </div>

//                 <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
//                   Login
//                 </button>
//               </form>

//               <div className="text-center">
//                 <a href="#" className="text-red-500 hover:text-red-600 text-sm">
//                   Forgot password?
//                 </a>
//               </div>

//               <div className="text-center text-sm">
//                 <span className="text-gray-600">New to Internshala?</span>
//                 <div className="text-red-500">
//                   Register (
//                   <a href="#" className="hover:text-red-600">Student</a>
//                   {' / '}
//                   <a href="#" className="hover:text-red-600">Company</a>
//                   )
//                 </div>
//               </div>
//             </div>

//             {/* Employer/T&P Login Section */}
//             <div className="space-y-6">
//               <h2 className="text-xl font-semibold text-center">Employer / T&P</h2>

//               <form className="space-y-4">
//                 <div className="space-y-2">
//                   <label className="block text-sm text-gray-600">Email</label>
//                   <input
//                     type="email"
//                     placeholder="john@example.com"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm text-gray-600">Password</label>
//                   <input
//                     type="password"
//                     placeholder="Must be at least 6 characters"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   />
//                 </div>

//                 <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
//                   Login
//                 </button>
//               </form>

//               <div className="text-center">
//                 <a href="#" className="text-red-500 hover:text-red-600 text-sm">
//                   Forgot password?
//                 </a>
//               </div>

//               <div className="text-center text-sm">
//                 <span className="text-gray-600">New to Internshala?</span>
//                 <div className="text-red-500">
//                   Register (
//                   <a href="#" className="hover:text-red-600">Student</a>
//                   {' / '}
//                   <a href="#" className="hover:text-red-600">Company</a>
//                   )
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Content */}
//       <div className="bg-white mt-auto">
//         <div className="max-w-6xl mx-auto px-6 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Services Column 1 */}
//             <div>
//               <ul className="space-y-2 text-gray-600">
//                 <li>Mobile App Development</li>
//                 <li>Digital Marketing</li>
//                 <li>Search Engine Marketing</li>
//                 <li>Search Engine Optimization</li>
//                 <li>Social Media Marketing</li>
//               </ul>
//             </div>

//             {/* Services Column 2 */}
//             <div>
//               <ul className="space-y-2 text-gray-600">
//                 <li>Web Design & Development</li>
//                 <li>Mobile App</li>
//                 <li>Digital Marketing</li>
//                 <li>Branding & Graphical Designs</li>
//               </ul>
//             </div>

//             {/* Address */}
//             <div className="text-gray-600">
//               <p>D Block, Door No 1, Old No 5,</p>
//               <p>6th West Cross St, Annanagar East,</p>
//               <p>Chennai, Tamil Nadu 600102.</p>
//               <p className="mt-2">info@passinovat.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import logoImg from "../assets/Asset 1 1.png";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('student');

  const StudentLoginForm = () => (
    <div className="space-y-6 w-[400px]">
      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50 transition-colors">
        <FcGoogle className="text-xl" />
        <span className="text-gray-600">Login with Google</span>
      </button>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Must be at least 6 characters"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Login
        </button>
      </form>

      <div className="text-center">
        <a href="#" className="text-red-500 hover:text-red-600 text-sm">
          Forgot password?
        </a>
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-600">New to Internshala?</span>
        <div className="text-red-500">
          Register (
          <a href="studentform" className="hover:text-red-600">Student</a>
          {' / '}
          <a href="companyform" className="hover:text-red-600">Company</a>
          )
        </div>
      </div>
    </div>
  );

  const EmployerLoginForm = () => (
    <div className="space-y-6">
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Must be at least 6 characters"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Login
        </button>
      </form>

      <div className="text-center">
        <a href="#" className="text-red-500 hover:text-red-600 text-sm">
          Forgot password?
        </a>
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-600">New to Internshala?</span>
        <div className="text-red-500">
          Register (
          <a href="studentform" className="hover:text-red-600">Student</a>
          {' / '}
          <a href="companyform" className="hover:text-red-600">Company</a>
          )
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-lg mx-auto w-full p-6 my-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-8 border-b">
            <button
              className={`pb-4 px-4 text-lg font-medium ${activeTab === 'student'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveTab('student')}
            >
              Students
            </button>
            <button
              className={`pb-4 px-4 text-lg font-medium ${activeTab === 'employer'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveTab('employer')}
            >
              Employer / T&P
            </button>
          </div>


          {/* Form Content */}
          <div className="max-w-md mx-auto">
            {activeTab === 'student' ? <StudentLoginForm /> : <EmployerLoginForm />}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-color mt-[40px] py-16 " >
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
    </div>
  );
};

export default LoginPage;