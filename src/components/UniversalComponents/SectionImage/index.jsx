import React from 'react';
import styles from './sectionimage.module.css'
const SectionImage = ({ imageToShow }) => {
    return (
        <>
            <picture >
                <img src={imageToShow}
                    alt="Alt Text!"
                    className={styles.sectionImage}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="400"
                    data-aos-once="true" />
            </picture>
        </>
    );
}

export default SectionImage;