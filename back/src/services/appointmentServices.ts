import AppointmentDto from '../dto/AppointmentDto';
import AppointmentRepository from '../repositories/AppointmentRepository';
import UserRepository from '../repositories/UserRepository';
import { Appointment } from '../entities/Appointment';
import { StatusAppoint } from '../enums/StatusAppoint';

const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentRepository.find({
        relations: {
            user: true,
        },
    });
    return appointments;
};

const getAppointmentByIdService = async (
    id: number
): Promise<Appointment | null > => {
    return await AppointmentRepository.findOne({
        where: { id },
        relations: {user: true}
    });
};

const scheduleAppointmentService = async (
    appointmentData: AppointmentDto
): Promise<Appointment | null> => {
    const { date, time, doctor, userId } = appointmentData;

    const foundUser = await UserRepository.findOneBy({ id: userId });
    if (foundUser) {
        const newAppointment: Appointment = await AppointmentRepository.create({
            date,
            time,
            doctor,
            user: foundUser,
        });

        await AppointmentRepository.save(newAppointment);

        return newAppointment;
    }
    return null;
};

const cancelAppointmentService = async (
   id: number
): Promise<Appointment | null > => {
    const appointmentCancelled = await getAppointmentByIdService(id);

    if (appointmentCancelled) { const now = new Date();
        const appointmentDate = new Date(appointmentCancelled.date);

        const timeDifference = appointmentDate.getTime() - now.getTime();
        const hoursDifference = timeDifference / (1000 * 60 * 60); 

        if (hoursDifference < 24) {
            return null; 
        }
        appointmentCancelled.status = StatusAppoint.CANCELLED;
        await AppointmentRepository.save(appointmentCancelled);
        
        return appointmentCancelled;
    } else {
        return null; 
    }
};

export {
    getAllAppointmentsService,
    getAppointmentByIdService,
    scheduleAppointmentService,
    cancelAppointmentService,
};
