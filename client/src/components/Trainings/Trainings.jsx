import React, { useEffect, useState } from "react";
import { cancel_course, get_trainings } from "../../API/services/client";
import { useSelector } from "react-redux";
import moment from "moment"
import Swal from 'sweetalert2';

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const student_id = useSelector((state) => state.user.id);
  const [check,setCcheck]=useState(false)


  async function fetchTrainings() {

    
    await get_trainings(student_id).then((data) => {
      if (data.status) {
        setTrainings(data.result);
      }
    });
  }

  useEffect(() => {
    fetchTrainings();
  }, [check]);

  const handleCancelButton=async(course_id)=>{

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
            cancel_course(course_id).then((data)=>{
                if (data?.status) {
                    setCcheck(!check)
                }
            })
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        }
      });
  

    

  }
 
  return (
    <div>
      <div className="pricing-table-2  min-h-screen bg-gray-800 py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">
              Your Trainings
            </h1>
          </div>


          {trainings?.map((item )=>
          
          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="p-6 md:py-8">
                <h4 className="font-medium leading-tight text-2xl mb-2">
               {item?.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                <div className="">
                  <span className="text-4xl font-semibold">{item.fee}</span> /year
                </div>
              </div>
              <div className="p-6">
                <ul className="leading-loose">
                 <h1 className="text-red-600 font-bold">Expired at :  {moment(item.end_date).format('MMMM Do YYYY')}</h1>
                </ul>
                <div className="mt-6 py-4">
                  <button 
                  onClick={()=>handleCancelButton(item.id)}
                  className="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">
                  Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          )}

         
        </div>
      </div>
    </div>
  );
};

export default Trainings;
