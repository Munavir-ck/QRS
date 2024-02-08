import axios from "../../axios/axios";
const token = localStorage.getItem('token');



export const signup = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/signup", formData, config);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const login = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/login", formData, config);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};
export const get_courses= async () => {

  console.log(token,5555555)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  };
  try {
    const response = await axios.get("/get_courses",config);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const training_schedule= async (student_id,course_id) => {

  const data={
    student_id,course_id
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  };
  try {
    const response = await axios.post("/training_schedule", data,config);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const get_trainings= async (student_id) => {

 
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  };
  try {
    const response = await axios.get("/get_trainings",{
      params:{
      student_id
    },
  headers:config.headers
  });

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const cancel_course= async (course_id) => {

 
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
  };
  try {
    const response = await axios.delete("/cancel_course",{params:{
      course_id
    },
  headers:config.headers
  });

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};