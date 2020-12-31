import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionText from '../../UniversalComponents/SectionText';
import SectionImage from '../../UniversalComponents/SectionImage';
import styles from '../section.module.css'
import Section3Img from '../images/comdash.webp'
const sectionPara = 'Comdash is a web application for business intelligence including visualizing, tracking, and comparing sales across several verticals. This dashboard was built around interactive widgets, each customizable to a specific data set, allowing comprehensive and responsive data visualization'

const Section3 = () => {
    return (
        <>
            <Container className={styles.sectionContainers}>
                < Row >

                    <Col md={5} className={styles.column1}>
                        {/* THIS COMPONENT IS USED FROM UNIVERSAL COMPONENTS */}
                        <SectionText
                            sectionNumber={'03'}
                            sectionHeading={'Comdash'}
                            sectionPara={sectionPara}
                            sectionColor={'rgb(81, 147, 228)'} />
                    </Col>

                    <Col md={7}>
                        {/* THIS COMPONENT IS USED FROM UNIVERSAL COMPONENTS */}
                        <SectionImage
                            imageToShow={Section3Img} />
                    </Col>

                </Row>
            </Container>

        </>
    );
}

export default Section3;