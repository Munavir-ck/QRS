import pool from "../db/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    console.log(existingUser);

    if (existingUser[0].length > 0) {
      return res
        .status(200)
        .json({ status: false, message: "Email already exists" });
    }

    console.log(password);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password.trim(), salt);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    await pool.query(sql, [name, email, hashPassword]);

    // Return success response
    res
      .status(200)
      .json({ status: true, message: "User created successfully" });
  } catch (error) {
    // If an error occurs, log the error and return internal server error response
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [userRows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = userRows[0];

    console.log(user);
    console.log(password);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const ID = user.id;
        const token = jwt.sign({ ID }, process.env.JWT_SECRET_KEY, {
          expiresIn: 3000,
        });
        res.status(200).json({
          status: true,
          token: token,
          result: user,
          message: "Login successful",
        });
      } else {
        res
          .status(200)
          .json({ status: false, message: "Password is incorrect" });
      }
    } else {
      res.status(200).json({ status: false, message: "Email is incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const get_courses = async (req, res) => {
  try {
    const sql = "SELECT * FROM courses";
    const [rows, fields] = await pool.query(sql);

    console.log("Courses retrieved successfully");
    res.status(200).json(rows); // Send the retrieved courses back to the client
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const training_schedule = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;

    console.log(student_id,55555)

    const start_date = new Date();

    const sql = "SELECT * FROM courses WHERE id = ?";
    const [rows, fields] = await pool.query(sql, [course_id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    console.log(rows[0])
    const duration = rows[0].duration;
    const packag = rows[0].packag;
    const end_date = new Date(start_date);
    if (packag =="Month") {
      console.log(232323232323232,duration,start_date)
      end_date.setMonth(start_date.getMonth() + parseInt(duration));
    }
    else{
      end_date.setFullYear(start_date.getFullYear() +  parseInt(duration));
    }

   console.log(start_date,end_date)

    const sql2 = 'INSERT INTO training (start_date, end_date, course_id, student_id) VALUES (?, ?, ?, ?)';
    const values = [start_date, end_date, course_id, student_id];
    const result = await pool.query(sql2, values);

   res.status(200).json({status:true,result,message:"success"})
  } catch (error) {
    console.error("Error retrieving course:", error);
    res.status(500).json({status:false, message:error});
  }
};

const get_trainings = async (req, res) => {
  console.log(req.query);
  const { student_id } = req.query;

  try {
    const sql = `
      SELECT training.*, courses.*
      FROM training
      INNER JOIN courses ON training.course_id = courses.id
      WHERE training.student_id = ?
    `;
    const values = [student_id];

    const [rows, fields] = await pool.query(sql, values);

   

    res.status(200).json({ status: true, result: rows });
  } catch (error) {
    console.error('Error retrieving training records:', error);
    throw error;
  }
};

const cancel_course = async (req, res) => {
  const { course_id } = req.query;

  console.log(course_id)

  try {
   
    const sql = 'DELETE FROM training WHERE course_id = ?';
    
   
    await pool.query(sql, [course_id]);

    // Send success response
    res.status(200).json({ status: true, message: 'Training record deleted successfully.' });
  } catch (error) {
    console.error('Error deleting training record:', error);
    // Send error response
    res.status(500).json({ status: false, message: 'Internal server error.' });
  }
};


export { signup, login, get_courses, training_schedule, get_trainings,cancel_course };
