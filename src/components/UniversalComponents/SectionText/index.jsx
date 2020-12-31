import React from 'react';
import styles from './sectiontext.module.css'
const SectionText = ({ sectionNumber, sectionHeading, sectionPara, sectionColor }) => {
   
    return (
        <>
            <div className={styles.sectionTextContainer}>
                <h4 style={{ color: sectionColor }}><hr className={styles.dash} style={{ background: sectionColor }} />{sectionNumber}</h4>
                <h1 style={{ color: sectionColor }}>{sectionHeading}</h1>
                <p>
                    {sectionPara}
                </p>
            </div>
        </>
    );
}

export default SectionText;