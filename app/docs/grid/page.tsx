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
      <h1 style={{ fontSize: "2.5rem" }}>Grad</h1>
      <p style={{ fontSize: "2rem" }}>
        With grid, you can divide the page from 1 to 12 parts, easily edit your
        site page.
      </p>

      <p>Grid Container Compunents:</p>
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
      <h1 style={{ fontSize: "1.5rem", padding: "2rem" }}>Example:</h1>
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
    </Container>
  );
}
GridItem;
