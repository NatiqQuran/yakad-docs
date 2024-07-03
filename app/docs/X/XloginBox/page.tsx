import {
  Container,
  Hr,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  CodeBox,
} from "@yakad/ui";
import Link from "next/link";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>XloginBox</h1>
      <Hr />
      <p>A simple fast intro XloginBox</p>
      <CodeBox>{'import { XloginBox } from "@yakad/x";'}</CodeBox>
      <br />
      <br />
      <CodeBox>{"<XloginBox>Contenet</XloginBox>"}</CodeBox>
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
      <Link href="/examples/XloginBox" target="_blank">
        Exampl Link
      </Link>
    </Container>
  );
}
