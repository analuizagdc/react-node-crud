const db = require('../config/database');

const Material = {
    create: (type, subtype, value, callback) => {
        const sql = 'INSERT INTO materials (type, subtype, value) VALUES (?, ?, ?)';
        db.query(sql, [type, subtype, value], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    }, 

    findById: (id, callback) => {
        const sql = 'SELECT * FROM materials WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    }, 

    update: (type, subtype, value, callback) => {
        const sql = `
            UPDATE materials 
            SET type = ?, subtype = ?, value = ?,
        `;
        db.query(sql, [type, subtype, value], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM materials WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
};

module.exports = Material;
