import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { Display } from 'react-bootstrap-icons'
import { HashLink } from 'react-router-hash-link'
import {
    BrowserRouter as Router
} from "react-router-dom";



export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Router>
            <Navbar Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    {/* <Navbar.Brand href="#home"><img src={logo} alt='Logo'></img></Navbar.Brand> */}
                    <Navbar.Brand href="#home"><p style={{ color: 'white', fontSize: '50px', fontWeight: 800, paddingTop: '10px', opacity: 0.95 }}>SP</p></Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/me-sachin-pandey' target='_blank'><img src={navIcon1} alt='' /></a>
                                <a href='https://www.facebook.com/profile.php?id=100043741883945' target='_blank'><img src={navIcon2} alt='' /></a>
                                <a href='https://www.instagram.com/sachin_pandey.__/' target='_blank'><img src={navIcon3} alt='' /></a>
                            </div>
                            {/* <button className='vvd'  onClick={ () => console.log('connect')}><span>Let's Connect</span></button> */}
                            <a href='https://www.linkedin.com/in/me-sachin-pandey' target='_blank'><button className='vvd' onClick={() => console.log('connect')}>Let's Connect</button></a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Router>
    )
}