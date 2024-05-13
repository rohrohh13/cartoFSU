import parse from 'html-react-parser'
import { Close } from '@mui/icons-material';
import moment from 'moment'
import 'moment/dist/locale/fr'
moment.locale('fr')

import DrawerWrapper from './DrawerWrapper';
import styles from './InfoArticle.module.scss'

const InfoArticle = ({ contribution, onClose, onNext }) => {
    const defaultImage = 'src/assets/sans-image.jpg';
    return (
        <DrawerWrapper isOpen={contribution !== undefined} onClose={onClose}>
            { contribution && (
                <div className={styles.infoContainer}>
                    
                    <div className={styles.tagsContainer}>
                        {contribution.categoriesName}
                    </div>
                    <div className={styles.titleContainer}>
                        <h2>{parse(contribution.title)}</h2>                         
                    </div>
                    <img src={contribution.image || defaultImage} alt="Article" />
                    <div className={styles.infoArticleContainerContent}>
                        {parse(contribution.departement)}
                    </div>                    
                    <div className={styles.infoArticleContainerLesInfos}>
                    { contribution.date && (
                        <div className={styles.infoArticleContainerDate}>
                            <div>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 11H27" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5 19L14.5 22L20.5 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            </div>
                            <div>
                                {moment(contribution.date).format('Do MMMM YYYY')} - {contribution.heure}
                            </div>           
                        </div>
                        )}
                        { contribution.adresse && (
                        <div className={styles.infoArticleContainerLieu}>
                            <div>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 29H25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                {contribution.lieu}<br/>{contribution.adresse}<br/>{contribution.codePostal}                       
                            </div>
                        </div>
                        )}
                    </div>
                    { contribution.commentaire && (
                    <div className={styles.infoArticleCommentaire}>
                        {contribution.commentaire}
                    </div>
                    )}
                    { contribution.lien && (
                        <div className={styles.infoArticleLien}>
                            <a href={contribution.lien}>En savoir plus</a>
                        </div>
                    )}
                    <button className={styles.buttonNext} onClick={onNext}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="29.5" fill="#1D1D1B" stroke="#1D1D1B"/>
                            <path className={styles.buttonNextPath} d="M30 52C42.1503 52 52 42.1503 52 30C52 17.8497 42.1503 8 30 8C17.8497 8 8 17.8497 8 30C8 42.1503 17.8497 52 30 52Z" fill="white" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 20L35 30L25 40" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                    </button>
                </div>
            )}      
        </DrawerWrapper>
    )
}

export default InfoArticle