import LogoIcon from "@/app/logoicon";
import {
  Button,
  Container,
  Hr,
  Tr,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  CodeBox,
  Card,
  Row,
} from "@yakad/ui";
import { XgetStart } from "@yakad/x";
import Link from "next/link";
import Symbol from "@yakad/symbols";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>XgetStart</h1>
      <Hr />
      <p>A simple fast intro XgetStart</p>
      <CodeBox>
        <code>{'import { XgetStart } from "@yakad/x";'}</code>
        <br />
        <br />
        <code>{"<XgetStart>Contenet</XgetStart>"}</code>
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
            <Td>logo</Td>
            <Td>Icon</Td>
          </Tr>

          <Tr>
            <Td>children</Td>
            <Td>React.ReactNode</Td>
          </Tr>
        </Tbody>
      </Table>
      <h2>Example</h2>
      <Card>
        <XgetStart logo={<LogoIcon />}>
          <h1>XgetStart</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <Button variant="filledtonal">Get Start!</Button>
        </XgetStart>
      </Card>
      <h2>Useaful Links</h2>
      <Row>
        <Link
          href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/XgetStart"
          target="_blank"
        >
          <Button size="large" variant="link" icon={<Symbol icon="link" />}>
            XgetStart Source code
          </Button>
        </Link>
        <Link
          href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/XgetStart"
          target="_blank"
        >
          <Button size="large" variant="link" icon={<Symbol icon="link" />}>
            This Page Source code
          </Button>
        </Link>
      </Row>
    </Container>
  );
}
