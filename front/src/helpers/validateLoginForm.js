export const validateLoginForm = (input) => {
    const errors = {};

    
    if (!input.username) {
        errors.username = "El username es requerido"
    }

    if (!input.password) {
        errors.password = "La contraseña es requerida";
    }

    return errors;
};