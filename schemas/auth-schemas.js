import Joi from 'joi';

const userSignupSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'any.required': 'missing required email field',
    'string.email': 'email must be have "com" or "net"',
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': 'missing required password field',
    'string.min': '"password" should have a minimum length of 6',
  }),
});

const userSigninSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'any.required': 'missing required email field',
    'string.email': 'email must be have "com" or "net"',
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': 'missing required password field',
    'string.min': '"password" should have a minimum length of 6',
  }),
});

const userSubscriptionShema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid('starter', 'pro', 'business')
    .messages({
      'any.required': 'missing field subscription',
      'valid.base': 'The value must be "starter" or "pro" or "business"',
    }),
});

const userEmailSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'any.required': 'missing required field email',
  }),
});

export default {
  userSignupSchema,
  userSigninSchema,
  userSubscriptionShema,
  userEmailSchema,
};
