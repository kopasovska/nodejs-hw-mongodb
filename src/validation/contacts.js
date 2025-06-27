import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Contact name should be a string',
    'string.min': 'Contact name should have at least {#limit} characters',
    'string.max': 'Contact name should have at most {#limit} characters',
    'any.required': 'Contact name is required',
  }),
  phoneNumber: Joi.string().min(8).max(15).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} numbers',
    'string.max': 'Phone number should have at most {#limit} numbers',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.empty': 'Email can not be empty.',
    'string.email': 'Please provide a valid email address.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The isFavourite field must be true or false.',
  }),
  contactsType: Joi.string()
    .valid('personal', 'home', 'work')
    .required()
    .messages({
      'any.required': 'The contactsType field is required.',
      'any.only': 'contactsType must be one of: personal, home, or work.',
      'string.base': 'contactsType must be a string.',
      'string.empty': 'contactsType cannot be empty.',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact name should be a string',
    'string.min': 'Contact name should have at least {#limit} characters',
    'string.max': 'Contact name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(8).max(15).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} numbers',
    'string.max': 'Phone number should have at most {#limit} numbers',
  }),
  email: Joi.string().min(3).max(20).email().messages({
    'string.empty': 'Email can not be empty.',
    'string.min': 'Email should have at least {#limit} characters',
    'string.max': 'Email name should have at most {#limit} characters',
    'string.email': 'Please provide a valid email address.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The isFavourite field must be true or false.',
  }),
  contactsType: Joi.string()
    .min(3)
    .max(20)
    .valid('personal', 'home', 'work')
    .messages({
      'any.only': 'contactsType must be one of: personal, home, or work.',
      'string.min': 'contactsType should have at least {#limit} characters',
      'string.max': 'contactsType name should have at most {#limit} characters',
      'string.base': 'contactsType must be a string.',
      'string.empty': 'contactsType cannot be empty.',
    }),
});
