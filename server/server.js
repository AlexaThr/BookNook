const path = require('path');
const express = require('express');
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

const userController = require("./controllers/userController");
const cookieController = require("./controllers/cookieController");
const sessionController = require("./controllers/sessionController");

const uri = '***REMOVED***/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


app.get('/login', cookieController.setCookie, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/login.html'))
})



app.get("/signup", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/signup.html"));
});

app.post(
    "/signup", 
    userController.createUser, 
    cookieController.setSSIDCookie,
    sessionController.startSession,
    (req, res) => {
        res.status(200).redirect("/home");
    }
);

app.post(
    "/login",
    userController.verifyUser,
    cookieController.setSSIDCookie,
    sessionController.startSession,
    (req, res) => {
        res.status(200).redirect("/home");
    }
);

app.get(
    "/home", sessionController.isLoggedIn, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../index.html'));
    }
)

app.use("*", (req, res) => {
    res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
})
    
app.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});

module.exports = app;