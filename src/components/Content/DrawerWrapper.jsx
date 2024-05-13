import { Drawer } from '@mui/material'

import { useNavStore } from '../../NavStore'
import styles from './DrawerWrapper.module.scss'

const DrawerWrapper = ({isOpen, variant, onClose, children}) => {
    
    const setCurrentNav = useNavStore(state => state.setCurrentNav)

    const variantStyle = variant === 'dark' ? {backgroundColor: '#1D1D1B', color: '#fff',height:'auto'} : {}

    return (
        <Drawer PaperProps={{className: styles.drawerPaper, style: variantStyle}} className={styles.infoDrawer} anchor={'left'} open={isOpen} hideBackdrop={true}>
            <svg className={styles.closeBtn} onClick={() => onClose ? onClose() : setCurrentNav('')} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.closeBtnCircle} d="M11.5 22C17.299 22 22 17.299 22 11.5C22 5.70101 17.299 1 11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22Z" fill="#FFED00" stroke="#FFED00" strokeLinecap="round" strokeLinejoin="round"/>
                <path className={styles.closeBtnStroke} d="M14.9998 7.99876L7.99976 14.9988" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                <path className={styles.closeBtnStroke} d="M7.99976 7.99876L14.9998 14.9988" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <div className={styles.drawerContent}>
                {children}
            </div>
        </Drawer>
    )
}

export default DrawerWrapper