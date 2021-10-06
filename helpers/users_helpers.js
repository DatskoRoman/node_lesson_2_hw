const fs = require('fs');

const util = require('util');

const readBasePromise = util.promisify(fs.readFile);

const writeBasePromise = util.promisify(fs.writeFile);

const readDataBase = (db) => readBasePromise(db);

const writeDataBase= (db ,data) => writeBasePromise(db, JSON.stringify(data));

module.exports = {readDataBase, writeDataBase};