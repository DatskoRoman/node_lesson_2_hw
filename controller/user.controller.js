const path = require('path');
const db = path.join(__dirname, '../', 'dataBase', 'users.json');
const  {readDataBase, writeDataBase} = require('../helpers/users_helpers');

module.exports = {
    getUsers: async (req, res) => {
        const users = await readDataBase(db);
        res.json(JSON.parse(users));
    },

    getUserById: async (req, res) => {
        const {user_id} = req.params;
        const users = await readDataBase(db);
        res.json(JSON.parse(users).find(item => item.id === +user_id));
    },

    createUser: async (req, res) => {
        const users =  JSON.parse(await readDataBase(db));
        users.push({...req.body, id: users[users.length - 1].id + 1});
        await writeDataBase(db, users);
        res.json(users);
    },

    deleteUserById: async (req, res) =>{
        const {user_id} = req.params;
        const users = await readDataBase(db);
        const user = JSON.parse(users).filter(item => item.id !== +user_id);
        await writeDataBase(db, user);
        res.json(user);
    },
};