import styles from './AddProject.module.scss'
import DrawerWrapper from './DrawerWrapper'

const AddProject = ({isOpen}) => (
    <DrawerWrapper isOpen={isOpen} variant={'dark'}>
        <div className={styles.addProjectDiv}>                  
            <h2>AJOUTER UN <br/>PROJET</h2>
            <p>Vos projets innovants ne doivent plus rester dans l’ombre !</p>
            <p>N’hésitez pas à nous faire parvenir vos actions et projets innovants à <a target='_blank' href="mailto:contact@linspiration-politique.fr">contact@linspiration-politique.fr</a></p>
        </div>
    </DrawerWrapper>
)

export default AddProject