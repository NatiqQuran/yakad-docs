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
  CodeBox,
} from "@yakad/ui";

import { Xbackground } from "@yakad/x";
import backgroundImage from "./sky.webp";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Xbackground</h1>
      <Hr />
      <p>A simple fast intro Xbackground</p>
      <CodeBox>{'import { Xbackground } from "@yakad/x";'}</CodeBox>
      <br />
      <br />
      <CodeBox>{"<Xbackground>Contenet</Xbackground>"}</CodeBox>
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
            <Td>dotted | strips</Td>
          </Tr>
          <Tr>
            <Td>separator</Td>
            <Td>shadowinside | shadowoutside</Td>
          </Tr>
          <Tr>
            <Td>backgroundimage</Td>
            <Td>string</Td>
          </Tr>
          <Tr>
            <Td>backgroundfixed</Td>
            <Td>boolean</Td>
          </Tr>
        </Tbody>
      </Table>
      <h2>Properties</h2>
      <h3>variant</h3>
      <GridContainer>
        <GridItem sm={12} xl={6}>
          <Xbackground variant="dotted" style={{ minHeight: "20rem" }}>
            <Container>Dotted</Container>
          </Xbackground>
        </GridItem>
        <GridItem sm={12} xl={6}>
          <Xbackground variant="strips" style={{ minHeight: "20rem" }}>
            <Container>Strips</Container>
          </Xbackground>
        </GridItem>
      </GridContainer>
      <h3>separator</h3>
      <GridContainer>
        <GridItem sm={12} xl={6}>
          <Xbackground
            separator="shadowinside"
            variant="dotted"
            style={{ minHeight: "20rem" }}
          >
            <Container>shadowinside</Container>
          </Xbackground>
        </GridItem>
        <GridItem sm={12} xl={6}>
          <Xbackground
            separator="shadowoutside"
            variant="dotted"
            style={{ minHeight: "20rem" }}
          >
            <Container>shadowoutside</Container>
          </Xbackground>
        </GridItem>
      </GridContainer>
      <h3>backgroundImage</h3>
      <Xbackground
        backgroundImage={backgroundImage}
        style={{ minHeight: "20rem", color: "#000" }}
      >
        <Container>image in background</Container>
      </Xbackground>
      <h3>backgroundFixed</h3>
      <GridContainer>
        <GridItem sm={12} xl={6}>
          <Xbackground
            backgroundImage={backgroundImage}
            backgroundFixed={true}
            style={{ minHeight: "20rem", color: "#000" }}
          >
            <Container>true</Container>
          </Xbackground>
        </GridItem>
        <GridItem sm={12} xl={6}>
          <Xbackground
            backgroundImage={backgroundImage}
            backgroundFixed={false}
            style={{ minHeight: "20rem", color: "#000" }}
          >
            <Container>false</Container>
          </Xbackground>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
