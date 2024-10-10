import { Card, Stack, Row, CodeField, Button, Hr } from "@yakad/ui";

export default function Example3() {
  return (
    <Card
      style={{
        maxWidth: "50rem",
      }}
    >
      <Row align="center">
        <h3>Verify</h3>
      </Row>
      <Hr variant="shortLine" />
      <form>
        <Stack align="center">
          <p>Enter your verifaction code</p>
          <CodeField length={10} />
          <Button variant="filled">Submit</Button>
          <br />
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </form>
    </Card>
  );
}
