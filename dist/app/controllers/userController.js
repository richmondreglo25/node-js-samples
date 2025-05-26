"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const User = models_1.default.users;
exports.default = {
    getUsers: async (req, res) => {
        const fetchDeleted = req.query.fetchDeleted;
        let _where = {};
        if (!(fetchDeleted === 'true')) {
            _where.where = {};
            _where.where.status = true;
        }
        const users = await User.findAll(_where);
        res.status(200).send(users);
    },
    getUser: async (req, res) => {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(user ? 200 : 404).send(user);
    },
    addUser: async (req, res) => {
        const data = {
            status: true,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        };
        const user = await User.create(data);
        res.status(201).send(user);
    },
    updateUser: async (req, res) => {
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname
        };
        const user = await User.update(data, {
            where: {
                id: req.params.id
            }
        });
        res.status(user ? 204 : 404);
        res.end();
    },
    deleteUser: async (req, res) => {
        const data = {
            status: false
        };
        const user = await User.update(data, {
            where: {
                id: req.params.id
            }
        });
        res.status(user ? 204 : 404);
        res.end();
    }
};
