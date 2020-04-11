/**
 * user's controllers
 */


// user's method to add a new user
 const addUser = async(req, res) => {
   const data = req.body;
  return res.json({
    message: "this is addUser page",
    data
  });
}


// user's method to login
const login = async(req, res) => {
  const data = req.body;
  /**
   * The idea is to get user/password from frontend app and send to Auth0 to check whether the user/password are valid. 
   *  If so, backend returns a JWT to the frontend.
   *  Each time a user needs to do something in a protected route, they send this token as well.
   * 
   * Issue: Still did not find a way to do it using Auth0 APIs.
   */

  return res.json({
    message: "login success",
    data  // just to be illustrative
    // JWT
  });
}


// // this is a controller protected by authorization process
// const protectedMethod = (req, res) => {
//   console.log("YEAHHHH");
//   return res.send({
//     message: "YEAHHH, protected route WORKS!"
//   });
// };



module.exports = {
  addUser,
  login,
  // protectedMethod
};
