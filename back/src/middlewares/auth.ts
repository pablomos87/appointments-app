import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    if (token === 'autenticado') next();
    else res.status(400).send({ message: 'Error. Falta autenticación' });
};


const validateUserData = (req: Request, res: Response, next: NextFunction): Response | void => {
    const { username, password, name, email, birthdate, nDni } = req.body;
  
    if (
      !username || typeof username !== 'string' ||
      !password || typeof password !== 'string' ||
      !name || typeof name !== 'string' ||
      !email || !email.includes('@') ||
      !birthdate || isNaN(new Date(birthdate).getTime()) 
    ) {
      console.log('Datos inválidos o incompletos');
      return res.status(400).json({ error: 'Datos inválidos o incompletos' })
      ;
    }

    next();
  };
  
  export { auth, validateUserData};
