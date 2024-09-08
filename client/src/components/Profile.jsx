import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Profile</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input type="text" id="fullname" name="fullname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="johndoe@example.com" />
        </div>
        <div>
          <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Aadhaar Number</label>
          <input type="text" id="aadhaar" name="aadhaar" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="1234 5678 9012" />
        </div>
        <div>
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;