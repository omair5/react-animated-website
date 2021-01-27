import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './navbar.module.css'
import { Animated } from "react-animated-css";
import { Link } from "react-scroll";

const MyNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant='dark' className={styles.MainContainer}>
                <Navbar.Brand className={'d-flex align-items-center ml-5'} >

                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60.000000pt" height="60.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#095fe9" stroke="none">
                            <path
                                d="M2400 4525 c-227 -36 -454 -145 -690 -332 -150 -119 -492 -471 -657
                                    -677 -286 -357 -381 -542 -448 -872 -77 -380 34 -724 360 -1111 194 -231 665
                                    -652 910 -815 169 -111 338 -181 570 -233 207 -47 343 -44 533 11 283 81 495
                                    225 832 563 324 325 569 634 680 856 69 139 109 255 144 425 77 363 -26 704
                                    -326 1079 -173 216 -673 669 -927 840 -184 124 -388 206 -634 255 -141 29
                                    -219 31 -347 11z m325 -775 c117 -176 139 -335 77 -564 -42 -157 -44 -242 -4
                                    -317 36 -69 79 -99 144 -99 27 0 62 7 77 15 43 22 80 72 87 116 8 47 9 47 97
                                    -12 90 -61 244 -221 292 -303 92 -159 120 -273 112 -450 -6 -138 -23 -202 -86
                                    -323 -82 -158 -227 -298 -404 -389 -84 -44 -226 -98 -234 -90 -2 2 22 18 54
                                    36 74 42 182 146 216 208 95 175 70 388 -67 569 -61 80 -153 157 -339 284
                                    -220 150 -289 227 -291 326 -1 24 -2 43 -4 43 -1 0 -20 -27 -41 -59 -45 -70
                                    -67 -158 -56 -228 9 -63 42 -128 115 -224 80 -107 97 -175 65 -257 -19 -45
                                    -56 -76 -112 -91 -65 -18 -125 8 -170 72 -22 32 -27 49 -26 103 0 35 -3 64 -7
                                    64 -13 0 -101 -101 -140 -161 -87 -134 -104 -311 -42 -443 33 -71 128 -179
                                    189 -218 47 -28 36 -32 -28 -9 -170 59 -323 168 -413 295 -99 139 -144 269
                                    -153 441 -9 177 25 333 112 520 90 193 196 329 483 620 115 116 227 238 251
                                    273 106 157 137 289 95 407 -12 34 105 -86 151 -155z"
                            />
                        </g>
                    </svg>
                    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true} animationInDuration={2000} >
                        <p className={styles.companyName}>CodeFox</p>
                    </Animated>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link
                            to="header"
                            smooth={true}
                            duration={700}
                        >
                            <Nav.Link className={`${styles.navlink} px-5 text-center`}>HOME</Nav.Link>
                        </Link>

                        <Link
                            to="section"
                            smooth={true}
                            duration={700}
                        >
                            <Nav.Link className={`${styles.navlink} px-5 text-center`}>PROJECTS</Nav.Link>
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={700}
                        >
                            <Nav.Link className={`${styles.navlink} px-5 text-center`}>ABOUT</Nav.Link>
                        </Link>

                        <Link
                            to="services"
                            smooth={true}
                            duration={700}
                        >
                            <Nav.Link className={`${styles.navlink} px-5 text-center`}>SERVICES</Nav.Link>
                        </Link>

                        <Link
                            to="footer"
                            smooth={true}
                            duration={700}
                        >
                            <Nav.Link className={`${styles.navlink} px-5 text-center`}>CONTACT</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyNavbar;