import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { edit_course, fetchEditCourse } from "../../API/services/admin";
function EditCourseForm() {
  const { id } = useParams();

const navigate=useNavigate()
  
  useEffect(() => {
    fetchEditCourse(id).then((data) => {
      setFormData(data.result);
    });
  },[]);

  const [formData, setFormData] = useState({
    id:id,
    title: "",
    description: "",
    fee: "",
    duration: "",
    packag: "Month",
  });
 


  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
 edit_course(formData).then((data)=>{
  toast.success(data.message)
  navigate("/admin/home")
 })
    
  };

  const clearForm = () => {
    setFormData({
      id: "",
      title: "",
      description: "",
      fee: "",
      duration: "",
    });
  };
  return (
    <div
      className="bg-gray-200 rounded-md p-6 mt-4"
      style={{ maxWidth: "700px" }}
    >
      <ToastContainer />
      <h3 className="text-lg font-bold mb-4"> Add Course</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            {formData.title}
            Title
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="productName"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productDescription"
          >
            Description
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="productDescription"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productPrice"
          >
            Fee
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="number"
            id="productPrice"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productQuantity"
          >
            Duration
          </label>
          <div className="flex">
            <input
              className="border rounded w-full py-2 px-3"
              type="number"
              id="productQuantity"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
            <select
              id="courseDuration"
              className="rounded"
              onChange={handleChange}
              name="packag"
            >
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
        </div>
        <div className="mb-4"></div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
         Edit Course
        </button>
      </form>
    </div>
  );
}
export default EditCourseForm;
