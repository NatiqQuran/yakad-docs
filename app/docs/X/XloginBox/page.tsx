import {
  Card,
  Container,
  Hr,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  GridContainer,
  GridItem,
} from "@yakad/ui";
import Link from "next/link";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>XloginBox</h1>
      <Hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Card>
        <code>{'import { XloginBox } from "@yakad/x";'}</code>
        <br />
        <br />
        <code>{"<XloginBox>Contenet</XloginBox>"}</code>
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
            <Td>variant</Td>
            <Td>_</Td>
          </Tr>
        </Tbody>
      </Table>
      <h2>Example</h2>
      <Link href="/examples/XloginBox">Exampl Link</Link>
    </Container>
  );
}
