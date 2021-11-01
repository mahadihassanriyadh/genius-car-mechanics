import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
                <Container>
                <Navbar.Brand as={Link} to="/home">Genius Car Mechanics</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {
                            user?.email ?
                            <Button onClick={logOut} variant="link">Log Out</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <Link to="/login">{user?.displayName}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;