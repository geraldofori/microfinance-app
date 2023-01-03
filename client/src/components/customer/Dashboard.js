import React from "react";
import {Button, Container, Nav, Navbar, NavItem} from "react-bootstrap";




export default function Dashboard(){
    return(
        <div>
            <Container>
                <h1>Welcome to the dashboard!</h1>
                <p>Here you can view and manage your data.</p>
                <div>
                    <Button href='/takeLoan'>Take a Loan</Button>
                </div>
            </Container>
        </div>

    )
}