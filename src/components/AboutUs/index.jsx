import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './about.module.css'
import AboutUsImg from './aboutus.webp'
const AboutUs = ({ id }) => {
    return (
        <>
            <Container className={styles.aboutUs} id={id}>
                {/* mainHeadings class is used from app.css */}
                <div className='mainHeadings'>
                    <h1>ABOUT US</h1>
                    <h2>We Are CodeFox</h2>
                </div>
                <Row className={styles.aboutUsContainer}>
                    <Col md={7} >
                        <img src={AboutUsImg} alt="about us" className={styles.aboutusimage} data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true" />
                    </Col>

                    <Col md={5} className={styles.aboutustext}>
                        <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="600" data-aos-once="true">
                            We are a team of software engineers, product designers and industry leaders with a passion for building rich user interfaces
                            and making the world’s software experience more delightful. We specialize in React, React Native, Node, TypeScript and Rust —
                            leading edge technologies for building best-in-class iOS, Android and web apps.
                            We are a team of software engineers, product designers and industry leaders with a passion for building rich user interfaces
                            and making the world’s software experience more delightful.
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default AboutUs;