import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OurServicesCard from './OurServicesCard';
const OurServices = () => {
    return (
        <>
            <div className='mainHeadings'>
                <h1>OUR SERVICES</h1>
                <h2>We Are Ready to Help</h2>
                <Container>
                    {/* this is row 1 */}
                    <Row style={{marginTop:'2rem'}}>
                        <Col md={6}>
                            <OurServicesCard
                                count='01'
                                heading='CTO as a Service'
                                description='Don’t have a technical co-founder yet? Need to jump start your MVP to get ahead of your next funding round? We have the experience you need.'
                            />
                        </Col>
                        <Col md={6}>
                        <OurServicesCard
                                count='02'
                                heading='Product Development'
                                description='Need to ship world-class software? We can be your product team or we can augment your existing team, helping you hit launch goals without compromise.'
                            />
                        </Col>
                    </Row>

                    {/* this is row 2 */}
                    <Row style={{marginTop:'2rem'}}>
                        <Col md={6}>
                        <OurServicesCard
                                count='03'
                                heading='Technology Training'
                                description='Need to level-up your team’s knowledge? Planning to adopt React or React Native or TypeScript? Talk to us about on-site training.'
                            />
                        </Col>
                        <Col md={6}>
                        <OurServicesCard
                                count='04'
                                heading='Consulting and Advising'
                                description='Need help navigating technical decisions, defining and implementing processes or migrating to modern technology? We can help.'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default OurServices;