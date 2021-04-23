import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import "./header.css";
import logo from "../../assets/images/logo_dzvezda.png"

const header = (props) => {
    return (
        <header>
            <Navbar expand="lg" className="my-navbar">
                <Navbar.Brand href="#home" className="gold">Golden Ladder
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-4">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" className="gold">Home</Nav.Link>
                        <Nav.Link href="/movies" className="gold">Movies</Nav.Link>
                        <Nav.Link href="/tvSeries" className="gold">TV Shows</Nav.Link>
                    </Nav>
                    <Nav className="mr-0">
                        <Nav.Link href="/login" className="gold">Log in</Nav.Link>
                        <Nav.Link href="/register" className="gold">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
};

export default header;
