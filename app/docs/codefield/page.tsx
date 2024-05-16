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
  Form,
  CodeField,
} from "@yakad/ui";

export default function DocsCodefield() {
  return (
    <Container maxWidth="md">
      <h1>Example 1 :</h1>
      <Card
        style={{
          maxWidth: "50rem",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Row style={{ justifyContent: "center" }}>
          <h1>Verify Your Number</h1>
        </Row>
        <Form>
          <h2>Enter the 6 digit code we sent to your phone.</h2>
          <CodeField length={6} />
          <Hr />
          <Button variant="outlined">Resend Code</Button>
        </Form>
      </Card>

      <h1 style={{ fontSize: "3rem" }}>CodeField</h1>
      <Stack>
        <h1>Exampe 2 : </h1>
        <Card
          style={{
            maxWidth: "50rem",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <h1>Verification Code </h1>
          </Row>
          <Form style={{ margin: "auto" }}>
            <CodeField length={4} />
            <Button variant="outlined">Send Code by email</Button>
            <Button variant="filled">Verify</Button>
          </Form>
        </Card>
        <h1>Example 3 : </h1>
        <Card
          style={{
            maxWidth: "50rem",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <h1>Verify</h1>
          </Row>
          <Hr variant="shortLine" />
          <Form>
            <h1>Enter your verifaction code</h1>
            <CodeField length={10} />
            <Button variant="filled">Submit</Button>
            <br />
            <Button variant="outlined">Cancel</Button>
          </Form>
        </Card>
      </Stack>
    </Container>
  );
}
