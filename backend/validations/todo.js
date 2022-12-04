import { body } from "express-validator";

  const todoValidator = [
    body('title').isLength({min:5}).isString(),
]

export default todoValidator;