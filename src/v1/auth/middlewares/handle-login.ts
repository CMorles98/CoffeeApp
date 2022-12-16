import { Request, Response } from "express";
import { AuthController } from '../application/auth-controller';

export class LoginMiddleware {

  static async handler(req: Request, res: Response) {
    try {
      // Haces tus declaraciones, importaciones aqui, lo que corresponda al login
      // const authController = new AuthController()


      return res.status(200).json({
        ok: true
      });
    } catch (error: any) {
      throw new Error(error)
    }
  }
}