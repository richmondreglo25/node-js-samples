import express from 'express';
import userController from "../controllers/userController.js";

const router = express.Router();
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/add', userController.addUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

export default router;