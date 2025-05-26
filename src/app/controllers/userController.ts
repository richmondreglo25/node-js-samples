import db from '../models';
import { Request, Response } from 'express';

const User = db.users;

interface UserType {
    id?: number;
    firstname: string;
    lastname: string;
    status?: boolean;
}

export default {
    getUsers: async (req: Request, res: Response) => {
        const fetchDeleted = req.query.fetchDeleted;
        let _where: any = {};

        if (!(fetchDeleted === 'true')) {
            _where.where = {};
            _where.where.status = true;
        }

        const users = await User.findAll(_where);
        res.status(200).send(users);
    },
    getUser: async (req: Request, res: Response) => {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        res.status(user ? 200 : 404).send(user);
    },
    addUser: async (req: Request, res: Response) => {
        const data: UserType = {
            status: true,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        };

        const user = await User.create(data);
        res.status(201).send(user);
    },
    updateUser: async (req: Request, res: Response) => {
        const data: Partial<UserType> = {
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
    deleteUser: async (req: Request, res: Response) => {
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