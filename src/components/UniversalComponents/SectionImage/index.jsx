import React from 'react';
import styles from './sectionimage.module.css'
const SectionImage = ({imageToShow}) => {
    return (
        <>
            <picture >
                <img src={imageToShow} alt="Alt Text!" className={styles.sectionImage}/>
            </picture>
        </>
    );
}

export default SectionImage;