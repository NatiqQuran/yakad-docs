import {
  AppBar,
  Button,
  Card,
  Container,
  Footer,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
} from "@yakad/ui";
import Link from "next/link";

export default function Docs() {
  return (
    <div>
      <Container maxWidth="md">
        <Row>
          <Stack>
            <h1>Documens</h1>
            <p style={{ fontSize: "20px" }}>
              We bulit <b>Yakad</b> to meet the UI/UX needs of the talk project.
              Byt with the MIT licens, we also provided the open source
              community.
            </p>
            <h1>Yakad UI</h1>
            <h2>Description...</h2>
            <Card
              style={{ fontSize: "20px", maxWidth: "50rem", padding: "15px" }}
            >
              <Row>
                〉 npm i @yakad/ui <Spacer />
                <h5>copy</h5>
              </Row>
            </Card>
            <h1>Yakad X</h1>
            <h2>Description...</h2>

            <Card
              style={{ fontSize: "20px", maxWidth: "50rem", padding: "15px" }}
            >
              <Row>
                〉 npm i @yakad/x <Spacer />
                <h5>copy</h5>
              </Row>
            </Card>

            <h1>Yakad symbols</h1>
            <h2>Description...</h2>

            <Card
              style={{ fontSize: "20px", maxWidth: "50rem", padding: "15px" }}
            >
              <Row>
                〉 npm i @yakad/symbols <Spacer />
                <h5>copy</h5>
              </Row>
            </Card>
          </Stack>
        </Row>
      </Container>
      <Container maxWidth="lg">
        <Row>
          <Link href="./docs/appbar">
            <Button variant="filled">Appbar</Button>
          </Link>
          <Link href="./docs/button">
            <Button variant="filled" size="medium">
              Button
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
