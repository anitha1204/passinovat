// import axios from 'axios';
// import React, { useState } from 'react';

// const RegistrationForm = ({ initialData }) => {
//   const [formData, setFormData] = useState({
//     ...initialData,
//     phoneNumber: '',
//     currentCity: '',
//     gender: '',
//     languages: [],
//     type: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Convert languages array to a comma-separated string
//     const updatedFormData = { 
//       ...formData,
//       languages: formData.languages.join(',') // Join the languages array into a string
//     };
  
//     // Simple form validation
//     if (!updatedFormData.email || !updatedFormData.password || !updatedFormData.firstName || !updatedFormData.lastName || !updatedFormData.phoneNumber || !updatedFormData.currentCity) {
//       alert('Please fill all the required fields.');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:7000/api/register', updatedFormData);
//       console.log('Registration successful:', response.data);
//       alert('Registration successful!');
//     } catch (error) {
//       if (error.response) {
//         // Log the entire response object
//         console.error('Full error response from server:', error.response);
//         // Log error message clearly as a string
//         console.log('Error details:', JSON.stringify(error.response.data, null, 2));
//         alert(`Error: ${error.response.data.message || 'Bad Request'}`);
//       } else {
//         console.error('Request failed:', error.message);
//         alert('Registration failed. Please try again.');
//       }
//     }
//   };
  
  

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Toggle language selection
//   const toggleLanguage = (language) => {
//     setFormData((prevData) => {
//       const newLanguages = prevData.languages.includes(language)
//         ? prevData.languages.filter((lang) => lang !== language)
//         : [...prevData.languages, language];
//       return { ...prevData, languages: newLanguages };
//     });
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Form Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="john@example.com"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Must be at least 6 characters"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">First name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">Last name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>

//         {/* Additional Fields */}
//         <div>
//           <label className="block text-gray-700 mb-2">Phone Number</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-2">Current City</label>
//           <input
//             type="text"
//             name="currentCity"
//             value={formData.currentCity}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Gender */}
//         <div>
//           <label className="block text-gray-700 mb-4">Gender</label>
//           <div className="flex gap-4">
//             <button
//               type="button"
//               onClick={() => setFormData({ ...formData, gender: 'female' })}
//               className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.gender === 'female' ? 'bg-blue-100' : ''}`}
//             >
//               <span className="text-pink-500">👩</span> Female
//             </button>
//             <button
//               type="button"
//               onClick={() => setFormData({ ...formData, gender: 'male' })}
//               className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.gender === 'male' ? 'bg-blue-100' : ''}`}
//             >
//               <span className="text-purple-500">👨</span> Male
//             </button>
//             <button
//               type="button"
//               onClick={() => setFormData({ ...formData, gender: 'other' })}
//               className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.gender === 'other' ? 'bg-blue-100' : ''}`}
//             >
//               <span className="text-yellow-500">⭐</span> Other
//             </button>
//           </div>
//         </div>

//         {/* Languages */}
//         <div>
//           <label className="block text-gray-700 mb-4">Languages you know</label>
//           <div className="flex flex-wrap gap-2">
//             {['English', 'Hindi', 'Telugu', 'Tamil', 'Marathi', 'French', 'Japanese', 'Panum Venum'].map((lang) => (
//               <button
//                 key={lang}
//                 type="button"
//                 onClick={() => toggleLanguage(lang)}
//                 className={`px-4 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.languages.includes(lang) ? 'bg-blue-100' : ''}`}
//               >
//                 {lang} <span>+</span>
//               </button>
//             ))}
//             <button type="button" className="px-4 py-2 text-blue-500 rounded-full flex items-center gap-2">
//               + Add more languages
//             </button>
//           </div>
//         </div>

//         {/* Type */}
//         <div>
//           <label className="block text-gray-700 mb-4">Type</label>
//           <div className="flex flex-wrap gap-2">
//             {[
//               'College student',
//               'Fresher',
//               'Working professional',
//               'School student',
//               'Woman returning to work',
//             ].map((type) => (
//               <button
//                 key={type}
//                 type="button"
//                 onClick={() => setFormData({ ...formData, type })}
//                 className={`px-4 py-2 border rounded-full hover:bg-gray-50 ${formData.type === type ? 'bg-blue-100' : ''}`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
//         >
//           Submit Registration
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegistrationForm = ({ initialData }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    ...initialData,
    phoneNumber: '',
    currentCity: '',
    gender: '',
    languages: [],
    type: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      alert('Please enter a valid phone number.');
      return;
    }

    const validGenders = ['male', 'female', 'other'];
    if (!validGenders.includes(formData.gender)) {
      alert('Please select a valid gender.');
      return;
    }

    const updatedFormData = { 
      ...formData,
      languages: formData.languages.join(','),
    };

    if (!updatedFormData.email || !updatedFormData.password || !updatedFormData.firstName || !updatedFormData.lastName || !updatedFormData.phoneNumber || !updatedFormData.currentCity) {
      alert('Please fill all the required fields.');
      return;
    }

    try {
      const response = await axios.post('https://passinovatbackend.onrender.com/api/register', updatedFormData);
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      navigate('/'); // Navigate to login page
    } catch (error) {
      if (error.response) {
        console.error('Full error response from server:', error.response);
        console.log('Error details:', JSON.stringify(error.response.data, null, 2));
        alert(`Error: ${error.response.data.message || 'Bad Request'}`);
      } else {
        console.error('Request failed:', error.message);
        alert('Registration failed. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleLanguage = (language) => {
    setFormData((prevData) => {
      const newLanguages = prevData.languages.includes(language)
        ? prevData.languages.filter((lang) => lang !== language)
        : [...prevData.languages, language];
      return { ...prevData, languages: newLanguages };
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Must be at least 6 characters"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Additional Fields */}
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Current City</label>
          <input
            type="text"
            name="currentCity"
            value={formData.currentCity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 mb-4">Gender</label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, gender: 'female' })}
              className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.gender === 'female' ? 'bg-blue-100' : ''}`}
            >
              <span className="text-pink-500">👩</span> Female
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, gender: 'male' })}
              className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.gender === 'male' ? 'bg-blue-100' : ''}`}
            >
              <span className="text-purple-500">👨</span> Male
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, gender: 'other' })}
              className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.gender === 'other' ? 'bg-blue-100' : ''}`}
            >
              <span className="text-yellow-500">⭐</span> Other
            </button>
          </div>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-gray-700 mb-4">Languages you know</label>
          <div className="flex flex-wrap gap-2">
            {['English', 'Hindi', 'Telugu', 'Tamil', 'Marathi', 'French', 'Japanese', 'Panum Venum'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => toggleLanguage(lang)}
                className={`px-4 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.languages.includes(lang) ? 'bg-blue-100' : ''}`}
              >
                {lang} <span>+</span>
              </button>
            ))}
            <button type="button" className="px-4 py-2 text-blue-500 rounded-full flex items-center gap-2">
              + Add more languages
            </button>
          </div>
        </div>

        {/* Type */}
        <div>
          <label className="block text-gray-700 mb-4">Type</label>
          <div className="flex flex-wrap gap-2">
            {[
              'College student',
              'Tech aspirant',
              'Fresher',
              'Experienced professional',
              'Home maker',
              'Other',
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, type })}
                className={`px-6 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-50 ${formData.type === type ? 'bg-blue-100' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
