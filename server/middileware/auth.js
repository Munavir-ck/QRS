import jwt from  "jsonwebtoken"


const verifyuserJWT = async(req,res,next)=>{
    const token = req.headers["authorization"]

  console.log(req.headers,8888)
    if(!token){
        res.send({ status: false, message: "You need token" })

    } else{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
            if(err){
                console.log(err)
                res.json({auth:false,status:"failed",message:"failed to authenticate"})
            }else{
          
            req.userId =decoded.ID
                next();
            }
        })
    }
}

export {verifyuserJWT}