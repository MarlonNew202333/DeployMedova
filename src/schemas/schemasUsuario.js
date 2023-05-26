const Joi = require('joi');

const schemasUsuario = Joi.object({
  nombre: Joi.string()
    .min(1)
    .max(112)
    .regex(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      'string.base': 'El nombre debe ser una cadena de caracteres.',
      'string.min': 'El nombre debe tener al menos 1 carácter.',
      'string.max': 'El nombre debe tener como máximo 112 caracteres.',
      'string.pattern.base': 'El nombre solo puede contener letras y espacios.',
      'any.required': 'El nombre es un campo obligatorio.'
    }),

  codigo: Joi.number()
    .integer()
    .min(1150000)
    .max(11599999)
    .required()
    .messages({
      'number.base': 'El código debe ser un número.',
      'number.integer': 'El código debe ser un número entero.',
      'number.min': 'El código debe ser como mínimo 1150000.',
      'number.max': 'El código debe ser como máximo 11599999.',
      'any.required': 'El código es un campo obligatorio.'
    }),

  username: Joi.string()
    .required()
    .messages({
      'any.required': 'El nombre de usuario es un campo obligatorio.'
    }),

  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.base': 'La contraseña debe ser una cadena de caracteres.',
      'string.min': 'La contraseña debe tener al menos 8 caracteres.',
      'any.required': 'La contraseña es un campo obligatorio.'
    }),

  ppassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'La confirmación de contraseña debe ser igual a la contraseña ingresada.',
      'any.required': 'La confirmación de contraseña es un campo obligatorio.'
    }),

  rol: Joi.number()
    .valid(0, 1)
    .required()
    .messages({
      'number.base': 'El rol debe ser un número.',
      'any.only': 'El rol debe ser 0 o 1.',
      'any.required': 'El rol es un campo obligatorio.'
    })
});

module.exports = schemasUsuario;
