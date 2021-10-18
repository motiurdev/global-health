import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand><Link to="/home" className="logo">Global Health</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="navLink" to="/home">Home</NavLink>
                            <NavLink className="navLink" to="/about">About Us</NavLink>
                            <NavLink className="navLink" to="/login">Login</NavLink>
                            <NavLink className="navLink" to="/register">Registration</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;