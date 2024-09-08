import React from 'react';

const Settings = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="email-notifications" className="flex items-center">
            <input type="checkbox" id="email-notifications" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Email Notifications</span>
          </label>
        </div>
        <div>
          <label htmlFor="sms-notifications" className="flex items-center">
            <input type="checkbox" id="sms-notifications" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-300">SMS Notifications</span>
          </label>
        </div>
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
          <select id="language" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;