const db = require('../config/database');

const User = {
    create: (username, password, role, callback) => {
        const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
        db.query(sql, [username, password, role], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },
    findByUsername: (username, callback) => {
        const sql = 'SELECT * FROM users WHERE username = ?';
        db.query(sql, [username], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },

    update: (username, password, role, callback) => {
        const sql = `
            UPDATE users
            SET username = ?, password = ?, role = ?,
        `;
        db.query(sql, [username, password, role], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },

    delete: (username, callback) => {
        const sql = 'DELETE FROM users WHERE username = ?';
        db.query(sql, [username], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
};
module.exports = User;