import styles from './Appointment.module.css';

const Appointment = ({ appointments, handleDeleteAppointment }) => {
  return (
    <>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <tr className={styles.appointmentRow} key={appointment.id}>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.doctor}</td>
            <td
              className={
                appointment.status === 'cancelled'
                  ? styles.cancelled
                  : styles.active
              }
            >
              {appointment.status === 'cancelled'
                ? 'Cancelado'
                : appointment.status === 'active'
                ? 'Activo'
                : appointment.status}
            </td>
            <td>
              <button
                className={styles.cancelButton}
                onClick={() => handleDeleteAppointment(appointment.id)}
              >
                Cancelar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className='styles.AppointmentRow' colSpan='5'>
            No hay citas disponibles
          </td>
        </tr>
      )}
    </>
  );
};
export default Appointment;
