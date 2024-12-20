import CredentialRepository from '../repositories/CredentialRepository';
import bcrypt from 'bcrypt';
import { User } from '../entities/User';
import Credential from '../entities/Credential';
import CredentialDto from '../dto/CredentialDto';

const saltRounds = 10;

const createCredentialService = async (credentials: CredentialDto): Promise<Credential> => {
    const { username, password } = credentials;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newCredentials = await CredentialRepository.create({
        username,
        password: hashedPassword,
    });

    await CredentialRepository.save(newCredentials);

    return newCredentials;
};

const checkCredentialService = async (credentials: CredentialDto): Promise<User | null> => {
    const { username, password } = credentials;
    const foundCredentials: Credential | null = await CredentialRepository.findOne({
        where: { username },
        relations: ['user'],
    })
    if (!foundCredentials) return null;

    const isPasswordMatch = await bcrypt.compare(password, foundCredentials.password);

    if (isPasswordMatch) {
        return foundCredentials.user;
    } else {
        return null;
    }
};

export { createCredentialService, checkCredentialService };
