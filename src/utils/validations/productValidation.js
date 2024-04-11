const Joi = require("joi");

const schemas = {
  create: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    inventoryCount: Joi.number().required(),
  }),

  update: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    inventoryCount: Joi.number().required(),
  }),
};
module.exports = schemas;
