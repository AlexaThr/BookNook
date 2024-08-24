const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const bookController = require('./controllers/bookController');

// Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../bundle')));

// Define routes
// app.get('/login', cookieController.setCookie, (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/login.html'));
// });

// app.get('/signup', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/signup.html'));
// });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../bundle/index.html'))
})

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../bundle/index.html'))
})

app.get('/signup', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../bundle/index.html'));
})

app.post('/signup', userController.createUser, (req, res) => {
  res.status(200).redirect('/');
});

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.status(200).redirect('/home');
});

// app.get('*', 
//     sessionController.isLoggedIn, 
//     (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../bundle/index.html'));
// });

app.get('/home', 
    sessionController.isLoggedIn, 
    (req, res) => {
        res.sendFile(path.resolve(__dirname, '../bundle/index.html'));
});

app.get('/reading-list',
    sessionController.isLoggedIn, 
    bookController.getUserReadingList,
    (req, res) => {
        res.status(200).json(res.locals.toRead)})

app.post('/addToReadingList', 
    bookController.addBookToReadingList,
    (req, res) => {
        res.status(200).json(res.locals.bookInfo);
    });


// Handle 404 Not Found errors
// app.use('*', (req, res) => {
//   res.status(404).send('Not Found');
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
