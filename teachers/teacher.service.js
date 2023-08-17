import { Teacher } from "./Schema.js"
import { teacherRule } from "./joi.js"
import { checkMongoIdValidity } from "../utils/validity.js"

//! add Teacher
export const addTeacher=async(req,res)=>{
    const newTeacher=req.body
    const schema=teacherRule
    try {
        await schema.validateAsync(newTeacher)
    } catch (error) {
        return res.status(400).send({message:error})        
    }
    const teacherEmail=await Teacher.findOne({email:newTeacher.email})
    if(teacherEmail){
        return res.status(409).send({ message: "User with this email already exists in our system." }); 
    }
    await Teacher.create(newTeacher)
    return res.status(201).send({message:"adding the teacher in db"})
}

//! Get All Teacher
export const getAllTeacher=async(req,res)=>{
    const allTeachers=await Teacher.find()
    return res.status(202).send(allTeachers)
}

//!Get Single Data
export const getSingleData=async(req,res)=>{
    // extract id from params
    const teacherId=req.params.id
  
    // check mongoose id validity
    const isValid=checkMongoIdValidity(teacherId)
  
    // if not valid, throw error
    if(!isValid){
      return res.status(400).send({message:"Mongo Id Not valid"})
    }
    // check if teacher with id exists
    const teacher=await Teacher.findOne({_id:teacherId})
  
    // if not teacher, throw error
  if(!teacher){
      return res.status(404).send({ message: "Teacher does not exist." });
  
  }
    // send appropriate response
    return res.status(201).send(teacher)
  }

//! Delete Data
export const deleteTeacherData=async(req,res)=>{
    // extract id from params
    const teacherId=req.params.id
    // if not teacher, throw error
    if(!teacherId){
        return res.status(400).send({message:"Teacher Not Found"})
    }
// check mongoose id validity
const isValid=checkMongoIdValidity(teacherId)
// if not valid, throw error
if(!isValid){
    return res.status(400).send({message:"invalid Mongo Db"})
}
// check if teacher with id exists
const newTeacher=await Teacher.deleteOne({_id:teacherId})
// send appropriate response
return res.status(201).send({message:"Teacher data Deleted...."})

}

//! Edit Data
export const editTeacherData=async(req,res)=>{
// extract id from params
    const teacherId=req.params.id
// if not teacher, throw error
    if(!teacherId){
        return res.status(400).send({message:"Teacher Not Found"})
    }
// check mongoose id validity
const isValid=checkMongoIdValidity(teacherId)
// if not valid, throw error
if(!isValid){
    return res.status(400).send({message:"invalid Mongo Db"})
}

 // edit product
 const newData = req.body;

 //   validate new data
 try {
   await teacherValidationSchema.validateAsync(newData);
 } catch (error) {
   return res.status(400).send({ message: error.message });
 }

 await Teacher.updateOne(
   { _id: productId },
   {
     $set: {
       email:newData.email,
       fullName: newData.fullName,
       schoolName: newData.schoolName,
       subject: newData.subject,
       salary: newData.salary,
       gender: newData.gender,
     },
   }
 );
 // send appropriate response
 return res.status(201).send({message:"Teacher data is edited...."})
}


