import React from 'react';
import styles from './ourservicescard.module.css'
const OurServicesCard = ({count,heading,description}) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <h5 className={styles.numbering}>{count}</h5>
                <h5>{heading}</h5>
                <p>{description}</p>
            </div>
        </>
    );
}

export default OurServicesCard;