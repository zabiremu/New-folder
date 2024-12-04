import React from "react";
import { Col, Row, Breadcrumb } from "react-bootstrap";
const Breadcrumbs = ({
  title,
  home,
  homeLink,
  secondLink,
  second,
  thirdLink = "",
  third = "",
}) => {
  return (
    <Row>
      <Col
        lg={12}
        md={12}
        sm={12}
        className="d-flex justify-content-between align-items-center border-bottom mb-4"
      >
        <div className="pb-4 d-md-flex align-items-center justify-content-between">
          <div className="mb-3 mb-md-0">
            <h1 className="mb-1 h2 fw-bold">{title}</h1>
          </div>
        </div>
        <div className="">
          <Breadcrumb>
            <Breadcrumb.Item href={homeLink}>{home}</Breadcrumb.Item>
            <Breadcrumb.Item href={secondLink}>{second}</Breadcrumb.Item>
            {thirdLink.length > 0 ? (
              <>
                <Breadcrumb.Item href={thirdLink}>{third}</Breadcrumb.Item>
              </>
            ) : null}
          </Breadcrumb>
        </div>
      </Col>
    </Row>
  );
};

export default Breadcrumbs;
