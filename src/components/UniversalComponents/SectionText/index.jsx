import React from 'react';
import styles from './sectiontext.module.css'
const SectionText = ({ sectionNumber, sectionHeading, sectionPara, sectionColor }) => {

    return (
        <>
            <div className={styles.sectionTextContainer}>
                <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="600" data-aos-once="true" >
                    <h4 style={{ color: sectionColor }}><hr className={styles.dash} style={{ background: sectionColor }} />{sectionNumber}</h4>
                    <h1 style={{ color: sectionColor }}>{sectionHeading}</h1>
                </div>
                <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="600" data-aos-once="true" >
                    {sectionPara}
                </p>
            </div>
        </>
    );
}

export default SectionText;