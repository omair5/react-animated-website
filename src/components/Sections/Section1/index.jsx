import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionText from '../../UniversalComponents/SectionText';
import SectionImage from '../../UniversalComponents/SectionImage';
import styles from '../section.module.css'
import Section1Img from '../images/smartfren.webp';
const sectionPara = 'Huddlefire is an events app similar to Facebook events or evite that lets users create online and offline events with a key feature being votable scheduling to allow invitees to easily choose a time slot that works for the maximum number of participants.'

const Section1 = () => {
    return (
        <>
            <Container className={styles.sectionContainers}>
                < Row >
                    <Col md={5} className={styles.column1}>
                        {/* THIS COMPONENT IS USED FROM UNIVERSAL COMPONENTS */}
                        <SectionText
                            sectionNumber={'01'}
                            sectionHeading={'Huddlefire'}
                            sectionPara={sectionPara}
                            sectionColor={'rgb(251, 114, 114)'} />
                    </Col>

                    <Col md={7}>
                        {/* THIS COMPONENT IS USED FROM UNIVERSAL COMPONENTS */}

                        <SectionImage
                            imageToShow={Section1Img}
                        />
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default Section1;