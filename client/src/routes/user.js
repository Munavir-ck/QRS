import React from "react";

import { Navigate } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";
import Home from "../components/home/Home";
import { useSelector } from "react-redux";
import Trainings from "../components/Trainings/Trainings";


function Admin() {
  const isAuth = useSelector((state) => state.user.token);
  console.log(isAuth)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={isAuth ? <Home /> : <Navigate to={"/"} />}
        />
          <Route
          path="/training"
          element={isAuth ? <Trainings /> : <Navigate to={"/"} />}
        />
        {/* <Route path='/home' element={isAuth?<AdminHome/>:<Navigate to={'/admin/'} />}/> */}
      </Routes>
    </div>
  );
}

export default Admin;
