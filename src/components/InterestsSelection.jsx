import React, { useState } from 'react';

const areasOfInterest = [
  "Web Development", "Marketing", "Operations", "Software Development", "Content Writing", 
  "Data Entry", "Data Science", "Digital Marketing", "Python/Django Development", 
  "JavaScript Development", "Social Media Marketing", "Programming", "Human Resources (HR)", 
  "Software Testing", "Mobile App Development", "UI/UX Design", "Subject Matter Expert (SME)", 
  "Graphic Design", "Market/Business Research", "Telecalling", "Video Making/Editing", 
  "Android App Development", "Teaching", "Wordpress Development"
];

const InterestsSelection= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of selected interests
    console.log('Selected Interests:', selectedInterests);
  };

  const filteredInterests = areasOfInterest.filter(interest =>
    interest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-center text-lg font-semibold mb-4">Help us match you with the best career opportunities</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Area(s) of interest</label>
          <input
            type="text"
            placeholder="Areas you want to work in or learn about"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <h3 className="text-gray-600 text-sm mb-2">Top career interests</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {filteredInterests.map(interest => (
            <button
              key={interest}
              onClick={(e) => {
                e.preventDefault(); // Prevents button from submitting the form
                toggleInterest(interest);
              }}
              className={`px-4 py-2 rounded-full border ${selectedInterests.includes(interest) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
            >
              {interest} +
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-14 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InterestsSelection;
