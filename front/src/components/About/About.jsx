import { CONTACT } from '../../helpers/pathsRoutes';
import styles from './About.module.css'
import {Link} from 'react-router-dom'

const About = () => {

    return (
        <div className={styles.aboutContainer}>
            <h2 className={styles.aboutTitle} >¿Quiénes somos?</h2>
            <p className={styles.aboutText}>El Instituto Neurológico Argentino es una institución de prestigio dedicada tanto a la investigación científica como a la atención clínica de pacientes con enfermedades neurológicas. Fundada en Argentina, nuestra organización se ha destacado por su compromiso con la excelencia médica y el avance del conocimiento en neurología.</p>
            <p className={styles.aboutText}> Desde nuestra creación, hemos colaborado con centros de investigación de primer nivel y profesionales altamente cualificados, lo que nos ha permitido contribuir al desarrollo de nuevas terapias y enfoques diagnósticos. Nuestro equipo está conformado por neurólogos expertos que combinan su experiencia clínica con una sólida formación investigativa, asegurando un enfoque integral en el cuidado de nuestros pacientes.</p>
            <p className={styles.aboutText}>En Neurología Argentina, ofrecemos una atención personalizada y basada en la evidencia más reciente, siempre con el objetivo de mejorar la calidad de vida de nuestros pacientes y promover la salud neurológica.</p>
            <p className={styles.aboutText}>Si desea obtener más información o concertar una consulta, por favor <Link to={CONTACT}> CONTÁCTENOS</Link>.</p>
        </div>
    )
};

export default About;
