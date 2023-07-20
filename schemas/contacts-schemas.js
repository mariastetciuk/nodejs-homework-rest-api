import Joi from 'joi';

export const contactsAdd = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({ 'any.required': 'missing required name field' }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  phone: Joi.number()
    .min(9)
    .required()
    .messages({ 'any.required': 'missing required phone field' }),
});

export const emptyBody = Joi.object()
  .min(1)
  .messages({ 'object.min': 'Missing fields' });
