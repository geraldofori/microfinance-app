import React from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default function TakeLoan(){
    return(
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        Take a Loan
                                    </h2>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="loanAmount">
                                                <Form.Label className="text-center">Loan Amount</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Loan Amount" />
                                            </Form.Group>


                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}