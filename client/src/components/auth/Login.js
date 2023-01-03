import React, {useState} from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Axios from "axios";

export default function Login() {

    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('http://localhost:3005/admin/login', {
            email: email,
            password: password
        })
            .then(response => {
                console.log('Successful login');
                if(response.status === 200){
                    window.location.href = '/dashboard';
                }
            })
            .catch(error => {
                console.log('Unsuccessful login');
            });
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        Microfinance | Customer Login
                                    </h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label className="text-center">Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="password">
                                                <Form.Label className="text-center">Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </Form.Group>


                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{' '}
                                                <a href="/register" className="text-primary fw-bold">
                                                    Register
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}