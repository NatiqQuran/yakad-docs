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
import Image from "next/image";
import imagepctm1 from "./jpg/pctm1.jpg";
import imagepctm2 from "./jpg/pctm2.jpg";
import Symbol from "@yakad/symbols";
import { iconsCode } from "@yakad/symbols/iconsCode";

interface iconCardsProps {
  symbol: iconsCode;
}

const iconCardsList: iconCardsProps[] = [
  { symbol: "widgets" },
  { symbol: "waving_hand" },
  { symbol: "verified" },
  { symbol: "zoom_out" },
  { symbol: "zoom_out" },
  { symbol: "airlines" },
  { symbol: "assessment" },
  { symbol: "vaccines" },
  { symbol: "web_stories" },
  { symbol: "face" },
  { symbol: "fact_check" },
  { symbol: "kayaking" },
];

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Yakad Card</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { Card } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<Card>Card</Card>"}</code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="content_copy" />}></Button>
        </Row>
      </Card>
      <h3>Simple Card</h3>
      <Card style={{ maxWidth: "60rem" }}>
        <span style={{ fontSize: "2rem" }}>Card</span>
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
            <Td>align</Td>
            <Td>start | center | end</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>align</h3>
      <p>
        With this property, you can easily move all the things you put in the
        card, that is, you can fold it in the middle and simply fold it left or
        right.
      </p>
      <Card align="start" style={{ maxWidth: "60rem", marginBottom: "1rem" }}>
        Start
      </Card>
      <Card align="center" style={{ maxWidth: "60rem", marginBottom: "1rem" }}>
        Center
      </Card>
      <Card align="end" style={{ maxWidth: "60rem", marginBottom: "1rem" }}>
        End
      </Card>

      <h2>Examples</h2>

      <p>yakad cards are here to edit your site professionally!</p>
      <h3>Example 1</h3>

      <p>
        Working with these cards is very easy and you can easily organize your
        site with it cards. An example of a card using a grid:
      </p>
      <GridContainer>
        <GridItem xs={12} md={6} xl={4}>
          <Card align="center">
            <p>Card</p>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6} xl={4}>
          <Card align="center">
            <p>Card</p>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6} xl={4}>
          <Card align="center">
            <p>Card</p>
          </Card>
        </GridItem>
      </GridContainer>

      <h3>Example 2</h3>

      <p>
        You can put anything you want inside the cards, such as: text, photo,
        video and...
      </p>
      <Container maxWidth="sm">
        <Row style={{ marginBottom: "1.5rem" }}>
          <Image
            src={imagepctm1}
            alt="pic"
            width="45"
            height="45"
            style={{ borderRadius: "50%" }}
          />
          <Card
            style={{
              padding: "2rem",
              marginBottom: "1rem",
              maxWidth: "30rem",
              margin: "0",
            }}
          >
            <p style={{ fontSize: "1.8rem", margin: 0 }}>
              Hey! My name is Martis. What is your name?
            </p>
          </Card>
        </Row>
        <Row align="end" style={{ marginBottom: "1.5rem" }}>
          <Card
            style={{ marginBottom: "1rem", maxWidth: "30rem", margin: "0" }}
          >
            <Row>
              <p style={{ fontSize: "1.8rem", margin: "0" }}>
                Hi! My name is Leycci.
              </p>
            </Row>
          </Card>
          <Image
            src={imagepctm2}
            alt="pic"
            width="45"
            height="45"
            style={{ borderRadius: "50%" }}
          />
        </Row>
        <Row style={{ marginBottom: "1.5rem" }}>
          <Image
            src={imagepctm1}
            alt="pic"
            width="45"
            height="45"
            style={{ borderRadius: "50%" }}
          />
          <Card style={{ maxWidth: "30rem", margin: "0" }}>
            <p style={{ fontSize: "1.8rem", margin: "0" }}>
              Leycci have you ever used Yakad Cards?
            </p>
          </Card>
        </Row>
        <Row align="end">
          <Card
            style={{ marginBottom: "1rem", maxWidth: "30rem", margin: "0" }}
          >
            <p style={{ fontSize: "1.8rem", margin: "0", marginLeft: "2rem" }}>
              Yes. It`s very good! I like it.
            </p>
          </Card>
          <Image
            src={imagepctm2}
            alt="pic"
            width="45"
            height="45"
            style={{ borderRadius: "50%" }}
          />
        </Row>

        <h3>Example 3</h3>

        <p>You can even put a very large text inside using Yakad Card.</p>
        <GridContainer>
          {iconCardsList.map((iconCardsList, index) => (
            <GridItem key={index} xs={6} sm={4} md={3} xl={2}>
              <Card align="center">
                <Symbol icon={iconCardsList.symbol} />
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Container>

      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
