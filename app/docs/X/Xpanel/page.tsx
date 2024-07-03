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
  CodeBox,
} from "@yakad/ui";
import Link from "next/link";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Xpanel</h1>
      <Hr />
      <p>A simple fast intro Xpanel</p>
      <CodeBox>
        <code>{'import { Xpanel } from "@yakad/x";'}</code>
        <br />
        <br />
        <code>{"<Xpanel>Contenet</Xpanel>"}</code>
      </CodeBox>

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
      <Link href="/examples/Xpanel" target="_blank">
        Exampl Link
      </Link>
    </Container>
  );
}
