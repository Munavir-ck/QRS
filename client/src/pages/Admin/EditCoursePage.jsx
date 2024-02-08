import React from 'react'
import Nav from '../../components/sidebar/Sidebar'
import EditCourseForm from '../../components/EditCourse/EditCourse'






const EditCoursePage = () => {
  return (
    <div className="flex">
    <div className="w-1/6"> {/* Set the width as needed */}
      <Nav />
    </div>
    <div className="flex-1  md:px-40">
      <EditCourseForm/>
    </div>
  </div>
  
  )
}
export default EditCoursePage
