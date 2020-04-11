
/**
 * routes regarding user procedures
 * */

const express         = require("express");
const router          = express.Router();
const userController  = require("../controllers/user.js");
// const checkAuth       = require("../middleware/auth0.js");


// route to add new user
// probably it's going to send data to auth0
router.post("/add", userController.addUser);


// route to user's login
// probably it's going to send data to auth0
router.post("/login", userController.login);


/**
 * temporary route to test a protected one
 */
// router.get("/protectedRoute", checkAuth, userController.protectedMethod);


module.exports = router;
