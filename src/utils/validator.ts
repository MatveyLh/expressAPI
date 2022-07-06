import { Request } from 'express';
import { validationResult } from "express-validator";

export class Validator {
    static validationResult = (req: Request) => {
        return validationResult.withDefaults({
            formatter: (error) => {
                return {
                    [error.param]: error.msg
                };
            }
        })(req);
    }
}
