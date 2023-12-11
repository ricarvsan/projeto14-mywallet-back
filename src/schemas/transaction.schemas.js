import Joi from 'joi'

export const itemSchema = Joi.object({
  type: Joi.string().valid('entrada', 'saida').required(),
  value: Joi.number().precision(2).required(),
  description: Joi.string().required(),
})
