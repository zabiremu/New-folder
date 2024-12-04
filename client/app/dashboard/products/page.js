"use client";

import Link from "next/link";
import { useState } from "react";

// import node module libraries
import {
  Col,
  Row,
  Card,
  Table,
  Tab,
  Container,
  Image,
  Button,
  Modal,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Pagination,
  Form,
} from "react-bootstrap";
import { ChevronBarRight, ChevronLeft } from "react-bootstrap-icons";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import TableHeader from "../components/tableHeader/TableHeader";
import Thead from "../components/thead/Thead";

const page = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatusShow = () => {
    setStatus(true);
  };
  const handleStatusClose = () => {
    setStatus(false);
  };
  const handleStatusSubmit = () => {
    setStatusUpdate(!statusUpdate);
    setStatus(false);
  };
  const ctp12 = { paddingTop: "12px" };
  return (
    <>
      <Container fluid className="p-6">
        <Breadcrumbs
          title="Products"
          home="Dashboard"
          homeLink="/dashboard"
          second="Products"
          secondLink="/dashboard/products"
        />
        {/*  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
            <Tab.Container id="tab-container-1" defaultActiveKey="design">
              <Card>
                <Card.Body className="p-0">
                  <TableHeader
                    title="Create Products"
                    link="/dashboard/products/create"
                  />
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      {/* code started */}
                      <Table size="sm" className="text-nowrap">
                        <Thead
                          ths={[
                            "#",
                            "SKQ",
                            "Product Name",
                            "Images",
                            "Stock",
                            "Unit",
                            "Status",
                            "Active",
                          ]}
                        />
                        <tbody>
                          <tr>
                            <th
                              scope="row"
                              style={ctp12}
                              className="text-center"
                            >
                              1
                            </th>
                            <td className="text-center" style={ctp12}>
                              ABC12345
                            </td>
                            <td className="text-center" style={ctp12}>
                              Zabir
                            </td>
                            <td className="text-center">
                              <Image
                                src="/images/avatar/avatar-1.jpg"
                                alt="image"
                                className="avatar-md avatar rounded-circle"
                              />
                            </td>

                            <td className="text-center" style={ctp12}>
                              21
                            </td>
                            <td className="text-center" style={ctp12}>
                              KG
                            </td>
                            <td className="text-center" style={ctp12}>
                              <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                className="d-flex justify-content-center"
                                label=""
                                checked={statusUpdate}
                                onChange={handleStatusShow}
                              />
                            </td>
                            <td className="text-center">
                              <DropdownButton
                                as={ButtonGroup}
                                key="Primary"
                                id={`dropdown-variants-Primary`}
                                variant=""
                                title="Action"
                                className="me-1 mb-2 mb-lg-0 btn-sm"
                              >
                                <Dropdown.Item eventKey="2">
                                  <Link href="/dashboard/products/edit">
                                    Edit
                                  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item
                                  eventKey="1"
                                  onClick={handleShow}
                                >
                                  Delete
                                </Dropdown.Item>
                              </DropdownButton>
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      <span>Showing 1 to 1 of 1 entries</span>

                      {/* end of code */}
                      <Pagination className="float-end">
                        <Pagination.First>
                          <ChevronsLeft size="18px" />
                        </Pagination.First>
                        <Pagination.Prev>
                          <ChevronLeft size="18px" />
                        </Pagination.Prev>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next>
                          <ChevronBarRight size="18px" />
                        </Pagination.Next>
                        <Pagination.Last>
                          <ChevronsRight size="18px" />
                        </Pagination.Last>
                      </Pagination>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of  */}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Products Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this products?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="btn-sm">
            Close
          </Button>
          <Button variant="danger" onClick={handleClose} className="btn-sm">
            Products Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={status} onHide={handleStatusShow}>
        <Form>
          <Modal.Header closeButton onClick={handleStatusClose}>
            <Modal.Title>Update Products Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to update products status?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn-sm"
              onClick={handleStatusClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              className="btn-sm"
              onClick={handleStatusSubmit}
            >
              Update status
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default page;