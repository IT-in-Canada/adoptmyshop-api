const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Database
if (!process.env.MONGO_ATLAS_URL) throw new Error("Please check the Readme file and setup your environment")
mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwtCheck = require('./middleware/auth0');

//CORS
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

//Routes
const shopRoutes = require("./routes/shops");
const nomineesRoutes = require("./routes/nominees");
app.use("/shops", jwtCheck, shopRoutes);
app.use("/nominees", jwtCheck, nomineesRoutes);

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