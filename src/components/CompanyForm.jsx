import React from 'react';

function CompanyForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-xl font-semibold mb-6">Create an Account</h2>
        
        <form>
          <label className="block text-gray-700 mb-2">Official Email Id</label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Minimum 6 characters"
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          
          <label className="block text-gray-700 mb-2 mt-4">Mobile Number</label>
          <div className="flex gap-2">
            <input
              type="text"
              value="+91"
              readOnly
              className="w-16 p-2 border border-gray-300 rounded-lg bg-gray-100"
            />
            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            By clicking on <span className="font-medium">Post for Free</span>, you agree to our <a href="#" className="text-orange-500 underline">T&C</a>.
          </p>
          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Post for Free
          </button>
          
          <p className="text-center text-gray-500 text-sm mt-4">
            Already registered? <a href="/" className="text-orange-700 underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CompanyForm;
