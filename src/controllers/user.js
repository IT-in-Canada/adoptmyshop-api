/**
 * user's controllers
 */

// user's method to add a new user
 const signup = async(req, res) => {
   const data = req.body;
  return res.send({
    message: "signup",
    data
  });
}


// user's method to login
const login = async(req, res) => {
  const data = req.body;
  return res.send({
    message: "login",
    data
  });
}



module.exports = {
  signup,
  login
};
