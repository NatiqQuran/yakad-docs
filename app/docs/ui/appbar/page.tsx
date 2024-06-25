import {
  AppBar,
  Button,
  Container,
  Spacer,
  Hr,
  SvgIcon,
  Card,
  Row,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
} from "@yakad/ui";
import LogoIcon from "@/app/logoicon";
import Symbol from "@yakad/symbols";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>AppBar</h1>
      <Hr />
      <p>Discription</p>
      <Card style={{ maxWidth: "50rem" }}>
        <Row>
          <p>For import</p>
          <code>import AppBar from "@yakad/ui"</code>
          <Spacer />
          <Button icon="content_copy"></Button>
        </Row>
        <Row>
          <p>For use</p>
          <code>{"<AppBar>AppBar</AppBar>"}</code>
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
            <Td>positionSticky</Td>
            <Td>True | False</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>PositionSticky</h3>

      <h1>Examples 1</h1>
      <AppBar>
        <h1>Appbar</h1>
      </AppBar>

      <h1>Examples 2</h1>
      <AppBar>
        <Button icon="menu" />
        <h1>AppBar</h1>
      </AppBar>

      <h1>Examples 3</h1>
      <AppBar>
        <SvgIcon size={4}>
          <LogoIcon />
        </SvgIcon>
        <h1>AppBar</h1>
        <Button>Github</Button>
        <Button>About</Button>
        <Spacer />
        <Button variant="outlined" icon="login">
          Login
        </Button>
      </AppBar>

      <h1 style={{ marginTop: "3rem" }}>
        As you can see, you can add buttons, menus, texts and other things on
        the Appbar.In addition, with Appbar, you can make attractive headers
        that are not only beautiful and simple, but also one of the best choices
        for your header.
      </h1>
    </Container>
  );
}
