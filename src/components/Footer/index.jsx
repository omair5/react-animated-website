import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FooterContactUs from './FooterContactUs';
import FooterForm from './FooterForm';
import styles from './footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <Container >
                    <Row className={styles.rowContainer}>
                        {/* FOOTER CONTACT US */}
                        <Col >
                            <FooterContactUs />
                        </Col>
                        {/* FOOTER FORM */}
                        <Col className={styles.column2}>
                            <FooterForm />
                        </Col>
                    </Row>
                    <hr className={styles.hrLine}/>
                    <p>© 2020 Practice Website, Inc. All rights reserved.</p>
                </Container>
            </div>
        </>
    );
}

export default Footer;