import { Router } from 'express';
import NewAppointmentEmail from '../controllers/emailController';


const emailRoutes: Router = Router();

emailRoutes.post('/', NewAppointmentEmail);

export default emailRoutes;