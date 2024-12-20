import styles from './MyAppointments.module.css';
import Appointment from '../Appointment/Appointment'
import { useSelector } from 'react-redux';
import { useUserAppointmentsQuery } from '../../redux/features/users/usersApi';
import { useCancelAppointmentMutation } from '../../redux/features/appointments/appointmentsApi';

const MyAppointments = () => {

    const [cancelAppointment] = useCancelAppointmentMutation();
    const user = useSelector((state) => state.usersSlice.user.id);
    const {
        data: dataByUserId,
        isLoading: isLoadingUserById,
        error: errorUserById,
        refetch
    } = useUserAppointmentsQuery(Number(user));

    const sortedAppointments = dataByUserId?.appointments
    ? [...dataByUserId.appointments].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    : [];

    const handleDeleteAppointment = async (appointmentId) => {
        const confirmCancel = window.confirm('¿Estás seguro de que deseas cancelar esta cita?');
        try {
            const result = await cancelAppointment(Number(appointmentId)).unwrap();
            if (result.error) {
                alert(result.error);
            } else {
                refetch();
                alert('Turno cancelado con éxito');
            }
        } catch (error) {
            console.error('Error en la cancelación:', error);
            alert('No se pudo cancelar el turno. Puede ser que esté dentro de las 24 horas previas.');
        }
    }

    return (
        <div className={styles.listContainer}>
            <h2>TURNOS </h2>
        {isLoadingUserById
        ? 'Cargando turnos ...'
        : errorUserById
        ? 'Error al cargar os turnos'
        : (
            <table className={styles.appointmentTable}>
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Hora</th>
                        <th>Médico especialista</th>
                        <th>Estado</th>
                        <th>Cancelación</th>
                    </tr>
                </thead>

                <Appointment
                    appointments={sortedAppointments}
                    handleDeleteAppointment={handleDeleteAppointment}
                />
            </table>
            )}
        </div>
    );
};
export default MyAppointments;
