import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const certificateDetails = {
  'caste-certificate': {
    name: 'Caste Certificate',
    formUrl: '/forms/caste-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Caste Certificate', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'income-certificate': {
    name: 'Income Certificate',
    formUrl: '/forms/income-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Income Proof', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'residence-certificate': {
    name: 'Residence Certificate',
    formUrl: '/forms/residence-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'birth-certificate': {
    name: 'Birth Certificate',
    formUrl: '/forms/birth-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity of Parents', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Hospital Birth Certificate or Affidavit', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'death-certificate': {
    name: 'Death Certificate',
    formUrl: '/forms/death-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Death', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Identity of Deceased', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Identity of Relatives', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'community-certificate': {
    name: 'Community Certificate',
    formUrl: '/forms/community-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Community Certificate', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'no-graduate-certificate': {
    name: 'No Graduate Certificate',
    formUrl: '/forms/no-graduate-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Educational Qualification Certificates', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Affidavit', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'first-graduate-certificate': {
    name: 'First Graduate Certificate',
    formUrl: '/forms/first-graduate-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Educational Qualification Certificates', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Affidavit', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
  'nativity-certificate': {
    name: 'Nativity Certificate',
    formUrl: '/forms/nativity-certificate-form.pdf',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Mother\'s Name', type: 'text' },
      { label: 'Father\'s Name', type: 'text' },
      { label: 'Aadhaar Number', type: 'text' },
      { label: 'PAN Card Number', type: 'text' },
      { label: 'Proof of Identity', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Proof of Address', type: 'file', accept: '.pdf,.jpg,.png' },
      { label: 'Affidavit', type: 'file', accept: '.pdf,.jpg,.png' },
    ],
  },
};

const CertificateForm = () => {
  const { certificateType } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  const certificate = certificateDetails[certificateType];

  if (!certificate) {
    return <div>Certificate type not found</div>;
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission logic here
    // This would typically involve sending the file and additional info to a server

    console.log('Submitting form:', {
      certificateType,
      file,
      additionalInfo,
      formData,
    });

    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert('Application submitted successfully!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Back to Dashboard
      </button>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {certificate.name} Application
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Download Application Form
          </label>
          <a
            href={certificate.formUrl}
            download
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Download Form
          </a>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Filled Application Form
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>
        {certificate.fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.label} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            {field.type === 'file' ? (
              <input
                type="file"
                name={field.label}
                accept={field.accept}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                required
              />
            ) : (
              <input
                type={field.type}
                name={field.label}
                className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                value={formData[field.label] || ''}
                onChange={handleInputChange}
                required
              />
            )}
          </div>
        ))}
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            rows="4"
            className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Enter any additional information here..."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertificateForm;
