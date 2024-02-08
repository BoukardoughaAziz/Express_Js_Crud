const joi = require('@hapi/joi');


const  ValidateObjectSchema = (reqBody , UserSchema) => {
    const result = joi.validate(reqBody , UserSchema);
    console.log("joi schema validation result :" , result)
}

module.exports.ValidateBody=(schema)=>{
    return(req,res,next)=>{
        ValidateObjectSchema(req.body , schema)
        next()
    }

} 