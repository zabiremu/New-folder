"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import useMounted from "@/hooks/useMounted";
import { forgetPassword } from "@/app/api/api";
const page = () => {
  const [user, setUser] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, // Spread the previous state
      [name]: value, // Update the specific field
    }));
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const query = await fetch(forgetPassword, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!fetch.ok) {
        throw new Error(`HTTP error! Status: ${fetch.status}`);
      }

      const data = await query.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/brand/logo/logo-primary.svg"
                  className="mb-2"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              <p className="mb-6">Please enter your user email.</p>
            </div>
            {/* Form */}

            <Form onSubmit={handleForgetPassword}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter address here"
                  required=""
                  onChange={handleChange}
                />
              </Form.Group>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div>
                    <Link href="/" className="text-inherit fs-5">
                      <i className="bi bi-arrow-left"></i> Back to Login Page
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default page;
