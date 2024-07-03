import {
  Button,
  Card,
  Container,
  Row,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@yakad/ui";
import Link from "next/link";
import { Xbackground, XgetStart } from "@yakad/x";
import LogoIcon from "./logoicon";

export function Getstart() {
  return (
    <Xbackground variant="dotted">
      {/* <h1 style={{ fontSize: "12rem", textAlign: "center" }}>
        A <span style={{ color: "#3064f4" }}> fully featured </span> React{" "}
        <br />
        components library
      </h1> */}
      <XgetStart style={{ fill: "#3064f4" }} logo={<LogoIcon />}>
        <h1 style={{ fontSize: "8rem", color: "#3064f4" }}>Yakad</h1>
        <p style={{ fontSize: "2.7rem", textAlign: "justify" }}>
          <b>Yakad</b> provides you with practical services so that you can
          design your website more quickly and easily. We make everything easier
          for you to make your site the best without any problems and with the
          least amount of time. Only with Yakad. We have provided you with a
          list of free components for you to use if necessary.
        </p>
        <Link href="./docs">
          <Button variant="filled" size="large">
            Get started
          </Button>
        </Link>
        <h2>or</h2>
        <Button variant="link">Learn More!</Button>
      </XgetStart>
    </Xbackground>
  );
}

export function Cards() {
  return (
    <Container maxWidth="lg" id="learnmore">
      <Row>
        <Card>
          <h1>Yakad UI</h1>
          <p style={{ fontSize: "12px" }}>
            It is about our components such as buttons, appbar, card and...
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>

        <Card>
          <h1>Yakad X</h1>
          <p style={{ fontSize: "12px" }}>
            It is about ready made structures such as X Panel and...
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>

        <Card>
          <h1>Yakad symbols</h1>
          <p style={{ fontSize: "12px" }}>
            You can find the desired logo here and use it more easily.
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>

        <Card>
          <h1>Yakad lib</h1>
          <p style={{ fontSize: "12px" }}>
            There are ready made functions that are mostly used by YacadX
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>
      </Row>
    </Container>
  );
}

export function Tables() {
  return (
    <Container maxWidth="lg">
      <Row>
        <Table style={{ maxWidth: "100rem" }}>
          <Thead>
            <Tr>
              <Th>Pages name</Th>
              <Th>Pages number</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>yakad</Td>
              <Td>1</Td>
            </Tr>
            <Tr>
              <Td>Owerviow</Td>
              <Td>2</Td>
            </Tr>
          </Tbody>
        </Table>
        <p>
          One of our most prominent works is the table, which has a special
          beauty and continuity, and it is much easier to work with it, and you
          can do many things with this table.Among the tasks, you can easily
          place the list of pages you have created in the table so that you
          don&apos;t forget how many pages you have and what their names are.
          And secondly, if you follow the form that we have given in the table,
          your work will be much easier and more beautiful.
        </p>
      </Row>
    </Container>
  );
}
