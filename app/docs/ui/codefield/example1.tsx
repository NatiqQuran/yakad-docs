import { Card, Stack, Row, CodeField, Button, Hr } from "@yakad/ui";

export default function Example1() {
  return (
    <Card
      style={{
        maxWidth: "50rem",
      }}
    >
      <Row align="center">
        <h3>Verify Your Number</h3>
      </Row>
      <form>
        <Stack align="center">
          <p>Enter the 6 digit code we sent to your phone.</p>
          <CodeField length={6} />
          <Hr />
          <Button variant="outlined">Resend Code</Button>
        </Stack>
      </form>
    </Card>
  );
}
