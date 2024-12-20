import { useState } from 'react';
import { validateLoginForm } from '../../helpers/validateLoginForm';
import styles from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { setUserData } from '../../redux/features/users/usersSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/users/usersApi';
import { HOME, REGISTER } from '../../helpers/pathsRoutes';

const Login = () => {
    const [loginUser ] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors(validateLoginForm({
            ...formData,
            [name]: value
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault()
            try {
                const res = await loginUser(formData)
                dispatch(setUserData(res.data))
                navigate(HOME);
            } catch(error) {
                alert('Información incorrecta')
                console.log(error);
            }
    };

    const handleBlur = (event) => {
        const {name} = event.target
        setTouched ({
            ...formData,
            [name]: true
        });
    };

    return (
        <>
            <form className={styles.loginForm} onSubmit={handleOnSubmit}>
                <h2>INGRESA CON TU USUARIO</h2>
                <label className={styles.loginLabel} htmlFor="username"> </label>
                <input
                    className={styles.loginInput}
                    type="text"
                    value={formData.username}
                    name='username'
                    placeholder="Username"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {touched.username && errors.username && <p className={styles.errorMessage}>{errors.username}</p>}

                <label className={styles.loginLabel} htmlFor="password"> </label>
                <input
                    className={styles.loginInput}
                    type="password"
                    value={formData.password}
                    name='password'
                    placeholder="Password"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {touched.password && errors.password && <p className={styles.errorMessage}>{errors.password}</p>}

                <button className={styles.loginButton} type='submit'>Login</button>
                <p>¿Aún no tienes una cuenta? <Link to={REGISTER}>Registrarse</Link></p>
            </form>
        </>
    )
};

export default Login;
