import { Router } from 'express'
import { LoginMiddleware } from '../auth/middlewares/handle-login';

export const router = Router();

router.post('/login', LoginMiddleware.handler)

export default router;