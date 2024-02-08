import axios from "../../axios/axios";
const token = localStorage.getItem("admintoken");

export const login = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/admin/login", formData, config);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const addCourse = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.post("/admin/add_course", formData, config);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const get_categories = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.get("/get_categories", config);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const fetchEditCourse = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.get(
      "/admin/get_edit_course",
      {
        params: {
          id,
        },
        headers:config.headers
      },
     
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const edit_course = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.patch("/admin/edit_course", formData, config);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const get_training = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.get("/admin/get_training", config);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const delete_training = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.delete(
      "/admin/delete_training",
      {
        params: {
          id,
        },
      },
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};

export const delete_course = async (id) => {
  console.log(token, 4545454);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await axios.delete("/admin/delete_course", {
      params: { id },
      headers: config.headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};
