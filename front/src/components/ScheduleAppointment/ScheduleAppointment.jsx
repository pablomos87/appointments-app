import { useState } from 'react';
import styles from './ScheduleAppointment.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { useUserAppointmentsQuery } from '../../redux/features/users/usersApi';
import { useScheduleAppointmentMutation } from '../../redux/features/appointments/appointmentsApi';
import { MY_APPOINTMENTS } from '../../helpers/pathsRoutes';
import { validateScheduleAppointmentForm } from '../../helpers/validateScheduleAppointmentForm';
import { useSendEmailMutation } from '../../redux/features/email/emailApi';


const ScheduleAppointment = () => {
    const navigate=useNavigate();
    const [scheduleAppointment] = useScheduleAppointmentMutation();
    const [sendEmail] = useSendEmailMutation();
    const user = useSelector((state) => state.usersSlice.user);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        doctor:'',
        userId: user?.id,
        email: user?.email,
        name: user?.name
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const {refetch} = useUserAppointmentsQuery(user.id);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors(validateScheduleAppointmentForm({
            ...formData,
            [name]: value
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (!formData.date || !formData.time || !formData.doctor) {
            alert('Por favor, completa todos los campos antes de enviar el formulario.');
            return;
        }
        
        if (Object.keys(errors).length > 0) {
            alert('Por favor, corrige los errores antes de enviar el formulario');
            return;
        }
    
        try {
            await scheduleAppointment(formData);
            alert('Turno creado con éxito');
            refetch();
            navigate(MY_APPOINTMENTS);
            await sendEmail({
                user: {
                    email: formData.email, 
                    name: formData.name,   
                    date: formData.date,   
                    time: formData.time 
                }
            });
            
        }
        catch (error) {   
            console.error(error);
    };
}

const handleBlur = (event) => {
    const {name} = event.target
    setTouched ({
        ...formData,
        [name]: true
    });
};

    return (
        <form className={styles.scheduleForm} onSubmit={handleOnSubmit}>
            <h2>TURNOS</h2>
            <label className={styles.scheduleLabel} htmlFor='date'> Fecha </label>
            <input
                className={styles.scheduleInput}
                type='date'
                value={formData.date}
                name='date'
                placeholder='Fecha'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.date && errors.date && <p className={styles.errorMessage}>{errors.date}</p>}

            <label className={styles.scheduleLabel} htmlFor='time'> Horario </label>
            <input
                className={styles.scheduleInput}
                type='time'
                value={formData.time}
                name='time'
                placeholder='Horario'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.time && errors.time && <p className={styles.errorMessage}>{errors.time}</p>}

              <label className={styles.scheduleLabel} htmlFor="doctor">Médico especialista</label>
            <select 
                className={styles.scheduleSelect} 
                name="doctor" 
                value={formData.doctor} 
                onChange={handleInputChange}
                onBlur={handleBlur}
            >
                <option value="">Selecciona un médico</option>
                <option value="Dra. Carolina Fernández">Dra. Carolina Fernández</option>
                <option value="Dr. Samuel Rivas">Dr. Samuel Rivas</option>
                <option value="Dr. Esteban Martínez">Dr. Esteban Martínez</option>
                <option value="Dra. Valeria Santos">Dra. Valeria Santos</option>
                <option value="Dr. Javier Torres">Dr. Javier Torres</option>
                <option value="Dra. Alicia Pérez">Dra. Alicia Pérez</option>
            </select>
            {touched.doctor && errors.doctor && <p className={styles.errorMessage}>{errors.doctor}</p>}
            
            <button 
            className={styles.scheduleButton} type='submit'>
                Sacar turno
            </button>
            
        </form>
    );
};

export default ScheduleAppointment;
