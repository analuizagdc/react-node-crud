
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recycle',
});

connection.connect((err) => {
    if(err) {
        console.log('Error connecting to database');
        return;
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;