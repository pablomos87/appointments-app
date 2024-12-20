import { useState } from 'react';
import { validateRegisterForm } from '../../helpers/validateRegisterForm';
import styles from './RegisterForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../../helpers/pathsRoutes';
import { useRegisterUserMutation } from '../../redux/features/users/usersApi';

const RegisterForm = () => {
    const [registerUser] = useRegisterUserMutation();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        repeatPassword: '',
        birthdate: '',
        nDni: '',
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors(
            validateRegisterForm({
                ...formData,
                [name]: value,
            })
        );
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({
            ...formData,
            [name]: true,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.username ||
            !formData.password ||
            !formData.email ||
            !formData.repeatPassword ||
            !formData.birthdate ||
            !formData.nDni
        ) {
            alert(
                'Por favor, completa todos los campos antes de enviar el formulario.'
            );
            return;
        }

        if (Object.keys(errors).length > 0) {
            alert('Por favor, corrige los errores antes de enviar el formulario');
            return;
        }

        try {
            await registerUser(formData);
            alert('Usuario creado con éxito');
            navigate(LOGIN);
        } catch (error) {
            alert('Datos inválidos o incompletos');
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            username: '',
            password: '',
            email: '',
            repeatPassword: '',
            birthdate: '',
            nDni: '',
        });
        setErrors({});
        setTouched({});
    };

    return (
        <form className={styles.registerForm} onSubmit={handleOnSubmit}>
            <h2>REGISTRATE CON TUS DATOS</h2>
            <label className={styles.registerLabel} htmlFor='name'>
                {' '}
                Nombre y Apellido
            </label>
            <input
                className={styles.registerInput}
                type='text'
                value={formData.name}
                name='name'
                placeholder='Escribe tu nombre'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.name && errors.name && (
                <p className={styles.errorMessage}>{errors.name}</p>
            )}

            <label className={styles.registerLabel} htmlFor='email'>
                {' '}
                Correo electrónico{' '}
            </label>
            <input
                className={styles.registerInput}
                type='email'
                value={formData.email}
                name='email'
                placeholder='Escribe tu email'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <p className={styles.errorMessage}>{errors.email}</p>
            )}

            <label className={styles.registerLabel} htmlFor='nDni'>
                {' '}
                Documento de identidad
            </label>
            <input
                className={styles.registerInput}
                type='number'
                value={formData.nDni}
                name='nDni'
                placeholder='Escribe tu número de documento'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.nDni && errors.nDni && (
                <p className={styles.errorMessage}>{errors.nDni}</p>
            )}

            <label className={styles.registerLabel} htmlFor='birthdate'>
                {' '}
                Fecha de nacimiento{' '}
            </label>
            <input
                className={styles.registerInput}
                type='date'
                value={setFormData.password}
                name='birthdate'
                placeholder='Inda tu fecha de nacimiento'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.birthdate && errors.birthdate && (
                <p className={styles.errorMessage}>{errors.birthdate}</p>
            )}

            <label className={styles.registerLabel} htmlFor='username'>
                {' '}
                Username{' '}
            </label>
            <input
                className={styles.registerInput}
                type='text'
                value={formData.username}
                name='username'
                placeholder='Escribe tu nombre de usuario'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.username && errors.username && (
                <p className={styles.errorMessage}>{errors.username}</p>
            )}

            <label className={styles.registerLabel} htmlFor='password'>
                {' '}
                Contraseña{' '}
            </label>
            <input
                className={styles.registerInput}
                type='password'
                value={formData.password}
                name='password'
                placeholder='Escribe una contraseña'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.password && errors.password && (
                <p className={styles.errorMessage}>{errors.password}</p>
            )}

            <label className={styles.registerLabel} htmlFor='repeatPassword'>
                {' '}
                Confirma la contraseña{' '}
            </label>
            <input
                className={styles.registerInput}
                type='password'
                value={formData.repeatPassword}
                name='repeatPassword'
                placeholder='Repite la contraseña'
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
            {touched.repeatPassword && errors.repeatPassword && (
                <p className={styles.errorMessage}>{errors.repeatPassword}</p>
            )}

            <button className={styles.registerButton} type='submit'>REGISTRATE</button>
            <button className={styles.resetButton} type="button" onClick={handleReset}>Reset</button>
            <p>
                ¿Ya tienes una cuenta? <Link to={LOGIN}>Iniciar sesión</Link>
            </p>
        </form>
    );
};

export default RegisterForm;
