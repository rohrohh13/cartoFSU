import { useState, useEffect, createRef } from 'react'
import styles from './loader.module.scss'
import Map from "./Map"
import InfoArticle from './InfoArticle'
import LastArticles from './LastArticles'
import Filters from './Filters'

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
    const {currentNav, setCurrentNav, isDomSelected} = useNavStore()

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
            const articleIndex = contributions.findIndex((item) => parseInt(item.id) === paramArticle )
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
                        id: parseInt(item.id),
                        title: item.titre,
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

    return (
        <div>
            <Map contributions={contributions} isDomSelected={isDomSelected} selectedCategoriesId={selectedCategoriesId} onClickMarqueur={index => setSelectedArticleIndex(index)} selectedArticleIndex={selectedArticleIndex}/>
            <LastArticles contributions={contributions.slice(0, 3)} onClickVignette={index => setSelectedArticleIndex(index)}/>
            <InfoArticle contribution={contributions[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(false) } onNext={goToNext}/>
            {categories.length && currentNav === 'filters' && <Filters categories={categories} selectedCategoriesId={selectedCategoriesId} onSelected={toggleFilter} unSelect={displayAllContributions}/>}
        </div>    
    )
}

export default Content