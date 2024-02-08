import React, { useEffect, useState } from "react";
import { get_courses} from "../../API/services/client";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';
import { delete_course } from "../../API/services/admin";
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [check,setCheck]=useState(false)

  console.log(courses, 12121);

  async function fetchCourses() {
    await get_courses().then((data) => {
      setCourses(data);
    });
  }


  const handleDelete=(id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
            delete_course(id).then((data)=>{
                if (data?.status) {
                    setCheck(!check)
                }
            })
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        }
      });
  }

  useEffect(() => {
    fetchCourses();
  }, [check]);
  return (
    <div>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Our Courses</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">FEE</th>
                <th className="text-left p-3 px-5">DURATION</th>
                <th></th>
              </tr>

              {courses?.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">
                    <input type="text" className="bg-transparent" />
                    {item.title}
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" className="bg-transparent" />
                    {item.fee}
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" className="bg-transparent" />
                    {item.duration}
                    {item.packag}
                  </td>

                  <td className="p-3 px-5 flex justify-end">
                  <Link to={`/admin/edit_course/${item.id}`}>
        <button
          type="button"
          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          EDIT
        </button>
      </Link>
                   
                    <button
                    onClick={()=>handleDelete(item.id)}
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
