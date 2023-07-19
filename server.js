// import required packages
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');

// allow the app to use JSON data and cors
app.use(express.json());
app.use(cors({
    origin: '*', // allow all origins
    methods: ['GET', 'POST'], // allow GET and POST requests
    allowedHeaders: ['Content-Type', 'Authorization'] // allow these headers
}));


// define a GET route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to our website!');
});


// connect to MongoDB database
mongoose.connect('mongodb+srv://admin:testing123@cluster0.qy7ocjr.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// define the User model using the schema
const User = mongoose.model('User', userSchema);

// define the registration route
app.post('/register', async (req, res) => {
    // get the username and password from the request body
    const { username, password } = req.body;

    // hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // create a new user with the username and hashed password
        const user = new User({ username, password: hashedPassword });
        // save the user to the database
        await user.save();
        // send a success response
        res.status(201).send('User created successfully');
    } catch (error) {
        // if an error occurs, send an error response
        res.status(500).send('Error registering new user');
    }
});

// define the login route
app.post('/login', async (req, res) => {
    // get the username and password from the request body
    const { username, password } = req.body;

    // find the user with the provided username
    const user = await User.findOne({ username });

    // if no user is found, send an error response
    if (!user) return res.status(401).send('Incorrect username');

    // compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    // if the password is invalid, send an error response
    if (!validPassword) return res.status(401).send('Incorrect password');

    // if the username and password are valid, generate a JWT token
    const token = jwt.sign({ _id: user._id }, 'lQieDNEBSVzd4n8kVtmo7yyxNv49Gazs');
    // send the token in the response header
    res.header('auth-token', token).send(token);
});

// start the server
app.listen(3000, () => console.log('Server started'));
