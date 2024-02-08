import React, { useState, useEffect } from "react";
// import { addProduct, get_categories } from "../API/Services/clientService";
import Swal from "sweetalert2";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCourse } from "../../API/services/admin";
function AddCourseForm() {
  function addProduct(params) {}

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fee: "",
    duration: "",
    packag: "Month",
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    fee: "",
    duration: "",
    packag: "Month",
  });

  const validateInput = (name, value) => {
    console.log(name, value);

    switch (name) {
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value === "" ? "Name must be at least 3 characters long" : "",
        }));
        break;
      case "description":
        setErrors((prevErrors) => ({
          ...prevErrors,
          description: value === "" ? "Description cannot be empty" : "",
        }));
        break;
      case "price":
        setErrors((prevErrors) => ({
          ...prevErrors,
          price: value === "" ? "Enter a price" : "",
        }));
        break;
      case "quantity":
        setErrors((prevErrors) => ({
          ...prevErrors,
          quantity: value === "" ? "Enter a quantity" : "",
        }));
        break;
      case "categoryId":
        setErrors((prevErrors) => ({
          ...prevErrors,
          categoryId: value === "" ? "Category is required" : "",
        }));
        break;
      default:
        break;
    }
  };

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
    addCourse(formData).then((data) => {
      toast.success("course added");
      clearForm();
    });
  };

  function clearForm() {
    setFormData({
      title: "",
      description: "",
      fee: "",
      duration: "",
      packag: "Month",
    });
  }
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
          Add Course
        </button>
      </form>
    </div>
  );
}
export default AddCourseForm;
