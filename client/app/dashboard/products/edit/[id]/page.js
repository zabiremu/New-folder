"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Input01 from "../../../components/form/input01";
import CustomButton from "../../../components/button/button";
import Link from "next/link";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { useParams } from 'next/navigation';
const page = () => {
  const [toggleTardeOffer, setToggleTardeOffer] = useState(false);
  const handleToggleTardeOffer = () => {
    return setToggleTardeOffer(!toggleTardeOffer);
  };
  const [product, setProduct] = useState();
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

  const params = useParams();

  useEffect(() => {
    const res = async () => {
      const query = await fetch(`http://127.0.0.1:8000/api/product/edit/${params?.id}`)
      const data = await query.json();
      const productData = data?.data;
      setProduct(productData ?? '');
    }
    res();
  }, [])

  const dateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (products?.product_name?.length === 0 || products?.stock?.length === 0 || products?.price?.length === 0) {
      alert('Fill up the all required field');
    } else if (products.price <= products.discount) {
      alert('Discount price cannot be greater than or equal to the original price.');
    } else {
      if (data.status === 200) {
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
  // Handle changes for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Container fluid className="p-6">
        <Breadcrumbs
          title="Edit Products"
          home="Dashboard"
          homeLink="/dashboard"
          second="Products"
          secondLink="/dashboard/products"
          third="Create"
          thirdLink="/dashboard/products/edit"
        />
        {/*  */}
        <Card>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                  <Input01
                    title="Product Name"
                    name="product_name"
                    type="text"
                    requiqred={true}
                    change={handleInputChange}
                    value={product?.product_name}
                  />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <Input01 title="Stock" name="stock" type="number" requiqred={true} change={handleInputChange} value={product?.stock} />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <Input01 title="Price" name="price" type="number" requiqred={true} change={handleInputChange} value={product?.price} />
                </Col>

                <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                  <Input01 title="Discount" name="discount" type="number" change={handleInputChange} value={product?.discount} />
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
                          <Input01 title="Trade offer min qty" name="trade_offer_min_qty" type="number" change={handleInputChange} value={product?.trade_offer_min_qty} />
                        </Col>
                        <Col xl={3} lg={4} md={3} sm={12} className="mb-4">
                          <Input01 title="Free offer get qty" name="trade_offer_get_qty" type="number" change={handleInputChange} value={product?.trade_offer_get_qty} />
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={12} className="mb-4">
                          <Input01 title="Discount or trade offer start date" name="discount_or_trade_offer_start_date" type="date" change={handleInputChange} value={dateTime(product?.discount_or_trade_offer_start_date)} />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={12} className="mb-4">
                          <Input01 title="Discount or trade offer end date" name="discount_or_trade_offer_end_date" type="date" change={handleInputChange} value={dateTime(product?.discount_or_trade_offer_end_date)} />
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
            </Card.Body>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default page;
