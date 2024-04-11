const Joi = require('joi');

const schemas = {
  signup: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    role: Joi.string().valid('ADMIN', 'STAFF', 'MANAGER')
  }),

  login: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    role: Joi.string().valid('ADMIN', 'STAFF', 'MANAGER')
  }),
};

module.exports = schemas;
