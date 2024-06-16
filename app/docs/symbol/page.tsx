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
import Symbol from "@yakad/symbols";

export default function DocsAppbar() {
  return (
    <Container maxWidth="lg">
      <h1 style={{ fontSize: "3rem" }}>Yakad Symbols</h1>
      <h1>Button Symbols</h1>
      <Card style={{ maxWidth: "60rem" }}>
        <Row>
          <Button icon="menu" />
          <Spacer />
          <Button icon="account_circle" />
          <Spacer />
          <Button icon="logout" />
        </Row>
      </Card>
      <h1>Symbols Size</h1>
      <Card style={{ maxWidth: "60rem" }}>
        <Row align="center">
          <h2>Large</h2>
          <Spacer />
          <Symbol size={"large"} icon="home" />
          <Spacer />
        </Row>
        <Row>
          <h2>Medium</h2>
          <Spacer />
          <Symbol size={"medium"} icon="home" />
          <Spacer />
        </Row>
        <Row>
          <h2>Small</h2>
          <Spacer />
          <Symbol size={"small"} icon="home" />
          <Spacer />
        </Row>
      </Card>
      <h1>Symbols Type</h1>
      <Card style={{ maxWidth: "60rem" }}>
        <Row>
          <Symbol type="default" icon="delete_outline" />
          <Spacer />
          <Symbol type="outlined" icon="delete_outline" />
          <Spacer />
          <Symbol type="round" icon="delete_outline" />
        </Row>
        <Row>
          <Symbol icon="delete_outline" />
        </Row>
      </Card>
      <h1>Symbols</h1>
      <Card style={{ maxWidth: "60rem" }}>
        <Row>
          <Symbol icon="delete" />
        </Row>
      </Card>
    </Container>
  );
}
