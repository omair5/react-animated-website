import React from 'react';
import BackgroundParticles from '../Background'
import Content from '../Content';
import styles from './header.module.css'
const Header = () => {
    return (
        <>
            <div className={styles.header} >
                <BackgroundParticles />
                <Content />

            </div>
        </>
    );
}

export default Header;