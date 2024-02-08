import React from 'react'

import Nav from '../../components/sidebar/Sidebar'
import AddCourseForm from '../../components/AddCourse/AddCourse'


const AddCourse = () => {
  return (
    <div className="flex">
    <div className="w-1/6"> {/* Set the width as needed */}
      <Nav />
    </div>
    <div className="flex-1  md:px-40">
      <AddCourseForm/>
    </div>
  </div>
  
  )
}

export default AddCourse