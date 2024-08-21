import Symbol from "@yakad/symbols";
import {
  Button,
  Container,
  Card,
  Row,
  Stack,
  Hr,
  CodeField,
  Spacer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
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
            <code>{"<CodeField />"}</code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="content_copy" />}></Button>
        </Row>
      </Card>

      <h3>Simple CodeField</h3>
      <Card style={{ maxWidth: "60rem" }}>
        <CodeField length={6} />
      </Card>
      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:</p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>length</Td>
            <Td>number</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>length</h3>
      <p>
        With this property, you can specify the number of lines in your
        CodeField.
      </p>

      <Card>
        <p>length = 4</p>
        <CodeField length={4} />
        <Hr />

        <p>length = 6</p>
        <CodeField length={6} />
        <Hr />

        <p>length = 8</p>
        <CodeField length={8} />
        <Hr />

        <p>length = 10</p>
        <CodeField length={10} />
      </Card>
      <h2>Examples</h2>
      <h3>Example 1</h3>
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

      <h3>Example 2</h3>
      <Card
        style={{
          maxWidth: "50rem",
        }}
      >
        <Row align="center">
          <h3>Verification Code </h3>
        </Row>
        <form style={{ margin: "auto" }}>
          <Stack align="center">
            <CodeField length={4} />
            <Button variant="outlined">Send Code by email</Button>
            <Button variant="filled">Verify</Button>
          </Stack>
        </form>
      </Card>
      <h3>Example 3</h3>
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
      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
