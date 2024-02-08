const joi = require('@hapi/joi')

module.exports.CreateUserSchema = joi.object().keys({
    FirstName : joi.string().required(),
    LastName : joi.string().required()
});
