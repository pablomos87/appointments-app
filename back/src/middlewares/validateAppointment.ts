import { Request, Response, NextFunction } from 'express';

const validateAppointment = (req: Request, res: Response, next: NextFunction) => {
    const { date, time } = req.body;

    const appointmentDate = new Date(date);
    const currentDate = new Date();

    if (isNaN(appointmentDate.getTime())) {
        return res.status(400).json({ error: 'Fecha inválida' });
    }

    const maxFutureDate = new Date();
    maxFutureDate.setDate(currentDate.getDate() + 14);

    if (appointmentDate < currentDate || appointmentDate > maxFutureDate) {
        return res.status(400).json({ error: 'La fecha debe estar dentro de las próximas dos semanas' });
    }

    const dayOfWeek = appointmentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return res.status(400).json({ error: 'La fecha debe ser entre lunes y viernes' });
    }

    const [hours, minutes] = time.split(':').map(Number);
    if (hours < 10 || hours >= 18 || isNaN(hours) || isNaN(minutes)) {
        return res.status(400).json({ error: 'El horario debe ser entre las 10:00 y las 18:00' });
    }

    next();
};

export default validateAppointment;
