
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimes } from 'react-icons/fa';
import Spinner from './Spinner';

Modal.setAppElement('#root');

const StartupForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    StartupName: '',
    CityLocation: '',
    Date: '',
    InvestorsName: '',
    IndustryVertical: '',
    employees: '',
    AmountInUSD: '',
  });

  // Function to validate form data
  const validateFormData = () => {
    // Validate Date, employees, and AmountInUSD as numeric values
    if (
      !/^\d+$/.test(formData.Date) ||
      !/^\d+$/.test(formData.employees) ||
      !/^\d+$/.test(formData.AmountInUSD)
    ) {
      toast.error('Year, Employees, and Funding Amount must be numeric.');
      return false; // Validation failed if any of these fields is not numeric
    }

    // Check for blank spaces in all fields
    for (const field in formData) {
      if (formData[field].trim() === '') {
        toast.error('All fields must be filled.', { position: 'top-center', autoClose: 3000 });
        return false; // Validation failed if any field has only blank spaces
      }
    }

    return true; // Validation passed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(value==='a')return
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!validateFormData()) {
      return;
    }


    // Add logic to handle form submission (e.g., send data to the server)
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/api/submit-startup', formData);
      // console.log('Submission successful:', response.data);

      // Optionally, you can reset the form after successful submission
      setFormData({
        StartupName: '',
        CityLocation: '',
        Date: '',
        InvestorsName: '',
        IndustryVertical: '',
        employees: '',
        AmountInUSD: '',
      });

      console.log('start')
      toast.success('Startup submitted successfully!', { position: 'top-center', autoClose: 3000 });
      // Close the form after submission
      onClose();
      
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error (e.g., show an error message to the user)
      toast.error('Error submitting startup. Please try again.', { position: 'top-center', autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
<>
  <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md relative overflow-y-auto max-h-[80vh] sm:max-h-[79vh] md:max-h-[85vh] lg:max-h-[85vh] xl:max-h-[85vh]">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
    >
      <FaTimes size={24} />
    </button>

    <h2 className="text-2xl font-bold mb-4 text-[#818cf8]">Submit a Startup</h2>

    {/* Form fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="mb-4">
        <label htmlFor="StartupName" className="text-gray-600 block mb-1">Company Name</label>
        <input
          type="text"
          id="StartupName"
          name="StartupName"
          value={formData.StartupName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="CityLocation" className="text-gray-600 block mb-1">City</label>
        <input
          type="text"
          id="CityLocation"
          name="CityLocation"
          value={formData.CityLocation}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Date" className="text-gray-600 block mb-1">Starting Year</label>
        <input
          type="text"
          id="Date"
          name="Date"
          value={formData.Date}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="InvestorsName" className="text-gray-600 block mb-1">Founders</label>
        <input
          type="text"
          id="InvestorsName"
          name="InvestorsName"
          value={formData.InvestorsName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        />
      </div>
      {/* Industry dropdown */}
      <div className="mb-4">
        <label htmlFor="IndustryVertical" className="text-gray-600 block mb-1">
          Industry
        </label>
        <select
          id="IndustryVertical"
          name="IndustryVertical"
          value={formData.IndustryVertical}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        >
          <option disabled value="">Select Industry</option>
          <option value="Technology">Technology</option>
          <option value="Consumer Internet">Consumer Internet</option>
          <option value="eCommerce">eCommerce</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Logistics">Logistics</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="employees" className="text-gray-600 block mb-1">No. of Employees</label>
        <input
          type="text"
          id="employees"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="AmountInUSD" className="text-gray-600 block mb-1">Funding Amount</label>
        <input
          type="text"
          id="AmountInUSD"
          name="AmountInUSD"
          value={formData.AmountInUSD}
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-gray-800 bg-gray-100"
          required
        />
      </div>
    </div>

    {/* Submit button */}
    <button type="submit" className="bg-[#818cf8] text-white py-2 px-4 rounded-md hover:bg-[#9333ea]">
      {loading ? <Spinner /> : <>Submit</>}
    </button>

    {/* Close button */}
    <button type="button" onClick={onClose} className="ml-2 text-gray-600 hover:text-gray-800">
      Close
    </button>
  </form>
</>

  );
};

export default StartupForm;

