import {
  Button,
  Card,
  Container,
  GridContainer,
  GridItem,
  Hr,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Docsgride() {
  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "2.5rem" }}>Grid</h1>
      <p style={{ fontSize: "1.5rem" }}>
        With grid, you can divide the page from 1 to 12 parts, easily edit your
        site page.
      </p>

      <p style={{ fontSize: "1.5rem" }}>
        Properties that are accepted as attributes:(Grid Item)
      </p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>xs</Td>
            <Td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12</Td>
          </Tr>
          <Tr>
            <Td>sm</Td>
            <Td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12</Td>
          </Tr>
          <Tr>
            <Td>md</Td>
            <Td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12</Td>
          </Tr>
          <Tr>
            <Td>lg</Td>
            <Td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12</Td>
          </Tr>
          <Tr>
            <Td>xl</Td>
            <Td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12</Td>
          </Tr>
        </Tbody>
      </Table>
      <p style={{ fontSize: "1.5rem" }}>
        Properties that are accepted as attributes:(Grid Container)
      </p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Columns</Td>
            <Td>10 | 12</Td>
          </Tr>
          <Tr>
            <Td>Gap (rem)</Td>
            <Td>number</Td>
          </Tr>
        </Tbody>
      </Table>

      <h1 style={{ fontSize: "1.5rem", padding: "2rem" }}>Example 1:</h1>

      <GridContainer>
        <GridItem md={10} lg={6} xl={6}>
          <Card></Card>
        </GridItem>
        <GridItem md={10} lg={6} xl={6}>
          <Card></Card>
        </GridItem>
      </GridContainer>

      <Hr />

      <GridContainer>
        <GridItem md={12} lg={6} xl={4}>
          <Card></Card>
        </GridItem>

        <GridItem md={12} lg={6} xl={4}>
          <Card></Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={4}>
          <Card></Card>
        </GridItem>
      </GridContainer>

      <Hr />

      <GridContainer columns={10}>
        <GridItem md={12} lg={6} xl={2}>
          <Card></Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={2}>
          <Card></Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={2}>
          <Card></Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={2}>
          <Card></Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={2}>
          <Card></Card>
        </GridItem>
      </GridContainer>

      <h1 style={{ fontSize: "1.5rem", padding: "2rem" }}>Example 2:</h1>
    </Container>
  );
}
GridItem;
