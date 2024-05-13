import { useState, useEffect, createRef } from 'react'
import styles from './loader.module.scss'
import Map from "./Map"
import InfoArticle from './InfoArticle'
import LastArticles from './LastArticles'
import Filters from './Filters'
import About from './About'
import AddProject from './AddProject'

import { useNavStore } from '../../NavStore'


function Content () {


    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const paramArticle = parseInt(urlParams.get('articleId'))


    const [contributions, setContributions] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedArticleIndex, setSelectedArticleIndex] = useState(false)
    const [selectedCategoriesId, setSelectedCategoriesId] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    const {currentNav, setCurrentNav} = useNavStore()

    let hasFetch = createRef()

    useEffect(() => {
        if(!hasFetch.current) {
            hasFetch.current = true;
            fetchCats(),
            fetchData();
        }
        
    }, []);

    useEffect(() => {
        if(selectedArticleIndex) {
            setCurrentNav('')
        }
    }, [selectedArticleIndex])

    useEffect(() => {
        if(contributions.length && paramArticle) {
            const articleIndex = contributions.findIndex((item) => item.id === paramArticle )
            if(articleIndex !== -1) setSelectedArticleIndex(articleIndex)
        }
    }, [contributions])


    const fetchData = async () => {
        console.log('fetch')
        const contribs = [];
        const endpoints = [
            'https://opensheet.elk.sh/1mCNq0dGcDoZuj-OnXI3xjuYujJSFKfeK_-8thdMiNm4/Feuille%201'
        ]
        
        let loop = true;
        let hasNextPage = true;
        let currentPage = 1;
        let currentEndpoint = 0
        
        while (loop) {
            try {
                const response = await fetch(endpoints[currentEndpoint]);
                const data = await response.json();
                if(data.data?.status === 400) {
                    hasNextPage = false
                } else {
                    const formatedContribs = data.map(item => ({
                        id: item.articleId,
                        title: item.titre,
                        statut: item.statut,
                        categories: item.typeActionId,
                        categoriesName: item.typeAction,
                        date: item.date,
                        heure: item.heure,
                        lieu: item.lieu,
                        lien: item.lienEnSavoirPlus,      
                        adresse: item.adresse,
                        commentaire: item.commentaire,
                        codePostal: item.codePostalVille,
                        image: item.image,
                        departement: item.departement,
                        latlong: {
                            lat: item.lat,
                            lng: item.lng
                        }
                    }));
                    contribs.push(...formatedContribs)
                    if(data.length < 100) {
                        hasNextPage = false
                    } else {
                        currentPage++;
                    } 
                }
                if (!hasNextPage) {
                    if(currentEndpoint < endpoints.length - 1) {
                        currentEndpoint++;
                        currentPage = 1;
                        hasNextPage = true;
                    }
                    else {
                        loop = false
                    }
                }
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        setContributions(contribs)
        setIsLoading(false);
    };

    const fetchCats = () => {
        fetch('https://opensheet.elk.sh/1mCNq0dGcDoZuj-OnXI3xjuYujJSFKfeK_-8thdMiNm4/Feuille%202')
            .then(res => res.json())
            .then(data => {
                const formatedCats = []
                data.map(item => formatedCats.push({
                    name : item.name,
                    id : item.id
                }))
                setCategories(formatedCats)
            })
    }

    const goToNext = () => {
        if (selectedArticleIndex < contributions.length - 1) {
            setSelectedArticleIndex(selectedArticleIndex + 1)
        } else {
            setSelectedArticleIndex(0)
        }
    }

    const toggleFilter = (id) => {
        if(selectedCategoriesId.includes(id)) {
            setSelectedCategoriesId(selectedCategoriesId.filter(catId => catId !== id))
        } else {
            setSelectedCategoriesId([...selectedCategoriesId, id])
        }
    }

    const displayAllContributions = () => {
        setSelectedCategoriesId([])
    }
    if (isLoading) {
        return (
            <div className={styles.loaderContainer}>
                <svg width="55" height="46" viewBox="0 0 55 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='path1' d="M43.0555 10.5615L41.71 18.0566C39.9432 19.439 37.9811 22.1344 36.9517 24.1089L36.4533 25.0649L37.505 24.8278L39.6682 24.3401L43.8104 36.7401C41.918 37.922 41.0681 39.3418 40.2785 40.6609C40.1798 40.8259 40.082 40.9893 39.9832 41.1504C36.2005 39.7191 33.074 39.0194 30.8073 39.4416C29.611 39.6645 28.633 40.2036 27.9424 41.1216C27.3247 41.9427 26.9684 43.0253 26.8495 44.3592C24.7684 44.5644 21.7326 44.7386 18.6787 44.3264C15.496 43.8969 12.3681 42.8404 10.2582 40.596C11.4867 35.8694 12.2311 30.8122 11.2191 26.4328C10.1917 21.9868 7.36216 18.2812 1.56096 16.3335L0.67685 13.3261L10.7541 13.76L11.3834 13.7871L11.267 13.1681L10.2978 8.01403L11.8046 7.86514L12.8574 9.76251L13.0182 10.0523L13.3477 10.0171C16.2775 9.70406 18.4996 8.63966 20.0081 7.10142C21.4185 5.6633 22.1776 3.83861 22.3238 1.90406C22.3333 1.90237 22.3429 1.90066 22.3526 1.89893C22.6053 1.85385 22.9451 1.79379 23.2941 1.73377C23.6436 1.67368 24.0003 1.61397 24.2875 1.5694C24.4178 1.54918 24.5317 1.53241 24.623 1.5202C29.494 6.10231 34.9082 9.83679 43.0555 10.5615Z" fill="#1D1D1B" stroke="white" class="svg-elem-1"></path>
                <path d="M40 21C45.5228 21 50 16.5228 50 11C50 5.47715 45.5228 1 40 1C34.4772 1 30 5.47715 30 11C30 16.5228 34.4772 21 40 21Z" fill="#1D1D1B" stroke="white" strokeLinecap="round" strokeLinejoin="round" class="svg-elem-2"></path>
                <path d="M43.9611 9.54428C43.987 9.36717 44 9.18574 44 9C44 6.79266 42.2073 5 40 5C37.7927 5 36 6.79266 36 9C36 10.987 37.4514 12.6371 39.3521 12.9482C38.8985 14.1836 38.0302 15.3326 36.7084 16.1922C36.5875 16.2657 36.9114 16.6803 37.0756 16.6458C39.6069 15.4924 43.6112 13.3758 43.9654 9.54428" fill="#FFEB81" class="svg-elem-3"></path>
                <path d="M47.0713 18.0713L54 25" stroke="white" strokeLinecap="round" strokeLinejoin="round" class="svg-elem-4"></path>
                </svg>
                <p>Un instant nous recherchons <br/>pour vous les projets les plus <br/>innovants sur le territoire</p>
            </div>
        )
    }
    return (
        <div>
            <Map contributions={contributions} selectedCategoriesId={selectedCategoriesId} onClickMarqueur={index => setSelectedArticleIndex(index)}/>
            <LastArticles contributions={contributions.slice(0, 3)} onClickVignette={index => setSelectedArticleIndex(index)}/>
            <InfoArticle contribution={contributions[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(false) } onNext={goToNext}/>
            {categories.length && currentNav === 'filters' && <Filters categories={categories} selectedCategoriesId={selectedCategoriesId} onSelected={toggleFilter} unSelect={displayAllContributions}/>}
            <About isOpen={currentNav === 'about'} />
            <AddProject isOpen={currentNav === 'addProject'} />
        </div>    
    )
}

export default Content