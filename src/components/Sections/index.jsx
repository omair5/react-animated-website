import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Section = () => {
    return (
        <>
            {/* THIS mainHeadings class is used from app.scss */}
            <div className='mainHeadings'>
                <h1>OUR PROJECTS</h1>
                <h2>We Deliver Quality & Excellence</h2>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
}

export default Section;