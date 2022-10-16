import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const AdminAuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { token } = req.headers;
    
    if(token === 'admin'){
        next();        
    } else {
        // 401
        // StatusCodes.UNAUTHORIZED
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: "you are not authorized",
            body: null,
            success: false,
        });
    }
}