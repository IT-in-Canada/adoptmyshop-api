const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Routes
const shopRoutes = require("./routes/shops");
const userRoutes = require("./routes/user.js");


// const jwt   = require('express-jwt');
// const jwks  = require('jwks-rsa');
// const jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-tonyk.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'https://initial-api/api',
//   issuer: 'https://dev-tonyk.auth0.com/',
//   algorithms: ['RS256']
// });



if (!process.env.MONGO_ATLAS_URL) throw new Error("Please check the Readme file and setup your environment")
mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    //TODO: Make this only to allow requests from *.adoptmyshop.org
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//Here we load out routes
app.get('/', (req, res) => {
    res.send('Hello from index')
})
app.use("/shops", shopRoutes);


// it calls user routes
app.use("/user", userRoutes);

// // it is a protected route example, which supposed to act after authentication
// app.get("/protectedRoute", jwtCheck, (req, res) => res.json({ 
//                                             message: "YEAH, you are authenticated!!!!!"
//                                         }));


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;