import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import { getUserByEmail } from '../utils/userActions';
import { failResponse, successResponse } from '../utils/request';
import { Validator } from '../utils/validator';

export class LoginAPI {
  static routeUserLogin() {
    return async function loginUser(req: Request, res: Response, next: NextFunction) {
      await body('email')
        .isEmail()
        .run(req);
      await body('password')
        .not()
        .isEmpty()
        .withMessage('required')
        .isLength({ min: 5 })
        .run(req);

      const errors = Validator.validationResult(req);

      if (!errors.isEmpty()) {
        return failResponse(req, res, 400, 'ERROR_PARAMS', errors.array());
      }
      return next();
    };
  }

  static getUser(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const userInfo = getUserByEmail(email);

      return successResponse(req, res, userInfo);
    } catch (error) {
      return failResponse(req, res, 400, 'USER_NOT_FOUND');
    }
  }
}
