import express from 'express';
import { validateBody } from '../../decorators/index.js';
import { emptyBody } from '../../schemas/contacts-schemas.js';
import authSchemas from '../../schemas/auth-schemas.js';
import { authenticate, upload } from '../../middlewares/index.js';
import authController from '../../controllers/auth-controller.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  upload.single('avatarURL'),
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

authRouter.post('/logout', authenticate, authController.signout);

authRouter.get('/current', authenticate, authController.getCurrent);

authRouter.patch(
  '/',
  authenticate,
  validateBody(authSchemas.userSubscriptionShema),
  authController.updateBysubscription
);

authRouter.patch(
  '/avatars',
  upload.single('avatarURL'),
  authenticate,
  authController.updataByAvatar
);

export default authRouter;
