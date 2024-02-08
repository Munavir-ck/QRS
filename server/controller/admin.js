import pool from '../db/connection.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
     
      const [userRows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      const user = userRows[0]; 
  
      console.log(user)
      console.log(password)
     
      if (user) {
      
        const isMatch = await bcrypt.compare(password,user.password);
  
       
        if (isMatch) {
        
          const ID = user.id;
          const token = jwt.sign({ ID }, process.env.JWT_SECRET_KEY, { expiresIn: 3000 });
          res.status(200).json({
            status: true,
            token: token,
            result: user,
            message: "Login successful",
          });
        } else {
       
          res.status(200).json({ status: false, message: "Password is incorrect" });
        }
      } else {
      
        res.status(200).json({ status: false, message: "Email is incorrect" });
      }
    } catch (error) {
     
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const add_course=(async(req,res)=>{
    const { title, description, fee, duration, packag } = req.body;

    try {
        const sql = 'INSERT INTO courses (title, description, fee, duration, packag) VALUES (?, ?, ?, ?, ?)';
        const values = [title, description, fee, duration, packag];
    
        await pool.query(sql, values);
        
        console.log('Course inserted successfully');
        res.status(200).json({ message: 'Course inserted successfully' });
    } catch (error) {
        console.error('Error inserting course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
  })

  const get_edit_course= async(req,res)=>{

    try {
        const {id}=req.query
        const [userRows] = await pool.query('SELECT * FROM courses WHERE id= ?', [id]);
          const user = userRows[0]; 
          
          res.status(200).json({result:user})
    } catch (error) {
        res.status(500).json(error)
    }





  }


  const edit_course=async(req,res)=>{
    const { title, description, fee, duration, packag,id } = req.body;
    
    
    try {
        const sql = 'UPDATE courses SET title = ?, description = ?, fee = ?, duration = ?, packag = ? WHERE id = ?';
        const values = [title, description, fee, duration, packag,id];
        
        await pool.query(sql, values);
        
        console.log('Course updated successfully');
        res.status(200).json({ message: 'Course updated successfully' });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  }

  const get_training = async (req, res) => {
    try {
        const sql = `
            SELECT training.*, courses.title AS course_title, courses.duration AS course_duration, users.name AS student_name, courses.packag AS course_package
            FROM training
            INNER JOIN courses ON training.course_id = courses.id
            INNER JOIN users ON training.student_id = users.id`;
    
        const [rows] = await pool.query(sql);
    
        res.status(200).json({ result: rows });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const delete_training=async(req,res)=>{

    const {id}=req.query

    try {
        const sql = 'DELETE FROM training WHERE  id = ?';
    
   
        await pool.query(sql, [id]);
    
        // Send success response
        res.status(200).json({ status: true, message: 'Training record deleted successfully.' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

   
}

const delete_course=async(req,res)=>{

    const {id}=req.query

    try {
        await pool.query('DELETE FROM training WHERE course_id = ?', [id]);

        // Now delete the course
        await pool.query('DELETE FROM courses WHERE id = ?', [id]);

      
      
        res.status(200).json({ status: true, message: 'Training record deleted successfully.' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

   
}

  export{login,add_course,get_edit_course,edit_course,get_training,delete_training,delete_course}