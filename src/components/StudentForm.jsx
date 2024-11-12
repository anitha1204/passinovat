


// import React, { useState } from 'react';
// import RegistrationForm from './RegistrationForm';

// const StudentForm = () => {
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const [studentData, setStudentData] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//   });

//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowRegistrationForm(true); // Show RegistrationForm after form submission
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudentData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
//       {!showRegistrationForm ? (
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//            <button className="flex items-center justify-center w-full bg-gray-200 text-gray-600 py-2 rounded-lg mb-4 hover:bg-gray-300">
//           <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
//           Sign up with Google
//         </button>

//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-t border-gray-300" />
//           <span className="px-2 text-gray-400">OR</span>
//           <hr className="flex-grow border-t border-gray-300" />
//         </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={studentData.email}
//                 onChange={handleChange}
//                 placeholder="john@example.com"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={studentData.password}
//                 onChange={handleChange}
//                 placeholder="Must be at least 6 characters"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={studentData.firstName}
//                   onChange={handleChange}
//                   placeholder="John"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={studentData.lastName}
//                   onChange={handleChange}
//                   placeholder="Doe"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//             <p className="text-gray-600 text-sm text-center mb-4">
//             By signing up, you agree to our <a href="#" className="text-blue-500">Terms and Conditions</a>.
//           </p>


//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             >
//               Sign up
//             </button>
//             <p className="text-center text-gray-600 text-sm mt-4">
//             Already registered? <a href="#" className="text-blue-500">Login</a>
//           </p>
//           </form>
//         </div>
//       ) : (
//         <RegistrationForm
//           initialData={studentData}
//           onSuccess={() => setRegistrationSuccess(true)} // Handle registration success
//         />
//       )}

//       {registrationSuccess && (
//         <div className="mt-4 text-green-500">
//           Registration successful! You can now log in.
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentForm;


import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const StudentForm = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [studentData, setStudentData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    // Updated regex to enforce the first letter as uppercase
    const passwordRegex = /^[A-Z](?=.*[a-z])(?=.*\d).{5,}$/;
  
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    if (!passwordRegex.test(password)) {
      return 'Password must start with an uppercase letter, and  lowercase letter and one number';
    }
    return '';
  };
  

  const validateName = (name, field) => {
    const nameRegex = /^[a-zA-Z]{2,30}$/;
    if (!name) {
      return `${field} is required`;
    }
    if (!nameRegex.test) {
      return `${field}  is required`;
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      email: validateEmail(studentData.email),
      password: validatePassword(studentData.password),
      firstName: validateName(studentData.firstName, 'First name'),
      lastName: validateName(studentData.lastName, 'Last name'),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every(error => error === '')) {
      setShowRegistrationForm(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Clear error when user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const renderError = (error) => {
    return error ? (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    ) : null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!showRegistrationForm ? (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <button className="flex items-center justify-center w-full bg-gray-200 text-gray-600 py-2 rounded-lg mb-4 hover:bg-gray-300">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {renderError(errors.email)}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={studentData.password}
                onChange={handleChange}
                placeholder="Must be at least 6 characters"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {renderError(errors.password)}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={studentData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {renderError(errors.firstName)}
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={studentData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {renderError(errors.lastName)}
              </div>
            </div>

            <p className="text-gray-600 text-sm text-center mb-4">
              By signing up, you agree to our <a href="#" className="text-orange-500">Terms and Conditions</a>.
            </p>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sign up
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Already registered? <a href="/" className="text-orange-500">Login</a>
            </p>
          </form>
        </div>
      ) : (
        <RegistrationForm
          initialData={studentData}
          onSuccess={() => setRegistrationSuccess(true)}
        />
      )}

      {registrationSuccess && (
        <div className="mt-4 text-green-500">
          Registration successful! You can now log in.
        </div>
      )}
    </div>
  );
};

export default StudentForm;