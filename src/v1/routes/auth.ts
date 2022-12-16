import { Router } from 'express'
import { AuthController } from '../auth/application/auth-controller';

export const router = Router();

router.post('/login') // TODO: implement controller method here)