export const validateScheduleAppointmentForm = (input) => {
    const errors = {};

    if (!input.date) {
        errors.date = 'La fecha es requerida';
    } else {
        const selectedDate = new Date(input.date);
        const today = new Date();
        const twoWeeksFromNow = new Date();
        twoWeeksFromNow.setDate(today.getDate() + 14);

        if (selectedDate < today || selectedDate > twoWeeksFromNow) {
            errors.date = 'La fecha debe estar dentro de los próximos 14 días.';
        }

        const dayOfWeek = selectedDate.getUTCDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            errors.date = 'La fecha debe ser un día de lunes a viernes.';
        }
    }

    if (!input.time) {
        errors.time = 'El horario es requerido';
    } else {
        const selectedTime = new Date(`1970-01-01T${input.time}:00`);
        const startHour = new Date(`1970-01-01T10:00:00`);
        const endHour = new Date(`1970-01-01T18:00:00`);

        if (selectedTime < startHour || selectedTime > endHour) {
            errors.time = 'El horario debe estar entre las 10:00hs y las 18:00hs.';
        }
    }

    if (!input.doctor) {
        errors.doctor = 'El médico especialista es requerido';
    }

    return errors;
};
