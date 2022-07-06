import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import { getUserByEmail, registerUserByProvidedData } from '../utils/userActions';
import { Validator } from '../utils/validator';
import { failResponse, successResponse } from '../utils/request';

export class RegistrationAPI {
  static routeUserRegistration() {
    return async function registerUser(req: Request, res: Response, next: NextFunction) {
      await body('email')
        .isEmail()
        .run(req);
      await body('password')
        .not()
        .isEmpty()
        .withMessage('required')
        .isLength({ min: 5 })
        .run(req);
      await body('firstName')
        .isString()
        .run(req);
      await body('lastName')
        .isString()
        .run(req);

      const errors = Validator.validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      return next();
    };
  }

  static registerUser(req: Request, res: Response) {
    const { email } = req.body;

    try {
      let user;

      // If record not found db will return an Error
      try {
        user = getUserByEmail(email);
      } catch (err) {}

      if (user) {
        return failResponse(req, res, 400, 'USER_ALREADY_REGISTERED', [{
          user: 'User with current email already exist',
        }]);
      }
      registerUserByProvidedData(email, req.body);

      return successResponse(req, res, req.body);
    } catch (error) {
      return failResponse(req, res, 400, 'SERVER_ERROR');
    }
  }
}
