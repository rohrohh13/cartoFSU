import styles from './TeaseArticle.module.scss'
import defaultImage from '../../assets/sans-image.jpg';

const TeaseArticle = ({article}) => {
    return (
        
        <div className={styles.container}>
            <img src={article.image || defaultImage} alt="Article" />
            <div className={styles.containerInfo}>
                <div>
                    <span className={styles.containerInfoUn}>{article.categoriesName}</span>
                    <span className={styles.containerInfoDeux}>{article.statut}</span>
                </div>       
                <h2>{article.title && article.title.length > 26 ? `${article.title.substring(0, 26)}...` : article.title}</h2>
                <h3>{article.departement}</h3>
            </div>       
        </div>
    )
}

export default TeaseArticle