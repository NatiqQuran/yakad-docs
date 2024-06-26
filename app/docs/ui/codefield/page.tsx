import {
  Button,
  Container,
  Card,
  Row,
  Stack,
  Hr,
  CodeField,
  Spacer,
} from "@yakad/ui";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>CodeField</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { CodeField } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<CodeField>CodeField</CodeField>"}</code>
          </span>
          <Spacer />
          <Button icon="content_copy"></Button>
        </Row>
      </Card>

      <h1>Example 1 :</h1>
      <Card
        style={{
          maxWidth: "50rem",
        }}
      >
        <Row align="center">
          <h1>Verify Your Number</h1>
        </Row>
        <form>
          <Stack align="center">
            <h2>Enter the 6 digit code we sent to your phone.</h2>
            <CodeField length={6} />
            <Hr />
            <Button variant="outlined">Resend Code</Button>
          </Stack>
        </form>
      </Card>

      <h1>Example 2 : </h1>
      <Card
        style={{
          maxWidth: "50rem",
        }}
      >
        <Row align="center">
          <h1>Verification Code </h1>
        </Row>
        <form style={{ margin: "auto" }}>
          <Stack align="center">
            <CodeField length={4} />
            <Button variant="outlined">Send Code by email</Button>
            <Button variant="filled">Verify</Button>
          </Stack>
        </form>
      </Card>
      <h1>Example 3 : </h1>
      <Card
        style={{
          maxWidth: "50rem",
        }}
      >
        <Row align="center">
          <h1>Verify</h1>
        </Row>
        <Hr variant="shortLine" />
        <form>
          <Stack align="center">
            <h1>Enter your verifaction code</h1>
            <CodeField length={10} />
            <Button variant="filled">Submit</Button>
            <br />
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
}
