import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get_courses, training_schedule } from "../../API/services/client";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { resetUser } from "../../store/slice/user";
import { useDispatch } from "react-redux";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const  dispatch=useDispatch()

  const student_id = useSelector((state) => state.user.id);

  console.log(student_id,343434)

  const handleSubmit = async (course_id) => {

    await training_schedule( student_id,course_id).then((data)=>{

      if (data) {
        toast.success( data.message) 
      }
      else{
        toast.error("error")
      }

     
          
       
    }).catch((err)=>{
        console.log(err,555555)
       
    })
  };

  const name = useSelector((state) => state.user.name);

  async function fetchCourses() {
    await get_courses().then((data) => {
      console.log(data);
      setCourses(data);
    });
  }

  const handleLogout=()=>{
    dispatch(
        resetUser()
      );
  }
 
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <section className=" bg-gray-800 min-h-screen mx-auto md:py-12 px-0 md:p-8 md:px-0">
        <div className="w-full flex justify-end gap-10">  <h1 className="text-2xl text-white font-bold">Hey {name}</h1>
       
        <Link to={"/training"}>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Your Trainins</button>
        </Link>
        <button
        onClick={handleLogout}
        type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
        </div>
      <div className="flex  justify-center">
        <h1 className="text-6xl font-bold mb-5 text-white">Our Courses</h1>
       
      </div>

      <section className=" md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
        {courses?.map((item, index) => (
          <section
            key={item?.id}
            className={`p-5 py-10 text-center transform duration-500 hover:-translate-y-2 cursor-pointer ${
              index % 3 === 0
                ? "bg-purple-50"
                : index % 3 === 1
                ? "bg-red-50"
                : "bg-blue-50"
            }`}
          >
            <div className="space-x-1 flex justify-center mt-10">
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl my-5">{item?.title}</h1>
            <h1 className="text-3xl my-5 font-bold text-green-800">
              {item?.duration} {item?.packag}{" "}
            </h1>
            <p className="mb-5">{item?.description}</p>
            <h2 className="font-semibold mb-5">${item?.fee} </h2>
            <button
              onClick={() => handleSubmit(item.id)}
              className={`p-2 px-6 text-white rounded-md hover:bg-purple-600 ${
                index % 3 === 0
                  ? "bg-purple-500"
                  : index % 3 === 1
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              Enrol
            </button>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Home;
