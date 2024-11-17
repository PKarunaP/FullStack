const express = require('express');
const cors = require('cors');
const users = require('./routes/user.router');
const booklist = require('./routes/booklist.router');

const app = express();

app.use(express.json());
app.use(cors());

//ROUTES: User
app.use('/', users);
app.use('/register', users);
app.use('/login', users);
app.use('/users', users);
app.use('/forgot-password', users);
app.use('/reset-password', users);

//ROUTES: Book-listing
app.use('/books-listing', booklist);

app.listen(80, () => {
    console.log('Server listening on port 80');
});