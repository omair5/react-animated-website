import React from 'react';
import MyNavbar from '../Navbar'
import styles from './content.module.css'
import Typed from 'react-typed';
import MyButton from '../UniversalComponents/MyButton/MyButton';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderImage from './code.svg'
import { faReact, faNodeJs, faSass, faHtml5, faBootstrap, faAngular } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Animated } from "react-animated-css";



const Content = () => {
    return (
        <div className={styles.overlayForContent}>
            <MyNavbar />
            <Container fluid >
                <Row>
                    <Col md={8} xs={12}>
                        <div className={styles.ContentContainer}>
                            <h1>
                                Excellence in <Typed
                                    strings={[
                                        'Development',
                                        'Management',
                                        'Marketing']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop >
                                </Typed>
                            </h1>
                            <Animated animationIn="bounceInLeft" isVisible={true} animationInDuration={2000}>
                                <p>
                                    We specialize in React, React Native, Node, TypeScript and Rust — leading edge technologies
                                    for building best-in-class iOS, Android and web apps.
                                    We specialize in React, React Native, Node, TypeScript and Rust — leading edge technologies
                                    for building best-in-class iOS, Android and web apps.
                             </p>
                            </Animated>
                            <div className={styles.buttonContainer}>
                                <MyButton title='Contact Us' />
                                <MyButton title='Learn More' />
                            </div>
                        </div>
                    </Col>

                    {/*2nd COLUMN FOR SVG  */}
                    <Col md={4} xs={12} >
                        <div className={styles.ImageContainer}>
                            <img src={HeaderImage} alt="coding" className={styles.svgAnimation} />
                        </div>
                    </Col>
                </Row>
            </Container >

            {/* FOR TECHNOLOGY ICONS */}
            <div className={styles.TechnologyContainer}>
                <Container >
                    <Row>
                        <Col md={3} xs={12} className={styles.technology}>
                            <h1>OUR TECHNOLOGIES</h1>
                        </Col>
                        <Col md={9} xs={12} className={styles.IconContainer}>
                            <FontAwesomeIcon icon={faReact} className={styles.icons} />
                            <FontAwesomeIcon icon={faHtml5} className={styles.icons} />
                            <FontAwesomeIcon icon={faNodeJs} className={styles.icons} />
                            <FontAwesomeIcon icon={faBootstrap} className={styles.icons} />
                            <FontAwesomeIcon icon={faSass} className={styles.icons} />
                            <FontAwesomeIcon icon={faAngular} className={styles.icons} />

                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
}

export default Content;