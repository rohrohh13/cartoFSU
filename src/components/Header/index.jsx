import logo from '../../assets/logo-fsu.png'
import { Popper } from '@mui/base/Popper';
import { styled, css } from '@mui/system';
import styles from './Header.module.scss'
import Nav from './Nav'
function Header() {


    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src={logo} alt={"FSU"} />
                <h1>Information, mobilisation, action, <br/>formation : tous les événements</h1>
                <p>SUR LE TERRAIN !</p>
            </div>
            <Nav/>  
        </header>
    )
}

export default Header