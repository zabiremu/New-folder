'use client'
import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Input01 from "../../components/form/input01";
import CustomButton from "../../components/button/button";
import Link from "next/link";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { products as productApi } from "../../../api/api";
import Swal from "sweetalert2";
const page = () => {
  const [toggleTardeOffer, setToggleTardeOffer] = useState(false);
  const [products, setProducts] = useState({
    product_name: '',
    stock: '',
    price: '',
    discount: '',
    trade_offer_status: '',
    trade_offer_min_qty: '',
    trade_offer_get_qty: '',
    discount_or_trade_offer_start_date: '',
    discount_or_trade_offer_end_date: ''
  });


  const handleToggleTardeOffer = () => {
    return setToggleTardeOffer(!toggleTardeOffer);
  };

  // Handle changes for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (products.product_name.length === 0 || products.stock.length === 0 || products.price.length === 0) {
      alert('Fill up the all required field');
    } else if (products.price <= products.discount) {
      alert('Discount price cannot be greater than or equal to the original price.');
    } else {
      const query = await fetch(productApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      })
      const data = await query.json();
      console.log(data)
      if (data.status === 201) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: data.message,
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: data.message,
        });
      }
    }

  };
  return (
    <>
      <Container fluid className="p-6">
        <Breadcrumbs
          title="Create Products"
          home="Dashboard"
          homeLink="/dashboard"
          second="Products"
          secondLink="/dashboard/products"
          third="Create"
          thirdLink="/dashboard/products/create"
        />
        {/*  */}
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                  <Input01
                    title="Product Name"
                    name="product_name"
                    type="text"
                    requiqred={true}
                    change={handleInputChange}
                  />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <Input01 title="Stock" name="stock" type="number" requiqred={true} change={handleInputChange} />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <Input01 title="Price" name="price" type="number" requiqred={true} change={handleInputChange} />
                </Col>

                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <Input01 title="Discount" name="discount" type="number" change={handleInputChange} />
                </Col>

                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <span> Do you want to add trade offer?</span>
                  <FormCheckInput name="trade_offer_status" className="ms-1" onChange={handleToggleTardeOffer} />
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                  <Row>
                    {toggleTardeOffer === true && (
                      <>
                        <Col xl={3} lg={4} md={3} sm={12} className="mb-4">
                          <Input01 title="Trade offer min qty" name="trade_offer_min_qty" type="number" change={handleInputChange} />
                        </Col>
                        <Col xl={3} lg={4} md={3} sm={12} className="mb-4">
                          <Input01 title="Free offer get qty" name="trade_offer_get_qty" type="number" change={handleInputChange} />
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={12} className="mb-4">
                          <Input01 title="Discount or trade offer start date" name="discount_or_trade_offer_start_date" type="date" change={handleInputChange} />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={12} className="mb-4">
                          <Input01 title="Discount or trade offer end date" name="discount_or_trade_offer_end_date" type="date" change={handleInputChange} />
                        </Col>
                      </>
                    )}
                  </Row>
                </Col>

                <Col xl={12} lg={12} md={12} sm={12}>
                  <CustomButton title="Create" type="submit" />
                  <Link className="btn btn-danger float-end me-1" href="/dashboard">Cancel</Link>
                </Col>
              </Row>
            </Form>

          </Card.Body>
        </Card >
      </Container >
    </>
  );
};

export default page;
