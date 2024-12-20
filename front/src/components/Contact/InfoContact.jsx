import styles from './InfoContact.module.css'


const InfoContact = () => {
    return (
    <div className={styles.contactInfoContainer}>
    <h2>Contáctanos</h2>
    <p className={styles.contactInfoText}>
      POR FAVOR NO DUDE en ponerse en contacto con nosotros con sus
      preguntas. La información de contacto de nuestro instituto está
      disponible a continuación:
    </p>
    <p className={styles.contactInfoText}>
      Los clientes deben dirigir sus preguntas a: infog@ina.org.ar.
    </p>
    <p className={styles.contactInfoText}>
      Los posibles candidatos deben dirigir sus preguntas a: recursoshumanos@ina.org.ar.
    </p>
  </div>

    )
}

export default InfoContact;