import { Request, Response } from 'express';
import { userService } from '../services/userService';

export default {
    getUsers: async (req: Request, res: Response) => {
        const fetchDeleted = req.query.fetchDeleted === 'true';
        const users = await userService.getUsers(fetchDeleted);
        res.status(200).send(users);
    },
    getUser: async (req: Request, res: Response) => {
        const user = await userService.getUserById(Number(req.params.id));
        res.status(user ? 200 : 404).send(user);
    },
    addUser: async (req: Request, res: Response) => {
        const data = req.body;
        const user = await userService.addUser(data);
        res.status(201).send(user);
    },
    updateUser: async (req: Request, res: Response) => {
        const data = req.body;
        const affected = await userService.updateUser(Number(req.params.id), data);
        res.status(affected ? 204 : 404).end();
    },
    deleteUser: async (req: Request, res: Response) => {
        const affected = await userService.deleteUser(Number(req.params.id));
        res.status(affected ? 204 : 404).end();
    }
};