const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController')
const joiSchemaValidation = require('../Middleware/joiSchemaValidation')
const UserSchema = require('../ApiSchema/UserSchema')



router.post("/",
    joiSchemaValidation.ValidateBody(UserSchema.CreateUserSchema),
    UserController.AddUser
)

router.get("/:id",
    UserController.GetUser
)
router.get("/",
UserController.GetUsers
)

module.exports = router;
