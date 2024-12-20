import styles from './FormContact.module.css'


const FormContact = () => {
    return (
        <div className={styles.contactFormContainer}>
        <h3>Formulario de Contacto</h3>
        <p className={styles.contactFormText}>
          Rellene el siguiente formulario y le responderemos lo antes posible.
        </p>
        <form className={styles.contactForm}> 
        <input className={styles.contactFormInput}
          type='text'
          name='name' 
          placeholder='Nombre'
          />
             <input className={styles.contactFormInput}
          type='text'
          name='email' 
          placeholder='Correo'
          />
          <textarea
            className={styles.contactFormTextarea}
            name='comments'
            placeholder='Mensajes'
          />
          <button className={styles.contactFormButton}>Enviar</button>
        </form>
      </div>
    )
};

export default FormContact;