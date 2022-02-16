const config = require('./config');
const db = require('diskdb');

module.exports = {
    connect: function () {
        db.connect(config.db.path, [config.db.name]);
        console.log("Successfully connected to diskdb.");
        return db;
    }
  };