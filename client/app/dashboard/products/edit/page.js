"use client";
import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Input01 from "../../components/form/input01";
import CustomButton from "../../components/button/button";
import Link from "next/link";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [toggleTardeOffer, setToggleTardeOffer] = useState(false);
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const handleToggleTardeOffer = () => {
    return setToggleTardeOffer(!toggleTardeOffer);
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <img src={photo} alt="" key={photo} className="w-25 d-inline-flex" />
      );
    });
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [file, setFile] = useState();
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
          <Card.Body>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                <Input01
                  title="Product Name"
                  name="product_Name"
                  type="text"
                  requiqred={true}
                />
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                <Input01 title="Stock" name="stock" type="number" requiqred={true} />
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                <Input01 title="Price" name="price" type="number" requiqred={true} />
              </Col>

              <Col xl={4} lg={4} md={4} sm={12} className="mb-4">
                <Input01 title="Discount" name="discount" type="number" />
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
                        <Input01 title="Trade offer min qty" name="trade_offer_min_qty" type="number" />
                      </Col>
                      <Col xl={3} lg={4} md={3} sm={12} className="mb-4">
                        <Input01 title="Free offer get qty" name="trade_offer_get_qty" type="number" />
                      </Col>

                      <Col xl={3} lg={3} md={3} sm={12} className="mb-4">
                        <Input01 title="Discount or trade offer start date" name="discount_or_trade_offer_start_date" type="date" />
                      </Col>
                      <Col xl={3} lg={3} md={3} sm={12} className="mb-4">
                        <Input01 title="Discount or trade offer end date" name="discount_or_trade_offer_end_date" type="date" />
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
              {/* <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                <Input01
                  title="Thumbnail Images"
                  name="thumbnail_images"
                  type="file"
                  change={handleChange}
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                <img src={file} className="w-25 d-block" />
              </Col>

              <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                <Input01
                  title="Gallery Images"
                  name="gallery_images[]"
                  type="file"
                  multiple={true}
                  change={handleImageChange}
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                <img src={file} className="w-25 d-block" /> 
                <div className="result">{renderPhotos(selectedFiles)}</div>
              </Col> */}
              <Col xl={12} lg={12} md={12} sm={12}>
                <CustomButton title="Create" type="submit" />
                <Link className="btn btn-danger float-end me-1" href="/dashboard">Cancel</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default page;
