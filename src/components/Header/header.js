import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import "./header.css";
import logo from "../../assets/images/logo_dzvezda.png"
import {StorageService, subscriber} from "../../service/StorageService"
import UserService from "../../service/UserService";
import GoldenLadderService from "../../service/GoldenLadderService";

const header = (props) => {

    let username = UserService.getLoggedInUser();
    let searchInput = '';
    const userUrl = "/users/" + username;
    const getChange = () => {
        username = UserService.getLoggedInUser();
        console.log(username);
    }

    subscriber.subscribe((v) => {
        getChange();
    })

    const onInputChange = (event) => {
        searchInput = event.target.value;
    }

    const onInputSearch = () => {
        GoldenLadderService.searchInput(searchInput)
            .then((data) => {
                StorageService.setSearchResults(data.data); //[{id:1,name:'name1',type:'movie'}]
                window.location.pathname = "/search";
            })
            .catch(() => {

            });
    }

    return (
        <header>
            <Navbar expand="lg" className="my-navbar">
                <Navbar.Brand href="/home" className="gold">Golden Ladder
                    <img className={"logo"} src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-4">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"
                                     onChange={onInputChange}/>
                        <Button variant="outline-warning" onClick={onInputSearch}>
                            Search </Button>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" className="gold">Home</Nav.Link>
                        <Nav.Link href="/movies" className="gold">Movies</Nav.Link>
                        {/*<Nav.Link href="/actors" className="gold">Actors</Nav.Link>*/}
                    </Nav>
                    {
                        username === undefined &&
                        <Nav className="mr-0">
                            <Nav.Link href="/login" className="gold">Log in</Nav.Link>
                            <Nav.Link href="/register" className="gold">Register</Nav.Link>
                        </Nav>
                    }
                    {
                        username !== undefined &&
                        <Nav className="mr-0">
                            <Nav.Link href={userUrl} className="gold">User</Nav.Link>
                            <Nav.Link href="/logout" className="gold">Log out</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
};

export default header;
