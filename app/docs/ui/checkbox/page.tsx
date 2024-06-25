import Symbol from "@yakad/symbols";
import {
  Button,
  Card,
  Chekbox,
  Container,
  Hr,
  InputField,
  Row,
} from "@yakad/ui";
import React from "react";

export default function Page() {
  const disabledConfirmButton = () => {};

  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "25px" }}>What is a checkbox?</h1>
      <h2 style={{ fontSize: "20px" }}>
        A check box is a small box that a tick appears on when you click on it.
        Check boxes are used to confirm something.
      </h2>
      <Card style={{ maxWidth: "70rem" }}>
        <h1>Tick ​​whichever one you like.</h1>
        <Chekbox label="Do you accept the rules of the site?" />
        <Chekbox label="Do you want to be notified of the site?" />
        <Chekbox label="Do you want us to play music for you?" />
        <Chekbox label="Do you want the page to Refresh?" />
      </Card>
      <h1>A variety of features:</h1>
      <Card style={{ maxWidth: "50rem" }}>
        <h1>Disabled</h1>
        <Chekbox label="inabled" />
        <Chekbox disabled label="disabled" />
        <h1>Checked</h1>
        <Chekbox checked label="checked" />
        <Chekbox label="not checked" />
        <Chekbox checked disabled label="dissabled checked" />
      </Card>
      <h1>Example:</h1>
      <Card style={{ maxWidth: "50rem" }}>
        <Row align="center">
          <Symbol icon="login" />
          <h1>Sign Up</h1>
        </Row>
        <Hr />
        <h1>Enter your Username:</h1>
        <InputField placeholder="Username" type="name" />
        <h1>Enter your Password:</h1>
        <InputField placeholder="Password" type="password" />
        <Chekbox label="Remember My Password" />
        <Hr />
        <Chekbox
          label="You must accept the rules to Confirm!"
          id="checkBoxTik"
        />
        <Row align="center" style={{ marginTop: "2rem" }}>
          <Button variant="elevated" disabled id="disabledConfirmBtn">
            Confirm
          </Button>
        </Row>
      </Card>
    </Container>
  );
}
