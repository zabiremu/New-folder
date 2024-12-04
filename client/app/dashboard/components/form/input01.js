import React from "react";
import { Form } from "react-bootstrap";

const input01 = ({ title, name, type, change = "", multiple = false, offer= false, requiqred= false }) => {
  return (
    <>
      {multiple === false ? (
        <>
          <Form.Group className="mb-3">
            <Form.Label>{title} {offer && <span className="text-danger">Enter how many products the customer will buy:</span>}  {requiqred && <span className="text-danger">*</span>}</Form.Label>
            <Form.Control
              type={type}
              placeholder={title}
              name={name}
              onChange={change}
            />
          </Form.Group>
        </>
      ) : (
        <>
          <Form.Group className="mb-3">
            <Form.Label>{title}</Form.Label>
            <Form.Control
              type={type}
              placeholder={title}
              name={name}
              multiple
              onChange={change}
            />
          </Form.Group>
        </>
      )}
    </>
  );
};

export default input01;
