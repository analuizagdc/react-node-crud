const db = require('../config/database');

const Collection = {
    create: (date, route, materials, wieght, vehicle, documents, createdBy, callback) => {
        const sql = 'INSERT INTO collections (date, route, materials, wieght, vehicle, documents, createdBy) VALUES (?, ?, ?)';
        db.query(sql, [date, route, materials, wieght, vehicle, documents, createdBy], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },

    findByDate: (date, callback) => {
        const sql = 'SELECT * FROM collections WHERE date = ?';
        db.query(sql, [date], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },


    update: (date, route, materials, weight, vehicle, documents, createdBy, callback) => {
        const sql = `
            UPDATE collections 
            SET date = ?, route = ?, materials = ?, weight = ?, vehicle = ?, documents = ?, createdBy = ? 
            WHERE id = ?
        `;
        db.query(sql, [date, route, materials, weight, vehicle, documents, createdBy], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    },

    delete: (date, callback) => {
        const sql = 'DELETE FROM collections WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
};

module.exports = Collection;
