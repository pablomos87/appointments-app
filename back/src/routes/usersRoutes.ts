import { Router } from 'express';
import {
    createUser,
    getUserById,
    getAllUsers,
    userLogin,
} from '../controllers/userController';
import { validateUserData } from '../middlewares/auth';

const usersRoutes: Router = Router();

usersRoutes.get('/', getAllUsers);

usersRoutes.get('/:id', getUserById);

usersRoutes.post('/register', validateUserData, createUser);

usersRoutes.post('/login', userLogin);



export default usersRoutes;
