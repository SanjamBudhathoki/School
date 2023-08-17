import express from "express"

import { Teacher } from "./Schema.js"
import { teacherRule } from "./joi.js"
import { checkMongoIdValidity } from "../utils/validity.js";

import { addTeacher } from "./teacher.service.js"
import { getAllTeacher } from "./teacher.service.js"
import { getSingleData } from "./teacher.service.js"
import { deleteTeacherData } from "./teacher.service.js"
import { editTeacherData } from "./teacher.service.js";
const route=express.Router()

//! Add
route.post("/teacher/add",addTeacher)

//! GET All Teacher
route.get("/teacher/info",getAllTeacher)

//! GET Single Data
route.get("/teacher/info/:id",getSingleData)

//! Delete Data
route.delete("/teacher/delete/:id",deleteTeacherData)

//! Edit Data
route.put("/teacher/edit/:id",editTeacherData)


export default route