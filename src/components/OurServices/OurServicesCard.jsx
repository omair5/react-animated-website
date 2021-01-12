import React from 'react';
import styles from './ourservicescard.module.css'
const OurServicesCard = ({ count, heading, description }) => {
    return (
        <>
            <div className={styles.cardContainer} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="600" data-aos-once="true" >
                <h5 className={styles.numbering}>{count}</h5>
                <h5>{heading}</h5>
                <p>{description}</p>
            </div>
        </>
    );
}

export default OurServicesCard;