import styles from './ProfessionalStaff.module.css'


const ProfessionalStaff = () => {
    return (
        <section className={styles.staffSection}>
            <h2 className={styles.staffSectionTitle}>Conoce Nuestro Equipo</h2>

<div className={styles.staffCardContainer}>
            <div className={styles.staffCard}> 
                <h3 className={styles.staffName}>Dr. Samuel Rivas</h3>
                <p className={styles.staffSpecialty}>Especialista en Neurocirugía Funcional</p>
            </div>
            <div className={styles.staffCard}> 
                <h3 className={styles.staffName}>Dra. Carolina Fernández</h3>
                <p className={styles.staffSpecialty}>Especialista en Neurología Pediátrica</p>
            </div>
            <div className={styles.staffCard}> 
                <h3 className={styles.staffName}>Dr. Esteban Martínez</h3>
                <p className={styles.staffSpecialty}>Especialista en Neurología Vascular</p>
            </div>
            <div className={styles.staffCard}> 
                <h3 className={styles.staffName}>Dra. Valeria Santos</h3>
                <p className={styles.staffSpecialty}>Especialista en Epilepsia y Trastornos Convulsivos</p>
            </div>
            <div className={styles.staffCard}> 
                <h3 className={styles.staffName}>Dr. Javier Torres</h3>
                <p className={styles.staffSpecialty}>Especialista en Trastornos del Movimiento (Parkinson, distonía)</p>
            </div>
            <div className={styles.staffCard}> 
                <h3 className={styles.staffName}>Dra. Alicia Pérez</h3>
                <p className={styles.staffSpecialty}>Especialista en Neurofisiología Clínica (electroencefalogramas, estudios del sueño).</p>
            </div>
            </div>
        </section>            
        
    )
};

export default ProfessionalStaff;
