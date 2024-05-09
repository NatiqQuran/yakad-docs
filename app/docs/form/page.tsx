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
        <h1>Login form</h1>
        <Card style={{ maxWidth: "50rem", alignItems: "center" }}>
          <Row style={{ justifyContent: "center" }}>
            <Button icon="login" />
            <h1>Log In</h1>
          </Row>
          <Hr />
          <Form style={{ maxWidth: "30rem", margin: "auto" }}>
            <InputField placeholder="Email" type="Email" />
            <InputField placeholder="Password" type="Password" />
            <Row style={{ justifyContent: "center" }}>
              <Button variant="filled">Log in</Button>
            </Row>
            <Hr variant="shortLine" />
            <Row style={{ justifyContent: "center" }}>
              <Button variant="text">cancel</Button>
            </Row>
          </Form>
        </Card>
        <h1>Verify</h1>
        <Card
          style={{
            maxWidth: "30rem",
            margin: "auto",
          }}
        >
          <Form
            style={{
              maxWidth: "30rem",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <CodeField length={6} />
          </Form>
          <br />
          <Button variant="filled">SUBMIT</Button>
        </Card>
        <h1>User Info</h1>
        <Card style={{ maxWidth: "50rem", alignItems: "center" }}>
          <Row style={{ justifyContent: "center" }}>
            <Button icon="account_circle" />
            <h1>User Info</h1>
          </Row>
          <Hr />
          <Form style={{ maxWidth: "30rem", margin: "auto" }}>
            <InputField variant="outlined" placeholder="Name" />
            <InputField variant="filled" placeholder="Password" />
          </Form>
          <br />
          <Row>
            <Button>Cancel</Button>
            <Button variant="filled">Edit</Button>
          </Row>
        </Card>
        <h1>HeckBox</h1>
        <Card style={{ maxWidth: "50rem" }}>
          <h1>i'm not roobot</h1>
          <Form>
            <Chekbox label="test" />
          </Form>
        </Card>
        <h1>InputFields</h1>
        <Card style={{ maxWidth: "90rem", alignItems: "center" }}>
          <Row style={{ justifyContent: "center" }}></Row>
          <Form>
            <h2>Type Email</h2>
            <InputField placeholder="email@example.com" type="Email" />
            <h2>Type Password</h2>
            <InputField placeholder="••••••••" type="password" />
            <h2>Varient Filled</h2>
            <InputField variant="filled" placeholder="InputField filled" />
            <h2>Varient Outlined</h2>
            <InputField variant="outlined" placeholder="InputField Outlined" />
          </Form>
        </Card>
      </Stack>
    </Container>
  );
}
