import { Button, Card, Container, Row, Spacer, Stack, Hr } from "@yakad/ui";

export default function Installation() {
  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "3rem" }}>installation</h1>
      <p style={{ fontSize: "20px" }}>
        • You can install Yakad packages using NPM
      </p>
      <h1>Yakad UI</h1>{" "}
      <Card style={{ fontSize: "20px", maxWidth: "40rem", padding: "15px" }}>
        <Row>
          〉 npm i @yakad/ui <Spacer />
          <Button>copy</Button>
        </Row>
      </Card>
      <p style={{ fontSize: "2rem" }}>Compatibil with Next.Js/React</p>
      <h1>Yakad X</h1>
      <Card style={{ fontSize: "20px", maxWidth: "40rem", padding: "15px" }}>
        <Row>
          〉 npm i @yakad/x <Spacer />
          <Button>copy</Button>
        </Row>
      </Card>
      <p style={{ fontSize: "2rem" }}>Compatibil with Next.Js/React</p>
      <h1>Yakad symbols</h1>
      <Card style={{ fontSize: "20px", maxWidth: "40rem", padding: "15px" }}>
        <Row>
          〉 npm i @yakad/symbols <Spacer />
          <Button>copy</Button>
        </Row>
      </Card>
      <p style={{ fontSize: "2rem" }}>Compatibil with Next.Js/React</p>
      <h1>Yakad lib</h1>
      <Card style={{ fontSize: "20px", maxWidth: "40rem", padding: "15px" }}>
        <Row>
          〉 npm i @yakad/lib <Spacer />
          <Button>copy</Button>
        </Row>
      </Card>
      <p style={{ fontSize: "2rem" }}>Compatibil with Next.Js</p>
    </Container>
  );
}
