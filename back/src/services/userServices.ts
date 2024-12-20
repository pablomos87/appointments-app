import UserDto from '../dto/UserDto';
import {
  createCredentialService,
} from './credentialService';
import UserRepository from '../repositories/UserRepository';
import { User } from '../entities/User';

const getUsersService = async (): Promise<User[]> => {
  const users = await UserRepository.find({
    relations: {
      appointments: true
    },
  });
  return users;
};

const createUserService = async (userData: UserDto): Promise<User> => {
  const { name, username, password, email, birthdate, nDni } = userData;
 const newCredentials = await createCredentialService({
    username,
    password
  });
  
  const newUser = UserRepository.create({
    name,
    email,
    birthdate,
    nDni,
    credential: newCredentials,
  });
  newCredentials.user = newUser;

  await UserRepository.save(newUser);
  return newUser;
};

const getUserByIdService = async (id: number): Promise<User | null> => {
  return await UserRepository.findOne({ 
    where: { id },
    relations: {appointments: true}
});
};

export {getUsersService, createUserService, getUserByIdService};
