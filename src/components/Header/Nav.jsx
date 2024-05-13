import { useState } from 'react'
import { useNavStore } from '../../NavStore'

import styles from './Nav.module.scss'


const Nav = () => {
    
    const {setCurrentNav} = useNavStore()
    
    return (
        <nav className={styles.navContainer}>

            <button onClick={()=> setCurrentNav('filters')} className={styles.navButton}>Filtrer les événements<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.63636 9.18185C3.5401 9.18185 4.27273 8.44922 4.27273 7.54548C4.27273 6.64174 3.5401 5.90912 2.63636 5.90912C1.73262 5.90912 1 6.64174 1 7.54548C1 8.44922 1.73262 9.18185 2.63636 9.18185Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.54554 5.90908C8.44928 5.90908 9.18191 5.17645 9.18191 4.27272C9.18191 3.36898 8.44928 2.63635 7.54554 2.63635C6.6418 2.63635 5.90918 3.36898 5.90918 4.27272C5.90918 5.17645 6.6418 5.90908 7.54554 5.90908Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4545 11.3635C13.3582 11.3635 14.0908 10.6309 14.0908 9.72718C14.0908 8.82345 13.3582 8.09082 12.4545 8.09082C11.5507 8.09082 10.8181 8.82345 10.8181 9.72718C10.8181 10.6309 11.5507 11.3635 12.4545 11.3635Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.63647 1V5.90909" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4546 1V8.09091" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.54541 1V2.63636" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.63647 9.18182V13" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4546 11.3636V12.9999" stroke="white" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.54541 5.90912V13" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></svg> </button>
            <div>
                <button>HEXAGONE</button>
                <button>OUTRE-MER</button>                
            </div> 
        </nav>
    )
}



export default Nav