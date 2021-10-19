import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand><Link to="/home" className="logo">Global Health</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="navLink mt-2" to="/home">Home</NavLink>
                            <NavLink className="navLink mt-2" to="/about">About Us</NavLink>
                            {user?.email ?
                                <button className="menu-btn" onClick={logOut}>
                                    <img className="menu-img" src={user?.photoURL} alt="" />
                                    <span className="px-2">{user?.displayName}</span>
                                    <i class="fas fa-sign-out-alt"></i>
                                </button>
                                :
                                <NavLink className="navLink menu-btn" to="/login">Login</NavLink>}
                            <NavLink className="navLink menu-btn ms-2" to="/register">Registration</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;