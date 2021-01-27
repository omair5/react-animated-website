import React from 'react';
import BackgroundParticles from '../Background'
import Content from '../Content';
import GoToTop from '../GoToTop';
import styles from './header.module.css'
const Header = ({ id }) => {
    return (
        <>
            <div className={styles.header} id={id}>
                <BackgroundParticles />
                <Content />
                <GoToTop />
            </div>
        </>
    );
}

export default Header;