import React from 'react';
import Particles from 'react-particles-js';
const BackgroundParticles = () => {
    return (
        <>
            <Particles
                style={{ backgroundColor: 'black', position: 'absolute', zIndex: -100 }}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                }} />
        </>
    );
}

export default BackgroundParticles;