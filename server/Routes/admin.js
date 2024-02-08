import express from "express";
import {login,add_course,get_edit_course,edit_course,get_training,delete_training,delete_course} from "../controller/admin.js"
import { verifyuserJWT } from "../middileware/auth.js";



const router=express.Router()


router.post("/login",login)

router.post("/add_course",verifyuserJWT,add_course)
router.get("/get_edit_course",verifyuserJWT,get_edit_course)
router.patch("/edit_course",verifyuserJWT,edit_course)
router.get("/get_training",verifyuserJWT,get_training)
router.delete("/delete_training",verifyuserJWT,delete_training)
router.delete("/delete_course",verifyuserJWT,delete_course)


export default router