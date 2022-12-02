import { body } from "express-validator";

  const todoValidator = [
    body('title').isLength({min:5}).isString(),
    body('shortDescription').optional().isLength({max:60}).isString(),
    body('fullDescription').isLength({min:10}).isString(),
]

export default todoValidator;