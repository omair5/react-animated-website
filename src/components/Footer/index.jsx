import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FooterContactUs from './FooterContactUs';
import FooterForm from './FooterForm';
import styles from './footer.module.css'
const Footer = ({id}) => {
    return (
        <>
            <div className={styles.mainContainer} id={id}>
                <Container >
                    <Row className={styles.rowContainer}>
                        {/* FOOTER CONTACT US */}
                        <Col xs={12} md={6} className='m-auto' >
                            <FooterContactUs />
                        </Col>
                        {/* FOOTER FORM */}
                        <Col xs={12} md={6} className={`${styles.column2} m-auto`}>
                            <FooterForm />
                        </Col>
                    </Row>
                    <hr className={styles.hrLine} />
                    <p>© 2020 Practice Website, Inc. All rights reserved.</p>
                </Container>
            </div>
        </>
    );
}

export default Footer;