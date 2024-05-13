
import { useNavStore } from '../../NavStore'
import styles from './About.module.scss'
import DrawerWrapper from './DrawerWrapper'

const About = ({isOpen}) => {
    
    const setCurrentNav = useNavStore(state => state.setCurrentNav)
    
    return (
        <DrawerWrapper isOpen={isOpen}>
            <div className={styles.aboutDiv}>                  
                <h2>UNE CARTE POUR LES RASSEMBLER TOUS</h2>
                <p>Les projets innovants des élus locaux doivent gagner en visibilité. L’Inspiration politique est née de ce désir d’informer sur tout ce qui se fait de beau, d’inédit et d’utile dans les territoires.</p>
                <p>Nous sommes convaincus qu’une partie de la solution pour notre pays réside dans cette volonté farouche des élus de terrain, confrontés aux réalités, d’inventer des outils pour mieux vivre le quotidien et construire l’avenir.</p>
                <p>Des villages aux métropoles, cette carte des innovations nous montre que les idées ne manquent pas.</p>
                <a target="_blank" href='mailto:contact@linspiration-politique.fr' className={styles.addCta}>Ajouter votre projet <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 25C20.1274 25 25.5 19.6274 25.5 13C25.5 6.37258 20.1274 1 13.5 1C6.87258 1 1.5 6.37258 1.5 13C1.5 19.6274 6.87258 25 13.5 25Z" stroke="#1D1D1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.5 13H18.5" stroke="#1D1D1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 8V18" stroke="#1D1D1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
        </DrawerWrapper>
    )
}
export default About