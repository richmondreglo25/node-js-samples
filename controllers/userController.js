import db from '../models/index.js';

// Create User model.
const User = db.users;

const getUsers = async (req, res) => {
    const fetchDeleted = req.query.fetchDeleted;
    let _where = {};

    if (!(fetchDeleted === true || fetchDeleted === 'true')) {
        _where.where = {};
        _where.where.status = true;
    } 

    const users = await User.findAll(_where);
    res.status(200).send(users);
}

const getUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    res.status(user ? 200 : 404).send(user);
}

const addUser = async (req, res) => {
    const payload = {
        status: true,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    const user = await User.create(payload);
    res.status(201).send(user);
}

const updateUser = async (req, res) => {
    const payload = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    const user = await User.update(payload, {
        where: {
            id: req.params.id
        }
    });

    // HTTP 200 (Unsure), HTTP 204 (Record updated).
    // HTTP 204, returns nothing.
    res.status(user ? 204 : 404);
    res.end();
}

const deleteUser = async (req, res) => {
    const payload = {
        status: false
    };

    const user = await User.update(payload, {
        where: {
            id: req.params.id
        }
    });

    // HTTP 200 (Unsure), HTTP 204 (Record deleted).
    // HTTP 204, returns nothing.
    res.status(user ? 204 : 404);
    res.end();
}

export default {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}