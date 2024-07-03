import LogoIcon from "@/app/logoicon";
import {
  Button,
  Card,
  Container,
  Hr,
  Tr,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  GridContainer,
  GridItem,
  AppBar,
  CodeBox,
} from "@yakad/ui";
import { XgetStart } from "@yakad/x";
import { Children } from "react";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>XgetStart</h1>
      <Hr />
      <p>A simple fast intro XgetStart</p>
      <CodeBox>{'import { XgetStart } from "@yakad/x";'}</CodeBox>
      <br />
      <br />
      <CodeBox>{"<XgetStart>Contenet</XgetStart>"}</CodeBox>
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
            <Td>_</Td>
          </Tr>
          <Tr>
            <Td>children</Td>
            <Td>_</Td>
          </Tr>
        </Tbody>
      </Table>
      <h2>Properties</h2>
      <h3>variant</h3>
      <GridContainer>
        <GridItem sm={12} xl={6}>
          <XgetStart logo={<LogoIcon />}>
            <h1>XgetStart</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <Button variant="filledtonal">XgetStart</Button>
          </XgetStart>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
