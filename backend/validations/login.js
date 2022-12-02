import { body } from "express-validator";

  const loginValidator = [
    body('email').isEmail(),
    body('password').isLength({min:5}),
]
export default loginValidator;