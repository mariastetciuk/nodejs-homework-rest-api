import Joi from 'joi';

const userSignupSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'any.required': 'missing required email field',
      'string.email': 'email must be have "com" or "net"',
    }),
  password: Joi.string().required().min(6).messages({
    'any.required': 'missing required password field',
    'string.min': '"password" should have a minimum length of 6',
  }),
});

const userSigninSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'any.required': 'missing required email field',
      'string.email': 'email must be have "com" or "net"',
    }),
  password: Joi.string().required().min(6).messages({
    'any.required': 'missing required password field',
    'string.min': '"password" should have a minimum length of 6',
  }),
});

export default { userSignupSchema, userSigninSchema };
