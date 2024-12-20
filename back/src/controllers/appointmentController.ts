import { Request, Response } from 'express';
import {
    cancelAppointmentService,
    getAllAppointmentsService,
    getAppointmentByIdService,
    scheduleAppointmentService,
} from '../services/appointmentServices';
import { Appointment } from '../entities/Appointment';

const getAllAppointments = async (req: Request, res: Response): Promise<Response> => {
    try {
        const appointments: Appointment[] = await getAllAppointmentsService();
        return res.status(200).json(appointments);
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

const getAppointmentById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const appointmentById: Appointment | null =
            await getAppointmentByIdService(+id);
        return appointmentById ? res.status(200).json(appointmentById)
            : res.status(400).json({ error: 'No existe turno con ese ID' })
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

const scheduleNewAppointment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date, time, doctor, userId } = req.body;
        if (!date || !time || !doctor || !userId)
            return res.status(400).json({ error: 'Faltan datos' });

        const newAppointment = await scheduleAppointmentService({
            date,
            time,
            doctor,
            userId,
        });

        return newAppointment ? res.status(201).json({ message: 'Turno creado con éxito', appointment: newAppointment })
            : res.status(400).json({ error: 'El usuario no existe' })
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

const cancelAppointment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const appointmentCancelled = await cancelAppointmentService(+id);
        return appointmentCancelled 
            ? res.status(200).json({ message: 'Turno cancelado', appointmentCancelled })
            : res.status(400).json({ error: 'No se puede cancelar el turno con menos de 24 horas de antelación o no existe el turno.' });
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

export {
    getAllAppointments,
    getAppointmentById,
    scheduleNewAppointment,
    cancelAppointment,
};
