import { Request, Response } from "express";
import { AuthResponseDto } from "../../domain";

export interface IAuthController {
    login(req: Request, res: Response): Promise<AuthResponseDto>  
}
