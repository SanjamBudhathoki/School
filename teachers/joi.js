import Joi from "joi";
export const teacherRule=Joi.object({
    email: Joi.string().email().trim().lowercase().required().min(1).max(55),
    fullName: Joi.string().trim().required().min(3).max(55),
    schoolName: Joi.string().trim().required().min(3).max(55),
    subject: Joi.string().trim().required().min(3).max(55),
    salary: Joi.string().trim().required(),
    gender: Joi.string()
      .required()
      .trim()
      .valid("male", "female", "preferNotToSay"),
  });
