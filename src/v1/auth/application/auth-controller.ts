import { Request, Response } from "express";

import { AuthResponseDto } from "../domain";
import { IAuthController, loginUseCase } from ".";


export class AuthController implements IAuthController {

    private _loginUseCase: loginUseCase
    constructor(loginUseCase: loginUseCase) {
        this._loginUseCase = loginUseCase;
    }

    async login(req: Request, res: Response): Promise<AuthResponseDto> {

        const { email, password } = req.body; 
        return await this._loginUseCase.run({email, password});
        
    }

    


}