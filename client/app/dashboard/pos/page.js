"use client";

import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row, Button, Table, Card, CardBody } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const page = () => {
    const [toggleRow, setToggleRow] = useState([]);
    const [isClient, setIsClient] = useState(false);

    // Ensures that the component only renders on the client side
    useEffect(() => {
        setIsClient(true); // Mark that we are on the client side
    }, []);

    const handleToggleRow = () => {
        const count = toggleRow.length;
        const arr = [...toggleRow, count + 1];
        setToggleRow(arr);
    };

    const handleCancel = (item) => {
        const newArr = toggleRow.filter((key) => key !== item);
        setToggleRow(newArr);
    };

    if (!isClient) {
        return null; // Render nothing while SSR is taking place
    }

    return (
        <div>
            <Container fluid className="p-6">
                <Breadcrumbs
                    title="Create Pos"
                    home="Dashboard"
                    homeLink="/dashboard"
                    second="Pos"
                    secondLink="/dashboard/pos"
                />
                <Card className="pt-5">
                    <CardBody className="pt-5">
                        <Row className="justify-content-center align-items-center">
                            <Col md={10} sm={10} xs={8} lg={11}>
                                <Form.Group>
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Product Name" />
                                </Form.Group>
                            </Col>
                            <Col md={2} sm={2} xs={4} lg={1} className="mt-5">
                                <Form.Group>
                                    <Button type="submit" variant="primary" onClick={handleToggleRow}>Add</Button>
                                </Form.Group>
                            </Col>
                            <Col md={12} sm={12} xs={12} lg={12}>
                                <Row className="pt-3">
                                    <Table className="pt-5 pt-5 table table-responsive">
                                        <thead>
                                            <tr>
                                                <th>Serial</th>
                                                <th>Product name</th>
                                                <th>Unit price</th>
                                                <th>Quantity</th>
                                                <th>Trade offer</th>
                                                <th>Discount</th>
                                                <th>SubTotal</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {toggleRow.length > 0 && (
                                                <>
                                                    {toggleRow.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <Form.Group>
                                                                    <span className="form-control">{index + 1}</span>
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Form.Control placeholder="Product Name" name="product_name" />
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Form.Control placeholder="Unit price" name="unit_price" />
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Form.Control placeholder="Quantity" name="qty" />
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Form.Control placeholder="Trade offer" name="trade_offer" />
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Form.Control placeholder="Discount" name="discount" />
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Form.Control placeholder="SubTotal" name="sub_total" />
                                                                </Form.Group>
                                                            </td>
                                                            <td>
                                                                <Form.Group>
                                                                    <Button className="btn btn-sm btn-danger" onClick={() => handleCancel(item)}>Cancel</Button>
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </>
                                            )}

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <Form.Group>
                                                        <Form.Control placeholder="Total price " name="total_price" />
                                                    </Form.Group>
                                                    <Form.Group className="mt-1">
                                                        <Form.Control placeholder="Total discount " name="discount" />
                                                    </Form.Group>
                                                    <Form.Group className="mt-1">
                                                        <Form.Control placeholder="Total payable  " name="payable " />
                                                    </Form.Group>
                                                    <Form.Group className="mt-1">
                                                        <Button variant="primary" type="submit">Submit</Button>
                                                    </Form.Group>
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default page;
