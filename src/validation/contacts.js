import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().min(8).max(15).required(),
  email: Joi.string().email(),
  isFavourit: Joi.boolean(),
  contactsType: Joi.string().valid('personal', 'home', 'work').required(),
});
