import styles from './TeaseArticle.module.scss'
import defaultImage from '../../assets/sans-image.jpg';
import moment from 'moment'
const TeaseArticle = ({article}) => {


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
  
 

    return (
        
        <div className={styles.container}>
            <img src={article.image || defaultImage} alt="Article" />
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