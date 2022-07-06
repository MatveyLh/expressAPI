import { Request, Response } from "express";

export function failResponse<T>(req: Request, res: Response, statusCode = 200, message = 'ERROR', errors: T[] = []) {
    const body = {
        success: false,
        message: message,
        errors,
    }

    return res.status(statusCode).json(body);
}

export function successResponse(req: Request, res: Response, data = {}, statusCode = 200) {
    const body = {
        success: true,
        data
    }

    return res.status(statusCode).json(body);
}
