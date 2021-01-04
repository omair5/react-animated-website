import React from 'react';
import styles from './FooterContactUs.module.css'
import { faGithub, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FooterContactUs = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h1>Let's Make It Happen!</h1>
                <h3>Our doors are always open for your ideas.</h3>
                <h3>Connect with us</h3>
                <h1>hello@codefox.com</h1>
                <div>
                    <FontAwesomeIcon icon={faGithub} className={styles.socialIcons}/>
                    <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcons}/>
                    <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons}/>
                    <FontAwesomeIcon icon={faInstagram} className={styles.socialIcons}/>
                </div>

            </div>
        </>
    );
}
export default FooterContactUs;