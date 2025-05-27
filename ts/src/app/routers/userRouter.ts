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
 *      minLength: 1
 *     email:
 *      type: string
 *      description: Email address
 *      minLength: 1
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

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *   summary: Get a user by ID
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: User ID
 *   responses:
 *    200:
 *     description: User found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 *    404:
 *     description: User not found
 */
router.get('/:id', userController.getUser);

/**
 * @swagger
 * /api/users/add:
 *  post:
 *   summary: Add a new user
 *   tags: [Users]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *     description: User created
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 */
router.post('/add', userController.addUser);

/**
 * @swagger
 * /api/users/update/{id}:
 *  put:
 *   summary: Update a user
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: User ID
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    204:
 *     description: User updated
 *    404:
 *     description: User not found
 */
router.put('/update/:id', userController.updateUser);

/**
 * @swagger
 * /api/users/delete/{id}:
 *  delete:
 *   summary: Delete a user
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: User ID
 *   responses:
 *    204:
 *     description: User deleted
 *    404:
 *     description: User not found
 */
router.delete('/delete/:id', userController.deleteUser);

export default router;