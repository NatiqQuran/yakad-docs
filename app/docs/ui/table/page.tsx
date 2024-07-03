import Symbol from "@yakad/symbols";
import {
  Button,
  Card,
  Chekbox,
  Container,
  Hr,
  InputField,
  Row,
  Spacer,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@yakad/ui";
import React from "react";

export default function Page() {
  const disabledConfirmButton = () => {};

  return (
    <Container maxWidth="md">
      <h1>Table</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { Table } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>
              {
                "<Table> <Thead><Tr><Th></Th></Tr></Thead> <Tbody><Tr><Td></Td></Tr></Tbody> </Table> "
              }
            </code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="file_copy" />}></Button>
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
            <Td>Style</Td>
            <Td>string</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>Styles</h3>
      <p>
        This table has a different and unique style that anyone who sees these
        tables feels the order. On the one hand, the order is excellent and on
        the other hand, the beauty of his styles has diversified.
      </p>
      <Table style={{ maxWidth: "60rem" }}>
        <Thead>
          <Tr>
            <Th>Style</Th>
            <Th>Discipline</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Good!</Td>
            <Td>Good!</Td>
          </Tr>
        </Tbody>
      </Table>
      <p>
        Of course, these are only a part of this table that you can use to
        understand more about its features.
      </p>

      <h2>Examples</h2>
      <h3>Example 1</h3>
      <Table>
        <Thead>
          <Tr>
            <Th>For which networks?</Th>
            <Th>who can use?</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Row>
                <p>For all networks</p> <Symbol icon="desktop_windows" />
              </Row>
            </Td>
            <Td>Those who have installed Yakad</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>Example 2</h3>
      <Table>
        <Thead>
          <Tr>
            <Th>Year</Th>
            <Th>Month</Th>
            <Th>Day</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2024</Td>
            <Td>July</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>Example 3</h3>
      <Table>
        <Thead>
          <Tr>
            <Th>Year</Th>
            <Th>Month</Th>
            <Th>Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2024</Td>
            <Td>January</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>2024</Td>
            <Td>February</Td>
            <Td>2</Td>
          </Tr>
          <Tr>
            <Td>2024</Td>
            <Td>March</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>2024</Td>
            <Td>April</Td>
            <Td>4</Td>
          </Tr>
          <Tr>
            <Td>2024</Td>
            <Td>May</Td>
            <Td>5</Td>
          </Tr>
          <Tr>
            <Td>2024</Td>
            <Td>June</Td>
            <Td>6</Td>
          </Tr>
        </Tbody>
        <Tr>
          <Td>2024</Td>
          <Td>July</Td>
          <Td>7</Td>
        </Tr>
        <Tr>
          <Td>2024</Td>
          <Td>Agust</Td>
          <Td>8</Td>
        </Tr>
        <Tr>
          <Td>2024</Td>
          <Td>September</Td>
          <Td>9</Td>
        </Tr>
        <Tr>
          <Td>2024</Td>
          <Td>October</Td>
          <Td>10</Td>
        </Tr>
        <Tr>
          <Td>2024</Td>
          <Td>November</Td>
          <Td>11</Td>
        </Tr>
        <Tr>
          <Td>2024</Td>
          <Td>December</Td>
          <Td>12</Td>
        </Tr>
      </Table>

      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
