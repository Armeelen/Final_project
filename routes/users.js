//routes import controller
const users = require('../controller/users')

const express = require('express')
const router = express.Router()//create route object

router.post('/register',users.register);
router.post('//login',users.login);
// router.post('/verifyToken',users.verifyToken);
// router.post('/forgotPassword',users.forgotPassword);
// router.post('/resetPassword',users.resetPassword);


module.exports=router;