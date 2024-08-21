import {
  Button,
  Card,
  Container,
  Row,
  Hr,
  Spacer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
} from "@yakad/ui";

import Symbol from "@yakad/symbols";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Stack</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { Stack } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<Stack>Stack</Stack>"}</code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="content_copy" />}></Button>
        </Row>
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
            <Td>align</Td>
            <Td>start | center | end</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>align</h3>
      <p>
        With this property, you can easily move all the things you put in the
        card, that is, you can fold it in the middle and simply fold it left or
        right.
      </p>
      <Stack style={{ width: "100%" }}>
        <Card style={{ maxWidth: "60rem" }}>Start</Card>
        <Card style={{ maxWidth: "60rem" }} align="center">
          Center
        </Card>
        <Card style={{ maxWidth: "60rem" }} align="end">
          End
        </Card>
      </Stack>

      <h2>Examples</h2>
      <h3>Example 1</h3>
      <Stack align="center" style={{ width: "100%" }}>
        <Card style={{ maxWidth: "60rem" }}></Card>
        <Card style={{ maxWidth: "60rem" }}></Card>
        <Card style={{ maxWidth: "60rem" }}></Card>
      </Stack>
      <Hr />
      <p>Here are three cards in the stack.</p>
      <h3>Example 2</h3>
      <Stack align="center">
        <Table style={{ maxWidth: "50rem" }}>
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>number</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>yakad</Td>
              <Td>1</Td>
            </Tr>
            <Tr>
              <Td>Owerviow</Td>
              <Td>2</Td>
            </Tr>
          </Tbody>
        </Table>
        <p>
          One of our most prominent works is the table, which has a special
          beauty and continuity, and it is much easier to work with it, and you
          can do many things with this table.Among the tasks, you can easily
          place the list of pages you have created in the table so that you
          don&apos;t forget how many pages you have and what their names are.
          And secondly, if you follow the form that we have given in the table,
          your work will be much easier and more beautiful.
        </p>
      </Stack>
      <Hr />
      <p>
        As you can see, the explanation below the table is written because Stack
        is used.
      </p>
      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
