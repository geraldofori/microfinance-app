import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

export default function Dashboard(){
    return(
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        All Loans
                                    </h2>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}