import React from "react";
import { Container, Nav, Navbar, NavItem} from "react-bootstrap";


const SideNav = () => {
    return (
        <Navbar>
            <Navbar.Collapse>
                <Nav>
                    <NavItem href="#">Home</NavItem>
                    <NavItem href="#">Profile</NavItem>
                    <NavItem href="#">Reports</NavItem>
                    <NavItem href="#">Settings</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};


export default function Dashboard(){
    return(
        <div>
            {/*<Container>*/}
                <SideNav/>
                <h1>Welcome to the dashboard!</h1>
                <p>Here you can view and manage your data.</p>
            {/*</Container>*/}
        </div>

    )
}