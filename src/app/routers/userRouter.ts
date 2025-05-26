import { Request, Response, Router } from 'express';
import userController from "../controllers/userController";

const router: Router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *     firstName:
 *      type: string
 *      description: First name
 *     lastName:
 *      type: string
 *      description: Last name
 *     nickname:
 *      type: string
 *      description: Nickname
 *     email:
 *      type: string
 *      description: Email address
 *    required:
 *     - firstName
 *     - lastName
 *     - nickname
 *     - email
 *    example:
 *     firstname: Richmond
 *     lastname: Reglo
 *     nickname: rich
 *     email: richmond@example.com
 */

/**
 * @swagger
 * /api/users/:
 *  get:
 *   summary: Returns the list of users
 *   tags: [Users]
 *   responses:
 *    200:
 *     description: User list
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 */
router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/add', userController.addUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

export default router;