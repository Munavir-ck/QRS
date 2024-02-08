import express from "express";
import {login, signup,get_courses,training_schedule,get_trainings,cancel_course} from "../controller/user.js"
import { verifyuserJWT } from "../middileware/auth.js";



const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.get("/get_courses",get_courses)
router.post("/training_schedule",verifyuserJWT,training_schedule)
router.get("/get_trainings",verifyuserJWT,get_trainings)
router.delete("/cancel_course",verifyuserJWT,cancel_course)
// router.post("/add_product",add_product)
// router.get("/get_categories",get_categories)
// router.get("/get_product",get_product)

// router.get("/filter_product",filter_product)
// router.get("/get_product_count",get_product_count)

export default router