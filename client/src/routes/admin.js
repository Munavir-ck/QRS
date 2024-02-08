import React from 'react'

import { Navigate } from 'react-router-dom';

import { Route,Routes} from 'react-router-dom';
import AddCourse from '../pages/Admin/AddCoursePage';
import Login from '../components/AdminLogin/AdminLogin';
import { useSelector } from 'react-redux';
import CourseListPage from '../pages/Admin/CourseListPage';
import EditCoursePage from '../pages/Admin/EditCoursePage';
import TrainingListPage from '../pages/Admin/TrainingListPage';



function Admin() {




  const isAuth = useSelector((state) => state.admin.token);
    
    
 console.log(isAuth,33333)


 
  return (
    <div>
       <Routes>
      {/* <Route  path='/' element={<AdminLogin/>}/> */}
      <Route  path='/' element={<Login/>}/>
      <Route  path='/home'  element={isAuth?<CourseListPage/>:<Navigate to={'/admin/'} />}/>
      <Route  path='/add_course'  element={isAuth?<AddCourse/>:<Navigate to={'/admin/'} />}/>
      <Route path='/edit_course/:id' element={isAuth ? <EditCoursePage /> : <Navigate to='/admin/' />} />
      <Route path='/trainings' element={isAuth ? <TrainingListPage /> : <Navigate to='/admin/' />} />
      {/* <Route path='/home' element={isAuth?<AdminHome/>:<Navigate to={'/admin/'} />}/> */}
     
      </Routes>
    </div>
  )
}

export default Admin