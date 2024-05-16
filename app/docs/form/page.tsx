import {
  AppBar,
  Button,
  Container,
  Footer,
  Card,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
  Hr,
  SvgIcon,
  InputField,
  Form,
  Chekbox,
  CodeField,
} from "@yakad/ui";
import LogoIcon from "../../logoicon";

export default function DocsForm() {
  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "3rem" }}>Form</h1>
      <Stack>
        <h1>Example 1 : Login form</h1>
        <Card style={{ maxWidth: "45rem" }}>
          <Row style={{ justifyContent: "center" }}>
            <Button icon="login" />
            <h1>Log In</h1>
          </Row>
          <Hr />
          <Form style={{ maxWidth: "30rem", margin: "auto" }}>
            <InputField placeholder="Username" type="Name" />
            <InputField placeholder="Password" type="Password" />
            <Chekbox label="Remember Me" />
            <Button variant="filled">Submit</Button>
          </Form>
          <Hr variant="shortLine" />
          <Button variant="outlined">Register</Button>
          <Button variant="text">cancel</Button>
        </Card>
        <h1>Example 2 : Verify</h1>
        <Card
          style={{
            maxWidth: "40rem",
            margin: "auto",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <Button icon="verified_user" />
            <h1>Verify</h1>
          </Row>
          <Hr />
          <Form
            style={{
              maxWidth: "30rem",
              margin: "auto",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1>Enter Your Verify Code</h1>
            <CodeField length={6} />
          </Form>
          <Button variant="filled">Submit</Button>
          <Hr />
          <Button>Cancel</Button>
          <br />
        </Card>
        <h1>Example 3 : Register</h1>
        <Card style={{ maxWidth: "45rem", alignItems: "center" }}>
          <Row style={{ justifyContent: "center" }}>
            <Button icon="account_circle" />
            <h1>Register</h1>
          </Row>
          <Hr />
          <Form style={{ maxWidth: "30rem", margin: "auto" }}>
            <InputField variant="filled" placeholder="Name" />
            <InputField variant="filled" placeholder="Username" />
            <InputField
              variant="filled"
              placeholder="password"
              type="password"
            />
            <InputField
              variant="filled"
              placeholder="verify password"
              type="password"
            />
          </Form>
          <br />
          <Row style={{ justifyContent: "center" }}>
            <Button>Cancel</Button>
            <Button variant="filled">Submit</Button>
          </Row>
        </Card>
        <h1>Example 4 : CheckBox</h1>
        <Card style={{ maxWidth: "30rem" }}>
          <Form>
            <Chekbox label="i'm not robot" />
          </Form>
        </Card>
      </Stack>
    </Container>
  );
}
