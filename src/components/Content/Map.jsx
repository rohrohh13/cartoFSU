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
import { MapContainer, TileLayer, Marker, ZoomControl,Popup } from 'react-leaflet'
import styles from './Map.module.scss'

const Map = ({ contributions, selectedCategoriesId, onClickMarqueur, selectedArticleIndex }) => {
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


                    let icon;
                    // Logique pour choisir l'icône en fonction du nom de la catégorie
                    if (contribution.categoriesName === "Tractage") {
                        icon = Tractage;
                    } else if (contribution.categoriesName === "Réunion publique") {
                        icon = Reunion;
                    } else if (contribution.categoriesName === "Audience") {
                        icon = Audience;
                    } else if (contribution.categoriesName === "Tour de France") {
                        icon = Tour;
                    } else if (contribution.categoriesName === "Stage") {
                        icon = Stage;
                    } else if (contribution.categoriesName === "Ris") {
                        icon = Ris;
                    } else if (contribution.categoriesName === "Manifestation") {
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

