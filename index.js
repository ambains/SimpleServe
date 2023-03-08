const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'xxx',
    password: 'xxxx',
    database: 'library'
});

connection.connect();


app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (error, results) => {
        if (error) {
            console.error('Error fetching books:', error.stack);
            res.status(500).send('Error fetching books');
            return;
        }

        res.send(results);
    });
});

app.post('/books', (req, res) => {
    const book = req.body;

    connection.query('INSERT INTO books (title, author, description, image_url) VALUES (?, ?, ?, ?)',
        [book.title, book.author, book.description, book.image_url],
        (error, result) => {
            if (error) {
                console.error('Error adding book:', error.stack);
                res.status(500).send('Error adding book');
                return;
            }

            res.send('Book added successfully');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
