import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionText from '../../UniversalComponents/SectionText';
import SectionImage from '../../UniversalComponents/SectionImage';
import styles from '../section.module.css'
import Section2Img from '../images/sellflow.webp'
const sectionPara = 'Sellflow is a mobile commerce app that directly integrates into the Shopify backend to allow online stores to create a full-featured mobile app with minimal effort. Out of the box Sellflow supports internationalization, customization, payment with Apple Pay and a wide range of production-ready features for online store owners.'

const Section2 = () => {
    return (
        <>
            <Container className={styles.sectionContainers}>
                < Row >
                    <Col md={7}>
                        {/* THIS COMPONENT IS USED FROM UNIVERSAL COMPONENTS */}
                        <SectionImage
                            imageToShow={Section2Img} />
                    </Col>

                    <Col md={5} className={styles.column1}>
                        {/* THIS COMPONENT IS USED FROM UNIVERSAL COMPONENTS */}
                        <SectionText
                            sectionNumber={'02'}
                            sectionHeading={'Sellflow'}
                            sectionPara={sectionPara}
                            sectionColor={'rgb(12, 183, 150)'} />
                    </Col>

                </Row>
            </Container>

        </>
    );
}

export default Section2;