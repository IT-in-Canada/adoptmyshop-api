
/**
 * routes regarding user procedures
 * */

const express         = require("express");
const router          = express.Router();
const userController  = require("../controllers/user.js");


// route to add new user
// probably it's going to send data to auth0
router.post("/signup", userController.signup);


// route to user's login
// probably it's going to send data to auth0
router.post("/login", userController.login);



module.exports = router;
