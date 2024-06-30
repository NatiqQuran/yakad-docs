import {
  Button,
  Card,
  Container,
  GridContainer,
  GridItem,
  Hr,
  Row,
  Spacer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@yakad/ui";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Grid</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { GridContainer, GridItem } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>
              {"<GridContainer><GridItem></GridItem></GridContainer>"}
            </code>
          </span>
          <Spacer />
          <Button icon="content_copy"></Button>
        </Row>
      </Card>

      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:(Grid Item)</p>
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
      <p>Properties that are accepted as attributes:(Grid Container)</p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>columns</Td>
            <Td>10 | 12</Td>
          </Tr>
          <Tr>
            <Td>gap (rem)</Td>
            <Td>number</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>columns</h3>
      <p>
        With this property, you decide that the page you want is divided into
        several columns.
      </p>
      <GridContainer columns={10}>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
      </GridContainer>
      <Hr />
      <GridContainer columns={12}>
        <GridItem xs={2} sm={1} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={1} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
        <GridItem xs={2} sm={2} xl={1}>
          <Card></Card>
        </GridItem>
      </GridContainer>

      <h3>gap</h3>
      <p>The use of the gap is to create a gap between the grid items.</p>
      <GridContainer gap={10}>
        <GridItem>
          <Card></Card>
        </GridItem>
        <GridItem>
          <Card></Card>
        </GridItem>
      </GridContainer>

      <h3>xl</h3>
      <p></p>

      <h3>sm</h3>
      <p></p>

      <h3>md</h3>
      <p></p>

      <p>
        With grid, you can divide the page from 1 to 12 parts, easily edit your
        site page.
      </p>
      <h1>Example 1:</h1>

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

      <GridContainer>
        <GridItem md={12} lg={6} xl={6}>
          <Card></Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={6}>
          <Card></Card>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
GridItem;
