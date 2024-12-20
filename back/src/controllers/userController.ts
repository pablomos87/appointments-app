import { Request, Response } from 'express';
import {
  getUsersService,
  createUserService,
  getUserByIdService,
} from '../services/userServices';
import { User } from '../entities/User';
import { checkCredentialService } from '../services/credentialService';

const getAllUsers = async (req: Request, res: Response): Promise <Response> => {
  try {
    const users: User[] = await getUsersService();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error })
  }
};

const getUserById = async (req: Request, res: Response): Promise <Response> => {
  try {
    const { id } = req.params;
    const foundUser: User | null = await getUserByIdService(Number(id));
    return foundUser
      ? res.status(200).json(foundUser)
      : res.status(404).json({ message: 'No existe un usuario con ese ID' })
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error })
  }
};


const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name,  username, password, email, birthdate, nDni } = req.body;

    const newUser: User = await createUserService({
      name,
      username,
      password,
      email,
      birthdate,
      nDni
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error })
  }
};

const userLogin = async (req: Request, res: Response):Promise <Response> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ error: 'Datos incompletos' })

    const loginUser = await checkCredentialService({ username, password });

    return loginUser ? res.status(200).json({ login: true, loginUser })
      : res.status(400).json({ login: false })
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error })
  }
};

export { getAllUsers, getUserById, createUser, userLogin };