// export default page;
"use client";
// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "@/widgets";

// import sub components
import { ProfileHeader } from "@/sub-components";
import Input01 from "../components/form/input01";
import CustomButton from "../components/button/button";
import Title from "../components/form/title";
const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="User Information" />

      {/* Profile Header  */}
      <ProfileHeader />

      {/* content */}
      <div className="py-6">
        <Row>
          <Title title="User Information" />
          <Col xl={6} lg={6} md={6} xs={6} sm={12}>
            <Input01 title="First Name" name="fname" type="text" />
            <Input01 title="Username" name="username" type="text" />
            <Input01 title="Email" name="email" type="email" />
          </Col>
          <Col xl={6} lg={6} md={6} xs={6} sm={12}>
            <Input01 title="Last Name" name="lname" type="text" />
            <Input01 title="Phone" name="phone" type="number" />
          </Col>
          <Col xl={12} lg={12} md={12} xs={12} sm={12}>
            <CustomButton title="Update user information" type="submit" />
          </Col>
        </Row>
      </div>

      <div className="py-6">
        <Row>
          <Title title="Change Password" />
          <Col xl={6} lg={6} md={6} xs={6} sm={12}>
            <Input01 title="Password" name="password" type="password" />
            <Input01 title="New Password" name="password" type="password" />
          </Col>
          <Col xl={6} lg={6} md={6} xs={6} sm={12}>
            <Input01 title="Confirm Password" name="password" type="password" />
          </Col>
          <Col xl={12} lg={12} md={12} xs={12} sm={12}>
            <CustomButton title="Change password" type="submit" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
