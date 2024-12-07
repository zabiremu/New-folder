"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { register } from "@/app/api/api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    user_name: "",
    password: "",
    confirm_password: ""
  });
  const [userError, setUserError] = useState({
    email: "",
    user_name: "",
    password: "",
    confirm_password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, // Spread the previous state
      [name]: value, // Update the specific field
    }));
  };
  console.log(user);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const query = await fetch(register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await query.json();
      if (data?.status === 200) {
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
        router.push("/");
      } else {
        setUserError({
          ...userError,
          email: data.errors['email'] ?? '',
          user_name: data.errors['user_name'] ?? '',
          password: data.errors['password'] ?? "",
          confirm_password: data.errors['confirm_password'] ?? '',
        });
      }
    } catch (error) {
      console.log(error);
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
                <span className="d-block">Register</span>
              </Link>
            </div>
            {/* Form */}
            <Form onSubmit={handleRegister}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter address here"
                  required=""
                  onChange={handleChange}
                />
                <span className="text-danger">{userError.email}</span>
              </Form.Group>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter user name"
                  required=""
                  onChange={handleChange}
                />
                <span className="text-danger">{userError.user_name}</span>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password here"
                  required=""
                  onChange={handleChange}
                />
                <span className="text-danger">{userError.password}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirm_password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirm_password"
                  placeholder="Enter password here"
                  required=""
                  onChange={handleChange}
                />
                <span className="text-danger">{userError.confirm_password}</span>
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
