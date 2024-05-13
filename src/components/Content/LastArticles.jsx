import TeaseArticle from "./TeaseArticle"
import styles from './LastArticles.module.scss'
import { useNavStore } from "../../NavStore"

const LastArticles = ({contributions, onClickVignette}) => {
    
    const setCurrentNav = useNavStore(state => state.setCurrentNav)

    return (
        <div className={styles.container}>
            <ul>
                {contributions.map((article, index) => {
                    return (
                        <li key={index} onClick={() => onClickVignette(index)}>
                            <TeaseArticle article={article} key={index} />
                        </li>
                    )
                })}
                <div className={styles.containerLinks}>
                    <p>Rejoignez vous aussi <br/>le collectif !</p>
                    <a href="" target="_blank">
                        Je me syndique
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25998 7.19487C9.25998 7.61331 9.09375 8.01461 8.79787 8.3105C8.50199 8.60638 8.10068 8.77261 7.68224 8.77261C7.26379 8.77261 6.86249 8.60638 6.5666 8.3105C6.27072 8.01461 6.10449 7.61331 6.10449 7.19487V4.56529C6.10449 4.14685 6.27072 3.74554 6.5666 3.44966C6.86249 3.15377 7.26379 2.98755 7.68224 2.98755C8.10068 2.98755 8.50199 3.15377 8.79787 3.44966C9.09375 3.74554 9.25998 4.14685 9.25998 4.56529V7.19487Z" stroke="black" stroke-width="0.934959" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.26025 4.56529C9.26025 4.14685 9.42648 3.74554 9.72236 3.44966C10.0182 3.15377 10.4196 2.98755 10.838 2.98755C11.2564 2.98755 11.6577 3.15377 11.9536 3.44966C12.2495 3.74554 12.4157 4.14685 12.4157 4.56529V6.14304" stroke="black" stroke-width="0.934959" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.26019 11.9282C9.26019 11.2308 9.53724 10.562 10.0304 10.0688C10.5235 9.5757 11.1924 9.29866 11.8898 9.29866H10.8379C10.4195 9.29866 10.0182 9.13244 9.7223 8.83655C9.42642 8.54067 9.26019 8.13936 9.26019 7.72092V6.66909C9.26019 6.52961 9.3156 6.39584 9.41423 6.29721C9.51286 6.19858 9.64663 6.14317 9.78611 6.14317H13.9934C14.4119 6.14317 14.8132 6.3094 15.1091 6.60528C15.4049 6.90117 15.5712 7.30247 15.5712 7.72092V8.77275C15.5712 10.4465 14.9063 12.0517 13.7227 13.2353C12.5392 14.4188 10.934 15.0837 9.26019 15.0837C7.58642 15.0837 5.9812 14.4188 4.79766 13.2353C3.61412 12.0517 2.94922 10.4465 2.94922 8.77275V6.14317C2.94922 5.72473 3.11544 5.32342 3.41133 5.02754C3.70721 4.73166 4.10852 4.56543 4.52696 4.56543C4.94541 4.56543 5.34671 4.73166 5.6426 5.02754C5.93848 5.32342 6.10471 5.72473 6.10471 6.14317V7.195C6.10471 7.61345 5.93848 8.01475 5.6426 8.31064C5.34671 8.60652 4.94541 8.77275 4.52696 8.77275C4.10852 8.77275 3.70721 8.60652 3.41133 8.31064C3.11544 8.01475 2.94922 7.61345 2.94922 7.195" stroke="black" stroke-width="0.934959" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </a>
                </div>         
            </ul>
        </div>
    )
}

export default LastArticles