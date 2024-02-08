import React, { useEffect, useState } from "react";
import {get_training,delete_training } from "../../API/services/admin";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
const TrainingList = () => {
  const [training, setTraining] = useState([]);
  const [check,setCcheck]=useState(false)
  

  async function fetchTrainings() {
    await get_training().then((data) => {
        setTraining(data.result);
    });
  }

  const handleDelet=(id)=>{

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
            delete_training(id).then((data)=>{
                if (data?.status) {
                    setCcheck(!check)
                }
            })
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        }
      });

  }

  useEffect(() => {
    fetchTrainings();
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
                <th className="text-left p-3 px-5">COURSE</th>
                <th className="text-left p-3 px-5">DURATION</th>
                <th></th>
              </tr>

              {training?.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">
                    <input type="text" className="bg-transparent" />
                    {item.student_name}
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" className="bg-transparent" />
                    {item.course_title}
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" className="bg-transparent" />
                    {item.course_duration}
                    {item.course_package}
                  </td>

                  <td className="p-3 px-5 flex justify-end">
                  
                  <button
                  onClick={()=>handleDelet(item.id)}
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

export default TrainingList;