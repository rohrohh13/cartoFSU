import styles from './TeaseArticle.module.scss'
import defaultImage from '../../assets/sans-image.jpg';
import audienceUn from '../../assets/audience-un-min.jpg';
import audienceDeux from '../../assets/audience-deux-min.jpg';
import audienceTrois from '../../assets/audience-trois-min.jpg';
import audienceQuatre from '../../assets/audience-quatre-min.jpg';
import franceDeux from '../../assets/france-deux-min.jpg';
import franceTrois from '../../assets/france-trois-min.jpg';
import manifUn from '../../assets/manif-un-min.jpg';
import manifDeux from '../../assets/manif-deux-min.jpg';
import manifTrois from '../../assets/manif-trois-min.jpg';
import manifQuatre from '../../assets/manif-quatre-min.jpg';
import presseUn from '../../assets/presse-un-min.jpg';
import presseDeux from '../../assets/presse-deux-min.jpg';
import presseTrois from '../../assets/presse-trois-min.jpg';
import presseQuatre from '../../assets/presse-quatre-min.jpg';
import reunionUn from '../../assets/reunion-un-min.jpg';
import reunionDeux from '../../assets/reunion-deux-min.jpg';
import reunionTrois from '../../assets/reunion-trois-min.jpg';
import stageUn from '../../assets/stage-un-min.jpg';
import stageDeux from '../../assets/stage-deux-min.jpg';
import stageTrois from '../../assets/stage-trois-min.jpg';
import tractageUn from '../../assets/tractage-un-min.jpg';
import moment from 'moment'
const TeaseArticle = ({article}) => {

    const categoryImages = {
      "Audience": [audienceUn, audienceDeux, audienceTrois, audienceQuatre],
      "Tour de France des écoles": [franceDeux, franceTrois],  // Ajout de defaultImage au cas où il manque une image
      "Manifestation / Rassemblement": [manifUn, manifDeux, manifTrois, manifQuatre],
      "Conférence de presse": [presseUn, presseDeux, presseTrois, presseQuatre],
      "Réunion publique": [reunionUn, reunionDeux, reunionTrois],
      "Stage / Ris": [stageUn, stageDeux, stageTrois],
      "Tractage": [tractageUn],
      "default": [defaultImage], // Utilisez l'image par défaut si aucune catégorie ne correspond
    };

    const getRandomImage = (category) => {
      const images = categoryImages[category] || categoryImages["default"];
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };

    const dateDaujourdhui = moment();
    const articleDate = moment(article.date, 'DD/MM/YYYY');
    let etatArticle = '';
  
    if (articleDate.isBefore(dateDaujourdhui, 'day')) {
      etatArticle = 'Passé';
    } else if (articleDate.isAfter(dateDaujourdhui, 'day')) {
      etatArticle = 'À venir';
    } else {
      etatArticle = "Aujourd'hui";
    }
    const imageUrl = article.image || getRandomImage(article.categoriesName);
 

    return (
        
        <div className={styles.container}>
            <img src={imageUrl} alt="Article" />
            <div className={styles.containerInfo}>
                <div>
                    <span className={styles.containerInfoUn}>{article.categoriesName}</span>
                    <span className={`${styles.containerInfoDeux} ${etatArticle === 'Passé' ? styles.past : etatArticle === 'À venir' ? styles.future : styles.today}`}>{etatArticle}</span>
                </div>       
                <h2>{article.title && article.title.length > 26 ? `${article.title.substring(0, 23)}...` : article.title}</h2>
                <h3>{article.departement}</h3>
            </div>       
        </div>
    )
}

export default TeaseArticle