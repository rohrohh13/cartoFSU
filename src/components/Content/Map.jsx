import parse from 'html-react-parser'
import React, { useRef, useEffect } from 'react'; // Ajout de React et useRef
import marqueur from '../../assets/marker-icon-2x.png'
import marqueurUn from '../../assets/assemblee-generale.png'
import marqueurDeux from '../../assets/audience.png'
import marqueurTrois from '../../assets/conference-de-presse.png'
import marqueurQuatre from '../../assets/manifestation.png'
import marqueurCinq from '../../assets/reunion-publique.png'
import marqueurSix from '../../assets/ris.png'
import marqueurSept from '../../assets/stage.png'
import marqueurHuit from '../../assets/tour-de-france.png'
import marqueurNeuf from '../../assets/tractage.png'
import MarkerClusterGroup from 'react-leaflet-cluster'
import departementsJson from '../../geojson/departements.json'
import { MapContainer, TileLayer, Marker, ZoomControl,Popup,GeoJSON,Tooltip } from 'react-leaflet'
import styles from './Map.module.scss'

const Map = ({ contributions, selectedCategoriesId, onClickMarqueur, selectedArticleIndex, isDomSelected }) => {
    
    const BoatIcon = L.icon({
        iconUrl: marqueur,
        iconSize: [25,41],
        iconAnchor: [12, 41],
    });
    const Assemble = L.icon({
        iconUrl: marqueurUn,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Audience = L.icon({
        iconUrl: marqueurDeux,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Conference = L.icon({
        iconUrl: marqueurTrois,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Manif = L.icon({
        iconUrl: marqueurQuatre,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Reunion = L.icon({
        iconUrl: marqueurCinq,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Ris = L.icon({
        iconUrl: marqueurSix,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Stage = L.icon({
        iconUrl: marqueurSept,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Tour = L.icon({
        iconUrl: marqueurHuit,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const Tractage = L.icon({
        iconUrl: marqueurNeuf,
        iconSize: [24,30],
        iconAnchor: [12, 30],
    });
    const mapRef = useRef(); // Création d'une référence à la carte
    const departementLocations = {
        "01": { name: "Ain", lat: 46.25, lng: 5.75, zoom: 10 },
        "02": { name: "Aisne", lat: 49, lng: 3.5, zoom: 9 },
        "03": { name: "Allier", lat: 46.3333, lng: 3.5, zoom: 9 },
        "04": { name: "Alpes-de-Haute-Provence", lat: 44.3, lng: 6.25, zoom: 9 },
        "05": { name: "Hautes-Alpes", lat: 44.9, lng: 6.25, zoom: 9 },
        "06": { name: "Alpes-Maritimes", lat: 43.9333, lng: 7, zoom: 10 },
        "07": { name: "Ardèche", lat: 44.75, lng: 4.5, zoom: 9 },
        "08": { name: "Ardennes", lat: 49.6667, lng: 4.5, zoom: 9 },
        "09": { name: "Ariège", lat: 42.75, lng: 1.5833, zoom: 9 },
        "10": { name: "Aube", lat: 48.25, lng: 4.3333, zoom: 9 },
        "11": { name: "Aude", lat: 43.1667, lng: 2.75, zoom: 9 },
        "12": { name: "Aveyron", lat: 44, lng: 2.5, zoom: 9 },
        "13": { name: "Bouches-du-Rhône", lat: 43.5, lng: 5.1667, zoom: 9 },
        "14": { name: "Calvados", lat: 49, lng: -0.3333, zoom: 9 },
        "15": { name: "Cantal", lat: 45, lng: 2.5, zoom: 9 },
        "16": { name: "Charente", lat: 45.8333, lng: 0.3333, zoom: 9 },
        "17": { name: "Charente-Maritime", lat: 46.1667, lng: -1, zoom: 9 },
        "18": { name: "Cher", lat: 47, lng: 2.5, zoom: 9 },
        "19": { name: "Corrèze", lat: 45.3333, lng: 1.8333, zoom: 9 },
        "21": { name: "Côte-d'Or", lat: 47.25, lng: 4.5, zoom: 9 },
        "22": { name: "Côtes-d'Armor", lat: 48.5, lng: -2.75, zoom: 9 },
        "23": { name: "Creuse", lat: 46.3333, lng: 1.75, zoom: 9 },
        "24": { name: "Dordogne", lat: 45, lng: 0.75, zoom: 9 },
        "25": { name: "Doubs", lat: 47.1667, lng: 6.25, zoom: 9 },
        "26": { name: "Drôme", lat: 44.8333, lng: 5, zoom: 9 },
        "27": { name: "Eure", lat: 49, lng: 1.1667, zoom: 9 },
        "28": { name: "Eure-et-Loir", lat: 48.5, lng: 1.25, zoom: 9 },
        "29": { name: "Finistère", lat: 48.5, lng: -4, zoom: 9 },
        "2A": { name: "Corse-du-Sud", lat: 41.8333, lng: 9, zoom: 9 },
        "2B": { name: "Haute-Corse", lat: 42.25, lng: 9, zoom: 9 },
        "30": { name: "Gard", lat: 43.8333, lng: 4.1667, zoom: 9 },
        "31": { name: "Haute-Garonne", lat: 43.4167, lng: 1.5, zoom: 9 },
        "32": { name: "Gers", lat: 43.6667, lng: 0.6667, zoom: 9 },
        "33": { name: "Gironde", lat: 44.8333, lng: -0.5, zoom: 9 },
        "34": { name: "Hérault", lat: 43.6667, lng: 3.1667, zoom: 9 },
        "35": { name: "Ille-et-Vilaine", lat: 48.1667, lng: -1.6667, zoom: 9 },
        "36": { name: "Indre", lat: 46.8333, lng: 1.25, zoom: 9 },
        "37": { name: "Indre-et-Loire", lat: 47.25, lng: 0.6667, zoom: 9 },
        "38": { name: "Isère", lat: 45.5, lng: 5.8333, zoom: 9 },
        "39": { name: "Jura", lat: 46.75, lng: 5.8333, zoom: 9 },
        "40": { name: "Landes", lat: 44, lng: -0.75, zoom: 9 },
        "41": { name: "Loir-et-Cher", lat: 47.5, lng: 1.25, zoom: 9 },
        "42": { name: "Loire", lat: 45.75, lng: 4, zoom: 9 },
        "43": { name: "Haute-Loire", lat: 45.1667, lng: 3.75, zoom: 9 },
        "44": { name: "Loire-Atlantique", lat: 47.25, lng: -1.5, zoom: 9 },
        "45": { name: "Loiret", lat: 47.8333, lng: 2.25, zoom: 9 },
        "46": { name: "Lot", lat: 44.5, lng: 1.8333, zoom: 9 },
        "47": { name: "Lot-et-Garonne", lat: 44.1667, lng: 0.6667, zoom: 9 },
        "48": { name: "Lozère", lat: 44.5, lng: 3.3333, zoom: 9 },
        "49": { name: "Maine-et-Loire", lat: 47.4167, lng: -0.5, zoom: 9 },
        "50": { name: "Manche", lat: 49, lng: -1.3333, zoom: 9 },
        "51": { name: "Marne", lat: 49, lng: 4, zoom: 9 },
        "52": { name: "Haute-Marne", lat: 48, lng: 5.5, zoom: 9 },
        "53": { name: "Mayenne", lat: 48.25, lng: -0.75, zoom: 9 },
        "54": { name: "Meurthe-et-Moselle", lat: 48.6667, lng: 6.3333, zoom: 9 },
        "55": { name: "Meuse", lat: 49.1667, lng: 5.5, zoom: 9 },
        "56": { name: "Morbihan", lat: 47.75, lng: -2.8333, zoom: 9 },
        "57": { name: "Moselle", lat: 49, lng: 6.6667, zoom: 9 },
        "58": { name: "Nièvre", lat: 47, lng: 3.5, zoom: 9 },
        "59": { name: "Nord", lat: 50.6667, lng: 3, zoom: 9 },
        "60": { name: "Oise", lat: 49.3333, lng: 2.5, zoom: 9 },
        "61": { name: "Orne", lat: 48.6667, lng: -0.25, zoom: 9 },
        "62": { name: "Pas-de-Calais", lat: 50.6667, lng: 2.5, zoom: 9 },
        "63": { name: "Puy-de-Dôme", lat: 45.8333, lng: 3, zoom: 9 },
        "64": { name: "Pyrénées-Atlantiques", lat: 43.25, lng: -0.6667, zoom: 9 },
        "65": { name: "Hautes-Pyrénées", lat: 43, lng: 0, zoom: 9 },
        "66": { name: "Pyrénées-Orientales", lat: 42.5, lng: 2.75, zoom: 9 },
        "67": { name: "Bas-Rhin", lat: 48.5, lng: 7.5, zoom: 9 },
        "68": { name: "Haut-Rhin", lat: 47.8333, lng: 7.4167, zoom: 9 },
        "69": { name: "Rhône", lat: 45.75, lng: 4.8333, zoom: 9 },
        "70": { name: "Haute-Saône", lat: 47.6667, lng: 6, zoom: 9 },
        "71": { name: "Saône-et-Loire", lat: 46.6667, lng: 4.5, zoom: 9 },
        "72": { name: "Sarthe", lat: 47.8333, lng: 0.3333, zoom: 9 },
        "73": { name: "Savoie", lat: 45.5, lng: 6.25, zoom: 9 },
        "74": { name: "Haute-Savoie", lat: 46, lng: 6.5, zoom: 9 },
        "75": { name: "Paris", lat: 48.8566, lng: 2.3522, zoom: 12 },
        "76": { name: "Seine-Maritime", lat: 49.6667, lng: 0.75, zoom: 9 },
        "77": { name: "Seine-et-Marne", lat: 48.5, lng: 2.6667, zoom: 9 },
        "78": { name: "Yvelines", lat: 48.75, lng: 1.8333, zoom: 9 },
        "79": { name: "Deux-Sèvres", lat: 46.3333, lng: -0.3333, zoom: 9 },
        "80": { name: "Somme", lat: 49.8333, lng: 2.5, zoom: 9 },
        "81": { name: "Tarn", lat: 43.9167, lng: 2.1667, zoom: 9 },
        "82": { name: "Tarn-et-Garonne", lat: 44, lng: 1.25, zoom: 9 },
        "83": { name: "Var", lat: 43.5, lng: 6.25, zoom: 9 },
        "84": { name: "Vaucluse", lat: 43.9167, lng: 5.1667, zoom: 9 },
        "85": { name: "Vendée", lat: 46.6667, lng: -1.3333, zoom: 9 },
        "86": { name: "Vienne", lat: 46.6667, lng: 0.1667, zoom: 9 },
        "87": { name: "Haute-Vienne", lat: 45.8333, lng: 1.25, zoom: 9 },
        "88": { name: "Vosges", lat: 48.25, lng: 6.25, zoom: 9 },
        "89": { name: "Yonne", lat: 47.9167, lng: 3.5, zoom: 9 },
        "90": { name: "Territoire de Belfort", lat: 47.6667, lng: 6.8333, zoom: 9 },
        "91": { name: "Essonne", lat: 48.5, lng: 2.25, zoom: 9 },
        "92": { name: "Hauts-de-Seine", lat: 48.8333, lng: 2.25, zoom: 10 },
        "93": { name: "Seine-Saint-Denis", lat: 48.9167, lng: 2.4167, zoom: 10 },
        "94": { name: "Val-de-Marne", lat: 48.75, lng: 2.5, zoom: 10 },
        "95": { name: "Val-d'Oise", lat: 49.0833, lng: 2.1667, zoom: 9 },
        "971": { name: "Guadeloupe", lat: 16.25, lng: -61.5833, zoom: 10 },
        "972": { name: "Martinique", lat: 14.6667, lng: -61, zoom: 10 },
        "973": { name: "Guyane", lat: 3, lng: -53, zoom: 6 },
        "974": { name: "La Réunion", lat: -21.1333, lng: 55.5, zoom: 10 },
        "975": { name: "Saint-Pierre-et-Miquelon", lat: 46.8333, lng: -56.3333, zoom: 10 },
        "976": { name: "Mayotte", lat: -12.8333, lng: 45.1667, zoom: 10 }
    };
    useEffect(() => {
        
        if(selectedArticleIndex !== false) {
            const contribution = contributions[selectedArticleIndex];
            if(contribution && mapRef.current) {
                const { lat, lng } = contribution.latlong;
                mapRef.current.flyTo([lat, lng], 12, {
                    duration: 0.5 // Réglage de la durée de l'animation (en secondes)
                });
            }
            
        }
    }, [selectedArticleIndex])


    useEffect(() => {
        if(mapRef.current) {
            if(isDomSelected) {
                //mapRef.current.setZoom(2)
                mapRef.current.fitWorld()
            }
            else {
                mapRef.current.flyTo([46.227638, 2.213749], 6, {duration: 0.5})
            }
        }
    }, [isDomSelected])

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const paramDepartement = parseInt(urlParams.get('departementCode'));

        console.log('Query String:', queryString); // Debugging log
        console.log('URL Params:', urlParams.toString()); // Debugging log
        console.log('Departement Code:', paramDepartement); // Debugging log

        // Debugging to ensure paramDepartement and mapRef.current are defined
        if (paramDepartement && mapRef.current) {
            console.log('paramDepartement is defined and mapRef.current is not null.');
            console.log('Departement Code:', paramDepartement); 
            const location = departementLocations[paramDepartement];

            
            if (location) {
                console.log('Location found for departement code:', paramDepartement);
                mapRef.current.flyTo([location.lat, location.lng], location.zoom);
                console.log("Le code du département est reconnu et la carte a été centrée.");
            } else {
                console.log("Le code du département n'est pas reconnu.");
            }
        } else {

            
            console.log('paramDepartement or mapRef.current is not defined or is falsy.');
        }
    }, [window.location.search]); 
    
    
    return (
        <MapContainer attributionControl={false} className={styles.container} center={[46.227638, 2.213749]} zoom={6} minZoom={3} maxZoom={15} scrollWheelZoom={true} zoomControl={false} ref={mapRef}>
            <TileLayer
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MarkerClusterGroup chunkedLoading polygonOptions={{
                fillColor: 'rgba(255, 235, 129, 0)',
                color: 'rgba(255, 235, 129, 0)',
                weight: 5,
                opacity: 1,
                fillOpacity: 0.8,
            }}>
                {contributions.map((contribution, index) => {

                    const isDom = ['97', '98'].includes(contribution.departement.slice(0,2))
                    
                    if(isDomSelected) {
                       if(!isDom) return null
                    } else {
                        if(isDom) return null
                    }
                    
                    let icon;
                    // Logique pour choisir l'icône en fonction du nom de la catégorie
                    if (contribution.categoriesName === "Tractage") {
                        icon = Tractage;
                    } else if (contribution.categoriesName === "Réunion publique") {
                        icon = Reunion;
                    } else if (contribution.categoriesName === "Audience") {
                        icon = Audience;
                    } else if (contribution.categoriesName === "Tour de France des écoles") {
                        icon = Tour;
                    } else if (contribution.categoriesName === "Stage") {
                        icon = Stage;
                    } else if (contribution.categoriesName === "Ris") {
                        icon = Ris;
                    } else if (contribution.categoriesName === "Manifestation / Rassemblement") {
                        icon = Manif;
                    } else if (contribution.categoriesName === "Conférence de presse") {
                        icon = Conference;
                    } else if (contribution.categoriesName === "Assemblée générale") {
                        icon = Assemble;
                    } else {
                        icon = BoatIcon;
                    }

                    if(selectedCategoriesId.length === 0 || selectedCategoriesId.some((catId) => contribution.categories === catId)) {
                        return <Marker icon={icon} eventHandlers={{ click: () => onClickMarqueur(index), mouseover: (event) => event.target.openPopup(), mouseout: (event) => event.target.closePopup()}} key={index} position={[contribution.latlong.lat, contribution.latlong.lng]}><Popup><div className={styles.popupContainer}><div className={styles.containerInfo}><div>{contribution.categories.typeAction}</div><h2>{parse(contribution.title)}</h2><h3>{contribution.subtitle}</h3></div></div></Popup></Marker>
                    }
                    return null;
                })}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default Map;

