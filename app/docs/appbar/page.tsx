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
import Link from "next/link";
import LogoIcon from "@/app/logoicon";

export default function DocsAppbar() {
  return (
    <Container maxWidth="lg">
      <h1 style={{ fontSize: "3rem" }}>AppBar</h1>
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      <Hr />
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
    </Container>
  );
}
