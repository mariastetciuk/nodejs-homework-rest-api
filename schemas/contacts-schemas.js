import Joi from 'joi';

export const contactsAdd = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({ 'any.required': 'missing required name field' }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'any.required': 'missing required email field',
      'string.email': 'email must be have "com" or "net"',
    }),
  phone: Joi.string()
    .pattern(
      new RegExp('^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$')
    )
    .min(9)
    .required()
    .messages({
      'any.required': 'missing required phone field',
      'string.min': '"phone" should have a minimum length of 9',
    }),
});

export const emptyBody = Joi.object()
  .min(1)
  .messages({ 'object.min': 'Missing fields' });

export const favoritContact = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'missing field favorite',
    'boolean.base': 'Must be boolean type',
  }),
});
