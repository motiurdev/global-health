import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import brandLogo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
                <Container>
                    {/* logo */}
                    <Navbar.Brand><Link to="/home" className="logo">
                        <img src={brandLogo} width="100" alt="" />
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* navbar */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="navLink menu-btn my-1" to="/home">Home</NavLink>
                            <NavLink className="navLink menu-btn my-1" to="/about">About</NavLink>
                            {user?.email ?
                                <button className="menu-btn me-2 my-1" onClick={logOut}>
                                    <img className="menu-img" src={user?.photoURL} alt="" />
                                    <span className="px-2">{user?.displayName.slice(0, 13)}</span>
                                    <i class="fas fa-sign-out-alt"></i>
                                </button>
                                :
                                <NavLink className="navLink menu-btn my-1" to="/login">Login</NavLink>}
                            <NavLink className="navLink menu-btn my-1" to="/appointment">Appointment</NavLink>
                            <NavLink className="navLink menu-btn my-1" to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;