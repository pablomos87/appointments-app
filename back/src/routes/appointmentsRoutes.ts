import { Router } from 'express';
import {
    cancelAppointment,
    getAllAppointments,
    getAppointmentById,
    scheduleNewAppointment,
} from '../controllers/appointmentController';
import validateAppointment from '../middlewares/validateAppointment';

const appointmentsRoutes: Router = Router();

appointmentsRoutes.get('/', getAllAppointments);

appointmentsRoutes.get('/:id', getAppointmentById);

appointmentsRoutes.post('/schedule/',validateAppointment, scheduleNewAppointment);

appointmentsRoutes.put('/cancel/:id', cancelAppointment);

export default appointmentsRoutes;
