const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/user');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const ioiha = require('./routes/api/ioiha');


// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config mLab
// const db = require('./config/keys').mongoURI;

// DB Config local
const db = 'mongodb://localhost/audiologydev';

// Connect to MongDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/ioiha', ioiha);


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port: ${port}`));
