import Joi from "joi";
import mongoose from "mongoose";

// set rule/schema
const teacherSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 3,
        maxlength: 55,
        required: true,
        trim: true,
        lowercase:true
      },
  fullName: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: true,
    trim: true,
  },
  schoolName: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: false,
    trim: true,
  },
  salary: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim:true,
    unum:["male", "female", "preferNotToSay"]
  },
});

// create table/model
export const Teacher = mongoose.model("Teacher",teacherSchema);
