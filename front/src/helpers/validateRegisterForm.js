export const validateRegisterForm = (userData) => {
  const errors = {};
  const currentDate = new Date();
  const birthDate = new Date(userData.birthdate);
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (!userData.name) {
    errors.name = 'El nombre es requerido';
  } else if (userData.name.length < 3) {
    errors.name = 'El nombre debe tener más de tres caracteres';
  }

  if (!userData.email) {
    errors.email = 'El email es requerido';
  } else if (!/^[\S]+@[a-z]+\.[a-z]+$/.test(userData.email)) {
    errors.email = 'No tiene formato email';
  }

  if (!userData.birthdate) {
    errors.birthdate = 'La fecha de nacimiento es requerida';
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(userData.birthdate)) {
    errors.birthdate = 'La fecha es inválida';
  } else if (age < 18 || (age === 18 && monthDiff < 0)) {
    errors.birthdate = 'Debes tener al menos 18 años';
  }

  if (!userData.nDni) {
    errors.nDni = 'El dni es requerido';
  }

  if (!userData.username) {
    errors.username = 'El nombre de usuario es requerido';
  } else if (userData.username.length < 3) {
    errors.username = 'El nombre de usuario debe tener al menos 3 caracteres';
  } else if (!/^\S+$/.test(userData.username)) {
    errors.username = 'El nombre de usuario no debe contener espacios';
  }

  if (!userData.password) {
    errors.password = 'La contraseña es requerida';
  } else if (userData.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres';
  } else if (!/[A-Z]/.test(userData.password)) {
    errors.password = 'La contraseña debe tener al menos una letra mayúscula';
  } else if (!/[a-z]/.test(userData.password)) {
    errors.password = 'La contraseña debe tener al menos una letra minúscula';
  } else if (!/\d/.test(userData.password)) {
    errors.password = 'La contraseña debe tener al menos un número';
  }
  if (userData.repeatPassword !== userData.password) {
    errors.repeatPassword = 'Las contraseñas no coinciden';
  }
  if (!userData.repeatPassword) {
    errors.password = 'La contraseña debe ser confirmada';
  }
  
  return errors;
};
