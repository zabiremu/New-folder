import React from "react";
import { Form } from "react-bootstrap";

const CheckInput = ({ customClass = "", name = "status" }) => {
  return (
    <Form.Group>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Status"
        className={`${customClass}`}
        name={name}
      />
    </Form.Group>
  );
};

export default CheckInput;
