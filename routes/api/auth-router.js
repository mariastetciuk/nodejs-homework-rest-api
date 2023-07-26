import express from 'express';
import { validateBody } from '../../decorators/index.js';
import { emptyBody } from '../../schemas/contacts-schemas.js';
import authSchemas from '../../schemas/auth-schemas.js';
import { isValidId } from '../../middlewares/index.js';
import authController from '../../controllers/auth-controller.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateBody(emptyBody),
  validateBody(authSchemas.userSignupSchema),
  authController.signup
);

authRouter.post(
  '/login',
  validateBody(emptyBody),
  validateBody(authSchemas.userSigninSchema),
  authController.signin
);

export default authRouter;