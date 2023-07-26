import express from 'express';
import contactsControllers from '../../controllers/contacts-controller.js';
import { validateBody } from '../../decorators/index.js';
import {
  emptyBody,
  contactsAdd,
  favoritContact,
} from '../../schemas/contacts-schemas.js';
import { isValidId } from '../../middlewares/index.js';

const contactsRouter = express.Router();

contactsRouter.get('/', contactsControllers.getAll);

contactsRouter.get('/:contactId', isValidId, contactsControllers.getById);

contactsRouter.post(
  '/',
  validateBody(emptyBody),
  validateBody(contactsAdd),
  contactsControllers.add
);

contactsRouter.delete('/:contactId', isValidId, contactsControllers.deleteById);

contactsRouter.put(
  '/:contactId',
  isValidId,
  validateBody(emptyBody),
  validateBody(contactsAdd),
  contactsControllers.updateById
);

contactsRouter.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(favoritContact),
  contactsControllers.updateByFavorite
);

export default contactsRouter;
