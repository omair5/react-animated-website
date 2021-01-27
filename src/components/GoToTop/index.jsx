import React, { useState } from 'react';
import styles from './gototop.module.css'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animateScroll as scroll } from "react-scroll";

const GoToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)

        }
        else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll', checkScrollTop)
    return (
        <>
            <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                className={styles.gototop}
                style={{ display: showScroll ? 'block' : 'none' }}
                onClick={scrollToTop} />
        </>
    );
}

export default React.memo(GoToTop);