import React from 'react'
import Nav from '../../components/sidebar/Sidebar'
import CourseList from '../../components/courseList/courseList'

const CourseListPage = () => {
  return (
    <div className="flex">
    <div className="w-1/6"> {/* Set the width as needed */}
      <Nav />
    </div>
   
    <div className="flex-1 mt-11  md:px-32">
  
      <CourseList/>
    </div>
  </div>
  )
}

export default CourseListPage
