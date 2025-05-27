import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';

// Define UserType interface if not imported from elsewhere
interface UserType {
    status: boolean;
    firstname: string;
    lastname: string;
    nickname: string;
    email: string;
}

export default {
    getUsers: async (req: Request, res: Response) => {
        const fetchDeleted = req.query.fetchDeleted;
        let where: any = {};
        if (!(fetchDeleted === 'true')) {
            where.status = true;
        }
        const users = await userRepository.findAll({ where });
        res.status(200).send(users);
    },
    getUser: async (req: Request, res: Response) => {
        const user = await userRepository.findById(Number(req.params.id));
        res.status(user ? 200 : 404).send(user);
    },
    addUser: async (req: Request, res: Response) => {
        const data: UserType = {
            status: true,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            nickname: req.body.nickname,
            email: req.body.email
        };
        const user = await userRepository.create(data);
        res.status(201).send(user);
    },
    updateUser: async (req: Request, res: Response) => {
        const data: Partial<UserType> = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            nickname: req.body.nickname,
            email: req.body.email
        };
        const affected = await userRepository.update(Number(req.params.id), data);
        res.status(affected ? 204 : 404);
        res.end();
    },
    deleteUser: async (req: Request, res: Response) => {
        const affected = await userRepository.update(Number(req.params.id), { status: false });
        res.status(affected ? 204 : 404);
        res.end();
    }
};