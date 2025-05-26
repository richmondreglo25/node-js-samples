"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const router = (0, express_1.Router)();
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
router.get('/', userController_1.default.getUsers);
router.get('/:id', userController_1.default.getUser);
router.post('/add', userController_1.default.addUser);
router.put('/update/:id', userController_1.default.updateUser);
router.delete('/delete/:id', userController_1.default.deleteUser);
exports.default = router;
