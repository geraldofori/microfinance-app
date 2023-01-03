import React, {useState} from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Axios from 'axios'

export default function Register() {

    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [maritalStatus, setMaritalStatus]= useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [nameOfEmployer, setNameOfEmployer] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [cardType, setCardType] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            firstname: firstName,
            lastName: lastName,
            email: email,
            password: password,
            maritalStatus: maritalStatus,
            employmentStatus: employmentStatus,
            nameOfEmployer: nameOfEmployer,
            dateOfBirth: dateOfBirth,
            cardType: cardType,
            address: address,
            phoneNumber: phoneNumber
        }

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
                                        Microfinance | Customer Sign up
                                    </h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="firstName">
                                                <Form.Label className="text-center">First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    value={firstName}
                                                    onChange={e => setFirstName(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="lastName">
                                                <Form.Label className="text-center">Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    value={lastName}
                                                    onChange={e => setLastName(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder=""
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="mStatus">
                                                <Form.Label className="text-center">Marital Status</Form.Label>

                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="eStatus">
                                                <Form.Label className="text-center">Employment Status</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="NOE">
                                                <Form.Label className="text-center">Name of Employer</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    value={nameOfEmployer}
                                                    onChange={e => setNameOfEmployer(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="dob">
                                                <Form.Label className="text-center">Date of Birth</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="number">
                                                <Form.Label className="text-center">Phone Number</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder=""
                                                    value={phoneNumber}
                                                    onChange={e => setPhoneNumber(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicConfirmPassword"
                                            >
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account??{' '}
                                                <a href="client/src/components#" className="text-primary fw-bold">
                                                    Sign In
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