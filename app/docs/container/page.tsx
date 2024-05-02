import {
  AppBar,
  Button,
  Container,
  Footer,
  Card,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
  Hr,
  SvgIcon,
} from "@yakad/ui";

export default function DocsContainer() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 style={{ fontSize: "3rem" }}>Container</h1>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      </Container>
      <Container style={{ backgroundColor: "gray" }}>
        <h1>Normal Container</h1>
      </Container>
      <br />
      <Container maxWidth="xl" style={{ backgroundColor: "gray" }}>
        <h1>Extera Large Container</h1>
      </Container>
      <br />
      <Container maxWidth="lg" style={{ backgroundColor: "gray" }}>
        <h1>Large Container</h1>
      </Container>
      <br />

      <Container maxWidth="md" style={{ backgroundColor: "gray" }}>
        <h1>medium</h1>
      </Container>
      <br />

      <Container maxWidth="sm" style={{ backgroundColor: "gray" }}>
        <h1>Small</h1>
      </Container>
      <br />

      <Container maxWidth="xs" style={{ backgroundColor: "gray" }}>
        <h1>Extera Small</h1>
      </Container>
    </div>
  );
}
