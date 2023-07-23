import express from 'express';
import contactsControllers from '../../controllers/contacts-controller.js';
import { validateBody } from '../../decorators/index.js';
import {
  emptyBody,
  contactsAdd,
  favoritContact,
} from '../../schemas/contacts-schemas.js';
import { isValidId } from '../../middlewares/index.js';

const router = express.Router();

router.get('/', contactsControllers.getAll);

router.get('/:contactId', isValidId, contactsControllers.getById);

router.post(
  '/',
  validateBody(emptyBody),
  validateBody(contactsAdd),
  contactsControllers.add
);

router.delete('/:contactId', isValidId, contactsControllers.deleteById);

router.put(
  '/:contactId',
  isValidId,
  validateBody(contactsAdd),
  contactsControllers.updateById
);

router.patch(
  '/:contactId',
  isValidId,
  validateBody(favoritContact),
  contactsControllers.updateByFavorite
);

export default router;
