import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sub-div A', applications: 4000, processingTime: 24, staffAvailable: 10 },
  { name: 'Sub-div B', applications: 3000, processingTime: 18, staffAvailable: 8 },
  { name: 'Sub-div C', applications: 2000, processingTime: 36, staffAvailable: 5 },
  { name: 'Sub-div D', applications: 2780, processingTime: 30, staffAvailable: 7 },
  { name: 'Sub-div E', applications: 1890, processingTime: 12, staffAvailable: 12 },
];

const ResourceAllocation = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Resource Allocation Dashboard</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Application Volume and Processing Time by Sub-division</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="applications" fill="#8884d8" name="Applications" />
              <Bar yAxisId="right" dataKey="processingTime" fill="#82ca9d" name="Avg. Processing Time (hours)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Staff Availability by Sub-division</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="staffAvailable" fill="#ffc658" name="Available Staff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResourceAllocation;