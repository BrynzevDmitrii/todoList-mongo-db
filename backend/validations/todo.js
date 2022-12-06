import { body } from "express-validator";

  const todoValidator = [
    body('title').isLength({min:5}).isString(),
    body('items').isLength({min:5}).isString(),
    body('isChecket').isBoolean(),
]

export default todoValidator;