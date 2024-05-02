import {
  AppBar,
  Button,
  Card,
  Container,
  Footer,
  Hr,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
} from "@yakad/ui";
import Image from "next/image";
import imagepctm from "./jpg/pctm.jpg";
import imagepctm2 from "./jpg/pct2.jpg";

export default function DocsCard() {
  return (
    <Container maxWidth="md">
      <h1>Yakad Card</h1>
      <p style={{ fontSize: "20px", marginBottom: "0" }}>
        yakad cards are here to edit your site professionally!
      </p>
      <p style={{ fontSize: "20px", marginBottom: "3rem" }}>
        Working with these cards is very easy and you can easily organize your
        site with it cards. You can see an example of the cards below:
      </p>
      <Row>
        <Card>
          <p style={{ fontSize: "20px", textAlign: "center" }}>Card</p>
        </Card>
        <Card>
          <p style={{ fontSize: "20px", textAlign: "center" }}>Card</p>
        </Card>
        <Card>
          <p style={{ fontSize: "20px", textAlign: "center" }}>Card</p>
        </Card>
      </Row>
      <Stack>
        <p style={{ fontSize: "20px", margin: "30px 0 30px 0" }}>
          You can put anything you want inside the cards, such as: text, photo,
          video and...
        </p>
        <Card style={{ padding: "2rem", width: "50rem" }}>
          <Row>
            <Image
              src={imagepctm}
              alt="pic"
              width="45"
              height="45"
              style={{ borderRadius: "50%" }}
            />
            <p style={{ fontSize: "20px", textAlign: "center" }}>
              Hey! My name is Martis. What is your name?
            </p>
          </Row>
        </Card>

        <Row style={{ display: "flex", justifyContent: "end" }}>
          <Card
            style={{
              padding: "2rem",
              width: "50rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Row>
              <p style={{ fontSize: "20px", marginRight: "10rem" }}>
                Hi! My name is Leycci.
              </p>
              <Image
                src={imagepctm2}
                alt="pic"
                width="45"
                height="45"
                style={{ borderRadius: "50%" }}
              />
            </Row>
          </Card>
        </Row>

        <Card style={{ padding: "2rem", width: "50rem" }}>
          <Row>
            <Image
              src={imagepctm}
              alt="pic"
              width="45"
              height="45"
              style={{ borderRadius: "50%" }}
            />
            <p style={{ fontSize: "20px", textAlign: "center" }}>
              Leycci have you ever used Yakad Cards?
            </p>
          </Row>
        </Card>

        <Row style={{ display: "flex", justifyContent: "end" }}>
          <Card
            style={{
              padding: "2rem",
              width: "50rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Row>
              <p style={{ fontSize: "20px", marginRight: "10rem" }}>
                Yes. It`s very good! I like it.
              </p>
              <Image
                src={imagepctm2}
                alt="pic"
                width="45"
                height="45"
                style={{ borderRadius: "50%" }}
              />
            </Row>
          </Card>
        </Row>

        <p style={{ fontSize: "20px", marginTop: "5rem" }}>
          You can even put a very large text inside using Yakad Card.
        </p>
        <Card>
          <p style={{ fontSize: "150px", textAlign: "center" }}>text</p>
        </Card>
      </Stack>
    </Container>
  );
}
